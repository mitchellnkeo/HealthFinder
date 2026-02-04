import React, { useState } from 'react';

const TAB_LOGIN = 'login';
const TAB_SIGNUP = 'signup';

export function AuthModal({ onClose }) {
  const [tab, setTab] = useState(TAB_LOGIN);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Placeholder: wire to auth later
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Placeholder: wire to auth later
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 id="auth-modal-title" className="text-xl font-bold text-gray-900">
            Welcome
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setTab(TAB_LOGIN)}
            className={`flex-1 py-3 text-sm font-bold transition-colors rounded-t-lg ${
              tab === TAB_LOGIN
                ? 'text-gray-900 bg-white border-b-2 border-gray-900 -mb-px'
                : 'text-gray-500 bg-gray-100 hover:text-gray-700 hover:bg-gray-200'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setTab(TAB_SIGNUP)}
            className={`flex-1 py-3 text-sm font-bold transition-colors rounded-t-lg ${
              tab === TAB_SIGNUP
                ? 'text-gray-900 bg-white border-b-2 border-gray-900 -mb-px'
                : 'text-gray-500 bg-gray-100 hover:text-gray-700 hover:bg-gray-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-6">
          {tab === TAB_LOGIN ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors"
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
              >
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label htmlFor="signup-name" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:outline-none transition-colors"
                  autoComplete="new-password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
              >
                Create Account
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            {tab === TAB_LOGIN ? 'Sign in with Google' : 'Sign up with Google'}
          </button>

          {/* Note */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Note: You can browse providers without logging in. Create an account to save providers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
