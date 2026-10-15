import React, { useState } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeHero from '../components/home/HomeHero';
import HomeVision from '../components/home/HomeVision';
import HomeAboutUs from '../components/home/HomeAboutUs';
import HomeCtaSection from '../components/home/HomeCtaSection';
import JoinClubModal from '../components/home/JoinClubModal';
import IdeaSubmissionModal from '../components/home/IdeaSubmissionModal';

export default function HomePage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isIdeaModalOpen, setIsIdeaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <HomeNavbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Center / Hero Card */}
        <HomeHero />

        {/* Section 1: Vision (Stage 01 only: Superusers to Builders) */}
        <HomeVision />

        {/* Section 2: About Us */}
        <HomeAboutUs />

        {/* Single CTA section at the end of the page with integrated footer */}
        <HomeCtaSection
          onOpenJoin={() => setIsJoinModalOpen(true)}
          onOpenIdea={() => setIsIdeaModalOpen(true)}
        />
      </main>

      {/* Action Modals */}
      <JoinClubModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <IdeaSubmissionModal
        isOpen={isIdeaModalOpen}
        onClose={() => setIsIdeaModalOpen(false)}
      />
    </div>
  );
}
