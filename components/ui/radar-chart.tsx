'use client'

import React from 'react'

type RadarMetric = {
  label: string
  value: number // 0-100
}

export interface RadarChartProps {
  metrics: RadarMetric[]
  levels?: number
  size?: number
  accentClassName?: string
  centerValue?: number
}

export function RadarChart({
  metrics,
  levels = 5,
  size = 320,
  accentClassName = 'text-green-400',
  centerValue,
}: RadarChartProps) {
  const radius = size / 2 - 12
  const angleStep = (Math.PI * 2) / metrics.length

  const toPoint = (idx: number, pct: number) => {
    const angle = -Math.PI / 2 + angleStep * idx
    const r = radius * pct
    const x = size / 2 + Math.cos(angle) * r
    const y = size / 2 + Math.sin(angle) * r
    return `${x},${y}`
  }

  const ringPaths = Array.from({ length: levels }, (_, i) => {
    const pct = (i + 1) / levels
    const points = metrics.map((_, idx) => toPoint(idx, pct)).join(' ')
    return points
  })

  const polygonPoints = metrics
    .map((m, idx) => toPoint(idx, Math.max(0, Math.min(1, m.value / 100))))
    .join(' ')

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        {/* Rings */}
        {ringPaths.map((points, i) => (
          <polygon
            key={i}
            points={points}
            className="fill-transparent"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        ))}

        {/* Spokes */}
        {metrics.map((_, idx) => {
          const [x, y] = toPoint(idx, 1).split(',').map(Number)
          return (
            <line
              key={idx}
              x1={size / 2}
              y1={size / 2}
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1}
            />
          )
        })}

        {/* Filled polygon */}
        <defs>
          <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <polygon points={polygonPoints} fill="url(#radarGradient)" opacity={0.35} />
        <polygon points={polygonPoints} fill="none" stroke="#22c55e" strokeWidth={3} />

        {/* Center ring */}
        <circle cx={size / 2} cy={size / 2} r={size * 0.12} fill="#0b0b17" />
        <circle cx={size / 2} cy={size / 2} r={size * 0.12} fill="none" stroke="#22c55e" strokeWidth={4} />
        {typeof centerValue === 'number' && (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white"
            fontSize={size * 0.14}
            fontWeight={700}
          >
            {centerValue}
          </text>
        )}
      </svg>

      {/* Subtle glow */}
      <div className={`pointer-events-none absolute inset-0 blur-2xl opacity-40 ${accentClassName}`} style={{ boxShadow: '0 0 100px 30px currentColor' }} />
    </div>
  )
}


