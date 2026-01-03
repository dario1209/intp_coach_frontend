'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import apiClient from '@/lib/apiClient';
import { useSessionPlan } from './useSessionPlan';
import { Message } from '@/types/coach';

export function useCoachChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const queryClient = useQueryClient();
  const { addToHistory } = useSessionPlan();
  
  const mutation = useMutation({
    mutationFn: (newMessage: string) => 
      apiClient.coachChat([{ role: 'user', content: newMessage }]),
    onMutate: async (newMessage) => {
      // Optimistic update
      const optimisticMessage: Message = { role: 'user', content: newMessage };
      setMessages(prev => [...prev, optimisticMessage]);
      
      await queryClient.cancelQueries({ queryKey: ['chat'] });
      
      const previousMessages = queryClient.getQueryData<Message[]>(['chat']);
      queryClient.setQueryData(['chat'], (old: Message[] | undefined) => 
        old ? [...old, optimisticMessage] : [optimisticMessage]
      );
      
      return { previousMessages };
    },
    onError: (err, newMessage, context) => {
      console.error(err);
      setMessages(prev => prev.filter(m => m.content !== newMessage));
      if (context?.previousMessages) {
        queryClient.setQueryData(['chat'], context.previousMessages);
      }
    },
    onSuccess: (data) => {
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: data.response || 'No response received' 
      };
      setMessages(prev => [...prev, assistantMessage]);
      addToHistory(assistantMessage);
    },
  });

  const sendMessage = (message: string) => {
    mutation.mutate(message);
  };

  return {
    messages,
    sendMessage,
    isLoading: mutation.isPending,
    error: mutation.error?.message,
  };
}
