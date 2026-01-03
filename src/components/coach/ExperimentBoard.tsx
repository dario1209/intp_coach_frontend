import { Card } from '@/components/ui/Card';
import { useSessionPlan } from '@/hooks/useSessionPlan';

export default function ExperimentBoard() {
  const { currentExperiment } = useSessionPlan();

  return (
    <div className="space-y-3">
      <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/50">
        <h4 className="font-medium text-sm text-emerald-900 mb-1">Hypothesis</h4>
        <p className="text-xs text-emerald-800 leading-relaxed">
          {currentExperiment?.hypothesis || 'Pomodoro + context switching penalty will increase deep work by 40%'}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-xs">
        <Card className="p-3 h-20 flex flex-col justify-between bg-blue-50/50 border-blue-200/50">
          <span className="text-slate-600 uppercase tracking-wide text-xs">Day 3</span>
          <span className="font-mono text-lg font-bold text-blue-900">2h 47m</span>
        </Card>
        <Card className="p-3 h-20 flex flex-col justify-between bg-orange-50/50 border-orange-200/50">
          <span className="text-slate-600 uppercase tracking-wide text-xs">Avg Focus</span>
          <span className="font-mono text-lg font-bold text-orange-900">52 min</span>
        </Card>
      </div>
      
      <div className="text-center pt-2">
        <span className="text-xs text-slate-500">+12% from baseline</span>
      </div>
    </div>
  );
}
