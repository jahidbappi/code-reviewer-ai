
import React from 'react';

interface CodeViewerProps {
  code: string;
  language: string;
  highlightedLines?: number[];
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code, language, highlightedLines = [] }) => {
  const lines = code.split('\n');

  return (
    <div className="bg-slate-900/70 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-slate-700">
        <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-700">
            <p className="text-sm font-semibold text-gray-300">{language} - Suggested Fix</p>
        </div>
      <pre className="text-sm font-mono text-gray-200 text-left">
        <code className="language-css">
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = highlightedLines.includes(lineNumber);
            return (
              <div
                key={lineNumber}
                className={`flex items-start transition-colors duration-200 ${isHighlighted ? 'bg-emerald-900/40' : 'bg-transparent'}`}
              >
                <span className={`w-12 text-right pr-4 text-gray-500 select-none sticky left-0 ${isHighlighted ? 'bg-emerald-900/60 text-emerald-300' : 'bg-slate-900/70'}`}>{lineNumber}</span>
                <span className={`flex-1 pr-4 whitespace-pre-wrap break-words ${isHighlighted ? 'border-l-2 border-emerald-500 pl-3 -ml-px' : 'pl-4'}`}>{line || ' '}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

export default CodeViewer;
