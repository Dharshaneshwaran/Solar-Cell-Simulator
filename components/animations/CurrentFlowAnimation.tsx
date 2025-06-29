'use client';

import React from 'react';

interface CurrentFlowAnimationProps {
  currentFlow: number;
}

export default function CurrentFlowAnimation({ currentFlow }: CurrentFlowAnimationProps) {
  if (currentFlow === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Electron flow animation */}
      <div className="absolute top-1/2 left-0 right-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`electron-${i}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 60}px`,
              animationDelay: `${i * 200}ms`,
              opacity: Math.min(currentFlow * 5, 1),
            }}
          />
        ))}
      </div>

      {/* Hole flow animation (opposite direction) */}
      <div className="absolute top-2/3 left-0 right-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`hole-${i}`}
            className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse"
            style={{
              right: `${20 + i * 70}px`,
              animationDelay: `${i * 250}ms`,
              opacity: Math.min(currentFlow * 4, 1),
            }}
          />
        ))}
      </div>

      {/* Current flow arrows */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div 
          className="text-yellow-400 text-xl animate-pulse"
          style={{ opacity: Math.min(currentFlow * 3, 1) }}
        >
          →
        </div>
      </div>
      
      <div className="absolute right-0 bottom-1/3 transform translate-y-1/2">
        <div 
          className="text-yellow-400 text-xl animate-pulse delay-200"
          style={{ opacity: Math.min(currentFlow * 3, 1) }}
        >
          ←
        </div>
      </div>
    </div>
  );
}