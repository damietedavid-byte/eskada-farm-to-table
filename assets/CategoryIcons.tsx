import React from 'react';

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
};

export const ArticleIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);


export const BusinessIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9h4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15h4.5" />
  </svg>
);


export const FarmIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545A2.997 2.997 0 0015.75 2.25h-5.5A2.997 2.997 0 007.5 3.545V21m0 0h4.5m4.5 0h.008v.008h-.008v-.008z" />
  </svg>
);
