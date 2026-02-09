import React from 'react';
import Button from './ui/Button';

const Header = ({ onLoginClick }) => {
  return (
    <div className="w-full bg-white">
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center gap-8">
      <div className="min-h-[180px] flex flex-col justify-center flex-shrink-0">
        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-black tracking-tight leading-none uppercase whitespace-nowrap">
            <span className="text-[#2A4897]">SYMP</span>
            <span className="text-[#E69138]">TRA</span>
          </h1>
          <p className="text-[#707070] text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] font-normal italic w-full leading-tight">Start with symptoms. Find your doctor.</p>
        </div>
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
