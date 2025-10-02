import { Background, BackgroundBlur, BackgroundGrid, BackgroundOrbs } from './background'

export function PageBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      
      {/* Glowing circular orbs - main feature */}
      <BackgroundOrbs className="opacity-90" />
      
      {/* Main gradients */}
      <Background 
        variant="gradient-1" 
        className="opacity-20 translate-x-1/4" 
      />
      <Background 
        variant="gradient-2" 
        className="opacity-20 -translate-x-1/4 translate-y-1/4" 
      />
      <Background 
        variant="gradient-3" 
        className="opacity-20 translate-y-1/2" 
      />
      
      {/* Patterns */}
      <BackgroundGrid className="opacity-10" />
      <Background 
        variant="dots" 
        className="opacity-5" 
      />
      
      {/* Blur overlay */}
      <BackgroundBlur className="opacity-60" />
    </div>
  )
}
