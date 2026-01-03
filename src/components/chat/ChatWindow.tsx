'use client';

import { useCoachChat } from '@/hooks/useCoachChat';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import { Card } from '@/components/ui/Card';

export default function ChatWindow() {
  const { messages, isLoading, error } = useCoachChat();

  return (
    <Card className="h-full flex flex-col bg-white/70 backdrop-blur-xl border-deco-gold/20 shadow-deco-glow">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <div className="w-24 h-24 mx-auto mb-4 bg-deco-gold/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <h2 className="text-2xl font-deco mb-2 text-deco-navy">INTP Coach Ready</h2>
            <p>Ask about your productivity experiments, goals, or workflow debugging.</p>
          </div>
        )}
        
        {messages.map((message, idx) => (
          <MessageBubble key={idx} message={message} />
        ))}
        
        {isLoading && (
          <MessageBubble message={{ role: 'assistant', content: 'Thinking...', isLoading: true }} />
        )}
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-deco text-red-800 text-sm">
            {error}
          </div>
        )}
      </div>
      
      <InputBar />
    </Card>
  );
}
