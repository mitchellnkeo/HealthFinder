import React from 'react';

const SelectionCard = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full px-6 py-4 rounded-xl text-center transition-all group ${
      selected 
        ? 'bg-gray-800 text-white shadow-sm' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
    }`}
  >
    <span className="text-sm font-semibold transition-colors">
      {label}
    </span>
  </button>
);

export default SelectionCard;
