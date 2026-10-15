import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function ScratchNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Back to DFS AI Club + Program Brand */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-xs"
                title="Return to DFS AI Club Parent Home"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
                <span>DFS AI Club</span>
              </button>

              <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />

              <a href="#hero" onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group">
                <img
                  src="dfs-ai-club-logo.png"
                  alt="DFS AI Club"
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                      Start from Scratch
                    </span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      Pilot Batch
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Marketplace for your solution
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => scrollTo('hero')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollTo('learning-method')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Discovery Method
              </button>
              <button
                onClick={() => scrollTo('pilot-batch')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Pilot Batch
              </button>
              <button
                onClick={() => scrollTo('program-structure')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Program Structure
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 px-4 pt-2 pb-4 bg-white border-b border-slate-200 shadow-xl">
            <div className="flex flex-col gap-1 text-left">
              <button
                onClick={() => scrollTo('hero')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Overview
              </button>
              <button
                onClick={() => scrollTo('learning-method')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Discovery Method
              </button>
              <button
                onClick={() => scrollTo('pilot-batch')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Pilot Batch
              </button>
              <button
                onClick={() => scrollTo('program-structure')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Program Structure
              </button>
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-2 text-xs font-bold text-center rounded-lg bg-blue-50 text-blue-700 border border-blue-200"
                >
                  ← Back to DFS AI Club Home
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
