import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all";
  const activeStyle = "bg-[#2aa078] text-white";
  const normalStyle = "bg-gray-100 hover:bg-gray-200 text-gray-800";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
      
        <a href="/" className="text-xl md:text-2xl font-bold text-gray-800">
          Keen<span className="text-[#2aa078]">Keeper</span>
        </a>

   
        <ul className="hidden md:flex items-center gap-3">
          <li>
            <Link to="/" className={`${linkStyle} ${activeStyle}`}>
              {/* Home Icon */}
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link to="/timeline" className={`${linkStyle} ${normalStyle}`}>
              <FiClock />
              Timeline
            </Link>
          </li>

          <li>
            <Link to="/stats" className={`${linkStyle} ${normalStyle}`}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
                <path d="M18 17V9"/>
                <path d="M13 17V5"/>
                <path d="M8 17v-3"/>
              </svg>
              Stats
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 bg-white rounded-xl shadow p-3">
            <li>
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className={`${linkStyle} ${activeStyle}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/timeline"
                onClick={() => setIsOpen(false)}
                className={`${linkStyle} ${normalStyle}`}
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="/stats"
                onClick={() => setIsOpen(false)}
                className={`${linkStyle} ${normalStyle}`}
              >
                Stats
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
