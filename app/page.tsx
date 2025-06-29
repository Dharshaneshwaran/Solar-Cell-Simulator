'use client';

import SolarCellSimulation from '@/components/SolarCellSimulation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Tandem Organic Solar Cell Simulator
          </h1>
          <p className="text-lg text-gray-300">
            Interactive visualization of non-fullerene acceptor tandem photovoltaics
          </p>
        </header>
        <SolarCellSimulation />
      </div>
    </div>
  );
}