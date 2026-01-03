export const config = {
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
      model: process.env.NEXT_PUBLIC_PERPLEXITY_MODEL || 'llama-3.1-sonar-large-128k-online',
    },
    features: {
      streaming: true,
      experiments: true,
    },
  } as const;
  