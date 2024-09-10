'use client';

import React from 'react';
import AIChat from '@/components/ui/AIChat';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-white">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Thomas-AI</h1>
        <p className="mt-2 text-gray-400">Your AI assistant</p>
      </header>
      
      <main className="w-full max-w-2xl">
        <AIChat />
      </main>
    </div>
  );
}
