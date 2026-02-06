import React from 'react';

const InsuranceCard = ({ name, initial, bgColor, textColor, selected, selectedBg, selectedBorder, selectedText, onClick }) => {
  const isSelected = Boolean(selected);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-4 rounded-xl flex flex-col items-center gap-3 transition-all group ${
        isSelected
          ? `border-2 ${selectedBorder} ${selectedBg}`
          : 'bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${bgColor} ${textColor}`}>
        {initial}
      </div>
      <span className={`text-[10px] leading-tight font-bold text-center uppercase tracking-wider ${
        isSelected ? selectedText : 'text-gray-500 group-hover:text-gray-900'
      }`}>
        {name === 'UnitedHealthcare' ? (
          <>
            United
            <br />
            Healthcare
          </>
        ) : (
          name
        )}
      </span>
    </button>
  );
};

export default InsuranceCard;
