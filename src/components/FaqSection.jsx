import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_LIST } from '../data/programData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const enterpriseFaqs = [
    {
      q: "Who is the Start from Scratch program designed for?",
      a: "It is designed for software developers, backend engineers, systems practitioners, and ambitious technical beginners who want to build real, working AI architectures instead of passively watching webinars. If you know basic programming and can navigate a terminal or code editor, you are ready."
    },
    {
      q: "What is the expected time commitment for working tech professionals?",
      a: "The program is engineered for working professionals. It requires 4–6 hours of independent asynchronous prep during the week (reading RFCs, whitepapers, and setting up environments), followed by structured synchronous pod collaboration and build time on weekends."
    },
    {
      q: "Who owns the Intellectual Property (IP) and code created during the program?",
      a: "100% of all code created by participants belongs exclusively to the participants and their teams. All builds are maintained in their personal or team public GitHub repositories under open-source licenses (MIT/Apache 2.0) or private repositories if pursuing proprietary startups."
    },
    {
      q: "What is the 4-recording prerequisite requirement?",
      a: "Every participant must complete four mandatory foundational technical recordings before joining the live build sessions. This establishes an equal baseline across the cohort, ensuring synchronous build sessions are not bogged down by basic syntax or conceptual 101 definitions."
    },
    {
      q: "How are the four cohort tracks (Groups A, B, C, D) assigned?",
      a: "Participants indicate their preferred technical environment (Python/Colab, Python Cloud SDK, n8n visual automation, or Next.js vibe coding) during application. Pods are formed with cross-disciplinary balance to ensure diverse engineering backgrounds."
    },
    {
      q: "Is there any commercial fee to participate in AI Madurai?",
      a: "No. AI Madurai is a community-driven initiative organized by regional practitioners to cultivate South Tamil Nadu's engineering ecosystem. Participation is zero-cost, but admission is selective based on technical curiosity and verified commitment to complete the 8 weeks."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-[#FCFDFF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>OPERATIONAL SPECIFICATIONS & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Technical Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Key operational details regarding cohort cadence, IP ownership, time commitments, and baseline qualifications.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl text-left space-y-3">
          {enterpriseFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`enterprise-card rounded-xl transition-all border ${
                  isOpen
                    ? 'border-blue-400 shadow-sm bg-white'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded bg-slate-100 text-slate-600 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-left border-t border-slate-100 pt-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
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
