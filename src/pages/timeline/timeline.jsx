import React, { useState, useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext.jsx";

const Timeline = () => {
  const { timeline, getIcon } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

    
    
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 border px-3 py-2 rounded"
      >
        <option value="All">All</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
        <option value="Call">Call</option>
      </select>

     
      <div className="space-y-3">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded shadow"
          >
            <div className="mr-3">
              {getIcon(item.iconType)}
            </div>

            <div>
              <p className="text-sm">
                <b>{item.type}</b> with {item.person}
              </p>
              <p className="text-xs text-gray-400">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;


