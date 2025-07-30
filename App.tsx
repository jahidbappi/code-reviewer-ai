import React, { useState, useCallback } from 'react';
import { reviewCode } from './services/geminiService';
import { SUPPORTED_LANGUAGES } from './constants';
import type { CodeReviewFeedback } from './types';
import FeedbackDisplay from './components/FeedbackDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import CodeIcon from './components/icons/CodeIcon';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>(SUPPORTED_LANGUAGES[0]);
  const [feedback, setFeedback] = useState<CodeReviewFeedback | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReview = useCallback(async () => {
    if (!code.trim()) {
      setError("Please enter some code to review.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const result = await reviewCode(code, language);
      setFeedback(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm p-4 rounded-full mb-4 shadow-[0_0_20px_theme(colors.indigo.500/50%)]">
              <CodeIcon className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-300 to-teal-300 bg-clip-text text-transparent">
            Code Reviewer
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Paste your code, select the language, and get an instant, AI-powered review and correction.
          </p>
        </header>

        <main>
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
              <div className="col-span-1 sm:col-span-4">
                <label htmlFor="language-select" className="block text-sm font-medium text-gray-300 mb-2">
                  Language
                </label>
                <select
                  id="language-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  disabled={isLoading}
                  className="w-full bg-slate-900/70 border border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-white"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`// Paste your ${language} code here...`}
              disabled={isLoading}
              className="w-full h-80 bg-slate-900/70 border border-slate-600 rounded-md p-4 font-mono text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-shadow duration-200"
            />
            <button
              onClick={handleReview}
              disabled={isLoading || !code.trim()}
              className="mt-6 w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 disabled:bg-slate-600 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? 'Reviewing...' : 'Review Code'}
            </button>
          </div>

          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
            {feedback && <FeedbackDisplay feedback={feedback} language={language} />}
          </div>
        </main>
        
        <footer className="text-center mt-16 text-gray-500 text-sm">
            <p>Powered by Google Gemini. All reviews are AI-generated.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;