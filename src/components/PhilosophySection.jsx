import React, { useState } from 'react';
import { ShieldCheck, Clock, Users, Terminal, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { FOUR_DS } from '../data/programData';

export default function PhilosophySection() {
  const [active4D, setActive4D] = useState("delegation");

  const competencies = [
    {
      title: "Ethical & Boundary Diligence",
      desc: "Architect systems with explicit accountability, verifiable data handling, and deterministic human-in-the-loop guardrails."
    },
    {
      title: "Architectural Precision",
      desc: "Discriminate objectively between simple prompts, knowledge-grounded RAG, tool-augmented agents, and multi-agent systems."
    },
    {
      title: "Justified Complexity Principle",
      desc: "Defend design trade-offs mathematically: reject multi-agent overhead when a fine-tuned prompt or simple retrieval pipeline satisfies the SLA."
    },
    {
      title: "Cross-Functional Pod Engineering",
      desc: "Operate effectively in specialized technical pods, coordinating interfaces, schemas, and milestones under tight sprint constraints."
    },
    {
      title: "Auditable GitHub Trail",
      desc: "Maintain strict git hygiene with atomic commits, branch reviews, pull request documentation, and reproducible build scripts."
    },
    {
      title: "Empirical Demo & User Verification",
      desc: "Validate software live with real production inputs, measuring latency, error budgets, and user feedback instead of slide decks."
    }
  ];

  return (
    <section id="philosophy" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>OPERATING MODEL & GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Hyper-Paced Learning: The Flipped Engineering Cadence
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hyper-paced learning rejects passive lecture halls. Synchronous time is an expensive engineering resource: preparation happens asynchronously so cohort hours are strictly dedicated to architecture debates, hands-on building, and live code reviews.
          </p>
        </div>

        {/* 3 Pillars Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 text-left">
          <div className="enterprise-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Phase 01 • Async
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Independent
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Individual Preparation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineers complete assigned whitepapers, API docs, and architectural pre-reads independently. Everyone arrives with shared vocabulary, verified API access, and an active git environment.
            </p>
          </div>

          <div className="enterprise-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Phase 02 • Sync
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
                Headroom + Pods
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Team Brainstorm & Build</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Teams assemble in the central headroom for coordination and break out into dedicated pods. Synchronous hours are used for interface contracts, data plumbing, and unblocking hard technical barriers.
            </p>
          </div>

          <div className="enterprise-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Phase 03 • Demo
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                15-Min Protocol
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Live Demonstration & Defense</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pods execute live terminal or web demos under 5 minutes without slide fluff, followed by 10 minutes of critical defense examining system architecture, failure edges, and token efficiency.
            </p>
          </div>
        </div>

        {/* Anthropic 4Ds Framework - Enterprise Governance Specification */}
        <div className="enterprise-card p-6 sm:p-8 rounded-2xl mb-16 text-left bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                ANTHROPIC AI FLUENCY FRAMEWORK
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                The 4Ds of Enterprise AI Engineering
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded">
              Week 1 Mental Models Baseline
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* 4Ds Navigation */}
            <div className="lg:col-span-5 space-y-2">
              {FOUR_DS.map((item) => {
                const isSelected = active4D === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive4D(item.key)}
                    className={`w-full text-left p-3.5 rounded-lg transition-all border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className={`text-xs line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* 4Ds Detail Box */}
            <div className="lg:col-span-7">
              {FOUR_DS.map((item) => {
                if (item.key !== active4D) return null;
                return (
                  <div
                    key={item.key}
                    className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                        Engineering Discipline
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-950 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm font-semibold text-slate-800 mb-4 pb-3 border-b border-slate-200">
                      "{item.summary}"
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.details}
                    </p>

                    <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                        Cohort Implementation Requirement
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Evaluated across Week 1 problem formulations, the SRE triage bot boundary contract, and the Week 8 technical defense panel.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Intended Competencies */}
        <div className="text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
              LEARNING OUTCOMES & VERIFIABLE CAPABILITIES
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Engineered Competencies by Week 8
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Graduating participants are evaluated against these 6 core enterprise capabilities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((c, index) => (
              <div
                key={index}
                className="enterprise-card p-5 rounded-xl text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
