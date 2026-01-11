import React from "react";

const AlertCard = ({
  type,
  id,
  time,
  title,
  location,
  severity,
  license,
  onClick
}) => {
  // Map severity to colors
  const severityColor = severity === "High" ? "red-600" :
                        severity === "Medium" ? "yellow-500" :
                        "green-500";

  return (
    <div
      onClick={onClick}
      className='group mb-3 p-4 w-full bg-white border border-slate-200 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-sm'
    >
      <div className='flex justify-between items-center mb-3'>
        <span className={`px-3 py-1 text-[10px] font-black bg-${severityColor} text-white rounded-md`}>
          {type}
        </span>
        <span className='px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-md'>
          NEW
        </span>
      </div>

      <div className='flex justify-between mb-2'>
        <p className='text-[11px] font-mono text-slate-400'>{id}</p>
        <p className='text-[11px] text-slate-400 italic'>{time}</p>
      </div>

      <h3 className='text-slate-900 font-bold text-sm mb-3 group-hover:text-blue-700'>
        {title}
      </h3>

      <div className='grid grid-cols-2 gap-y-2 border-t pt-3'>
        <div>
          <p className='text-[10px] uppercase text-slate-400 font-bold'>Location</p>
          <p className='text-xs text-slate-600'>{location}</p>
        </div>
        <div>
          <p className='text-[10px] uppercase text-slate-400 font-bold'>Severity</p>
          <p className='text-xs text-slate-600'>{severity}</p>
        </div>
        <div className='col-span-2'>
          <p className='text-[10px] uppercase text-slate-400 font-bold'>License No</p>
          <p className='text-xs font-mono text-blue-600 font-bold'>{license}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
