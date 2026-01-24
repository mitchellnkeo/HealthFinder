import React from 'react';

const SelectionCard = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full px-6 py-4 rounded-xl text-center transition-all border-2 ${
      selected 
        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm' 
        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
    }`}
  >
    <span className="text-sm font-semibold transition-colors">
      {label}
    </span>
  </button>
);

export default SelectionCard;
