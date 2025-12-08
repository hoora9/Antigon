import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-white/25 py-6">
      <div className="max-w-[1400px] mx-auto px-[7.6923%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
            <Link to="/mentions-legales" className="text-[#4D4D4D] hover:text-white transition-colors">
              {t(translations.footer.legal)}
            </Link>
            <Link to="/politique" className="text-[#4D4D4D] hover:text-white transition-colors">
              {t(translations.footer.privacy)}
            </Link>
            <a 
              href={t(translations.footer.charterUrl)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4D4D4D] hover:text-white transition-colors"
            >
              {t(translations.footer.charter)}
            </a>
            <a 
              href={t(translations.footer.conductUrl)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4D4D4D] hover:text-white transition-colors"
            >
              {t(translations.footer.conduct)}
            </a>
          </div>
          
          {/* Right Side - Copyright */}
          <div className="text-sm text-[#4D4D4D]">
            {t(translations.footer.copyright)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;