
import React from 'react';

const BugIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464l-7.072 7.072" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.464 8.464l7.072 7.072" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 010 18" />
  </svg>
);

export default BugIcon;
