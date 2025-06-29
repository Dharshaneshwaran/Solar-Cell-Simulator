'use client';

import React from 'react';

interface LightAnimationProps {
  isTandem: boolean;
}

export default function LightAnimation({ isTandem }: LightAnimationProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Sunlight rays */}
      <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-yellow-200 to-transparent animate-pulse" />
      <div className="absolute top-0 left-2/4 w-1 h-20 bg-gradient-to-b from-yellow-300 to-transparent animate-pulse delay-200" />
      <div className="absolute top-0 left-3/4 w-1 h-20 bg-gradient-to-b from-yellow-200 to-transparent animate-pulse delay-400" />

      {/* Photon particles */}
      <div className="absolute top-0 left-1/3">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDuration: '1.5s' }} />
      </div>
      <div className="absolute top-0 left-1/2 delay-300">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDuration: '1.8s' }} />
      </div>
      <div className="absolute top-0 left-2/3 delay-600">
        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDuration: '2s' }} />
      </div>

      {/* Absorption indicators */}
      {isTandem && (
        <>
          <div className="absolute top-24 left-1/3 w-4 h-4 bg-blue-400/50 rounded-full animate-ping" />
          <div className="absolute top-36 left-2/3 w-4 h-4 bg-purple-400/50 rounded-full animate-ping delay-200" />
        </>
      )}
      
      <div className={`absolute ${isTandem ? 'top-60' : 'top-32'} left-1/2 w-4 h-4 bg-red-400/50 rounded-full animate-ping delay-400`} />
      <div className={`absolute ${isTandem ? 'top-72' : 'top-44'} left-1/4 w-4 h-4 bg-orange-400/50 rounded-full animate-ping delay-600`} />

      {/* Exciton generation sparkles */}
      <div className="absolute top-20 left-1/4 w-1 h-1 bg-white animate-pulse" />
      <div className="absolute top-32 right-1/4 w-1 h-1 bg-white animate-pulse delay-100" />
      <div className="absolute top-44 left-1/3 w-1 h-1 bg-white animate-pulse delay-200" />
    </div>
  );
}