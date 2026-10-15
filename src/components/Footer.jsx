import React from 'react';
import { ArrowUp, Github, Terminal, GitBranch } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                AI_
              </div>
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                AI MADURAI ENGINEERING WORKING GROUP
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Cultivating production AI architectural capability, research collaboration, and systems engineering across South Tamil Nadu.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Program Specification: Start from Scratch • Cohort 2026
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-2">
              Syllabus Specification
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#overview" className="hover:text-slate-900 transition-colors">Program Overview</a></li>
              <li><a href="#philosophy" className="hover:text-slate-900 transition-colors">Engineering Operating Model</a></li>
              <li><a href="#curriculum" className="hover:text-slate-900 transition-colors">8-Week Syllabus RFC</a></li>
              <li><a href="#tracks" className="hover:text-slate-900 transition-colors">4 Technical Stacks</a></li>
              <li><a href="#architecture" className="hover:text-slate-900 transition-colors">Architecture Hierarchy</a></li>
              <li><a href="#standards" className="hover:text-slate-900 transition-colors">Evaluation Standards</a></li>
            </ul>
          </div>

          {/* Standards & GitHub */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-2">
              Engineering Governance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              "Learn independently. Think together. Build together. Show the work. Improve through feedback."
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="GitHub Organization"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="px-2.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 text-xs font-mono"
                title="Back to top"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} AI Madurai Community. Open technical education initiative.
          </p>
          <div className="flex items-center gap-2 text-slate-600">
            <span>Regional Initiative:</span>
            <span className="font-semibold text-slate-900">Madurai, Tamil Nadu</span>
            <span>•</span>
            <span className="text-blue-700">RFC-2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
