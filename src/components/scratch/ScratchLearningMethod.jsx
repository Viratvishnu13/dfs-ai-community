import React from 'react';
import { Compass, Search, Activity, Layers, Sparkles } from 'lucide-react';

export default function ScratchLearningMethod() {
  const learningPillars = [
    {
      name: "Heuristic",
      emphasis: "Discover rules through hands-on testing.",
      icon: Search,
      tag: "Exploration",
      description: "Experiment with context limits, token boundaries, and prompt behaviors firsthand to internalize what works through direct observation rather than passive theory."
    },
    {
      name: "Enactive",
      emphasis: "Learn through action and live code.",
      icon: Activity,
      tag: "Action",
      description: "Operate directly inside code editors, invoke REST APIs, wire vector databases, debug terminal logs, and present live running software within minutes."
    },
    {
      name: "Constructivist",
      emphasis: "Anchor to known engineering foundations.",
      icon: Layers,
      tag: "Integration",
      description: "Anchor probabilistic AI model behaviors to traditional engineering concepts you already master—APIs, state machines, deterministic guardrails, and data pipelines."
    }
  ];

  return (
    <section 
      id="learning-method" 
      className="scroll-mt-16 py-16 sm:py-20 text-slate-900 border-t border-slate-200/60 text-left"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Updated Ideology from DFS AI Club */}
        <div className="p-7 sm:p-9 rounded-3xl bg-blue-50/70 border-2 border-blue-200 shadow-sm relative overflow-hidden mb-14 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              DFS AI Club Ideology
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Transforming AI Superusers to AI Builders
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-normal">
            Moving beyond consumer chat prompts into real software engineering. Our 8-week cohort provides the practical environment, peer collaboration, and structured curriculum to turn curiosity into production-grade AI applications.
          </p>
        </div>

        {/* 2. Section Header: Learning Method (No "Pedagogy" word) */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Learning Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Learning Method: Discovery Oriented
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We reject passive lecturing. Cohort participants build deep intuition through three practical dimensions:
          </p>
        </div>

        {/* 3. Three Streamlined Pillars (Reduced Content) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {learningPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    {pillar.tag}
                  </span>

                  <h3 className="text-lg font-black text-slate-950 mb-1.5">
                    {pillar.name}
                  </h3>

                  <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-bold text-blue-900 mb-3">
                    "{pillar.emphasis}"
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
