import React from 'react';
import ProviderProfileCard from '../../components/ProviderProfileCard';

export function ProviderResults({ providers, viewMode, onViewProfile }) {
  if (!providers?.length) {
    return null;
  }

  return (
    <section className="mt-8 space-y-6" aria-label="Provider search results">
      {viewMode === 'list' ? (
        <div className="space-y-4">
          {providers.map((provider) => (
            <ProviderProfileCard
              key={provider.id}
              provider={provider}
              variant="list"
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {providers.map((provider) => (
            <ProviderProfileCard
              key={provider.id}
              provider={provider}
              variant="grid"
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProviderResults;
