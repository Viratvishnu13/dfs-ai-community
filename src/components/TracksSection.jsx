import React from 'react';
import { Users, Terminal, Code2, Workflow, Globe, ShieldCheck, AlertCircle, GitMerge } from 'lucide-react';
import { TEAMS_DATA } from '../data/programData';

export default function TracksSection() {
  const getGroupIcon = (group) => {
    switch (group) {
      case "Group A":
        return <Terminal className="w-4 h-4 text-slate-700" />;
      case "Group B":
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case "Group C":
        return <Workflow className="w-4 h-4 text-slate-700" />;
      case "Group D":
        return <Globe className="w-4 h-4 text-blue-600" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section id="tracks" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>CROSS-ENVIRONMENT ARCHITECTURAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Four Engineering Stacks. One Benchmark Challenge.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The program intentionally avoids dogmatic tool selection. Instead of crowning one stack as universally superior, the four cohort pods implement the identical product requirement across four architectural paradigms to understand real trade-offs in latency, maintenance, and flexibility.
          </p>
        </div>

        {/* The Week 2 Benchmark Challenge Card */}
        <div className="enterprise-card p-6 sm:p-7 rounded-xl mb-12 text-left bg-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span>BENCHMARK PROBLEM SPECIFICATION (WEEK 2)</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                The Automated Triage Agent (L1 SRE Incident Bot)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Each team builds an incident remediation agent that ingests raw server logs, categorizes outage severity, queries troubleshooting runbooks, and proposes mitigation steps. All 4 teams compare performance against actual crash logs.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex-shrink-0 text-left min-w-[260px]">
              <div className="text-xs font-mono text-slate-500 mb-1">Collaboration Topology</div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-blue-600" />
                Headroom + Breakout Pods
              </div>
              <div className="text-xs font-mono text-slate-500 mt-1">Multi-contributor GitHub branches</div>
            </div>
          </div>
        </div>

        {/* 4 Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 text-left">
          {TEAMS_DATA.map((team, index) => (
            <div
              key={index}
              className="enterprise-card p-6 rounded-xl relative group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-md bg-slate-100 border border-slate-200">
                    {getGroupIcon(team.group)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold block">
                      Pod Track
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      {team.group}
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  {team.focus}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-3">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold mb-0.5">
                  Environment & Runtime Stack
                </div>
                <div className="text-xs font-mono font-semibold text-slate-900">
                  {team.environment}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Model Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-0.5">Designated Staff Leads</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experienced practitioners supervise each pod, conducting code review, enforcing commit standards, and resolving architectural blockers.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-0.5">Central Headroom Protocol</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Synchronous build days center on one coordination room for cross-team alignment before pods disperse for focused sprint execution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
