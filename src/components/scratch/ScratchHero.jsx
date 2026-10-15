import React from 'react';

export default function ScratchHero() {
  return (
    <section 
      id="hero" 
      className="min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto h-[66vh] sm:h-[68vh] flex items-center justify-center">
        
        {/* Signature Blue-Violet Gradient Hero Card */}
        <div 
          className="w-full h-full rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-[0_16px_48px_rgba(30,27,75,0.22)] relative overflow-hidden text-center text-white flex flex-col justify-center items-center"
          style={{
            background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 46%, #095fc5 100%)'
          }}
        >
          {/* Subtle Ambient Shimmer Overlay */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />

          {/* Program Header Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <span>DFS AI Club • Flagship Cohort</span>
          </div>

          {/* Center Card Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            Start from Scratch
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white max-w-2xl mx-auto leading-tight tracking-tight mb-4 sm:mb-6">
            An 8-Week Hyper-Paced AI Builder Program
          </p>

          {/* Descriptive Body */}
          <p className="text-xs sm:text-sm lg:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
            A practical incubator designed for curious minds and engineers to transition from passive tool users into confident AI software builders—progressing from foundations to autonomous multi-agent systems.
          </p>

        </div>

      </div>
    </section>
  );
}
