'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from '@/components/chat/ChatWindow';
import RightPanel from './RightPanel';
import IntpProfileCard from '@/components/coach/IntpProfileCard';

export default function Shell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] h-[calc(100vh-4rem)] gap-6 lg:gap-8 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex flex-col">
        <div className="flex-1 overflow-hidden">
          <ChatWindow />
        </div>
      </div>
      
      <div className="hidden lg:block space-y-6">
        <IntpProfileCard />
        <RightPanel />
      </div>
      
      <button
        className="lg:hidden fixed bottom-8 right-8 z-50 p-4 bg-deco-gold text-deco-navy rounded-full shadow-deco-glow"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>
    </div>
  );
}
