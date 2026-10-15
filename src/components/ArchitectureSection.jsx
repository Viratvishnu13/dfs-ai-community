import React, { useState } from 'react';
import { Layers, CheckCircle2, Zap, ArrowRight, Shield, Sliders } from 'lucide-react';
import { ARCHITECTURE_LADDER, PROGRAM_INFO } from '../data/programData';

export default function ArchitectureSection() {
  const [selectedScenario, setSelectedScenario] = useState(1);

  const scenarios = [
    {
      id: 0,
      title: "Static Content Translation & Synthesis",
      description: "Generating marketing copy, language translation, or summarizing static text where knowledge is in model weights.",
      recommendedLevel: 1,
      name: "Simple Chatbot / Direct Prompt",
      tradeoffs: "Lowest latency (sub-second), zero external dependencies, minimal failure surface.",
      reason: "No external dynamic database or tool execution is needed. Adding vector databases or agents here is pure unneeded complexity."
    },
    {
      id: 1,
      title: "Grounded Knowledge Retrieval over Internal Docs",
      description: "Answering employee or customer queries strictly grounded in 300 pages of internal PDF guidelines, engineering wikis, or runbooks.",
      recommendedLevel: 2,
      name: "RAG Architecture (BM25 + Dense Hybrid)",
      tradeoffs: "Moderate latency (1-2s), deterministic citation trail, eliminates hallucination risk without fine-tuning weights.",
      reason: "Model weights do not contain private enterprise context. Hybrid retrieval + reranking provides high semantic relevance with source traceability."
    },
    {
      id: 2,
      title: "Live Database Querying & API Tool Execution",
      description: "A system that must dynamically choose whether to run SQL queries, inspect server telemetry, or execute Python calculators to solve user tasks.",
      recommendedLevel: 3,
      name: "Single Autonomous Agent (Tool Loop)",
      tradeoffs: "Dynamic multi-turn reasoning, schema validation, requires bounded iteration guardrails.",
      reason: "Needs an agent loop (Reason + Act) with curated tools. Keeps context unified without the inter-agent protocol overhead of multi-agent systems."
    },
    {
      id: 3,
      title: "Asynchronous Research, Code Generation & Audit",
      description: "Complex report generation requiring independent data gathering, code synthesis, and an adversarial reviewer to verify citations before export.",
      recommendedLevel: 4,
      name: "Multi-Agent System (Role Specialization)",
      tradeoffs: "Higher token consumption, increased latency, but provides clean separation of concerns and independent adversarial auditing.",
      reason: "Specialized roles (Researcher, Analyst, Reviewer) keep context windows uncluttered and enable automated verification before human escalation."
    },
    {
      id: 4,
      title: "Unattended Multi-System Event Orchestration",
      description: "Continuous automated pipelines responding to webhooks that sync CRM records, trigger CI/CD builds, and alert on Slack with retry logic.",
      recommendedLevel: 5,
      name: "Autonomous Workflow Pipeline",
      tradeoffs: "Stateful persistence, distributed exception handling, audit logging, and webhook security.",
      reason: "Operates non-interactively across third-party services. Requires state machines and idempotency keys rather than conversational prompts."
    }
  ];

  return (
    <section id="architecture" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>ARCHITECTURAL PROGRESSION & SYSTEM BOUNDARIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            The AI Architecture Hierarchy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Complexity in AI systems is not a virtue — it is technical debt. Start from Scratch teaches architecture as a disciplined decision ladder: start with the simplest functional paradigm and justify each level of complexity with verified system requirements.
          </p>

          {/* Principle quote banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
              Core Architectural Tenet
            </span>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              "{PROGRAM_INFO.principle}"
            </p>
          </div>
        </div>

        {/* 6-Level Ladder Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
          {ARCHITECTURE_LADDER.map((item) => (
            <div
              key={item.level}
              className="enterprise-card p-5 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                    STAGE 0{item.level}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {item.complexity}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {item.idealFor}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] text-slate-700 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Optimal when:</strong> {item.bestWhen}</span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-start gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Prevents:</strong> {item.avoids}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Architecture Evaluator Wizard */}
        <div className="enterprise-card p-6 sm:p-8 rounded-2xl text-left bg-white">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
              SYSTEM DESIGN DECISION ENGINE
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Interactive Architectural Scoping Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select an enterprise requirement to evaluate the simplest defensible architecture under production engineering standards:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Scenarios Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {scenarios.map((sc) => {
                const isSelected = selectedScenario === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenario(sc.id)}
                    className={`w-full text-left p-3.5 rounded-lg transition-all border ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm mb-0.5 flex items-center justify-between">
                      <span className={isSelected ? 'text-white' : 'text-slate-900'}>{sc.title}</span>
                      {isSelected && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500 text-white">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {sc.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Recommendation Result */}
            <div className="lg:col-span-7">
              {scenarios.map((sc) => {
                if (sc.id !== selectedScenario) return null;
                return (
                  <div
                    key={sc.id}
                    className="h-full p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                          Recommended Architecture
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-semibold">
                          Stage 0{sc.recommendedLevel}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-950 mb-3">
                        {sc.name}
                      </h4>

                      <div className="p-3.5 rounded-lg bg-white border border-slate-200 mb-3">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block mb-0.5 font-bold">
                          System Performance & Trade-offs
                        </span>
                        <p className="text-xs text-slate-700">
                          {sc.tradeoffs}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-blue-700 uppercase tracking-wide font-bold block">
                          Architectural Rationale
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {sc.reason}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Evaluated under RFC standard</span>
                      <span className="text-blue-700 font-semibold">Production Ready</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
