'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Zap, Sun, Layers, TrendingUp } from 'lucide-react';

interface EducationalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isTandem: boolean;
}

export default function EducationalModal({ open, onOpenChange, isTandem }: EducationalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white border-slate-600">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            {isTandem ? 'Tandem' : 'Single-Junction'} Organic Solar Cell Technology
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-400" />
              How It Works
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Organic solar cells convert sunlight into electricity using organic semiconductors. 
              {isTandem 
                ? ' Tandem cells stack multiple photoactive layers to capture different wavelengths of light, significantly improving efficiency.'
                : ' Single-junction cells use one photoactive layer to absorb light and generate current.'
              }
            </p>
          </div>

          {/* Layer Structure */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Layer Structure
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-300 border border-gray-400" />
                  <div>
                    <Badge variant="secondary" className="mb-1">Top Electrode (ITO)</Badge>
                    <p className="text-xs text-gray-400">Transparent conductor for light entry</p>
                  </div>
                </div>

                {isTandem && (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-400/60 border border-blue-300" />
                      <div>
                        <Badge className="bg-blue-500/20 text-blue-200 mb-1">Wide Bandgap Donor</Badge>
                        <p className="text-xs text-gray-400">Absorbs high-energy photons (400-500nm)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-400/60 border border-purple-300" />
                      <div>
                        <Badge className="bg-purple-500/20 text-purple-200 mb-1">NFA Acceptor 1</Badge>
                        <p className="text-xs text-gray-400">First electron acceptor layer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-400/60 border border-gray-300" />
                      <div>
                        <Badge className="bg-gray-500/20 text-gray-200 mb-1">Interconnect Layer</Badge>
                        <p className="text-xs text-gray-400">Connects front and back cells</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-400/60 border border-red-300" />
                  <div>
                    <Badge className="bg-red-500/20 text-red-200 mb-1">Low Bandgap Donor</Badge>
                    <p className="text-xs text-gray-400">Absorbs low-energy photons (600-800nm)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-400/60 border border-orange-300" />
                  <div>
                    <Badge className="bg-orange-500/20 text-orange-200 mb-1">NFA Acceptor 2</Badge>
                    <p className="text-xs text-gray-400">Second electron acceptor layer</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-600 border border-gray-500" />
                  <div>
                    <Badge variant="secondary" className="mb-1">Bottom Electrode (Al)</Badge>
                    <p className="text-xs text-gray-400">Metal electrode for current collection</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Advantages:</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{isTandem ? 'Higher efficiency (15%+)' : 'Simple structure (8%)'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sun className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span>{isTandem ? 'Broader spectrum absorption' : 'Single spectrum absorption'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Non-fullerene acceptors for better stability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Explanation */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              Energy Conversion Process
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sun className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-semibold mb-1">1. Light Absorption</h4>
                <p className="text-gray-400">Photons absorbed by organic semiconductors create excitons</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full" />
                </div>
                <h4 className="font-semibold mb-1">2. Charge Separation</h4>
                <p className="text-gray-400">Excitons split into electrons and holes at donor-acceptor interface</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold mb-1">3. Current Generation</h4>
                <p className="text-gray-400">Separated charges flow to electrodes, generating electricity</p>
              </div>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Performance Comparison</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Single-Junction Cell</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Efficiency: ~8%</li>
                  <li>• Spectral range: Limited to one bandgap</li>
                  <li>• Structure: Simple, lower cost</li>
                  <li>• Applications: Basic power needs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tandem Cell</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Efficiency: ~15%</li>
                  <li>• Spectral range: Multiple bandgaps</li>
                  <li>• Structure: Complex, higher performance</li>
                  <li>• Applications: High-efficiency systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}