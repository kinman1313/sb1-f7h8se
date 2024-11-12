import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

export const ResumeEditor = () => {
  const [content, setContent] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async () => {
    setIsOptimizing(true);
    // AI optimization logic would go here
    setTimeout(() => setIsOptimizing(false), 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Resume Content</h2>
          <button
            onClick={handleOptimize}
            disabled={isOptimizing || !content}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition
              ${isOptimizing || !content 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            <Wand2 className="h-5 w-5" />
            <span>{isOptimizing ? 'Optimizing...' : 'Optimize with AI'}</span>
          </button>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste your resume content here..."
          className="w-full h-[calc(100vh-300px)] p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};