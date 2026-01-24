import React from 'react';

export const SearchForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Search Input */}
      <div className="space-y-3">
        <label className="text-sm font-extrabold text-gray-900 ml-1">Search</label>
        <div className="relative group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Doctor name or clinic..." 
            className="w-full bg-gray-100/80 border-2 border-transparent rounded-xl py-4 pl-12 pr-4 text-gray-700 focus:bg-white focus:border-gray-200 transition-all outline-none font-medium"
          />
        </div>
      </div>

      {/* Location Input */}
      <div className="space-y-3">
        <label className="text-sm font-extrabold text-gray-900 ml-1">Location</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="City, ZIP code, or address" 
            className="w-full bg-gray-100/80 border-2 border-transparent rounded-xl py-4 px-6 text-gray-700 focus:bg-white focus:border-gray-200 transition-all outline-none font-medium"
          />
        </div>
      </div>
    </div>
  );
};
