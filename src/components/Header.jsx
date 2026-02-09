import React from 'react';
import Button from './ui/Button';

const Header = ({ onLoginClick }) => {
  return (
    <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-black tracking-tight">
          <span className="text-[#1e3a5f]">Symp</span>
          <span className="text-[#c9762a]">tra</span>
        </h1>
        <p className="text-gray-500 text-sm font-medium italic">Start with symptoms. Find your doctor.</p>
      </div>
      <Button
        variant="primary"
        className="rounded-xl px-6 py-3 text-sm bg-gray-800 hover:bg-gray-900"
        onClick={onLoginClick}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Login / Sign Up
      </Button>
    </header>
  );
};

export default Header;
