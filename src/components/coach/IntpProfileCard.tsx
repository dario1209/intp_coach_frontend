import { Card } from '@/components/ui/Card';
import { Brain, Zap } from 'lucide-react';
import { useSessionPlan } from '@/hooks/useSessionPlan';

export default function IntpProfileCard() {
  const { profile, experiments } = useSessionPlan();

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-bl-2xl -mr-12 -mt-12 opacity-50" />
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-deco text-slate-900 mb-1">Your INTP Profile</h3>
          <p className="text-sm text-slate-600">Systems thinker • Experimenter • Deep focus</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
          <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <span className="text-sm">Current mode: {profile.mode || 'Exploration'}</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="text-sm font-medium">{profile.activeExperiment || 'No experiment active'}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="text-center p-3 bg-white/50 rounded-lg">
          <div className="text-2xl font-bold text-emerald-600">{profile.focusScore || '85%'}</div>
          <div className="text-slate-600 uppercase tracking-wide">Focus</div>
        </div>
        <div className="text-center p-3 bg-white/50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{experiments || 3}</div>
          <div className="text-slate-600 uppercase tracking-wide">Active</div>
        </div>
      </div>
    </Card>
  );
}
