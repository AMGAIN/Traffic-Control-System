import React, { useState } from "react";
import AlertCard from "./AlertCard";

const AlertContainer = ({ alerts = [], onSelectAlert }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Crash"]; // only Crash matters

  const filteredAlerts =
    activeFilter === "All"
      ? alerts
      : alerts.filter(a => a.type === activeFilter);

  return (
    <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden font-sans">
      
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-slate-900 font-bold text-sm tracking-tight">
          Real-Time Alerts
        </h2>
      </div>

      {/* Filters */}
      <div className="px-4 py-3 flex gap-2 bg-white border-b border-slate-100">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-200 border ${
              activeFilter === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100"
                : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
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
    </div>
  );
};

export default AlertContainer;
