import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const ServiceCard = ({ title, subtitle, content, image, reversed = false, protectText }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image on Left (or Right if reversed) */}
      <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="w-full aspect-square max-w-md mx-auto">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-[32px]"
          />
        </div>
      </div>

      {/* Text Content on Right (or Left if reversed) */}
      <div className={`${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
        {subtitle && <p className="text-xl text-[#c9a55a] font-semibold mb-6">{subtitle}</p>}
        
        <div className="space-y-4 text-white/85 text-base leading-relaxed mb-8">
          {content}
        </div>

        <Link to="/devis" className="btn-primary">
          {protectText}
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t(translations.services.defac.title),
      subtitle: t(translations.services.defac.subtitle),
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/cyps0yhu_medium-shot-futuristic-romantic-couple.png",
      content: (
        <>
          <p className="font-semibold mb-4 text-white">
            {t(translations.services.defac.warning).split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </p>
          <div className="flex items-start gap-3 mb-6">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.defac.content1)}
            </p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-white">{t(translations.services.defac.fight)}</p>
          </div>
          <p>
            {t(translations.services.defac.content2)}
          </p>
        </>
      )
    },
    {
      title: t(translations.services.backgroundCheck.title),
      subtitle: t(translations.services.backgroundCheck.subtitle),
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/crzrcy8x_Screenshot%202025-11-23%20at%2017.13.00.png",
      content: (
        <>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.backgroundCheck.content1)}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.backgroundCheck.content2)}
            </p>
          </div>
        </>
      )
    },
    {
      title: t(translations.services.investigation.title),
      subtitle: t(translations.services.investigation.subtitle),
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/0p7cbahx_Screenshot%202025-11-23%20at%2017.14.58.png",
      content: (
        <>
          <div className="mb-6">
            <div className="flex items-start gap-3 mb-4">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <p>
                {t(translations.services.investigation.obj1)}
              </p>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <p>
                {t(translations.services.investigation.obj2)}
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {t(translations.services.investigation.list).map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: t(translations.services.audit.title),
      subtitle: t(translations.services.audit.subtitle),
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/nmhzi4dr_2148546897.jpg",
      content: (
        <>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.audit.content1)}
            </p>
          </div>
          <p className="mb-6">
            {t(translations.services.audit.content2)}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>{t(translations.services.audit.content3)}</span>
            </div>
          </div>
          
          <p>
            {t(translations.services.audit.content4)}
          </p>
        </>
      )
    },
    {
      title: t(translations.services.adint.title),
      subtitle: t(translations.services.adint.subtitle),
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ss5vipnk_2150458977.jpg",
      content: (
        <>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.adint.content1)}
            </p>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.adint.content2)}
            </p>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              {t(translations.services.adint.content3)}
            </p>
          </div>
          <p>
            {t(translations.services.adint.content4)}
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          {/* NO TITLE "Services" */}
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                reversed={index % 2 === 1} 
                protectText={t(translations.services.protect)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
