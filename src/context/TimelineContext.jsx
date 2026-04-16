import { createContext, useState, useEffect } from "react";
import { Phone, MessageSquare, Video, Users } from "lucide-react";

export const TimelineContext = createContext();

const getIcon = (type) => {
  switch (type) {
    case "Call":
      return <Phone size={18} className="text-gray-500" />;
    case "Text":
      return <MessageSquare size={18} className="text-gray-500" />;
    case "Video":
      return <Video size={18} className="text-gray-500" />;
    default:
      return <Users size={18} className="text-yellow-600" />;
  }
};

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // 🔥 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("timeline");
    if (saved) {
      setTimeline(JSON.parse(saved));
    }
  }, []);

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addToTimeline = (type, person) => {
    const newItem = {
      type,
      person,
      date: new Date().toLocaleDateString(),
      iconType: type, // 🔥 important (icon JSX save করা যায় না)
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline, getIcon }}>
      {children}
    </TimelineContext.Provider>
  );
};