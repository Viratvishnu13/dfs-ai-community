import React from 'react';
import { Clock, CheckCircle2, ShieldCheck, Terminal, Award, FileCode } from 'lucide-react';
import { PRESENTATION_LENSES } from '../data/programData';

export default function StandardsSection() {
  const goodChecklist = [
    "Zero slide dependencies — evaluate strictly through live terminal or web runtime execution",
    "Problem statement scoped precisely under 3 sentences with verifiable success criteria",
    "Adhere strictly to production security boundaries, secrets isolation, and rate-limit handling",
    "Empirically tested with real prospective end-users prior to the final review",
    "Transparent demonstration of failure edge cases and explicit fallback mechanisms",
    "GitHub pull request history serving as the auditable record of all engineering changes"
  ];

  return (
    <section id="standards" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>PRODUCTION READINESS & EVALUATION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            The 15-Minute Live Demonstration Protocol
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Theoretical knowledge without working execution is insufficient. In enterprise engineering, systems are judged by working software and clear communication. The final showcase enforces an uncompromising 15-minute review format per team.
          </p>
        </div>

        {/* 15-Minute Protocol Spotlight Card */}
        <div className="enterprise-card p-6 sm:p-8 rounded-2xl mb-14 text-left bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                EVALUATION PROTOCOL SPECIFICATION
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                15 Minutes per Team: Strict Time-Boxed Defense
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Modeled after senior engineering design reviews (RFC defenses). Presentations are strictly time-boxed to ensure live technical execution takes precedence over storytelling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-slate-900 mb-0.5">
                    05 MIN
                  </div>
                  <div className="text-xs uppercase font-bold text-blue-700 font-mono">
                    Live Runtime Execution
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Execute code live. Demonstrate realistic input, tool invocation logs, and response synthesis without mock slides.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-slate-900 mb-0.5">
                    10 MIN
                  </div>
                  <div className="text-xs uppercase font-bold text-blue-700 font-mono">
                    Architectural Defense & Q&A
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Defend design decisions, latency bounds, failure edges, and token efficiency against rigorous mentor review.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist Column */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Production Acceptance Criteria</span>
              </div>
              <div className="space-y-2.5">
                {goodChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-slate-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Presentation Lenses Grid */}
        <div className="text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              MULTI-STAKEHOLDER COMMUNICATION
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              The Four Review Lenses
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Engineers must explain and defend their system from four distinct perspectives:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRESENTATION_LENSES.map((l, index) => (
              <div
                key={index}
                className="enterprise-card p-5 rounded-xl text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      LENS 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                      Review Standard
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {l.lens}
                  </h4>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-semibold">
                      Core Inquiry
                    </span>
                    <p className="text-xs font-medium text-slate-800 italic">
                      "{l.question}"
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-0.5 font-semibold">
                    Evaluation Scope
                  </span>
                  <p className="text-xs text-slate-600">
                    {l.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
