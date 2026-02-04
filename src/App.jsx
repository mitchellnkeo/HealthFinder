import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Button from './components/ui/Button';
import { SearchForm } from './features/search/SearchForm';
import { SymptomGrid } from './features/search/SymptomGrid';
import { CategoryGrid } from './features/search/CategoryGrid';
import { InsuranceGrid } from './features/search/InsuranceGrid';
import { ProviderResults } from './features/results/ProviderResults';
import { MOCK_PROVIDERS, filterProvidersByInsurance } from './data/providers';

const DEFAULT_SHOW_COUNT = 5;

export default function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [hasSearched, setHasSearched] = useState(false);
  const [showCount, setShowCount] = useState(DEFAULT_SHOW_COUNT);

  const filteredProviders = useMemo(
    () => filterProvidersByInsurance(MOCK_PROVIDERS, selectedInsurance),
    [selectedInsurance]
  );
  const resultsCount = filteredProviders.length;
  const displayProviders = hasSearched ? filteredProviders.slice(0, showCount) : [];
  const displayCount = displayProviders.length;

  const handleSearch = () => {
    setHasSearched(true);
    setShowCount(DEFAULT_SHOW_COUNT);
  };

  const handleShowMore = () => {
    setShowCount(Math.min(10, resultsCount));
  };

  const handleViewProfile = (provider) => {
    // Placeholder for navigation or modal
    if (provider?.name) console.log('View profile:', provider.name);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
          <SearchForm />

          <hr className="border-gray-100 my-10" />

          <SymptomGrid
            selectedSymptoms={selectedSymptoms}
            onToggleSymptom={(symptom) => {
              setSelectedSymptoms((prev) =>
                prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
              );
            }}
            onClearAll={() => setSelectedSymptoms([])}
            onRemoveSymptom={(symptom) => setSelectedSymptoms((prev) => prev.filter((s) => s !== symptom))}
          />

          <hr className="border-gray-100 my-10" />

          <CategoryGrid />

          <hr className="border-gray-100 my-10" />

          <InsuranceGrid
            selectedInsurance={selectedInsurance}
            onSelectInsurance={setSelectedInsurance}
            onClearSelection={() => setSelectedInsurance(null)}
          />

          <div className="flex justify-end pt-8">
            <Button
              variant="primary"
              className="px-10 py-4 rounded-xl text-lg group bg-gray-800 hover:bg-gray-900"
              onClick={handleSearch}
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Providers
            </Button>
          </div>
        </div>

        {/* Results Bar - shown after search */}
        {hasSearched && (
          <>
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                <span>
                  Showing {displayCount} of {resultsCount} results
                </span>
                {resultsCount > showCount && (
                  <button
                    type="button"
                    onClick={handleShowMore}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    Show {Math.min(10, resultsCount)}
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="flex items-center bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
                    viewMode === 'list' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
                    viewMode === 'grid' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-2.5 text-gray-400 rounded-xl text-sm font-black hover:text-gray-900 transition-all"
                  aria-label="Map view (coming soon)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 20l-5.447-2.724A2 2 0 013 15.447V5.553a2 2 0 011.553-1.944L9 2l5 2.5L19.447 1.83A2 2 0 0122 3.776v9.894a2 2 0 01-1.106 1.789L16 18l-7 2z" />
                  </svg>
                  Map
                </button>
              </div>
            </div>

            {resultsCount === 0 ? (
              <p className="mt-12 text-center text-gray-500 font-bold">
                No providers match your current filters. Try adjusting insurance or search criteria.
              </p>
            ) : (
              <ProviderResults
                providers={displayProviders}
                viewMode={viewMode}
                onViewProfile={handleViewProfile}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
