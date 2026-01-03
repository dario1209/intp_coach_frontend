export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    isLoading?: boolean;
  }
  
  export interface CoachResponse {
    response: string;
    metadata?: {
      model: string;
      tokens: number;
    };
  }
  
  export interface Experiment {
    id: string;
    hypothesis: string;
    metrics: Array<string>;
    status: 'running' | 'completed' | 'failed';
  }
  