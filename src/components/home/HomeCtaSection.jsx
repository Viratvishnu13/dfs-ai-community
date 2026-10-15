import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Lightbulb, ExternalLink, ArrowRight, Terminal } from 'lucide-react';

export default function HomeCtaSection({ onOpenJoin, onOpenIdea }) {
  const navigate = useNavigate();

  return (
    <section 
      id="programs" 
      className="scroll-mt-16 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-200/60 flex flex-col justify-between"
    >
      <div className="max-w-4xl mx-auto w-full my-auto space-y-4 sm:space-y-5">
        
        {/* Flagship Program Card */}
        <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              Flagship 8-Week Cohort
            </div>
            <h4 className="text-lg sm:text-xl font-black text-slate-950">
              Start from Scratch Program
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Our 8-week hyper-paced incubator turning DFS resources into certified AI builders through practical build days and live demos.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={() => navigate('/start-from-scratch')}
              style={{
                background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
              }}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-md shadow-indigo-950/20 hover:opacity-95 transition-all active:scale-95"
            >
              <span>Explore Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* End-of-Page CTA Card */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-100 shadow-sm text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2 tracking-tight">
            Ready to Build With Us?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5 leading-relaxed">
            Join the collective to learn and collaborate, or submit a business challenge to be developed by our builder teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenJoin}
              style={{
                background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-white shadow-md shadow-indigo-950/20 hover:opacity-95 transition-all active:scale-95"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join AI Club</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenIdea}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 border border-blue-200 transition-all shadow-2xs active:scale-95"
            >
              <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
              <span>Have an idea, submit here</span>
              <ExternalLink className="w-3 h-3 text-blue-500" />
            </button>
          </div>
        </div>

      </div>

      {/* Minimal Footer integrated into 4th screen */}
      <footer className="py-2 text-center text-xs text-slate-500 font-medium">
        <p>©️DFS AI Club - 2026</p>
      </footer>
    </section>
  );
}
