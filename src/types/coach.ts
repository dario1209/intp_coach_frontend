export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

export interface CoachChatResponse {
  response: string;
}

export interface SessionPlan {
  goals: string[];
  tasks: Task[];
  completed: boolean;
}

export interface Task {
  id: string;
  description: string;
  completed: boolean;
  priority?: 'low' | 'medium' | 'high';
}
