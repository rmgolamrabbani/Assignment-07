import React from 'react';

const StatsBoard = () => {
 
  const stats = [
    { label: 'Total Friends', value: 13 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
    <div className="bg-gray-50 p-8"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center min-h-35"
          >
            
            <span className="text-3xl font-bold text-[#1a3d32] mb-1">
              {stat.value}
            </span>
            
           
            <span className="text-sm font-medium text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBoard;