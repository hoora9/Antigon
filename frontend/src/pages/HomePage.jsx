import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const HomePage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black pt-[80px]">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%',
            opacity: 0.14
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-[7.6923%] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 
                className="text-6xl lg:text-7xl font-semibold leading-tight" 
                style={{ letterSpacing: '2px' }}
              >
                {t(translations.home.hero.tagline)}
              </h1>
              
              <a href="#produits" className="btn-primary inline-flex items-center gap-3">
                <span>{t(translations.home.hero.cta)}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            <div className="relative h-[600px] lg:h-[700px] w-full overflow-visible">
              <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
                <Spline 
                  scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Section */}
      <section id="produits" className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-white mb-6">
                {t(translations.products.title)}
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                {t(translations.products.description)}
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q1)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">{t(translations.products.faq.a1_1)}</p>
                    <p className="mb-4">{t(translations.products.faq.a1_2)}</p>
                    <p>{t(translations.products.faq.a1_3)}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q2)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">{t(translations.products.faq.a2_1)}</p>
                    <p>{t(translations.products.faq.a2_2)}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Section */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            {t(translations.products.investigation.title)}
          </h2>

          <div className="mb-12">
            <ul className="space-y-3 text-white/85 text-lg leading-relaxed">
              <li>• Internet ouvert : sites web, blogs, forums, bases de données publiques.</li>
              <li>• Réseaux sociaux : Facebook, X/Twitter, LinkedIn, TikTok, etc.</li>
              <li>• Médias : presse en ligne, télévision, radios.</li>
              <li>• Images et données satellites : cartographie, photos aériennes.</li>
              <li>• Sources institutionnelles : registres officiels, rapports publics, publications académiques.</li>
              <li>• Renseignement publicitaire (ciblage, localisation, etc.)</li>
            </ul>
          </div>

          <div className="mb-16 border-2 border-white p-8 text-center">
            <p className="text-white text-xl font-bold">
              {t(translations.products.investigation.summary)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c9a55a] mb-3">1.</div>
              <h4 className="text-xl font-bold text-white mb-2">{t(translations.products.investigation.step1)}</h4>
              <p className="text-white/85">{t(translations.products.investigation.step1_desc)}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c9a55a] mb-3">2.</div>
              <h4 className="text-xl font-bold text-white mb-2">{t(translations.products.investigation.step2)}</h4>
              <p className="text-white/85">{t(translations.products.investigation.step2_desc)}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c9a55a] mb-3">3.</div>
              <h4 className="text-xl font-bold text-white mb-2">{t(translations.products.investigation.step3)}</h4>
              <p className="text-white/85">{t(translations.products.investigation.step3_desc)}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c9a55a] mb-3">4.</div>
              <h4 className="text-xl font-bold text-white mb-2">{t(translations.products.investigation.step4)}</h4>
              <p className="text-white/85">{t(translations.products.investigation.step4_desc)}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c9a55a] mb-3">5.</div>
              <h4 className="text-xl font-bold text-white mb-2">{t(translations.products.investigation.step5)}</h4>
              <p className="text-white/85">{t(translations.products.investigation.step5_desc)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="space-y-32">
            {/* Service 1: DEFAC */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full aspect-square max-w-md mx-auto">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/cyps0yhu_medium-shot-futuristic-romantic-couple.png" 
                    alt="DEFAC" 
                    className="w-full h-full object-cover rounded-[32px]"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">{t(translations.services.defac.title)}</h3>
                <p className="text-xl text-[#c9a55a] font-semibold mb-6">{t(translations.services.defac.subtitle)}</p>
                <div className="space-y-4 text-white/85 text-base leading-relaxed mb-8">
                  <p className="font-semibold text-white">LES DEEPFAKES SONT DE PLUS EN PLUS SOPHISTIQUÉS, ET PEUVENT ÊTRE UTILISÉS POUR :</p>
                  <div className="flex items-start gap-3">
                    <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <p>Propagande politique, diffamation de personnalités publiques, diffusion de fausses informations, harcèlement ou vengeance numérique, escroqueries ou fraudes financières, des stratégies de détection multi-supports (image, vidéo, audio, texte).</p>
                  </div>
                </div>
                <a href="#devis" className="btn-primary">{t(translations.services.protect)}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-[#070707]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h1 className="text-5xl font-semibold text-white text-center mb-4">{t(translations.publications.title)}</h1>
          <p className="text-3xl text-[#c9a55a] text-center font-semibold mb-12">{t(translations.publications.year)}</p>
          <div className="space-y-6">
            {[
              { date: '11/06/2025', title: 'Comment se prémunir des hackers et du vol de nos données sur internet ?' },
              { date: '05/06/2025', title: 'Cybersécurité : Baptiste Robert à La Réunion et à Mayotte pour la deuxième édition du Not[B]Hacked' }
            ].map((pub, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6 rounded-sm hover:border-[#c9a55a] transition-colors cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[#c9a55a] font-semibold text-lg flex-shrink-0">{pub.date}:</span>
                  <p className="text-white/85 text-lg">{pub.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white mb-8">{t(translations.contact.title)}</h1>
            <p className="text-xl text-white/85">{t(translations.contact.message)}</p>
          </div>
        </div>
      </section>

      {/* Devis Form Section */}
      <section id="devis" className="py-20 bg-[#070707]">
        <div className="max-w-[1000px] mx-auto px-[7.6923%]">
          <h1 className="text-5xl font-semibold text-white text-center mb-6">{t(translations.quote.title)}</h1>
          <p className="text-lg text-white/85 text-center mb-12">{t(translations.quote.subtitle)}</p>

          <form className="space-y-8 bg-[#121212] border border-white/25 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white text-lg font-semibold mb-3">{t(translations.quote.lastName)}</label>
                <input type="text" required className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors rounded-lg" />
              </div>
              <div>
                <label className="block text-white text-lg font-semibold mb-3">{t(translations.quote.firstName)}</label>
                <input type="text" required className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-white text-lg font-semibold mb-3">{t(translations.quote.phone)}</label>
                <input type="tel" required className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors rounded-lg" />
              </div>
              <div>
                <label className="block text-white text-lg font-semibold mb-3">{t(translations.quote.email)}</label>
                <input type="email" required className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-white text-lg font-semibold mb-3">{t(translations.quote.request)}</label>
              <textarea required rows="6" className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors resize-vertical rounded-lg" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary text-lg px-12 py-4">{t(translations.quote.send)}</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;