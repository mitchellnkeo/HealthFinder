import React, { useState } from 'react';
import FilterTab from '../../components/ui/FilterTab';

const CATEGORY_TABS = [
  'All Categories', 
  'Primary Care', 
  'Physical Therapy', 
  'Cardiology', 
  'Dermatology', 
  'Orthopedics'
];

export const CategoryGrid = () => {
  const [activeTab, setActiveTab] = useState('All Categories');

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-extrabold text-gray-900">Categories</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {CATEGORY_TABS.map(tab => (
          <FilterTab 
            key={tab} 
            label={tab} 
            active={activeTab === tab} 
            onClick={() => setActiveTab(tab)} 
          />
        ))}
      </div>
    </section>
  );
};
