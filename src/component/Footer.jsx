import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // react-icons install kora thakle

const Footer = () => {
  return (
    <footer className="bg-[#1a3d32] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo / Title */}
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        
        {/* Tagline */}
        <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-medium tracking-wider uppercase">Social Links</span>
          <div className="flex gap-4">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            {/* Facebook */}
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            {/* Twitter/X */}
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;