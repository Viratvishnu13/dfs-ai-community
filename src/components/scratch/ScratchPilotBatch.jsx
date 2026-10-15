import React from 'react';
import { Users, Code2, Terminal, Workflow, Laptop } from 'lucide-react';

export default function ScratchPilotBatch() {
  const groups = [
    {
      groupName: "Group A",
      environment: "Python & Local/Open LLMs (Google Colab)",
      icon: Terminal,
      color: "bg-blue-600",
      focus: "Self-hosted & open-source model experimentation",
      members: [
        {
          name: "Aravind Raman",
          role: "Squad Lead • ML Engineer",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "AR"
        },
        {
          name: "Karthik Subramanian",
          role: "Systems Specialist",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "KS"
        },
        {
          name: "Deepa Narayanan",
          role: "Backend Developer",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "DN"
        }
      ]
    },
    {
      groupName: "Group B",
      environment: "Python SDK & Cloud API Services",
      icon: Code2,
      color: "bg-blue-600",
      focus: "Core developer workflow with commercial LLMs",
      members: [
        {
          name: "Siddharth Rajan",
          role: "Squad Lead • Fullstack Dev",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "SR"
        },
        {
          name: "Meera Krishnan",
          role: "Data Analyst",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "MK"
        },
        {
          name: "Vignesh Murugan",
          role: "Cloud Engineer",
          avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "VM"
        }
      ]
    },
    {
      groupName: "Group C",
      environment: "n8n Visual Workflow Engine",
      icon: Workflow,
      color: "bg-blue-600",
      focus: "Visual workflow orchestration & API pipelines",
      members: [
        {
          name: "Ananya Venkatesh",
          role: "Squad Lead • Process Architect",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "AV"
        },
        {
          name: "Praveen Kumar",
          role: "Operations Specialist",
          avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "PK"
        },
        {
          name: "Rohit Sundaram",
          role: "Automation Engineer",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "RS"
        }
      ]
    },
    {
      groupName: "Group D",
      environment: "Next.js & Frontend Vibe Coding",
      icon: Laptop,
      color: "bg-blue-600",
      focus: "Frontend-oriented AI application prototypes",
      members: [
        {
          name: "Harish Balaji",
          role: "Squad Lead • UI/UX Engineer",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "HB"
        },
        {
          name: "Swetha Chandran",
          role: "Product Designer",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "SC"
        },
        {
          name: "Naveen Prakash",
          role: "Frontend Developer",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&h=256&q=80",
          initials: "NP"
        }
      ]
    }
  ];

  return (
    <section id="pilot-batch" className="scroll-mt-16 py-16 sm:py-20 text-slate-900 border-t border-slate-200/60 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Cohort 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Meet the Pilot Batch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Four cross-functional squads tackling identical real-world problem statements through diverse technical environments. Each team consists of 3 dedicated builders.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={gIdx}
                className="p-8 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-blue-300 shadow-sm transition-all"
              >
                {/* Group Header */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-black font-mono text-blue-700 uppercase tracking-wider">
                        {group.groupName}
                      </span>
                      <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold border border-blue-200">
                        3 Members
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950">
                      {group.environment}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {group.focus}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 shadow-xs">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* 3 Members with Photos/Faces */}
                <div className="space-y-3.5">
                  {group.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                    >
                      {/* Photo / Face Placeholder */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs font-mono">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <span className="absolute">{member.initials}</span>
                      </div>

                      {/* Member Info */}
                      <div className="text-left">
                        <div className="text-sm font-bold text-slate-900 leading-tight">
                          {member.name}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 font-medium">
                          {member.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
