'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCoachChat } from '@/hooks/useCoachChat';

export default function InputBar() {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useCoachChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border-t border-slate-200 bg-white/50">
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your coach... (e.g., 'Help me debug my focus system')"
          className="flex-1 px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-deco-gold focus:border-transparent outline-none resize-none placeholder-slate-500 text-lg leading-relaxed"
          disabled={isLoading}
          rows={1}
          autoComplete="off"
        />
        <Button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="w-14 h-14 p-0 bg-gradient-to-r from-deco-gold to-deco-bronze hover:from-deco-bronze hover:to-deco-gold shadow-deco-glow border-0 rounded-2xl"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
}
