import React, { useState } from 'react';
import { X, ExternalLink, Lightbulb, CheckCircle2, Copy, FileText } from 'lucide-react';

export default function IdeaSubmissionModal({ isOpen, onClose }) {
  // Configurable Microsoft Forms URL
  const [formUrl] = useState('https://forms.office.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR_DFS_AI_Club_Idea_Submission');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openFormInNewTab = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left transition-all text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
            <span>Idea Incubator • Microsoft Forms</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Have an Idea? Submit Here
          </h3>
          <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
            Every great AI system begins with a problem worth solving. Submit your proposal, workflow bottleneck, or agent concept to the DFS AI Club review council.
          </p>
        </div>

        {/* What to Submit Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-left">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
              1. The Friction
            </span>
            <p className="text-xs text-slate-600">
              A real workflow or bottleneck you want to automate or improve.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-left">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
              2. AI Hypothesis
            </span>
            <p className="text-xs text-slate-600">
              How LLMs, RAG, or autonomous agents could solve it simply.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-left">
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
              3. Collaborative Build
            </span>
            <p className="text-xs text-slate-600">
              Team up with fellow DFS AI Club builders to turn it into code.
            </p>
          </div>
        </div>

        {/* Action Options */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-slate-900">
                  DFS AI Club Idea Submission Form
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Official Microsoft Forms portal for project proposals and backlog triage.
              </p>
            </div>

            <button
              onClick={openFormInNewTab}
              style={{
                background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md shadow-indigo-950/20 hover:opacity-95 transition-all active:scale-95 shrink-0"
            >
              <span>Open in Microsoft Forms</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-[11px] truncate max-w-[280px] sm:max-w-md text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
              {formUrl}
            </span>
            <button
              onClick={handleCopy}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 shrink-0 ml-2"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-xs text-slate-400">
            DFS AI Club • Idea Triage & Incubation
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
