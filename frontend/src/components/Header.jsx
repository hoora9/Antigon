import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const isActive = (path) => {
    return location.pathname === path || location.hash === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/25" style={{ height: '80px' }}>
      <div className="max-w-[1400px] mx-auto px-[7.6923%] h-full flex items-center justify-between">
        {/* Logo - 2X BIGGER */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/mu66lgr3_LOGO%20ANTIGON%20BLANC_1-01.svg" 
            alt="ANTIGON" 
            className="h-20 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/#apropos" 
            className={`text-lg font-normal transition-colors ${
              isActive('/#apropos') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D] hover:text-white'
            }`}
          >
            {t(translations.nav.about)}
          </Link>
          <Link 
            to="/produits" 
            className={`text-lg font-normal transition-colors ${
              isActive('/produits') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D] hover:text-white'
            }`}
          >
            {t(translations.nav.products)}
          </Link>
          <Link 
            to="/services" 
            className={`text-lg font-normal transition-colors ${
              isActive('/services') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D] hover:text-white'
            }`}
          >
            {t(translations.nav.services)}
          </Link>
          <Link 
            to="/contact" 
            className={`text-lg font-normal transition-colors ${
              isActive('/contact') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D] hover:text-white'
            }`}
          >
            {t(translations.nav.contact)}
          </Link>
          <Link 
            to="/publications" 
            className={`text-lg font-normal transition-colors ${
              isActive('/publications') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D] hover:text-white'
            }`}
          >
            {t(translations.nav.publications)}
          </Link>
          <LanguageToggle />
          <Link 
            to="/devis" 
            className="btn-primary"
          >
            {t(translations.nav.getQuote)}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-black border-b border-white/25 py-4">
          <nav className="flex flex-col gap-4 px-[7.6923%]">
            <Link 
              to="/#apropos" 
              className={`text-lg font-normal ${
                isActive('/#apropos') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              A Propos
            </Link>
            <Link 
              to="/produits" 
              className={`text-lg font-normal ${
                isActive('/produits') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link 
              to="/services" 
              className={`text-lg font-normal ${
                isActive('/services') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-normal ${
                isActive('/contact') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/publications" 
              className={`text-lg font-normal ${
                isActive('/publications') ? 'text-[#6FD2C0]' : 'text-[#4D4D4D]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Publications
            </Link>
            <Link 
              to="/devis" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Demander un Devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;