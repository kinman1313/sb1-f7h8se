import React from 'react';
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Award,
  Languages,
  Code
} from 'lucide-react';

const optimizationOptions = [
  { icon: BookOpen, label: 'Professional Summary' },
  { icon: Briefcase, label: 'Work Experience' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Award, label: 'Skills & Certifications' },
  { icon: Languages, label: 'Language Optimization' },
  { icon: Code, label: 'Technical Skills' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Optimization Tools
        </h3>
        {optimizationOptions.map((option) => (
          <button
            key={option.label}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-150"
          >
            <option.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};