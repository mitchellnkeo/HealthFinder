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

const SYMPTOMS_COLLAPSED = [
  'Back Pain',
  'Neck Pain',
  'Joint Pain',
  'Headache',
  'Chest Pain',
  'Muscle Pain',
];

const SYMPTOMS_EXPANDED = [
  'Back Pain',
  'Neck Pain',
  'Joint Pain',
  'Headache',
  'Chest Pain',
  'Muscle Pain',
  'Cough',
  'Shortness of Breath',
  'Congestion',
  'Sore Throat',
  'Fever',
  'Fatigue',
  'Dizziness',
  'Nausea',
  'Anxiety',
  'Depression',
  'Insomnia',
  'Rash',
  'Itching',
  'Swelling',
  'Stomach Pain',
  'Diarrhea',
  'Constipation',
];

export const SymptomGrid = ({
  selectedSymptoms: controlledSymptoms,
  onToggleSymptom,
  onClearAll,
  onRemoveSymptom,
}) => {
  const [activeTab, setActiveTab] = useState('All Symptoms');
  const [internalSymptoms, setInternalSymptoms] = useState([]);
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);

  const isControlled = controlledSymptoms != null;
  const selectedSymptoms = isControlled ? controlledSymptoms : internalSymptoms;

  const toggleSymptom = (symptom) => {
    const next = selectedSymptoms.includes(symptom)
      ? selectedSymptoms.filter(s => s !== symptom)
      : [...selectedSymptoms, symptom];
    if (isControlled && onToggleSymptom) onToggleSymptom(symptom);
    else setInternalSymptoms(next);
  };

  const clearAllSymptoms = () => {
    if (isControlled && onClearAll) onClearAll();
    else setInternalSymptoms([]);
  };

  const removeSymptom = (symptom) => {
    const next = selectedSymptoms.filter(s => s !== symptom);
    if (isControlled && onRemoveSymptom) onRemoveSymptom(symptom);
    else setInternalSymptoms(next);
  };

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-xl font-extrabold text-gray-900">What symptoms are you experiencing?</h2>
          <p className="text-sm font-bold text-gray-400">Select all that apply</p>
        </div>
        {selectedSymptoms.length > 0 && (
          <button
            onClick={clearAllSymptoms}
            className="text-gray-600 font-bold text-sm hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear all ({selectedSymptoms.length})
          </button>
        )}
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {(showAllSymptoms ? SYMPTOMS_EXPANDED : SYMPTOMS_COLLAPSED).map(symptom => (
          <SelectionCard
            key={symptom}
            label={symptom}
            selected={selectedSymptoms.includes(symptom)}
            onClick={() => toggleSymptom(symptom)}
          />
        ))}
      </div>

      {showAllSymptoms ? (
        <button
          type="button"
          onClick={() => setShowAllSymptoms(false)}
          className="text-blue-600 font-extrabold text-sm hover:underline flex items-center justify-center gap-2 mx-auto pt-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Show less
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setShowAllSymptoms(true)}
          className="text-blue-600 font-extrabold text-sm hover:underline block mx-auto pt-2"
        >
          ... more
        </button>
      )}

      {selectedSymptoms.length > 0 && (
        <div className="bg-blue-50 rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-bold text-blue-700">Selected symptoms:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(symptom => (
              <div
                key={symptom}
                className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2"
              >
                <span>{symptom}</span>
                <button
                  onClick={() => removeSymptom(symptom)}
                  className="hover:bg-gray-700 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove ${symptom}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
