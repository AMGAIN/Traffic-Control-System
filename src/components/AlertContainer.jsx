import React, { useState } from 'react';
import notificationIcon from '../assets/notification.png';
import AlertCard from './AlertCard';

const alerts = [
    {
        id: "INC-101",
        type: "Crash",
        time: "2 mins ago",
        title: "Major impact detected",
        location: "Sector 7",
        severity: "High",
        license: "BA 7344"
    },
    {
        id: "INC-102",
        type: "Theft",
        time: "15 mins ago",
        title: "Unauthorized access",
        location: "Parking Lot B",
        severity: "Medium",
        license: "GA 4521"
    },
    {
        id: "INC-103",
        type: "Congestion",
        time: "1 hour ago",
        title: "Minor collision",
        location: "Sector 4",
        severity: "Low",
        license: "LU 9876"
    }
];

const AlertContainer = ({ onSelectAlert }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Crash', 'Congestion', 'Theft'];

    const filteredAlerts =
        activeFilter === 'All'
            ? alerts
            : alerts.filter(a => a.type === activeFilter);

    return (
        <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden font-sans">
            
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <img className="h-4 w-4 opacity-80" src={notificationIcon} alt="notification" />
                    </div>
                    <h2 className="text-slate-900 font-bold text-sm tracking-tight">
                        Real-Time Alerts
                    </h2>
                </div>

                {/* Live indicator */}
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                        Live
                    </span>
                </div>
            </div>

            {/* Filters */}
            <div className="px-4 py-3 flex gap-2 bg-white border-b border-slate-100">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 border ${
                            activeFilter === cat
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Alert List */}
            <div className="p-3 space-y-2 max-h-[450px] overflow-y-auto no-scrollbar bg-white">
                {filteredAlerts.map(alert => (
                    <AlertCard
                        key={alert.id}
                        {...alert}
                        onClick={() => onSelectAlert(alert)}
                    />
                ))}
            </div>

            {/* Footer */}
            <button className="w-full py-3 text-[10px] text-slate-400 hover:text-blue-600 hover:bg-blue-50 font-bold uppercase tracking-[0.25em] transition-all border-t border-slate-100">
                Mark All as Read
            </button>
        </div>
    );
};

export default AlertContainer;
