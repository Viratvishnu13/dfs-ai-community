import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Terminal, Users } from 'lucide-react';

export default function Navbar({ onOpenApply, mode = 'engineer' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isEngineer = mode === 'engineer' || location.pathname.includes('/engineer');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isEngineer
    ? [
        { label: "Overview", href: "#overview" },
        { label: "Engineering Model", href: "#philosophy" },
        { label: "Curriculum RFC", href: "#curriculum" },
        { label: "Technical Stacks", href: "#tracks" },
        { label: "Architecture Ladder", href: "#architecture" },
        { label: "Evaluation Standards", href: "#standards" },
        { label: "FAQ", href: "#faq" },
      ]
    : [
        { label: "Overview", href: "#overview" },
        { label: "Philosophy & 4Ds", href: "#philosophy" },
        { label: "8-Week Curriculum", href: "#curriculum" },
        { label: "4 Tracks", href: "#tracks" },
        { label: "Architecture Ladder", href: "#architecture" },
        { label: "Standards", href: "#standards" },
        { label: "FAQ", href: "#faq" },
      ];

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Engineering Ribbon (Visible in Engineer mode) */}
      {isEngineer && (
        <div className="bg-[#0f172a] text-slate-300 text-[11px] font-mono tracking-wider py-1 px-4 border-b border-slate-800 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AI Madurai Engineering Working Group
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Spec: Start from Scratch (Cohort 2026)</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-emerald-400 font-semibold">Status: Accepting Applications</span>
              <span className="text-slate-600">|</span>
              <button 
                onClick={() => navigate('/normal')}
                className="text-blue-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
              >
                <span>Switch to /normal view</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Back to Home */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg border border-blue-200 transition-colors flex items-center gap-1 shrink-0"
                title="Back to DFS AI Club Parent Home"
              >
                <span>← DFS AI Club</span>
              </button>

              <a href="#overview" className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs tracking-tighter shadow-sm group-hover:bg-blue-700 transition-colors">
                  AI_
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      AI MADURAI
                    </span>
                    <span className="text-[10px] font-mono uppercase font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {isEngineer ? 'Engineering' : 'Community'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                    Start from Scratch • 8-Week Program
                  </p>
                </div>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Action buttons + View switcher in navbar */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Quick Mode Toggle Pill */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-medium">
                <button
                  onClick={() => navigate('/normal')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    !isEngineer
                      ? 'bg-white text-blue-700 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Switch to Community View"
                >
                  <Users className="w-3 h-3" />
                  <span>Normal</span>
                </button>
                <button
                  onClick={() => navigate('/engineer')}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                    isEngineer
                      ? 'bg-slate-900 text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Switch to Engineer View"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Engineer</span>
                </button>
              </div>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm active:translate-y-0.5"
              >
                <span>Apply for Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => navigate(isEngineer ? '/normal' : '/engineer')}
                className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-800"
              >
                {isEngineer ? '→ /normal' : '→ /engineer'}
              </button>
              <button
                onClick={onOpenApply}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 px-4 pt-2 pb-4 bg-white border-b border-slate-200 shadow-lg">
            <div className="flex flex-col gap-1">
              <div className="p-2 mb-1 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Switch view mode:</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/normal');
                    }}
                    className={`px-2 py-1 text-xs rounded ${!isEngineer ? 'bg-blue-600 text-white font-bold' : 'text-slate-700'}`}
                  >
                    /normal
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/engineer');
                    }}
                    className={`px-2 py-1 text-xs rounded ${isEngineer ? 'bg-slate-900 text-white font-bold' : 'text-slate-700'}`}
                  >
                    /engineer
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                >
                  Apply for Start from Scratch
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
