import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-blue-300">

        {/* Branding Header */}
        <div className="pt-12 pb-8 px-8 text-center bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">T</span>
            </div>
          </div>
          <h1 className="text-slate-900 font-black text-2xl tracking-tighter leading-tight">
            TRAFFIC <span className="text-blue-600">COMMAND</span> CENTER
          </h1>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase mt-2">
            Authorized Personnel Only
          </p>
        </div>

        <div className="p-8 pt-0">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="name@precinct.gov"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                  Password
                </label>
                <a href="#" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 uppercase tracking-tight">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
              Login Securely
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;