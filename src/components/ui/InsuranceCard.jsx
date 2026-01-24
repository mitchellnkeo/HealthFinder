import React from 'react';

const InsuranceCard = ({ name, initial, bgColor, textColor }) => {
  return (
    <div className="bg-white border border-gray-100 p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer hover:shadow-lg hover:border-gray-200 transition-all group">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${bgColor} ${textColor}`}>
        {initial}
      </div>
      <span className="text-[10px] leading-tight font-bold text-gray-500 text-center group-hover:text-gray-900 transition-colors uppercase tracking-wider">
        {name}
      </span>
    </div>
  );
};

export default InsuranceCard;
