import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Users, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinClubModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Software Engineer',
    experienceLevel: 'AI Superuser (Power user of LLMs/prompts)',
    interestArea: 'Autonomous Agents & Multi-Agent Workflows',
    goals: '',
    agreedCommitment: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#5e1ebb', '#3538b8', '#095fc5', '#60a5fa', '#ffffff']
      });
    } catch (err) {
      // fallback
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left transition-all text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>DFS AI Club • Membership Registration</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Join DFS AI Club
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Step into a collaborative collective moving beyond prompting. Transform from an AI Superuser into an AI Builder alongside peers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Sundar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maya@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Primary Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                  >
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Systems / Cloud Architect">Systems / Cloud Architect</option>
                    <option value="Data Scientist / ML Engineer">Data Scientist / ML Engineer</option>
                    <option value="Product Manager / Owner">Product Manager / Owner</option>
                    <option value="Business Analyst / Operations">Business Analyst / Operations</option>
                    <option value="Researcher / Student">Researcher / Student</option>
                    <option value="Domain Specialist">Domain Specialist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current AI Stage
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                  >
                    <option value="AI Superuser (Daily prompt power user)">AI Superuser (Daily prompt power user)</option>
                    <option value="Curious Explorer (Experimenting with tools)">Curious Explorer (Experimenting with tools)</option>
                    <option value="Early Builder (Written initial RAG / scripts)">Early Builder (Written initial RAG / scripts)</option>
                    <option value="Experienced Engineer (Deploying AI services)">Experienced Engineer (Deploying AI services)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Interest in the Club
                </label>
                <select
                  value={formData.interestArea}
                  onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all"
                >
                  <option value="Autonomous Agents & Multi-Agent Workflows">Autonomous Agents & Multi-Agent Workflows</option>
                  <option value="Retrieval-Augmented Generation (RAG) & Vector Stores">Retrieval-Augmented Generation (RAG) & Vector Stores</option>
                  <option value="Start from Scratch 8-Week Cohort">Start from Scratch 8-Week Cohort</option>
                  <option value="Enterprise AI Safety & Evaluation Ladders">Enterprise AI Safety & Evaluation Ladders</option>
                  <option value="Idea Incubation & Hackathon Sprints">Idea Incubation & Hackathon Sprints</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  What do you hope to build or achieve?
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. I want to build a local document triage system and learn how to run agentic evaluation benchmarks."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedCommitment}
                    onChange={(e) => setFormData({ ...formData, agreedCommitment: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span className="text-xs text-slate-600 leading-tight">
                    I commit to the club principle: <strong>Learn independently. Think together. Build together. Show the work.</strong>
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.agreedCommitment}
                  style={{
                    background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white shadow-md disabled:opacity-50 transition-all active:scale-95 hover:opacity-95"
                >
                  <span>Complete Club Registration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-950 mb-2">
              Welcome to DFS AI Club, {formData.name || 'Builder'}!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              You are now part of our builder community. We have registered your profile for collaborative sessions, architecture workshops, and cohort sprints.
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 max-w-sm mx-auto text-left mb-6">
              <div className="text-xs font-bold text-blue-900 mb-1">Your Next Step:</div>
              <p className="text-xs text-slate-600">
                Check out the flagship 8-week <strong>Start from Scratch</strong> program or submit your first project proposal via our Idea Incubator.
              </p>
            </div>
            <button
              onClick={resetAndClose}
              style={{
                background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 48%, #095fc5 100%)'
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-sm hover:opacity-95"
            >
              Continue Exploring
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
