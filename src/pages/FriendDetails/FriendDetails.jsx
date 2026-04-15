import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPhone, FaCommentDots, FaVideo } from "react-icons/fa";

const FriendDetails = () => {
  const { friendId } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  const GOAL_DAYS = 30;

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => item.id === parseInt(friendId)
        );
        setFriend(found);
      });
  }, [friendId]);

  if (!friend) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // 🔥 Logic
  const daysSince = parseInt(friend.time);

  let status = "";
  if (daysSince > GOAL_DAYS) status = "Overdue";
  else if (daysSince > GOAL_DAYS - 5) status = "Almost Due";
  else status = "On-Track";

  const statusStyle =
    status === "Overdue"
      ? "bg-red-100 text-red-500"
      : status === "Almost Due"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  const nextDueDays = GOAL_DAYS - daysSince;

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">

      {/* 🔙 Back Button */}
      <div className="max-w-5xl w-full">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 rounded-lg bg-[#2aa078] text-white hover:opacity-90 transition"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow p-5 text-center">
          <img
            src={friend.image}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />

          <h2 className="text-lg font-bold">{friend.name}</h2>

          <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusStyle}`}>
            {status}
          </span>

          <div className="mt-2 text-xs text-gray-500">
            {friend.category}
          </div>

          <p className="mt-3 text-sm text-gray-600 italic">
            "Good connection"
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Preferred: email
          </p>

          {/* Actions */}
          <div className="mt-5 space-y-2">
            <button className="w-full py-2 border rounded-lg hover:bg-gray-100">
              Snooze 2 Weeks
            </button>
            <button className="w-full py-2 border rounded-lg hover:bg-gray-100">
              Archive
            </button>
            <button className="w-full py-2 text-red-500 border rounded-lg hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold text-green-600">
                {daysSince}
              </h2>
              <p className="text-xs text-gray-500">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-2xl font-bold text-green-600">
                {GOAL_DAYS}
              </h2>
              <p className="text-xs text-gray-500">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h2 className="text-lg font-semibold">
                {nextDueDays <= 0
                  ? "Today"
                  : `${nextDueDays} days left`}
              </h2>
              <p className="text-xs text-gray-500">
                Next Due
              </p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-bold">{GOAL_DAYS} days</span>
              </p>
            </div>
            <button className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center py-4 border rounded-xl hover:bg-gray-100">
                <FaPhone className="text-xl mb-2" />
                Call
              </button>

              <button className="flex flex-col items-center py-4 border rounded-xl hover:bg-gray-100">
                <FaCommentDots className="text-xl mb-2" />
                Text
              </button>

              <button className="flex flex-col items-center py-4 border rounded-xl hover:bg-gray-100">
                <FaVideo className="text-xl mb-2" />
                Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;