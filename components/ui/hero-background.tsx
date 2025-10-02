import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Main dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950" />
      
      {/* Glowing Orbs - New Feature */}
      
      {/* Large central orb - top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] translate-x-1/4 -translate-y-1/4">
        <div className="absolute inset-0 bg-gradient-radial from-white/70 via-white/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-white/35 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-white/30 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Medium orb - left side */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] -translate-x-1/4">
        <div className="absolute inset-0 bg-gradient-radial from-white/65 via-white/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/55 via-white/30 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/45 via-white/25 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Medium orb - bottom center */}
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] -translate-x-1/2 translate-y-1/4">
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-white/32 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-white/27 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/40 via-white/22 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Small accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px]">
        <div className="absolute inset-0 bg-gradient-radial from-white/55 via-white/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/45 via-white/25 to-transparent rounded-full blur-xl scale-60" />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px]">
        <div className="absolute inset-0 bg-gradient-radial from-white/55 via-white/30 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/45 via-white/25 to-transparent rounded-full blur-xl scale-60" />
      </div>
      
      {/* Original central glow - reduced intensity */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
        {/* Blue glow around the circle - reduced */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-blue-600/30 rounded-full blur-3xl transform scale-125" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-cyan-300/15 to-blue-500/25 rounded-full blur-2xl transform scale-115" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 via-cyan-200/10 to-blue-400/20 rounded-full blur-xl transform scale-110" />
      </div>
      
      {/* Subtle grid overlay with blue tint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Glowing circular ring outline (clearly visible) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative w-[520px] h-[520px] md:w-[640px] md:h-[640px] lg:w-[760px] lg:h-[760px] rounded-full"
        >
          {/* Hollow ring via mask and a soft outer glow */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300/70 via-cyan-300/70 to-blue-300/70 [mask-image:radial-gradient(closest-side,transparent_68%,black_70%)] shadow-[0_0_80px_20px_rgba(59,130,246,0.25)]"
          />
          {/* Inner subtle bloom */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400/25 via-cyan-300/15 to-transparent blur-2xl"
          />
        </div>
      </div>

      {/* Animated light rays - subtle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute inset-0 bg-gradient-conic from-blue-400/10 via-transparent to-blue-400/10 animate-spin-slow opacity-40" />
      </div>
    </div>
  );
}
