import React, { useState, useEffect } from "react";
import { FaHome, FaChartBar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const base =
    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200";

  const getLinkClass = ({ isActive }) =>
    `${base} ${
      isActive
        ? "bg-[#2aa078] text-white shadow-md scale-[1.03]"
        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
       
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800">
          Keen<span className="text-[#2aa078]">Keeper</span>
        </Link>

      
        <ul className="hidden md:flex items-center gap-3">
          <li>
            <NavLink to="/" className={getLinkClass}>
              <FaHome /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={getLinkClass}>
              <FiClock /> Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/StatsBoard" className={getLinkClass}>
              <FaChartBar /> Stats
            </NavLink>
          </li>
        </ul>

      
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

   
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
     
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl hover:text-red-500"
          >
            ✕
          </button>
        </div>

       
        <div className="p-4 flex flex-col gap-3">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={getLinkClass}
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setIsOpen(false)}
            className={getLinkClass}
          >
            <FiClock /> Timeline
          </NavLink>

          <NavLink
            to="/StatsBoard"
            onClick={() => setIsOpen(false)}
            className={getLinkClass}
          >
            <FaChartBar /> Stats
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;