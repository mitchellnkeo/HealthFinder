import React, { useState } from 'react';
import FilterTab from '../../components/ui/FilterTab';
import SelectionCard from '../../components/ui/SelectionCard';

const SYMPTOM_TABS = [
  'All Symptoms', 
  'Pain & Discomfort', 
  'Respiratory', 
  'General Symptoms', 
  'Mental Health', 
  'Skin Conditions', 
  'Digestive'
];

const SYMPTOMS = [
  'Back Pain', 
  'Neck Pain', 
  'Joint Pain', 
  'Headache', 
  'Chest Pain', 
  'Muscle Pain'
];

export const SymptomGrid = () => {
  const [activeTab, setActiveTab] = useState('All Symptoms');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom]
    );
  };

  return (
    <section className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-xl font-extrabold text-gray-900">What symptoms are you experiencing?</h2>
        <p className="text-sm font-bold text-gray-400">Select all that apply</p>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {SYMPTOM_TABS.map(tab => (
          <FilterTab 
            key={tab} 
            label={tab} 
            active={activeTab === tab} 
            onClick={() => setActiveTab(tab)} 
          />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {SYMPTOMS.map(symptom => (
          <SelectionCard 
            key={symptom} 
            label={symptom} 
            selected={selectedSymptoms.includes(symptom)}
            onClick={() => toggleSymptom(symptom)}
          />
        ))}
      </div>
      
      <button className="text-blue-600 font-extrabold text-sm hover:underline block mx-auto pt-2">
        ... more
      </button>
    </section>
  );
};
