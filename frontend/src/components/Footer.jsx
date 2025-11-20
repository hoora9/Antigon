import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/25 py-6">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
            <Link to="/mentions-legales" className="text-[#4D4D4D] hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique" className="text-[#4D4D4D] hover:text-white transition-colors">
              Politique de protection des données
            </Link>
            <Link to="/charte" className="text-[#4D4D4D] hover:text-white transition-colors">
              Charte éthique
            </Link>
            <Link to="/code" className="text-[#4D4D4D] hover:text-white transition-colors">
              Code de conduite
            </Link>
          </div>
          
          {/* Right Side - Copyright */}
          <div className="text-sm text-[#4D4D4D]">
            ANTIGON 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;