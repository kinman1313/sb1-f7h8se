import React from 'react';
import { MessageSquare, ThumbsUp, AlertCircle } from 'lucide-react';

export const AIFeedback = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2 text-indigo-600" />
        AI Feedback
      </h3>
      <div className="space-y-4">
        <FeedbackItem
          type="positive"
          message="Strong action verbs and quantifiable achievements"
        />
        <FeedbackItem
          type="suggestion"
          message="Consider adding more technical skills relevant to the position"
        />
        <FeedbackItem
          type="positive"
          message="Clear and concise professional summary"
        />
      </div>
    </div>
  );
};

const FeedbackItem = ({ type, message }: { type: 'positive' | 'suggestion', message: string }) => {
  const Icon = type === 'positive' ? ThumbsUp : AlertCircle;
  const colors = type === 'positive' 
    ? 'text-green-700 bg-green-50' 
    : 'text-amber-700 bg-amber-50';

  return (
    <div className={`flex items-start space-x-3 p-3 rounded-lg ${colors}`}>
      <Icon className="h-5 w-5 mt-0.5" />
      <p className="text-sm">{message}</p>
    </div>
  );
};