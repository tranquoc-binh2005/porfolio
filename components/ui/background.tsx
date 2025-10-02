import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "gradient-1" | "gradient-2" | "gradient-3" | "dots" | "lines";
  intensity?: "light" | "medium" | "strong";
}

export const Background = ({
  variant = "gradient-1",
  intensity = "medium",
  className,
  ...props
}: BackgroundProps) => {
  const baseStyles = "absolute inset-0 -z-10";
  
  const gradientStyles = {
    "gradient-1": "bg-gradient-to-tr from-purple-500/30 via-transparent to-blue-500/30",
    "gradient-2": "bg-gradient-to-br from-pink-500/30 via-transparent to-indigo-500/30",
    "gradient-3": "bg-gradient-to-r from-cyan-500/30 via-transparent to-violet-500/30",
  };

  const intensityStyles = {
    light: "opacity-30",
    medium: "opacity-50",
    strong: "opacity-70",
  };

  const patternStyles = {
    dots: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
    lines: "[background:repeating-linear-gradient(45deg,#f3f4f6_0,#f3f4f6_1px,transparent_1px,transparent_8px)]",
  };

  const variantStyle = variant.includes("gradient")
    ? gradientStyles[variant as keyof typeof gradientStyles]
    : patternStyles[variant as keyof typeof patternStyles];

  return (
    <div
      className={cn(
        baseStyles,
        variantStyle,
        intensityStyles[intensity],
        "blur-3xl",
        className
      )}
      {...props}
    />
  );
};

export const BackgroundBlur = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 backdrop-blur-[100px] bg-white/5",
        className
      )}
      {...props}
    />
  );
};

export const BackgroundGrid = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10",
        "[background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
        "[background-size:64px_64px]",
        className
      )}
      {...props}
    />
  );
};

export const BackgroundOrbs = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Large central orb - top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3">
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/30 via-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-300/20 via-blue-400/15 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-blue-200/10 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Medium orb - left side */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] -translate-x-1/4">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/25 via-violet-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-indigo-300/15 via-purple-400/10 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/8 via-purple-200/8 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Medium orb - bottom center */}
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 translate-y-1/3">
        <div className="absolute inset-0 bg-gradient-radial from-emerald-400/25 via-teal-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-300/15 via-emerald-400/10 to-transparent rounded-full blur-2xl scale-75" />
        <div className="absolute inset-0 bg-gradient-radial from-white/8 via-emerald-200/8 to-transparent rounded-full blur-xl scale-50" />
      </div>

      {/* Small orb - top left */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px]">
        <div className="absolute inset-0 bg-gradient-radial from-rose-400/20 via-pink-500/12 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/6 via-rose-200/6 to-transparent rounded-full blur-xl scale-60" />
      </div>

      {/* Small orb - bottom right */}
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px]">
        <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-yellow-500/12 to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-gradient-radial from-white/6 via-amber-200/6 to-transparent rounded-full blur-xl scale-60" />
      </div>

      {/* Tiny accent orbs */}
      <div className="absolute top-2/3 left-1/6 w-[150px] h-[150px]">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-400/15 via-blue-500/8 to-transparent rounded-full blur-xl" />
      </div>

      <div className="absolute top-1/6 right-1/3 w-[180px] h-[180px]">
        <div className="absolute inset-0 bg-gradient-radial from-violet-400/15 via-purple-500/8 to-transparent rounded-full blur-xl" />
      </div>
    </div>
  );
};
