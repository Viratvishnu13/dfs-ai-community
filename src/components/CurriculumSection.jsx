import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, BookOpen, Code2, Layers, Award, Terminal } from 'lucide-react';
import { CURRICULUM } from '../data/programData';

export default function CurriculumSection() {
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [expandedWeek, setExpandedWeek] = useState(2); // default Week 2 expanded

  const phases = ["All", "Phase 1: Mindset & Baseline", "Phase 2: Grounded Architectures", "Phase 3: Capstone & Productization"];

  const filteredCurriculum = CURRICULUM.filter(item => {
    if (selectedPhase === "All") return true;
    return item.phase.includes(selectedPhase.replace("Phase 1: ", "").replace("Phase 2: ", "").replace("Phase 3: ", ""));
  });

  return (
    <section id="curriculum" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>SYLLABUS SPECIFICATION • RFC-08</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            8-Week Technical Syllabus & Sprint Milestones
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every week addresses an explicit architectural frontier. Participants build against verifiable problem statements, deliver source-controlled artifacts, and defend trade-offs before designated technical leads.
          </p>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-left">
          {phases.map((phase) => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                selectedPhase === phase
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-slate-200'
              }`}
            >
              {phase}
            </button>
          ))}
        </div>

        {/* Weeks Accordion / Spec Cards */}
        <div className="space-y-3 max-w-5xl text-left">
          {filteredCurriculum.map((week) => {
            const isExpanded = expandedWeek === week.week;
            return (
              <div
                key={week.week}
                className={`enterprise-card rounded-xl transition-all border ${
                  isExpanded
                    ? 'border-blue-400 shadow-sm bg-white'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                  className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center font-mono">
                      <span className="text-[9px] uppercase text-slate-500 font-bold">WK</span>
                      <span className="text-base font-bold text-slate-900 leading-none">0{week.week}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                          {week.phase}
                        </span>
                        <span className="text-xs font-mono text-blue-700 font-medium">
                          Challenge: {week.highlight}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {week.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="hidden sm:inline-block text-xs font-mono">
                      {isExpanded ? 'Collapse Spec' : 'Expand Spec'}
                    </span>
                    <div className="p-1 rounded bg-slate-100 text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-5 text-left">
                    {/* Summary & Core Architectural Question */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                          Sprint Objective
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {week.summary}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-200">
                        <div className="text-xs font-mono uppercase text-blue-700 font-bold mb-1">
                          Core Architectural Question
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-900 italic">
                          "{week.coreQuestion}"
                        </p>
                      </div>
                    </div>

                    {/* Topics Covered */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Curriculum Scope & Implementation Detail</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {week.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-slate-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverable & Quality Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                      <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-slate-500 font-bold mb-1">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          <span>Required GitHub Artifact</span>
                        </div>
                        <p className="text-xs text-slate-800 font-medium leading-relaxed">
                          {week.deliverable}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-blue-700 font-bold mb-1">
                          <Award className="w-3.5 h-3.5 text-blue-600" />
                          <span>Quality Bar & Verification SLA</span>
                        </div>
                        <p className="text-xs text-slate-800 font-medium leading-relaxed">
                          {week.qualityBar}
                        </p>
                      </div>
                    </div>

                    {/* Assigned Technical References */}
                    {week.resources && (
                      <div className="pt-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Assigned Technical Whitepapers & References</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {week.resources.map((res, idx) => (
                            <a
                              key={idx}
                              href={res.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-xs text-slate-700 font-mono border border-slate-200 shadow-sm transition-colors"
                            >
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-semibold">
                                {res.type}
                              </span>
                              <span>{res.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
