'use client';

import { create } from 'zustand';

interface SessionPlan {
  profile: {
    mode: string;
    activeExperiment?: string;
    focusScore?: string;
  };
  goals: Array<{
    id: number;
    title: string;
    status: 'pending' | 'active' | 'completed';
  }>;
  currentExperiment?: {
    hypothesis: string;
  };
  experiments: number;
}

interface SessionStore extends SessionPlan {
  addToHistory: (message: { content: string }) => void;
}

export const useSessionPlan = create<SessionStore>((set, get) => ({
  profile: { mode: 'Exploration' },
  goals: [],
  experiments: 0,
  
  addToHistory: (message) => {
    // Parse coach responses to update session state
    const content = message.content.toLowerCase();
    set((state) => ({
      experiments: content.includes('experiment') ? state.experiments + 1 : state.experiments,
    }));
  },
}));
