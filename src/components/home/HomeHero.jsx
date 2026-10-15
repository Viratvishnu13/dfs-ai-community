import React from 'react';

export default function HomeHero() {
  return (
    <section 
      id="hero" 
      className="h-screen w-full flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto h-[66vh] sm:h-[68vh] flex items-center justify-center">
        
        {/* Signature Blue-Violet Gradient Hero Card */}
        <div 
          className="w-full h-full rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-[0_16px_48px_rgba(30,27,75,0.22)] relative overflow-hidden text-center text-white flex flex-col justify-center items-center"
          style={{
            background: 'linear-gradient(135deg, #5e1ebb 0%, #3538b8 46%, #095fc5 100%)'
          }}
        >
          {/* Subtle Ambient Shimmer */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />

          {/* Center Card Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            DFS AI Club
          </h1>

          {/* Subtext / Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight tracking-tight mb-4 sm:mb-6">
            Transforming AI Superusers to AI Builders
          </p>

          {/* Descriptive Body */}
          <p className="text-xs sm:text-sm lg:text-base text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
            A collaborative community bringing together curious minds, engineers, and domain specialists to move past consumer chat interfaces and start engineering real-world AI applications.
          </p>

        </div>

      </div>
    </section>
  );
}
