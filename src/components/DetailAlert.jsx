import React from 'react';

const DetailAlert = ({ alert, onClose }) => {
    if (!alert) {
        return (
            <div className="w-full h-[800px] hidden lg:flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-lg">
                <span className="text-sm font-medium">
                    Select an alert to view details
                </span>
            </div>
        );
    }
    return (
        <div className="w-full h-full hidden lg:block bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden font-sans">
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                <span className="text-xs font-mono font-bold text-slate-400 tracking-widest">
                    {alert.id}
                </span>
                <button
                    onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
                >
                    ✕
                </button>
            </div>

            {/* Content */}
            <div className="p-6">
                
                {/* Meta */}
                <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-widest text-blue-600 font-bold mb-1">
                        Detected At
                        <span className="text-slate-500 ml-2 font-medium">
                            {alert.time}
                        </span>
                    </p>
                    <p className="text-sm text-slate-500 font-medium mb-2">
                        {alert.location}
                    </p>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {alert.title}
                    </h1>
                </div>

                {/* Severity Section */}
                <div className="mb-8">
                    <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-black mb-3">
                        Alert Intelligence
                    </h2>

                    <div className="bg-blue-600 p-4 rounded-xl flex justify-between items-center shadow-lg shadow-blue-200">
                        <span className="text-[10px] text-blue-100 font-black uppercase tracking-widest">
                            Severity Level
                        </span>
                        <span className="text-white font-black text-lg">
                            {alert.severity}
                        </span>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="border border-slate-200 rounded-xl p-3">
                        <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                            Location
                        </p>
                        <p className="text-sm text-slate-700 font-medium">
                            {alert.location}
                        </p>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-3">
                        <p className="text-[10px] uppercase text-slate-400 font-bold mb-1">
                            License No
                        </p>
                        <p className="text-sm font-mono text-blue-600 font-bold">
                            {alert.license}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailAlert;
