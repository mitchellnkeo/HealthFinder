import React from 'react';
import Button from './ui/Button';

const Header = ({ onLoginClick }) => {
  return (
    <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
      <div className="min-h-[180px] flex flex-col justify-center">
        <div className="w-fit flex flex-col gap-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[180px] font-black tracking-tight leading-none uppercase whitespace-nowrap">
            <span className="text-[#3654B0]">SYMP</span>
            <span className="text-[#E18E42]">TRA</span>
          </h1>
          <p className="text-[#707070] text-lg sm:text-xl md:text-2xl lg:text-[2.5rem] font-normal italic w-full leading-tight">Start with symptoms. Find your doctor.</p>
        </div>
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
