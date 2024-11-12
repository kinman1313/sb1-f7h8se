import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8" />
          <h1 className="text-2xl font-bold">ResumeAI</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg">
            <FileText className="h-5 w-5" />
            <span>New Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};