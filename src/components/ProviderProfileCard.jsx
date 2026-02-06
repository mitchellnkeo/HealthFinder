import React, { useState } from 'react';
import { INSURANCE_TAG_STYLES } from '../data/providers';

const ICONS = {
  location: (
    <svg className="w-4 h-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  phone: (
    <svg className="w-4 h-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  star: (
    <svg className="w-4 h-4 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function ProviderAvatar({ name }) {
  const initial = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg shrink-0">
      {initial}
    </div>
  );
}

function VerificationBadge() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white shrink-0" aria-label="Verified">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

function InsuranceTags({ accepts }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {accepts.map((name) => {
        const style = INSURANCE_TAG_STYLES[name] || { initial: name[0], bg: 'bg-gray-500', text: 'text-white' };
        return (
          <span
            key={name}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text}`}
          >
            <span>{style.initial}</span>
            <span>{name}</span>
          </span>
        );
      })}
    </div>
  );
}

export function ProviderProfileCardList({ provider, onViewProfile }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-stretch gap-6">
        {/* Left: provider info */}
        <div className="flex-1 min-w-0 flex gap-4">
          <ProviderAvatar name={provider.name} />
          <div className="flex-1 min-w-0 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-gray-900">{provider.name}</h3>
              <VerificationBadge />
            </div>
            <p className="text-sm text-gray-600">{provider.clinic}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider">
              {provider.specialty}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {ICONS.location}
              <span>{provider.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {ICONS.phone}
              <span>{provider.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              {ICONS.star}
              <span>{provider.rating} rating</span>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 mb-1">Accepts:</p>
              <InsuranceTags accepts={provider.accepts} />
            </div>
          </div>
        </div>

        {/* Right: availability + actions */}
        <div className="md:w-56 shrink-0 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 text-blue-800 text-sm font-bold w-fit">
            {ICONS.clock}
            <span>Wait time: {provider.waitTime}</span>
          </div>
          <div className="space-y-2">
            {provider.slots.map((slot) => (
              <div
                key={slot.date}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-green-50 border border-green-100"
              >
                <span className="text-sm text-gray-700">{slot.date}</span>
                <span className="text-sm font-bold text-green-700">{slot.count} slots</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            <button
              type="button"
              onClick={() => onViewProfile?.(provider)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-gray-800 text-white text-sm font-bold hover:bg-gray-900 transition-colors"
            >
              View Profile
            </button>
            <button
              type="button"
              onClick={() => setFavorited((f) => !f)}
              className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors"
              aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <svg className="w-5 h-5" fill={favorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProviderProfileCardGrid({ provider, onViewProfile }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="flex gap-3 mb-3">
        <ProviderAvatar name={provider.name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-gray-900 truncate">{provider.name}</h3>
            <VerificationBadge />
          </div>
          <p className="text-sm text-gray-600 truncate">{provider.clinic}</p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold uppercase tracking-wider">
            {provider.specialty}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
        {ICONS.star}
        <span>{provider.rating} rating</span>
      </div>
      <div className="mb-3">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Accepts</p>
        <InsuranceTags accepts={provider.accepts} />
      </div>
      <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-bold w-fit mb-4">
        {ICONS.clock}
        <span>{provider.waitTime}</span>
      </div>
      <div className="mt-auto flex gap-2">
        <button
          type="button"
          onClick={() => onViewProfile?.(provider)}
          className="flex-1 px-3 py-2 rounded-xl bg-gray-800 text-white text-sm font-bold hover:bg-gray-900 transition-colors"
        >
          View Profile
        </button>
        <button
          type="button"
          onClick={() => setFavorited((f) => !f)}
          className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className="w-4 h-4" fill={favorited ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default function ProviderProfileCard({ provider, variant = 'list', onViewProfile }) {
  if (variant === 'grid') {
    return <ProviderProfileCardGrid provider={provider} onViewProfile={onViewProfile} />;
  }
  return <ProviderProfileCardList provider={provider} onViewProfile={onViewProfile} />;
}
