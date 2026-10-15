import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import PdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?worker';
import { 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, 
  BookOpen, CheckCircle2, Maximize2, Minimize2, RotateCcw,
  Eye, FileText
} from 'lucide-react';

// Configure worker port through Vite's native worker pipeline
if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerPort) {
  try {
    pdfjsLib.GlobalWorkerOptions.workerPort = new PdfWorker();
  } catch (e) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
  }
}

export default function PdfViewer({ pdfUrl, title, weekNumber, fallbackSlides = [] }) {
  const [hasPdf, setHasPdf] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(fallbackSlides.length || 4);
  const [loading, setLoading] = useState(true);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // View mode: 'fit' (entire page visible at once), 'width' (fit width), or custom zoom level
  const [viewMode, setViewMode] = useState('fit');
  const [customZoom, setCustomZoom] = useState(1.0);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const fullscreenCanvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  // Reset page to 1 whenever week changes
  useEffect(() => {
    setCurrentPage(1);
    setViewMode('fit');
    setCustomZoom(1.0);
  }, [pdfUrl, weekNumber]);

  // Load PDF document
  useEffect(() => {
    let isCancelled = false;
    let loadingTask = null;
    setLoading(true);

    const loadPdf = async () => {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        if (isCancelled) return;

        loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
        const doc = await loadingTask.promise;

        if (!isCancelled) {
          setPdfDoc(doc);
          setTotalPages(doc.numPages);
          setHasPdf(true);
          setLoading(false);
        }
      } catch (err) {
        console.error(`[PdfViewer] Error loading ${pdfUrl}:`, err);
        if (!isCancelled) {
          setPdfDoc(null);
          setHasPdf(false);
          setTotalPages(fallbackSlides.length || 4);
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isCancelled = true;
      if (loadingTask && loadingTask.destroy) {
        loadingTask.destroy();
      }
    };
  }, [pdfUrl, fallbackSlides.length]);

  // Render Page to Canvas
  const renderPage = useCallback(async (targetCanvas, inFullscreen = false) => {
    if (!hasPdf || !pdfDoc || !targetCanvas) return;

    try {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      const page = await pdfDoc.getPage(currentPage);
      const unscaledVp = page.getViewport({ scale: 1.0 });

      // Calculate container bounds
      const container = inFullscreen 
        ? { clientWidth: window.innerWidth * 0.92, clientHeight: window.innerHeight * 0.85 }
        : containerRef.current;

      const availWidth = Math.max(300, (container?.clientWidth || 600) - (inFullscreen ? 32 : 36));
      const availHeight = Math.max(400, (container?.clientHeight || 600) - (inFullscreen ? 32 : 36));

      // Fit whole page (height & width) so it's 100% visible at once without scrolling
      const fitScale = Math.min(availWidth / unscaledVp.width, availHeight / unscaledVp.height);
      const widthScale = availWidth / unscaledVp.width;

      let targetScale;
      if (inFullscreen) {
        targetScale = fitScale * 1.15;
      } else if (viewMode === 'fit') {
        targetScale = fitScale;
      } else if (viewMode === 'width') {
        targetScale = widthScale;
      } else {
        targetScale = fitScale * customZoom;
      }

      const dpr = Math.min(window.devicePixelRatio || 2, 2.5); // High DPI crispness
      const viewport = page.getViewport({ scale: targetScale });

      targetCanvas.width = Math.floor(viewport.width * dpr);
      targetCanvas.height = Math.floor(viewport.height * dpr);
      targetCanvas.style.width = `${Math.floor(viewport.width)}px`;
      targetCanvas.style.height = `${Math.floor(viewport.height)}px`;

      const ctx = targetCanvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      const task = page.render(renderContext);
      renderTaskRef.current = task;
      await task.promise;
    } catch (e) {
      // Ignored if cancelled during fast page flip
    }
  }, [hasPdf, pdfDoc, currentPage, viewMode, customZoom]);

  // Render on page/mode/zoom change
  useEffect(() => {
    if (isFullscreen) {
      renderPage(fullscreenCanvasRef.current, true);
    } else {
      renderPage(canvasRef.current, false);
    }
  }, [renderPage, isFullscreen, currentPage, viewMode, customZoom]);

  // Window resize listener to recompute fit scale
  useEffect(() => {
    const handleResize = () => {
      if (isFullscreen) {
        renderPage(fullscreenCanvasRef.current, true);
      } else {
        renderPage(canvasRef.current, false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderPage, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentPage < totalPages) setCurrentPage((p) => p + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentPage > 1) setCurrentPage((p) => p - 1);
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isFullscreen]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const zoomIn = () => {
    setViewMode('custom');
    setCustomZoom((z) => Math.min(2.0, z + 0.2));
  };

  const zoomOut = () => {
    setViewMode('custom');
    setCustomZoom((z) => Math.max(0.6, z - 0.2));
  };

  const resetFit = () => {
    setViewMode('fit');
    setCustomZoom(1.0);
  };

  const currentSlide = fallbackSlides[currentPage - 1] || fallbackSlides[0];

  return (
    <>
      {/* Main In-Page Card Reader */}
      <div className="w-full rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-full min-h-[640px] lg:h-[720px] transition-all">
        
        {/* Top Control Bar: "Learning Materials" + Pagination + View Tools */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                  Learning Materials
                </span>
                <span className="text-xs font-bold text-slate-900 truncate max-w-[220px] sm:max-w-xs">
                  {title}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Week {weekNumber} Official Curriculum Document
              </span>
            </div>
          </div>

          {/* Quick Page Jump Pills + View Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            
            {/* Quick 1-Click Page Chips */}
            <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1.5 select-none">
                Page:
              </span>
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-6 h-6 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    title={`Go to page ${pageNum}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Discrete Next / Prev Stepper */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-1.5 py-1 shadow-2xs">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`p-1 rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'opacity-30 cursor-not-allowed text-slate-400'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100 active:scale-95'
                }`}
                title="Previous Page (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono font-bold text-slate-800 px-2 select-none">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`p-1 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'opacity-30 cursor-not-allowed text-slate-400'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100 active:scale-95'
                }`}
                title="Next Page (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* View Mode Actions (Fit, Zoom, Fullscreen, Download) */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
              <button
                onClick={resetFit}
                className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'fit'
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Fit full page on screen (no scroll)"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Fit Page</span>
              </button>

              <button
                onClick={() => {
                  setViewMode(viewMode === 'width' ? 'fit' : 'width');
                }}
                className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                  viewMode === 'width'
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title="Fit to width"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Fit Width</span>
              </button>

              <div className="h-4 w-[1px] bg-slate-200 mx-0.5" />

              <button
                onClick={zoomOut}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={zoomIn}
                className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <div className="h-4 w-[1px] bg-slate-200 mx-0.5" />

              {/* Fullscreen Expand */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-1 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                title="Open in Fullscreen Reader"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Download PDF */}
              {hasPdf && (
                <a
                  href={pdfUrl}
                  download
                  className="p-1 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>

        {/* Canvas Display Stage (Entire Page Viewable At Once) */}
        <div 
          ref={containerRef}
          className="flex-1 bg-slate-100/70 p-3 sm:p-5 flex items-center justify-center overflow-auto relative select-none"
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center p-8 space-y-3">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-semibold text-slate-500">
                Loading Week {weekNumber} Curriculum...
              </span>
            </div>
          ) : hasPdf ? (
            <div className="relative group flex items-center justify-center max-w-full max-h-full">
              
              {/* Floating Quick Prev Page Arrow Button */}
              {currentPage > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110 active:scale-95"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Rendered Document Page Canvas */}
              <div className="bg-white rounded-xl shadow-lg border border-slate-300/80 overflow-hidden transition-all flex items-center justify-center">
                <canvas 
                  ref={canvasRef} 
                  className="block mx-auto max-w-full max-h-full object-contain cursor-pointer"
                  onClick={handleNext}
                  title="Click to advance to next page"
                />
              </div>

              {/* Floating Quick Next Page Arrow Button */}
              {currentPage < totalPages && (
                <button
                  onClick={handleNext}
                  className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110 active:scale-95"
                  title="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

            </div>
          ) : (
            /* Fallback formatted slide if PDF fails to load */
            <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  Page {currentPage} of {totalPages} • {currentSlide?.badge || `Module 0${weekNumber}`}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Week {weekNumber} Curriculum
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                {currentSlide?.heading || title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {currentSlide?.summary || 'Comprehensive reference material and architectural guidance for this module.'}
              </p>

              {currentSlide?.keyPoints && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Highlights
                  </span>
                  {currentSlide.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Interactive Bar */}
        <div className="px-5 py-2.5 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              Page {currentPage} of {totalPages}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400 hidden sm:inline">
              Use keyboard ← → arrows or click page to advance
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed font-medium text-xs transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed font-semibold text-xs transition-colors shadow-xs"
            >
              Next Page
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Reader Modal (Crystal Clear Presentation View) */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Top Fullscreen Header */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-1 rounded-md">
                Week {weekNumber}
              </span>
              <h3 className="text-base font-bold text-white truncate max-w-md">
                {title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-300">
                Page {currentPage} of {totalPages}
              </span>

              {hasPdf && (
                <a
                  href={pdfUrl}
                  download
                  className="px-3 py-1.5 rounded-xl bg-white/10 text-white hover:bg-white/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              )}

              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                title="Close Fullscreen (Esc)"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fullscreen Canvas Container */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            {currentPage > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                title="Previous Page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="max-h-full max-w-full flex items-center justify-center shadow-2xl rounded-xl overflow-hidden bg-white">
              <canvas 
                ref={fullscreenCanvasRef} 
                className="block mx-auto max-w-full max-h-[85vh] object-contain cursor-pointer"
                onClick={handleNext}
                title="Click to advance"
              />
            </div>

            {currentPage < totalPages && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                title="Next Page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Fullscreen Bottom Navigator */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isCurrent = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

        </div>
      )}
    </>
  );
}
