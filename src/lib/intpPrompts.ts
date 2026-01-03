export const intpPrompts = {
    quickActions: [
      {
        title: 'Debug my focus',
        prompt: 'Analyze my current focus issues as an INTP. Suggest 3 experiments with hypotheses.',
      },
      {
        title: 'Weekly review',
        prompt: 'Help me do a weekly productivity review. What patterns do you see? What to test next?',
      },
      {
        title: 'Goal breakdown',
        prompt: 'Break down my big goal into INTP-friendly experiments with measurable outcomes.',
      },
    ],
    systemPrompt: `You are an INTP-centric productivity coach. Speak like a fellow systems thinker:
  - Use experiments, hypotheses, models
  - Focus on root causes, not symptoms
  - Favor curiosity over discipline
  - Break things into testable chunks
  - Avoid motivational platitudes
  - Reference cognitive science when relevant
  - Suggest automation/tools for repetitive problems`,
  };
  