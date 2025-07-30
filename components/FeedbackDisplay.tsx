
import React, { useState } from 'react';
import type { CodeReviewFeedback } from '../types';
import BugIcon from './icons/BugIcon';
import ZapIcon from './icons/ZapIcon';
import { EyeIcon } from './icons/EyeIcon';
import ShieldIcon from './icons/ShieldIcon';
import CodeViewer from './CodeViewer';

interface FeedbackDisplayProps {
  feedback: CodeReviewFeedback;
  language: string;
}

interface FeedbackSectionProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  iconBgClass: string;
  textColorClass: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ title, items, icon, iconBgClass, textColorClass }) => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-lg h-full transition-transform duration-300 hover:scale-[1.02] hover:border-slate-600">
      <div className="flex items-center mb-4">
        <span className={`p-3 rounded-full mr-4 shadow-lg ${iconBgClass}`}>{icon}</span>
        <h3 className={`text-xl font-bold ${textColorClass}`}>{title}</h3>
      </div>
      {items.length > 0 ? (
        <ul className="space-y-3 list-disc list-inside text-gray-300 pl-2">
          {items.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      ) : (
         <p className="text-gray-400 text-center py-4">No issues found in this category.</p>
      )}
    </div>
  );
};

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, language }) => {
  const [activeTab, setActiveTab] = useState<'review' | 'fix'>('review');

  const tabButtonClasses = (isActive: boolean) =>
    `px-6 py-3 text-sm font-bold rounded-t-lg focus:outline-none transition-all duration-200 border-b-2 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
      isActive
        ? 'bg-slate-800/80 text-indigo-300 border-indigo-400'
        : 'text-gray-400 hover:text-white border-transparent hover:bg-slate-700/50'
    }`;

  return (
    <div className="space-y-10 mt-12 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-300 to-teal-300 bg-clip-text text-transparent">Code Analysis</h2>
        <div className="p-0.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <p className="text-center text-lg text-gray-300 bg-slate-800/90 p-6 rounded-xl">{feedback.summary}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center border-b border-slate-700 -mb-px">
            <button className={tabButtonClasses(activeTab === 'review')} onClick={() => setActiveTab('review')}>
                Review Feedback
            </button>
            <button className={tabButtonClasses(activeTab === 'fix')} onClick={() => setActiveTab('fix')}>
                Suggested Fix
            </button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-b-xl rounded-tr-xl shadow-2xl p-4 sm:p-6">
            {activeTab === 'review' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeedbackSection 
                  title="Bugs & Errors" 
                  items={feedback.bugs} 
                  icon={<BugIcon className="w-6 h-6 text-white" />} 
                  iconBgClass="bg-gradient-to-br from-red-500 to-pink-500"
                  textColorClass="text-red-400" 
                />
                <FeedbackSection 
                  title="Performance" 
                  items={feedback.performance} 
                  icon={<ZapIcon className="w-6 h-6 text-white" />} 
                  iconBgClass="bg-gradient-to-br from-yellow-500 to-amber-500"
                  textColorClass="text-yellow-400" 
                />
                <FeedbackSection 
                  title="Readability" 
                  items={feedback.readability} 
                  icon={<EyeIcon className="w-6 h-6 text-white" />} 
                  iconBgClass="bg-gradient-to-br from-blue-500 to-cyan-500"
                  textColorClass="text-blue-400" 
                />
                <FeedbackSection 
                  title="Security" 
                  items={feedback.security} 
                  icon={<ShieldIcon className="w-6 h-6 text-white" />} 
                  iconBgClass="bg-gradient-to-br from-green-500 to-teal-500"
                  textColorClass="text-green-400" 
                />
              </div>
            ) : (
                <CodeViewer 
                  code={feedback.fixedCode}
                  language={language}
                  highlightedLines={feedback.changedLines}
                />
            )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDisplay;
