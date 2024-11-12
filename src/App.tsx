import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ResumeEditor } from './components/ResumeEditor';
import { AIFeedback } from './components/AIFeedback';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <ResumeEditor />
            <AIFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;