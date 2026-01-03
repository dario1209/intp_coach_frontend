import { TrendingUp, Clock, Zap } from 'lucide-react';

export default function SessionStats() {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="group flex flex-col items-center p-3 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 hover:from-slate-100 transition-all cursor-default">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">4.2</div>
        <div className="text-xs text-slate-500 uppercase tracking-wide">Productivity Score</div>
      </div>
      
      <div className="group flex flex-col items-center p-3 rounded-xl bg-gradient-to-b from-emerald-50 to-emerald-100 hover:from-emerald-100 transition-all cursor-default">
        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">1h 42m</div>
        <div className="text-xs text-slate-500 uppercase tracking-wide">Deep Work</div>
      </div>
      
      <div className="group flex flex-col items-center p-3 rounded-xl bg-gradient-to-b from-amber-50 to-orange-100 hover:from-amber-100 transition-all cursor-default">
        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
        <div className="text-xs text-slate-500 uppercase tracking-wide">Tasks Done</div>
      </div>
    </div>
  );
}
