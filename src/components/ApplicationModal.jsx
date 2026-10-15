import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Terminal, FileCode } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ApplicationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    stack: 'Python, TypeScript, SQL',
    track: 'Group B - Python SDK + Cloud Frontier API',
    github: '',
    motivation: '',
    agreedPrerequisites: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#ffffff']
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
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl my-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-2">
                <Terminal className="w-3 h-3 text-blue-600" />
                <span>COHORT 2026 APPLICANT DOSSIER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Application: Start from Scratch Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                8-week intensive AI engineering program by AI Madurai Community. Zero commercial fee, 100% production build commitment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-blue-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sundararajan M."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Professional Email <span className="text-blue-600 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="engineer@domain.com"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Institution / Role
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Software Engineer @ TechCorp / Student"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Technical Track
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  >
                    <option value="Group A - Python + Colab (Open LLMs)">Track A: Python + Local/Open LLMs (Colab)</option>
                    <option value="Group B - Python SDK + Cloud Frontier API">Track B: Python SDK + Cloud Frontier APIs</option>
                    <option value="Group C - n8n Visual Automation">Track C: n8n Visual Workflow Automation</option>
                    <option value="Group D - Next.js + Frontend Vibe Coding">Track D: Next.js + Frontend Vibe Coding</option>
                    <option value="Flexible / Assigned by Staff Leads">Flexible / Any Pod Assignment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  GitHub Profile / Portfolio URL
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Problem Statement Intent or Architectural Area of Interest <span className="text-blue-600 font-bold">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Describe a real problem you want to scope and build (e.g., SRE triage automation, domain document RAG with citations, code security auditor agent)..."
                  className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                />
              </div>

              {/* Prerequisite Check */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="prereq-check"
                  checked={formData.agreedPrerequisites}
                  onChange={(e) => setFormData({ ...formData, agreedPrerequisites: e.target.checked })}
                  required
                  className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-0"
                />
                <label htmlFor="prereq-check" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                  I agree to complete the <strong className="text-slate-900">4 required technical recordings</strong> before the start date, and commit to active participation in weekend headroom build sessions and code reviews.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Technical Application</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation state */
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Application Dossier Received
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your profile for <span className="text-blue-700 font-semibold">{formData.track}</span> has been queued for review by the AI Madurai staff lead committee.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 mb-6 font-mono text-xs text-slate-700">
              <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                Operational Next Steps:
              </div>
              <p>1. Onboarding dispatch sent to {formData.email}.</p>
              <p>2. Access links to 4 Prerequisite Technical Recordings provided.</p>
              <p>3. Pod lead introduction and git repository invitations before kickoff.</p>
            </div>

            <button
              onClick={resetAndClose}
              className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              Return to Program Brief
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
