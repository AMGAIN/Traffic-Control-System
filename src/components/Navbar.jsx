import React, { useState } from 'react';
import notification from '../assets/notification.png';
import logout from '../assets/logout.png';
import Time from './Time.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='bg-white mb-2 border-b border-slate-200 px-4 md:px-6 py-3 sticky top-0 z-50 shadow-sm'>
            <div className='max-w-[1920px] mx-auto flex justify-between items-center'>
                
                {/* Branding Section */}
                <div className='flex flex-col'>
                    <h1 className='text-slate-900 font-black text-base md:text-lg tracking-tighter leading-tight'>
                        TRAFFIC <span className='text-blue-600'>COMMAND</span> CENTER
                    </h1>
                    <p className='text-[8px] md:text-[10px] text-slate-500 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase'>
                        Central Precinct • Sector-07
                    </p>
                </div>

                {/* Live System Stats - Hidden on Mobile, Visible on Medium screens+ */}
                <div className="hidden md:flex gap-3 items-center">
                    <button className="px-3 py-1.5 bg-blue-200 hover:bg-blue-50 border border-blue-500 text-slate-600 hover:text-blue-700 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                        Units Ready: <span className='text-blue-600'>13</span>
                    </button>
                    
                    <button className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-blue-500 text-slate-600 hover:text-blue-700 rounded-lg text-[11px] font-bold transition-all duration-200 uppercase tracking-tight">
                        Cameras: <span className='text-blue-600 ml-1'>87/100</span>
                    </button>
                </div>

                {/* Utility Section */}
                <div className='flex items-center gap-3 md:gap-6'>
                    
                    {/* Time - Hidden on very small screens, shown from 'sm' up */}
                    <div className='hidden sm:block border-l border-slate-200 pl-4 md:pl-6 py-1 order-last md:order-none'>
                        <Time />
                    </div>

                    {/* Icons Container */}
                    <div className='flex items-center gap-4'>
                        <div className='relative rounded-lg cursor-pointer group'>
                            <img className='h-6 w-6 md:h-7 md:w-7 opacity-50 group-hover:opacity-100 transition-all' src={notification} alt="notification" />
                            <span className='absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full border-2 border-white'></span>
                        </div>

                        <div className='relative rounded-lg cursor-pointer group'>
                            <img className='h-6 w-6 md:h-7 md:w-7 opacity-50 group-hover:opacity-100 transition-all' src={logout} alt="logout" />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle (Hamburger) - Only visible on Mobile */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Expandable Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                        <span className="text-[11px] font-bold text-slate-600 uppercase">Units Ready</span>
                        <span className="text-blue-600 font-bold">13</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                        <span className="text-[11px] font-bold text-slate-600 uppercase">Cameras Online</span>
                        <span className="text-blue-600 font-bold">87/100</span>
                    </div>
                    <div className="sm:hidden py-2 text-center">
                        <Time />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;