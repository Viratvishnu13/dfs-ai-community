import React from 'react';
import { Users, Lightbulb, Rocket, Store, Building2, ArrowDown, ArrowUp, Code2, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomeAboutUs() {
  return (
    <section 
      id="about" 
      className="scroll-mt-16 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-left border-t border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold mb-2.5">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Operating Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mb-2">
            How DFS AI Club Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
            Two distinct ingestion streams feed our internal ecosystem—transforming raw ideas and upskilled builders into production-ready assets consumed by DFS Delivery Units.
          </p>
        </div>

        {/* Minimal Flow Diagram Container */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* LEVEL 1: TWO INGESTION / INFLOW LAYERS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Stream 1: DFS People with Ideas */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
                  Inflow Stream 01
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  Idea Backlog
                </span>
              </div>

              {/* Step 1: Ideas */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-950">
                    DFS People with Ideas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Internal personnel identify operational bottlenecks, customer friction, or workflow challenges worth solving.
                  </p>
                </div>
              </div>

              {/* Flow Connector: Build */}
              <div className="my-4 py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">Build Phase</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  Rapid prototyping & engineering
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              </div>

              {/* Target connection notice */}
              <div className="text-[11px] font-semibold text-blue-600 flex items-center gap-1.5 pt-1">
                <span>Direct intake to AI Solution Marketplace</span>
              </div>
            </div>

            {/* Stream 2: Start from Scratch Participants */}
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-[11px] font-bold text-indigo-700 tracking-wider uppercase">
                  Inflow Stream 02
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  Cohort Incubator
                </span>
              </div>

              {/* Step 1: Participants */}
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-950">
                    Start from Scratch Participants
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Superusers enter the structured 8-week builder program to learn foundational AI engineering.
                  </p>
                </div>
              </div>

              {/* Step 2: Learn -> Step 3: Build */}
              <div className="grid grid-cols-2 gap-2 my-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">1. Learn</div>
                    <div className="text-[10px] text-slate-500">8-Week Syllabus</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">2. Build</div>
                    <div className="text-[10px] text-slate-500">Capstone Demos</div>
                  </div>
                </div>
              </div>

              {/* Target connection notice */}
              <div className="text-[11px] font-semibold text-indigo-600 flex items-center gap-1.5 pt-2">
                <span>Graduates publish verified capstones to Marketplace</span>
              </div>
            </div>

          </div>

          {/* CONNECTOR ARROWS INTO MARKETPLACE */}
          <div className="flex items-center justify-center gap-8 py-1 text-slate-400">
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/80">
              <ArrowDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
              <span>Inflow Feeds Marketplace</span>
            </div>
          </div>

          {/* LEVEL 2: CENTRAL AI SOLUTION MARKETPLACE (MP) */}
          <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200 shadow-sm relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Central Hub
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950">
                      AI Solution Marketplace (MP)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Internal catalog of production-tested AI agents, components, and automated solutions.
                  </p>
                </div>
              </div>

              {/* Micro Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  Hosted Solutions
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified Code
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl pt-2 border-t border-slate-100">
              Every prototype incubated from employee ideas or cohort builds is standardized, audited for security, and published here for seamless enterprise re-use.
            </p>
          </div>

          {/* CONNECTOR ARROWS FROM MARKETPLACE TO DFS DELIVERY UNITS */}
          <div className="flex items-center justify-center gap-8 py-1 text-slate-400">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
              <span>Consumed & Deployed By</span>
            </div>
          </div>

          {/* LEVEL 3: CONSUMPTION LAYER — DFS DELIVERY UNITS */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-md text-left flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                <Building2 className="w-5 h-5 text-blue-300" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                    Consumption Layer
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    DFS Delivery Units
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  Client accounts, delivery teams, and operational groups deploy marketplace tools to reduce cycle times, automate repetitive tasks, and unlock measurable business impact.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-200">
                Continuous Value Realization
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
