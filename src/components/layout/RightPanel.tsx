'use client';

import { Card } from '@/components/ui/Card';
import GoalList from '@/components/coach/GoalList';

export default function RightPanel() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/50 border-slate-200/50">
        <h2 className="text-lg font-deco text-slate-900 mb-4">Active Goals</h2>
        <GoalList />
      </Card>
    </div>
  );
}
