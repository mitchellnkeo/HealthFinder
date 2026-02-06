import React from 'react';

const SelectionCard = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full px-6 py-4 rounded-xl text-center transition-all border-2 ${
      selected
        ? 'bg-white border-blue-300 text-gray-900 shadow-[0_2px_8px_rgba(147,197,253,0.4)]'
        : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:shadow-[0_2px_8px_rgba(147,197,253,0.25)]'
    }`}
  >
    <span className="text-sm font-semibold transition-colors">
      {label}
    </span>
  </button>
);

export default SelectionCard;
