import React from "react";

export default function MulticityThemeWrapper({ title, subtitle, children }) {
  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg_cropped.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay + Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-[#1a0a05]/80"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#703612]/40 rounded-full blur-3xl animate-pulse-slow top-1/3 left-1/2 -translate-x-1/2"></div>

      {/* Header */}
      <header className="relative z-10 text-center pt-24 pb-16">
        <h2 className="font-[SFIronsides] text-7xl md:text-8xl text-[#ffcc7a] drop-shadow-[0_0_15px_#703612] animate-slide-down">
          ANWESHA’26
        </h2>
        <h1 className="font-[SFIronsides] text-[10vw] md:text-[8vw] text-[#ffcc7a] tracking-[0.1em] mt-2 animate-fade-in">
          MULTICITY
        </h1>
        {title && (
          <h3 className="text-4xl md:text-5xl mt-10 font-bold text-[#ffcc7a] animate-fade-in-delayed">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-gray-300 mt-2 italic animate-fade-in-delayed">
            {subtitle}
          </p>
        )}
      </header>

      {/* Content Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* Wrap each child section in the same style for consistency */}
        <div className="bg-black/60 backdrop-blur-lg border border-[#ffcc7a]/10 rounded-2xl p-8 shadow-lg">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-400 py-6 border-t border-gray-700 mt-10 text-sm">
        © 2026 Anwesha Multicity | IIT Patna
      </footer>
    </div>
  );
}
