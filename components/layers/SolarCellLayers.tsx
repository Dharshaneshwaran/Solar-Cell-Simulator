'use client';

import React from 'react';

interface SolarCellLayersProps {
  isTandem: boolean;
  isAnimating: boolean;
}

export default function SolarCellLayers({ isTandem, isAnimating }: SolarCellLayersProps) {
  const layerHeight = isTandem ? 60 : 80;
  const totalLayers = isTandem ? 7 : 4;
  
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <div 
        className="relative w-80 transition-all duration-500"
        style={{ height: `${totalLayers * layerHeight}px` }}
      >
        {/* Top Electrode */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 border border-gray-400 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-white/60" />
        </div>

        {isTandem && (
          <>
            {/* Wide Bandgap Donor Layer */}
            <div 
              className="absolute inset-x-0 bg-blue-400/40 border border-blue-300/50 backdrop-blur-sm transition-all duration-300"
              style={{ top: '20px', height: `${layerHeight}px` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-blue-600/20" />
              {isAnimating && (
                <div className="absolute inset-0 bg-blue-400/20 animate-pulse" />
              )}
            </div>

            {/* NFA Acceptor 1 */}
            <div 
              className="absolute inset-x-0 bg-purple-400/40 border border-purple-300/50 backdrop-blur-sm"
              style={{ top: `${20 + layerHeight}px`, height: `${layerHeight}px` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-300/20 to-purple-600/20" />
              {isAnimating && (
                <div className="absolute inset-0 bg-purple-400/20 animate-pulse" />
              )}
            </div>

            {/* Interconnect Layer */}
            <div 
              className="absolute inset-x-0 bg-gray-400/60 border border-gray-300/70"
              style={{ top: `${20 + layerHeight * 2}px`, height: '20px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200/30 to-gray-500/30" />
            </div>
          </>
        )}

        {/* Low Bandgap Donor Layer */}
        <div 
          className="absolute inset-x-0 bg-red-400/40 border border-red-300/50 backdrop-blur-sm"
          style={{ 
            top: isTandem ? `${40 + layerHeight * 2}px` : '20px',
            height: `${layerHeight}px` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-red-300/20 to-red-600/20" />
          {isAnimating && (
            <div className="absolute inset-0 bg-red-400/20 animate-pulse" />
          )}
        </div>

        {/* NFA Acceptor 2 */}
        <div 
          className="absolute inset-x-0 bg-orange-400/40 border border-orange-300/50 backdrop-blur-sm"
          style={{ 
            top: isTandem ? `${40 + layerHeight * 3}px` : `${20 + layerHeight}px`,
            height: `${layerHeight}px` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300/20 to-orange-600/20" />
          {isAnimating && (
            <div className="absolute inset-0 bg-orange-400/20 animate-pulse" />
          )}
        </div>

        {/* Bottom Electrode */}
        <div 
          className="absolute inset-x-0 h-4 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 border border-gray-500 shadow-lg"
          style={{ 
            top: isTandem ? `${40 + layerHeight * 4}px` : `${20 + layerHeight * 2}px`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>

        {/* Substrate */}
        <div 
          className="absolute inset-x-0 h-8 bg-gradient-to-b from-gray-100/20 to-gray-300/40 border border-gray-400/50 backdrop-blur-sm"
          style={{ 
            top: isTandem ? `${60 + layerHeight * 4}px` : `${40 + layerHeight * 2}px`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Wires */}
        <div className="absolute -left-8 top-0 w-8 h-2 bg-yellow-400 shadow-md" />
        <div className="absolute -left-8 top-0 w-2 h-8 bg-yellow-400 shadow-md" />
        
        <div 
          className="absolute -left-8 w-8 h-2 bg-yellow-400 shadow-md"
          style={{ 
            top: isTandem ? `${40 + layerHeight * 4}px` : `${20 + layerHeight * 2}px`
          }}
        />
        <div 
          className="absolute -left-8 w-2 bg-yellow-400 shadow-md"
          style={{ 
            top: isTandem ? `${40 + layerHeight * 4}px` : `${20 + layerHeight * 2}px`,
            height: '32px'
          }}
        />
      </div>
    </div>
  );
}