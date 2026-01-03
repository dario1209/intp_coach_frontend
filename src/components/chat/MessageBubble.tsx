import { Message } from '@/types/coach';
import { Brain, User } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-2xl ${isUser ? 'order-2' : 'order-1'}`}>
        <Card className={`p-6 rounded-3xl shadow-lg ${
          isUser 
            ? 'bg-gradient-to-r from-deco-gold to-deco-bronze text-deco-navy border-deco-gold/50' 
            : 'bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200/50'
        }`}>
          {message.isLoading ? (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]" />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
            </div>
          ) : (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          )}
        </Card>
      </div>
      
      <div className={`flex-shrink-0 w-12 h-12 ml-4 ${isUser ? 'order-1 ml-0 mr-4' : 'order-2 mr-0 ml-4'}`}>
        {isUser ? (
          <div className="w-12 h-12 bg-gradient-to-br from-deco-navy to-slate-800 rounded-2xl flex items-center justify-center shadow-deco-glow">
            <User className="w-6 h-6 text-deco-gold" />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-deco-teal to-deco-navy rounded-2xl flex items-center justify-center shadow-deco-glow">
            <Brain className="w-6 h-6 text-deco-cream" />
          </div>
        )}
      </div>
    </div>
  );
}
