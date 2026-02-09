import React from 'react';
import Button from './ui/Button';

const Header = ({ onLoginClick }) => {
  return (
    <div className="w-full bg-white">
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center gap-8">
      <div className="flex flex-col justify-center flex-shrink-0 min-h-0">
        <a href="/" className="block w-fit focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded">
          <img
            src="/Symptra-logo.svg"
            alt="Symptra - Start with symptoms. Find your doctor."
            className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-[180px] object-contain object-left"
            width="433"
            height="182"
            fetchPriority="high"
          />
        </a>
      </div>
      <Button
        variant="primary"
        className="shrink-0 rounded-xl px-6 py-3 text-sm bg-[#1A1A1A] hover:bg-[#2a2a2a] text-white"
        onClick={onLoginClick}
      >
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Login / Sign Up
      </Button>
    </header>
      <div className="border-b border-gray-200" aria-hidden="true" />
    </div>
  );
};

export default Header;
