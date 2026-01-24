import React from 'react';
import InsuranceCard from '../../components/ui/InsuranceCard';

const INSURANCE_PROVIDERS = [
  { name: 'Blue Cross', initial: 'B', bgColor: 'bg-blue-500', textColor: 'text-white' },
  { name: 'Aetna', initial: 'A', bgColor: 'bg-purple-500', textColor: 'text-white' },
  { name: 'UnitedHealthcare', initial: 'U', bgColor: 'bg-orange-500', textColor: 'text-white' },
  { name: 'Cigna', initial: 'C', bgColor: 'bg-green-500', textColor: 'text-white' },
  { name: 'Medicare', initial: 'M', bgColor: 'bg-cyan-500', textColor: 'text-white' },
  { name: 'Medicaid', initial: 'M', bgColor: 'bg-emerald-500', textColor: 'text-white' },
  { name: 'Humana', initial: 'H', bgColor: 'bg-red-500', textColor: 'text-white' },
  { name: 'Kaiser Permanente', initial: 'K', bgColor: 'bg-blue-700', textColor: 'text-white' },
];

export const InsuranceGrid = () => {
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
          />
        ))}
      </div>
    </section>
  );
};
