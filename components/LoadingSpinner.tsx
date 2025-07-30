import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
      <p className="mt-6 text-lg text-gray-300 animate-pulse">Analyzing your code...</p>
      <p className="text-sm text-gray-500">Weaving magic into the bytecode.</p>
    </div>
  );
};

export default LoadingSpinner;