import { Badge } from '@/components/ui/Badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useSessionPlan } from '@/hooks/useSessionPlan';

export default function GoalList() {
  const { goals } = useSessionPlan();

  const goalsExample = goals.length ? goals : [
    { id: 1, title: 'Build focus system v2', status: 'active' as const },
    { id: 2, title: 'Debug email distraction loop', status: 'pending' as const },
    { id: 3, title: 'Review weekly experiments', status: 'completed' as const },
  ];

  return (
    <div className="space-y-3">
      {goalsExample.map((goal) => (
        <div key={goal.id} className="flex items-center justify-between p-3 bg-white/50 hover:bg-white/70 rounded-xl transition-all group">
          <div className="flex items-center space-x-3">
            {goal.status === 'completed' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
            {goal.status === 'active' && <div className="w-5 h-5 bg-amber-400 rounded-full animate-pulse" />}
            {goal.status === 'pending' && <Clock className="w-5 h-5 text-slate-400" />}
            <span className="font-medium text-sm">{goal.title}</span>
          </div>
          <Badge variant={goal.status === 'completed' ? 'default' : 'secondary'}>
            {goal.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
