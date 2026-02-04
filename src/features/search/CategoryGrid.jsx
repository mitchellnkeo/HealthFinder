import React, { useState } from 'react';
import FilterTab from '../../components/ui/FilterTab';

const CATEGORY_TABS = [
  'All Categories',
  'Primary Care',
  'Physical Therapy',
  'Cardiology',
  'Dermatology',
  'Orthopedics',
];

export const CategoryGrid = ({ selectedCategory: controlledCategory, onSelectCategory }) => {
  const [internalCategory, setInternalCategory] = useState('All Categories');

  const isControlled = controlledCategory !== undefined;
  const activeTab = isControlled ? controlledCategory : internalCategory;

  const handleClick = (tab) => {
    if (isControlled && onSelectCategory) onSelectCategory(tab);
    else setInternalCategory(tab);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-extrabold text-gray-900">Categories</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {CATEGORY_TABS.map((tab) => (
          <FilterTab
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => handleClick(tab)}
          />
        ))}
      </div>
    </section>
  );
};
