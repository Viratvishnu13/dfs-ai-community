import React from 'react';
import { ArrowRight, Terminal, Layers, CheckCircle2, Shield, Code, Server, GitPullRequest } from 'lucide-react';
import { PROGRAM_INFO } from '../data/programData';

export default function HeroSection({ onOpenApply }) {
  return (
    <section id="overview" className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden bg-[#FCFDFF] border-b border-slate-200">
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb / Metadata pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>AI MADURAI COHORT INITIATIVE</span>
          </div>
          <span className="text-slate-400 font-mono text-xs hidden sm:inline">/</span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <span>RFC: 8-WEEK HYPER-PACED SYLLABUS</span>
          </div>
        </div>

        {/* Hero Title & Executive Pitch */}
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.12]">
            Engineering Practical AI Systems from First Principles.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-3xl">
            <strong>Start from Scratch</strong> is an eight-week intensive technical program designed for engineers, developers, and builders who want to create grounded, production-grade AI systems. Move systematically past chat prompts into chatbots, RAG architectures, single-agent loops, and multi-agent coordination.
          </p>

          {/* Core Philosophy Architectural Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 mb-8 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Operational Philosophy</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-900">
              "{PROGRAM_INFO.corePhilosophy}"
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-14">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm active:translate-y-0.5 transition-all text-sm"
            >
              <span>Submit Cohort Application</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-sm"
            >
              <Terminal className="w-4 h-4 text-slate-500" />
              <span>Review 8-Week Syllabus RFC</span>
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-sm"
            >
              <Layers className="w-4 h-4 text-slate-500" />
              <span>Architecture Hierarchy</span>
            </a>
          </div>
        </div>

        {/* Technical Program Parameters / Spec Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="enterprise-card p-4 rounded-xl">
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1 flex items-center justify-between">
              <span>Program Duration</span>
              <span className="text-blue-600 font-bold">08 WEEKS</span>
            </div>
            <div className="text-lg font-bold text-slate-900">Progressive Depth</div>
            <p className="text-xs text-slate-500 mt-1">From mental models to multi-agent deployment</p>
          </div>

          <div className="enterprise-card p-4 rounded-xl">
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1 flex items-center justify-between">
              <span>Parallel Pods</span>
              <span className="text-blue-600 font-bold">04 TEAMS</span>
            </div>
            <div className="text-lg font-bold text-slate-900">Cross-Stack Cohorts</div>
            <p className="text-xs text-slate-500 mt-1">Colab, Python SDK, n8n, & Next.js tracks</p>
          </div>

          <div className="enterprise-card p-4 rounded-xl">
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1 flex items-center justify-between">
              <span>Live Evaluation</span>
              <span className="text-blue-600 font-bold">15 MINUTES</span>
            </div>
            <div className="text-lg font-bold text-slate-900">Strict Demo Standard</div>
            <p className="text-xs text-slate-500 mt-1">5 min live code demo + 10 min technical Q&A</p>
          </div>

          <div className="enterprise-card p-4 rounded-xl">
            <div className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1 flex items-center justify-between">
              <span>Delivery Standard</span>
              <span className="text-blue-600 font-bold">100% GITHUB</span>
            </div>
            <div className="text-lg font-bold text-slate-900">Auditable Trail</div>
            <p className="text-xs text-slate-500 mt-1">PR reviews, commits, tests & runbook documentation</p>
          </div>
        </div>

        {/* System Architecture Progression Matrix Card */}
        <div className="mt-8 enterprise-card p-5 sm:p-6 rounded-xl text-left bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                SYSTEM DESIGN PIPELINE
              </span>
              <h3 className="text-base font-bold text-slate-900">
                8-Week Technical Progression & Complexity Escalation
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
              Standard: Simplest Responsible Architecture
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  STAGE 01
                </span>
                <span className="text-[11px] text-slate-500 font-mono">WEEKS 1–2</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Foundations & SRE Triage</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Anthropic 4Ds governance. Build an Automated Triage Agent classifying server logs across 4 distinct tech stacks.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  STAGE 02
                </span>
                <span className="text-[11px] text-slate-500 font-mono">WEEK 3</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Grounded RAG Pipeline</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Vector chunking, BM25 + Vector hybrid retrieval, and cross-encoder reranking. Full-day sprint in headroom.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  STAGE 03
                </span>
                <span className="text-[11px] text-slate-500 font-mono">WEEKS 4–5</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Autonomous & Multi-Agent</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Goal-oriented tool calling (ReAct loop). Multi-agent division: Orchestrator, Researcher, Analyst, and Reviewer.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  STAGE 04
                </span>
                <span className="text-[11px] text-slate-500 font-mono">WEEKS 6–8</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Production Build & Demo</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Scoped capstone build, end-user testing, error boundaries, and 15-minute live technical defense across 4 lenses.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
