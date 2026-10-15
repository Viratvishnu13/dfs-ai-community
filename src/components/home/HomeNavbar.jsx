import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function HomeNavbar() {
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
            {/* Logo + Tagline */}
            <a href="#hero" onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
              <img
                src="dfs-ai-club-logo.png"
                alt="DFS AI Club Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="text-left">
                <span className="font-extrabold text-base tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors block leading-tight">
                  DFS AI CLUB
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Marketplace for your solution
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5">
              <button
                onClick={() => scrollTo('hero')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3.5 py-2 rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('vision')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3.5 py-2 rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3.5 py-2 rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                Operating Model
              </button>

              <button
                onClick={() => navigate('/start-from-scratch')}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3.5 py-2 rounded-lg hover:bg-slate-100/80 transition-colors"
              >
                Start from Scratch
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
                Home
              </button>
              <button
                onClick={() => scrollTo('vision')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Vision
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Operating Model
              </button>
              <button
                onClick={() => scrollTo('programs')}
                className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-slate-50"
              >
                Programs
              </button>
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/start-from-scratch');
                  }}
                  className="w-full py-2.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 text-center border border-blue-200"
                >
                  Start from Scratch Program
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
