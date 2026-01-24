import React from 'react';

const FilterTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
      active 
        ? 'bg-gray-800 text-white shadow-md' 
        : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
    }`}
  >
    {label}
  </button>
);

export default FilterTab;
