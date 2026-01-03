'use client';

import { Button } from '@/components/ui/Button';
import { 
  Brain, 
  Target, 
  Clock, 
  Zap,
  Settings 
} from 'lucide-react';
import { useSessionPlan } from '@/hooks/useSessionPlan';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { currentExperiment, activeGoal } = useSessionPlan();

  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-deco-navy/95 backdrop-blur-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-deco-gold rounded-deco-lg flex items-center justify-center">
            <Brain className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-deco text-deco-cream">INTP Coach</h1>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-deco-cream hover:bg-deco-gold/20">
            <Target className="w-5 h-5 mr-3" />
            Current Goal: {activeGoal || 'Set a goal'}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-deco-cream hover:bg-deco-gold/20">
            <Clock className="w-5 h-5 mr-3" />
            Session Timer
          </Button>
          <Button variant="ghost" className="w-full justify-start text-deco-cream hover:bg-deco-gold/20">
            <Zap className="w-5 h-5 mr-3" />
            Quick Prompts
          </Button>
        </nav>
        
        <Button variant="outline" className="w-full text-deco-gold border-deco-gold hover:bg-deco-gold hover:text-deco-navy">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Button>
      </div>
    </div>
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
        onClick={onClose}
      />
    )}
  );
}
