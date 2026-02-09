import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/ui/Button';
import { Watermark } from './components/Watermark';
import { AuthModal } from './components/AuthModal';
import { ProviderProfileModal } from './components/ProviderProfileModal';
import { SearchForm } from './features/search/SearchForm';
import { SymptomGrid } from './features/search/SymptomGrid';
import { CategoryGrid } from './features/search/CategoryGrid';
import { InsuranceGrid } from './features/search/InsuranceGrid';
import { ProviderResults } from './features/results/ProviderResults';
import { ProviderMap } from './components/ProviderMap';
import { MOCK_PROVIDERS, filterProviders } from './data/providers';

const PAGE_SIZE = 5;

export default function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);
  const isLoggedIn = false; // No real auth yet; heart click when logged out opens modal + toast

  const filteredProviders = useMemo(() => {
    const byFilters = filterProviders(MOCK_PROVIDERS, selectedInsurance, selectedCategory);
    const query = searchQuery.trim().toLowerCase();
    if (!query) return byFilters;
    return byFilters.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(query)) ||
        (p.clinic && p.clinic.toLowerCase().includes(query))
    );
  }, [selectedInsurance, selectedCategory, searchQuery]);
  const resultsCount = filteredProviders.length;
  const totalPages = Math.max(1, Math.ceil(resultsCount / PAGE_SIZE));
  const pageIndex = Math.min(currentPage, totalPages);
  const displayProviders = filteredProviders.slice((pageIndex - 1) * PAGE_SIZE, pageIndex * PAGE_SIZE);
  const displayCount = displayProviders.length;
  const startItem = resultsCount === 0 ? 0 : (pageIndex - 1) * PAGE_SIZE + 1;
  const endItem = Math.min(pageIndex * PAGE_SIZE, resultsCount);

  const handleSearchSubmit = () => {
    setHasSearched(true);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedInsurance]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages >= 1) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPrevPage = () => {
    setCurrentPage((p) => Math.max(1, p - 1));
  };
  const goToNextPage = () => {
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  };

  const handleViewProfile = (provider) => {
    setSelectedProvider(provider ?? null);
  };

  const handleFavoriteClickWhenLoggedOut = () => {
    setShowAuthModal(true);
    setShowLoginToast(true);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProvider(null);
        setShowAuthModal(false);
      }
    };
    if (selectedProvider || showAuthModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProvider, showAuthModal]);

  useEffect(() => {
    if (!showLoginToast) return;
    const t = setTimeout(() => setShowLoginToast(false), 4000);
    return () => clearTimeout(t);
  }, [showLoginToast]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Watermark />
      <div className="relative z-10">
      <Header onLoginClick={() => setShowAuthModal(true)} />
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
      {showLoginToast && (
        <div
          className="fixed bottom-6 right-6 z-[10001] flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white shadow-lg"
          role="status"
          aria-live="polite"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
            !
          </span>
          <span className="text-sm font-medium">Please login to save providers</span>
        </div>
      )}
      {selectedProvider && (
        <ProviderProfileModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}

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

          <CategoryGrid
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <hr className="border-gray-100 my-10" />

          <InsuranceGrid
            selectedInsurance={selectedInsurance}
            onSelectInsurance={setSelectedInsurance}
            onClearSelection={() => setSelectedInsurance(null)}
          />

          <div className="flex justify-end pt-8">
            <Button
              variant="primary"
              className="shrink-0 px-6 py-3.5 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
              onClick={handleSearchSubmit}
              disabled={selectedSymptoms.length === 0}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Providers
            </Button>
          </div>
        </div>

        {/* Results - shown only after initial Search Providers click */}
        {hasSearched && (
          <>
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                <span>
                  {viewMode === 'map'
                    ? `Showing ${resultsCount} of ${resultsCount} results`
                    : `Showing ${startItem}-${endItem} of ${resultsCount} results`}
                </span>
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
                  onClick={() => setViewMode('map')}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
                    viewMode === 'map' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-gray-900'
                  }`}
                  aria-label="Map view"
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
            ) : viewMode === 'map' ? (
              <ProviderMap
                providers={filteredProviders}
                onViewProfile={handleViewProfile}
              />
            ) : (
              <>
                <ProviderResults
                  providers={displayProviders}
                  viewMode={viewMode}
                  onViewProfile={handleViewProfile}
                  isLoggedIn={isLoggedIn}
                  onLoginRequiredForFavorite={handleFavoriteClickWhenLoggedOut}
                />
                {totalPages > 1 && (
                  <nav
                    className="mt-10 flex items-center justify-center gap-4"
                    aria-label="Provider results pagination"
                  >
                    <button
                      type="button"
                      onClick={goToPrevPage}
                      disabled={pageIndex <= 1}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                      aria-label="Previous page"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-sm font-bold text-gray-700">
                      Page {pageIndex} of {totalPages}
                    </span>
                    <button
                      type="button"
                      onClick={goToNextPage}
                      disabled={pageIndex >= totalPages}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                      aria-label="Next page"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                )}
              </>
            )}
          </>
        )}
      </main>
      </div>
    </div>
  );
}
