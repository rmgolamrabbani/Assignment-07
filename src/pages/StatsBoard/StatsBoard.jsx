import React, { useContext } from 'react';
import { TimelineContext } from "../../context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const StatsBoard = () => {

  const { timeline } = useContext(TimelineContext);

  const textCount = timeline.filter(item => item.type === "Text").length;
  const callCount = timeline.filter(item => item.type === "Call").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const data = [
    { name: 'Text', value: textCount, color: '#8b5cf6' },
    { name: 'Call', value: callCount, color: '#1e3a34' },
    { name: 'Video', value: videoCount, color: '#22c55e' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-sm border h-100">
        <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase">
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
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsBoard;