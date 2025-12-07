import React from 'react';
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
            <a href="#legal" className="text-[#4D4D4D] hover:text-white transition-colors">
              {t(translations.footer.legal)}
            </a>
            <a href="#privacy" className="text-[#4D4D4D] hover:text-white transition-colors">
              {t(translations.footer.privacy)}
            </a>
            <a href="#charter" className="text-[#4D4D4D] hover:text-white transition-colors">
              {t(translations.footer.charter)}
            </a>
            <a 
              href="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/zjehyrjs_ANTIGON%20Code%20of%20Conduct%20%26%20Ethics%20-%202025%20%28FR%29.pdf" 
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