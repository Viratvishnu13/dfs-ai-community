import React from 'react';
import ScratchNavbar from '../components/scratch/ScratchNavbar';
import ScratchHero from '../components/scratch/ScratchHero';
import ScratchLearningMethod from '../components/scratch/ScratchLearningMethod';
import ScratchPilotBatch from '../components/scratch/ScratchPilotBatch';
import ScratchStructure from '../components/scratch/ScratchStructure';
import HomeFooter from '../components/home/HomeFooter';

export default function StartFromScratchPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <ScratchNavbar />

      {/* Main Sections - Strictly What Was Given, None Extra */}
      <main className="flex-grow">
        {/* 1. Hero Card: Start from Scratch */}
        <ScratchHero />

        {/* 2. Learning Method: Discovery Oriented (Heuristic, Enactive, Constructivist + Main Page Ideology) */}
        <ScratchLearningMethod />

        {/* 3. Meet the Pilot Batch (Groups A, B, C, D with 3 members each & photos/faces) */}
        <ScratchPilotBatch />

        {/* 4. Structure of the Program */}
        <ScratchStructure />
      </main>

      {/* Minimal Footer: ©️DFS AI Club - 2026 */}
      <HomeFooter />
    </div>
  );
}
