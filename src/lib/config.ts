export const config = {
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
      model: process.env.NEXT_PUBLIC_PERPLEXITY_MODEL || 'sonar-pro',
    },
    features: {
      streaming: true,
      experiments: true,
    },
  } as const;
  