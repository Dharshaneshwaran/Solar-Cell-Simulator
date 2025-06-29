'use client';

import React, { useState, useEffect } from 'react';
import { Info, Zap, Sun, Battery, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import SolarCellLayers from './layers/SolarCellLayers';
import LightAnimation from './animations/LightAnimation';
import CurrentFlowAnimation from './animations/CurrentFlowAnimation';
import EducationalModal from './ui/EducationalModal';
import EfficiencyDisplay from './ui/EfficiencyDisplay';

export default function SolarCellSimulation() {
  const [isTandem, setIsTandem] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showEducational, setShowEducational] = useState(false);
  const [currentFlow, setCurrentFlow] = useState(0);
  const [ledPower, setLedPower] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        const efficiency = isTandem ? 0.15 : 0.08; // 15% vs 8% efficiency
        const lightIntensity = 0.8 + Math.random() * 0.4; // Simulate varying light
        const power = efficiency * lightIntensity;
        
        setCurrentFlow(power);
        setLedPower(power);
      }, 100);

      return () => clearInterval(interval);
    } else {
      setCurrentFlow(0);
      setLedPower(0);
    }
  }, [isAnimating, isTandem]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
      {/* Control Panel */}
      <div className="lg:w-80 space-y-6">
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Configuration</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${!isTandem ? 'text-white' : 'text-gray-400'}`}>
                  Single
                </span>
                <Switch
                  checked={isTandem}
                  onCheckedChange={setIsTandem}
                />
                <span className={`text-sm ${isTandem ? 'text-white' : 'text-gray-400'}`}>
                  Tandem
                </span>
              </div>
            </div>
            
            <Button
              onClick={() => setIsAnimating(!isAnimating)}
              className={`w-full ${
                isAnimating 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <Sun className="w-4 h-4 mr-2" />
              {isAnimating ? 'Stop Simulation' : 'Start Simulation'}
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowEducational(true)}
              className="w-full border-white/30 text-white hover:bg-white/10"
            >
              <Info className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </CardContent>
        </Card>

        <EfficiencyDisplay 
          isTandem={isTandem}
          currentFlow={currentFlow}
          isAnimating={isAnimating}
        />

        {/* Virtual Circuit */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-sm">Virtual Circuit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-4 p-4">
              <Battery className="w-8 h-8 text-yellow-400" />
              <div className="flex-1 h-1 bg-yellow-400/30 relative">
                {isAnimating && (
                  <div 
                    className="absolute h-full bg-yellow-400 animate-pulse"
                    style={{ width: `${Math.min(currentFlow * 100, 100)}%` }}
                  />
                )}
              </div>
              <div className="relative">
                <Lightbulb 
                  className={`w-8 h-8 transition-colors duration-300 ${
                    ledPower > 0.05 ? 'text-yellow-300' : 'text-gray-500'
                  }`} 
                />
                {ledPower > 0.05 && (
                  <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-20" />
                )}
              </div>
            </div>
            <div className="text-center text-xs text-gray-300 mt-2">
              Current: {(currentFlow * 100).toFixed(1)} mA
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Simulation Area */}
      <div className="flex-1">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 min-h-[600px]">
          <CardContent className="p-8">
            <div className="relative w-full h-full">
              {/* Layer Labels */}
              <div className="absolute left-0 top-0 bottom-0 w-32 flex flex-col justify-center space-y-8 text-xs text-white z-10">
                <div className="text-right pr-4">
                  <Badge variant="secondary" className="text-xs">Top Electrode</Badge>
                </div>
                {isTandem && (
                  <>
                    <div className="text-right pr-4">
                      <Badge className="bg-blue-500/20 text-blue-200 text-xs">Wide Bandgap Donor</Badge>
                    </div>
                    <div className="text-right pr-4">
                      <Badge className="bg-purple-500/20 text-purple-200 text-xs">NFA Acceptor 1</Badge>
                    </div>
                    <div className="text-right pr-4">
                      <Badge className="bg-gray-500/20 text-gray-200 text-xs">Interconnect</Badge>
                    </div>
                  </>
                )}
                <div className="text-right pr-4">
                  <Badge className="bg-red-500/20 text-red-200 text-xs">Low Bandgap Donor</Badge>
                </div>
                <div className="text-right pr-4">
                  <Badge className="bg-orange-500/20 text-orange-200 text-xs">NFA Acceptor 2</Badge>
                </div>
                <div className="text-right pr-4">
                  <Badge variant="secondary" className="text-xs">Bottom Electrode</Badge>
                </div>
              </div>

              {/* Solar Cell Visualization */}
              <div className="ml-32 relative h-full">
                <SolarCellLayers 
                  isTandem={isTandem}
                  isAnimating={isAnimating}
                />
                
                {/* Light Animation */}
                {isAnimating && (
                  <LightAnimation isTandem={isTandem} />
                )}
                
                {/* Current Flow Animation */}
                {isAnimating && (
                  <CurrentFlowAnimation currentFlow={currentFlow} />
                )}

                {/* Wavelength Indicators */}
                <div className="absolute -left-16 top-1/4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs text-blue-300">400-500nm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-300">500-600nm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-xs text-red-300">600-800nm</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Educational Modal */}
      <EducationalModal 
        open={showEducational}
        onOpenChange={setShowEducational}
        isTandem={isTandem}
      />
    </div>
  );
}