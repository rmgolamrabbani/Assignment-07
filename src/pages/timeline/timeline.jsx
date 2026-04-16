import React, { useState } from 'react';
import { Phone, MessageSquare, Video, Users } from 'lucide-react';

const timelineData = [
  { type: 'Meetup', person: 'Tom Baker', date: 'March 29, 2026', icon: <Users size={18} className="text-yellow-600" /> },
  { type: 'Text', person: 'Sarah Chen', date: 'March 28, 2026', icon: <MessageSquare size={18} className="text-gray-500" /> },
  { type: 'Meetup', person: 'Olivia Martinez', date: 'March 25, 2026', icon: <Users size={18} className="text-yellow-600" /> },
  { type: 'Video', person: 'Aisha Patel', date: 'March 23, 2026', icon: <Video size={18} className="text-gray-500" /> },
  { type: 'Meetup', person: 'Sarah Chen', date: 'March 21, 2026', icon: <Users size={18} className="text-yellow-600" /> },
  { type: 'Call', person: 'Marcus Johnson', date: 'March 19, 2026', icon: <Phone size={18} className="text-gray-500" /> },
  { type: 'Meetup', person: 'Aisha Patel', date: 'March 17, 2026', icon: <Users size={18} className="text-yellow-600" /> },
  { type: 'Text', person: 'Olivia Martinez', date: 'March 13, 2026', icon: <MessageSquare size={18} className="text-gray-500" /> },
  { type: 'Call', person: 'Lisa Nakamura', date: 'March 11, 2026', icon: <Phone size={18} className="text-gray-500" /> },
  { type: 'Call', person: 'Sarah Chen', date: 'March 11, 2026', icon: <Phone size={18} className="text-gray-500" /> },
  { type: 'Video', person: 'Marcus Johnson', date: 'March 5, 2026', icon: <Video size={18} className="text-gray-500" /> },
  { type: 'Video', person: "Ryan O'Brien", date: 'February 24, 2026', icon: <Video size={18} className="text-gray-500" /> },
];

const Timeline = () => {
  const [filter, setFilter] = useState("All");


  const filteredData =
    filter === "All"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Timeline</h1>

 
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 text-gray-500 text-sm rounded-md px-3 py-2 w-48 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
          <option value="Call">Call</option>
          <option value="Meetup">Meetup</option>
        </select>
      </div>

    
      <div className="space-y-3">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md cursor-pointer"
          >
            <div className="mr-4 p-2 bg-gray-50 rounded-full">
              {item.icon}
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-800">
                <span className="font-semibold">{item.type}</span>
                <span className="text-gray-500 ml-1">with {item.person}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;