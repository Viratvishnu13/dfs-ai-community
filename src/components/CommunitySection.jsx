import React from 'react';
import { MapPin, Sparkles, MessageSquare, Github, GitBranch, Users, Network } from 'lucide-react';

export default function CommunitySection() {
  const pillars = [
    {
      title: "Grassroots Engineering Rigor",
      desc: "Cultivating senior-grade AI architectural capability among engineers, researchers, and technical founders across South Tamil Nadu."
    },
    {
      title: "Auditable 'Show the Work' Culture",
      desc: "We prioritize reproducible codebases, validated evaluation benchmarks, and live working prototypes over speculative AI slides."
    },
    {
      title: "Global Industry & Mentor Network",
      desc: "Bridging local Madurai technical talent with principal engineers, AI researchers, and venture builders globally."
    }
  ];

  return (
    <section id="community" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Network className="w-3.5 h-3.5 text-blue-600" />
            <span>REGIONAL ENGINEERING ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            AI Madurai Engineering Working Group
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Madurai possesses exceptional engineering colleges, enterprise technology operations, and ambitious builders. AI Madurai is the technical nexus where practitioners meet to architect, build, and deploy production AI systems together.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 text-left">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="enterprise-card p-6 rounded-xl"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-mono text-xs font-bold mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Callout Card */}
        <div className="enterprise-card p-8 rounded-2xl bg-white border border-slate-200 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
                INDUSTRY ADVISORY & CONTRIBUTION
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Join the Working Group or Mentor an Engineering Pod
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are a senior software architect looking to mentor a <strong className="text-slate-900">Start from Scratch</strong> pod, an engineering lead interested in sharing production post-mortems, or a developer applying for Cohort 2026 — our repository and review circles are open.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Org</span>
              </a>

              <a
                href="#faq"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-slate-500" />
                <span>Program FAQ</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
