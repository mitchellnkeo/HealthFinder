import React from 'react';
import { INSURANCE_PROFILE_STYLES } from '../data/providers';

const ICONS = {
  location: (
    <svg className="w-5 h-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5 shrink-0 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  referral: (
    <svg className="w-6 h-6 shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  people: (
    <svg className="w-6 h-6 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  starPurple: (
    <svg className="w-6 h-6 shrink-0 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
};

function ProviderAvatar({ name, size = 'lg' }) {
  const initial = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  const sizeClass = size === 'lg' ? 'w-24 h-24 text-2xl' : 'w-14 h-14 text-lg';
  return (
    <div
      className={`rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold shrink-0 ${sizeClass}`}
    >
      {initial}
    </div>
  );
}

function VerificationBadge() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shrink-0" aria-label="Verified">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

function SectionCard({ title, children, className = '' }) {
  return (
    <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function InsuranceProfileCards({ accepts }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {accepts.map((name) => {
        const style = INSURANCE_PROFILE_STYLES[name] || {
          initial: name[0],
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-700',
        };
        return (
          <div
            key={name}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border ${style.bg} ${style.border}`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${style.text} bg-white border ${style.border}`}>
              {style.initial}
            </div>
            <span className={`text-sm font-bold text-center ${style.text}`}>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function ProviderProfileModal({ provider, onClose }) {
  if (!provider) return null;

  const referralStatus = provider.referralStatus ?? 'No Referral Needed';
  const doctorsAtLocation = provider.doctorsAtLocation ?? 0;
  const about = provider.about ?? 'Board-certified family physician.';

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
      style={{ backgroundColor: '#0F1319' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="provider-profile-title"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl bg-gray-50 rounded-3xl shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100 rounded-t-3xl">
          <h2 id="provider-profile-title" className="text-xl font-bold text-gray-900">
            Provider Profile
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Close profile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Main info: avatar, name, clinic, specialty, rating */}
          <div className="flex flex-col items-center text-center">
            <ProviderAvatar name={provider.name} size="lg" />
            <div className="flex items-center justify-center gap-2 mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
              <VerificationBadge />
            </div>
            <p className="text-gray-600 mt-1">{provider.clinic}</p>
            <span className="inline-block mt-2 px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-bold uppercase tracking-wider">
              {provider.specialty}
            </span>
            <div className="flex items-center justify-center gap-2 mt-3 text-gray-900">
              {ICONS.star}
              <span className="font-bold">{provider.rating} rating</span>
            </div>
          </div>

          {/* Contact Information */}
          <SectionCard title="Contact Information">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                {ICONS.location}
                <span className="text-gray-700">{provider.address}</span>
              </div>
              <div className="flex items-center gap-3">
                {ICONS.phone}
                <span className="text-gray-700">{provider.phone}</span>
              </div>
            </div>
          </SectionCard>

          {/* Practice Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Practice Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={`rounded-xl p-4 flex flex-col items-center text-center gap-2 border ${referralStatus.toLowerCase().includes('no') ? 'bg-gray-100 border-gray-200' : 'bg-gray-200 border-gray-300'}`}>
                {ICONS.referral}
                <span className="text-sm text-gray-600">Referral Status</span>
                <span className="font-bold text-gray-900">{referralStatus}</span>
              </div>
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4 flex flex-col items-center text-center gap-2">
                {ICONS.people}
                <span className="text-sm text-gray-600">Primary Care Doctors</span>
                <span className="font-bold text-blue-700 text-2xl leading-none">{doctorsAtLocation}</span>
                <span className="text-sm text-gray-600">at this location</span>
              </div>
              <div className="bg-purple-50/80 border border-purple-100 rounded-xl p-4 flex flex-col items-center text-center gap-2">
                {ICONS.starPurple}
                <span className="text-sm text-gray-600">Patient Rating</span>
                <span className="font-bold text-purple-700 text-2xl leading-none">{provider.rating}</span>
                <span className="text-sm text-gray-600">out of 5.0</span>
              </div>
            </div>
          </div>

          {/* Specialty */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Specialty</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Area of Practice</p>
              <p className="font-bold text-gray-900">{provider.specialty}</p>
              <p className="text-sm text-gray-600 mt-3">About</p>
              <p className="text-gray-700">{about}</p>
            </div>
          </div>

          {/* Wait Time & Availability */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              {ICONS.clock}
              <span className="font-bold text-gray-900">Wait Time</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">New Patient Availability</p>
            <p className="text-blue-600 font-bold mb-4">{provider.waitTime}</p>
            <div className="grid grid-cols-3 gap-3">
              {provider.slots.map((slot) => (
                <div key={slot.date} className="rounded-xl border border-green-200 bg-green-50/80 p-3 text-center">
                  <p className="text-sm text-gray-700">{slot.date}</p>
                  <p className="text-sm font-bold text-green-700">{slot.count} slots</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Provider */}
          <button
            type="button"
            className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
          >
            Contact Provider
          </button>

          {/* Insurance Coverage */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {ICONS.shield}
              <span className="font-bold text-gray-900">See if your insurance covers it</span>
            </div>
            <div className="flex items-start gap-2 mb-2">
              {ICONS.check}
              <p className="text-blue-600 font-medium text-sm">This provider accepts the insurances listed below</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">Contact your insurance provider to verify coverage details.</p>
            <InsuranceProfileCards accepts={provider.accepts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderProfileModal;
