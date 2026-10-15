import React from 'react';

export default function HomeVision() {
  return (
    <section 
      id="vision" 
      className="scroll-mt-16 pt-4 pb-10 sm:pt-6 sm:pb-12 px-4 sm:px-6 lg:px-8 text-left border-t border-slate-200/60"
    >
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Compact, Well-Proportioned Vision Card */}
        <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-blue-50/70 border-2 border-blue-200 shadow-sm relative overflow-hidden text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 tracking-tight leading-tight mb-2">
            Vision
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal">
            To establish a unified enterprise marketplace that empowers DFS teams to discover, scale, and maximize the value of internally engineered AI assets.
          </p>
        </div>

      </div>
    </section>
  );
}
