import React from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StartFromScratchPage from './pages/StartFromScratchPage';

// file:// has no server to resolve paths, so keep route state in memory there
const Router = window.location.protocol === 'file:' ? MemoryRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Home: DFS AI Club */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        
        {/* Start from Scratch: Canonical & Aliases */}
        <Route path="/start-from-scratch" element={<StartFromScratchPage />} />
        <Route path="/normal" element={<Navigate to="/start-from-scratch" replace />} />
        <Route path="/engineer" element={<Navigate to="/start-from-scratch" replace />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
