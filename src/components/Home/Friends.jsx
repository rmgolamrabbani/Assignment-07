import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
const getStatusColor = (status) => {
  switch (status) {
    case "Overdue": return "bg-red-500 text-white";
    case "On-Track": return "bg-green-600 text-white";
    case "Almost Due": return "bg-yellow-400 text-white";
    default: return "bg-gray-300";
  }
};

const getCategoryColor = (cat) => {
  switch (cat) {
    case "WORK": return "bg-green-100 text-green-700";
    case "FAMILY": return "bg-pink-100 text-pink-600";
    default: return "bg-gray-100 text-gray-600";
  }
};

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
     <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto bg-gray-100">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Your Friends</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {friends.map((friend) => (
         
          <Link to={`/Friends/${friend.id}`} key={friend.id}>
            <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md transition cursor-pointer border border-transparent hover:border-blue-200">
              <img
                src={friend.image}
                alt={friend.name}
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />

              <h3 className="mt-3 font-semibold text-gray-800">{friend.name}</h3>
              <p className="text-sm text-gray-400">{friend.time}</p>

              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(friend.category)}`}>
                  {friend.category}
                </span>
              </div>

              <div className="mt-3">
                <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(friend.status)}`}>
                  {friend.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </div>
   
  );
};

export default Friends;