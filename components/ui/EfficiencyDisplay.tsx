'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Zap, Sun } from 'lucide-react';

interface EfficiencyDisplayProps {
  isTandem: boolean;
  currentFlow: number;
  isAnimating: boolean;
}

export default function EfficiencyDisplay({ isTandem, currentFlow, isAnimating }: EfficiencyDisplayProps) {
  const maxEfficiency = isTandem ? 15 : 8;
  const currentEfficiency = isAnimating ? (currentFlow * maxEfficiency * 100) : 0;
  const power = isAnimating ? (currentFlow * 100) : 0;

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-sm flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">Efficiency</span>
            <span className="text-white">{currentEfficiency.toFixed(1)}%</span>
          </div>
          <Progress 
            value={(currentEfficiency / maxEfficiency) * 100} 
            className="h-2"
          />
          <div className="text-xs text-gray-400 mt-1">
            Max: {maxEfficiency}% ({isTandem ? 'Tandem' : 'Single'})
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300 flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Power Output
            </span>
            <span className="text-white">{power.toFixed(1)} mW</span>
          </div>
          <Progress 
            value={Math.min(power, 100)} 
            className="h-2"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300 flex items-center gap-1">
              <Sun className="w-3 h-3" />
              Light Utilization
            </span>
            <span className="text-white">
              {isTandem ? '400-800nm' : '500-800nm'}
            </span>
          </div>
          <div className="flex gap-1">
            <div className={`h-2 flex-1 rounded ${isTandem ? 'bg-blue-400' : 'bg-gray-600'}`} />
            <div className="h-2 flex-1 bg-green-400 rounded" />
            <div className="h-2 flex-1 bg-red-400 rounded" />
          </div>
          <div className="text-xs text-gray-400 mt-1 text-center">
            Visible + Near-IR Spectrum
          </div>
        </div>
      </CardContent>
    </Card>
  );
}