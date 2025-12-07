import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white mb-8">{t(translations.contact.title)}</h1>
            <p className="text-xl text-white/85">
              {t(translations.contact.message)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;