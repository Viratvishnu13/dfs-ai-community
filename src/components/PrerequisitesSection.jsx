import React, { useState } from 'react';
import { PlayCircle, CheckSquare, Square, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

export default function PrerequisitesSection({ onOpenApply }) {
  const [checkedItems, setCheckedItems] = useState([true, false, false, false]);

  const toggleCheck = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const checklist = [
    {
      title: "Module P1: LLM System Mental Models & Token Mechanics",
      desc: "Conceptual grasp of autoregressive prediction, token consumption, context windows, and the Anthropic 4Ds framework."
    },
    {
      title: "Module P2: Developer Environment & API Key Management",
      desc: "Local IDE setup (VS Code or Antigravity), Google Colab runtime, environment secrets isolation, and API rate-limits."
    },
    {
      title: "Module P3: Git Version Control & Branch Collaboration",
      desc: "Managing git branches, clean atomic commits, resolving merge conflicts, and structured pull request descriptions."
    },
    {
      title: "Module P4: Problem-First Engineering vs Model Hype",
      desc: "Formulating crisp business problem definitions and choosing the simplest viable architecture instead of chasing benchmarks."
    }
  ];

  return (
    <section className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto enterprise-card p-6 sm:p-10 rounded-2xl bg-white text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>MANDATORY COHORT PREREQUISITE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Baseline Entry Requirement: 4 Technical Pre-Read Modules
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Participation begins with mandatory self-paced baseline preparation. Every engineer must verify completion of <strong className="text-slate-900">four foundational technical recordings</strong> before the Week 1 live sessions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-900">Protects Cohort Velocity:</strong> Live hours are not wasted explaining 101 definitions or basic git setup.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-900">Maximizes High-Value Sprint Time:</strong> Designated staff leads can immediately focus on unblocking architecture and production code.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
              >
                <span>Register for Upcoming Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Checklist Box */}
            <div className="lg:col-span-6 p-5 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                  Prerequisite Self-Audit
                </span>
                <span className="text-xs font-mono text-blue-700 font-bold bg-white px-2 py-0.5 rounded border border-blue-200">
                  {checkedItems.filter(Boolean).length}/4 Verified
                </span>
              </div>

              <div className="space-y-2.5">
                {checklist.map((item, index) => {
                  const isChecked = checkedItems[index];
                  return (
                    <div
                      key={index}
                      onClick={() => toggleCheck(index)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-white border-blue-300 shadow-sm'
                          : 'bg-white/60 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <button className="mt-0.5 text-blue-600 flex-shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-blue-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                      <div>
                        <div className={`text-xs font-bold ${isChecked ? 'text-slate-900' : 'text-slate-700'}`}>
                          {item.title}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 pt-2 text-center">
                <span className="text-[11px] font-mono text-slate-500">
                  Access credentials and video syllabus are provided upon application review.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
