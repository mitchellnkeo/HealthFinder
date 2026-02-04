import React, { useState } from 'react';
import InsuranceCard from '../../components/ui/InsuranceCard';

const INSURANCE_PROVIDERS = [
  { name: 'No Insurance', initial: 'N', bgColor: 'bg-gray-400', textColor: 'text-white', selectedBg: 'bg-gray-50', selectedBorder: 'border-gray-500', selectedText: 'text-gray-700' },
  { name: 'Blue Cross', initial: 'B', bgColor: 'bg-blue-500', textColor: 'text-white', selectedBg: 'bg-blue-50', selectedBorder: 'border-blue-500', selectedText: 'text-blue-700' },
  { name: 'Aetna', initial: 'A', bgColor: 'bg-purple-500', textColor: 'text-white', selectedBg: 'bg-purple-50', selectedBorder: 'border-purple-500', selectedText: 'text-purple-700' },
  { name: 'UnitedHealthcare', initial: 'U', bgColor: 'bg-orange-500', textColor: 'text-white', selectedBg: 'bg-orange-50', selectedBorder: 'border-orange-500', selectedText: 'text-orange-700' },
  { name: 'Cigna', initial: 'C', bgColor: 'bg-green-500', textColor: 'text-white', selectedBg: 'bg-green-50', selectedBorder: 'border-green-500', selectedText: 'text-green-700' },
  { name: 'Medicare', initial: 'M', bgColor: 'bg-cyan-500', textColor: 'text-white', selectedBg: 'bg-cyan-50', selectedBorder: 'border-cyan-500', selectedText: 'text-cyan-700' },
  { name: 'Medicaid', initial: 'M', bgColor: 'bg-emerald-500', textColor: 'text-white', selectedBg: 'bg-emerald-50', selectedBorder: 'border-emerald-500', selectedText: 'text-emerald-700' },
  { name: 'Humana', initial: 'H', bgColor: 'bg-red-500', textColor: 'text-white', selectedBg: 'bg-red-50', selectedBorder: 'border-red-500', selectedText: 'text-red-700' },
  { name: 'Kaiser Permanente', initial: 'K', bgColor: 'bg-blue-700', textColor: 'text-white', selectedBg: 'bg-blue-50', selectedBorder: 'border-blue-700', selectedText: 'text-blue-700' },
];

export const InsuranceGrid = ({
  selectedInsurance: controlledInsurance,
  onSelectInsurance,
  onClearSelection,
}) => {
  const [internalProvider, setInternalProvider] = useState(null);

  const isControlled = controlledInsurance !== undefined;
  const selectedProvider = isControlled ? controlledInsurance : internalProvider;

  const handleSelect = (provider) => {
    const next = selectedProvider?.name === provider.name ? null : provider;
    if (isControlled && onSelectInsurance) onSelectInsurance(next);
    else setInternalProvider(next);
  };

  const clearSelection = () => {
    if (isControlled && onClearSelection) onClearSelection();
    else setInternalProvider(null);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-extrabold text-gray-900">Insurance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {INSURANCE_PROVIDERS.map(provider => (
          <InsuranceCard
            key={provider.name}
            name={provider.name}
            initial={provider.initial}
            bgColor={provider.bgColor}
            textColor={provider.textColor}
            selected={selectedProvider?.name === provider.name}
            selectedBg={provider.selectedBg}
            selectedBorder={provider.selectedBorder}
            selectedText={provider.selectedText}
            onClick={() => handleSelect(provider)}
          />
        ))}
      </div>
      {selectedProvider && (
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            <span>Selected: {selectedProvider.name}</span>
            <button
              type="button"
              onClick={clearSelection}
              className="hover:bg-gray-700 rounded-full p-0.5 transition-colors"
              aria-label={`Remove ${selectedProvider.name}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
