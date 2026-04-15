import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Text', value: 300, color: '#8b5cf6' }, 
  { name: 'Call', value: 450, color: '#1e3a34' }, 
  { name: 'Video', value: 250, color: '#22c55e' }, 
];

const StatsBoard = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-100">
        <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">
          By Interaction Type
        </h2>
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
}

export default StatsBoard;

