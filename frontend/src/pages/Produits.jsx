import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Produits = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black pt-[80px]">
      {/* Two Column Layout */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Qui sommes nous */}
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-white mb-6">
                {t(translations.products.title)}
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                {t(translations.products.description)}
              </p>
            </div>

            {/* Right Column: Accordion FAQ */}
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q1)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      {t(translations.products.faq.a1_1)}
                    </p>
                    <p className="mb-4">
                      {t(translations.products.faq.a1_2)}
                    </p>
                    <p>
                      {t(translations.products.faq.a1_3)}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q2)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      {t(translations.products.faq.a2_1)}
                    </p>
                    <p>
                      {t(translations.products.faq.a2_2)}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q3)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      {t(translations.products.faq.a3_1)}
                    </p>
                    <p className="mb-4">
                      {t(translations.products.faq.a3_2)}
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold mb-3">{t(translations.products.faq.a3_3_title)}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {t(translations.products.faq.a3_3_list).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q4)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-white/25">
                            <th className="text-left py-3 px-4 font-semibold">{t(translations.products.faq.a4_table_headers)[0]}</th>
                            <th className="text-left py-3 px-4 font-semibold">{t(translations.products.faq.a4_table_headers)[1]}</th>
                            <th className="text-left py-3 px-4 font-semibold">{t(translations.products.faq.a4_table_headers)[2]}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/25">
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_passive.type)}</td>
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_passive.desc)}</td>
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_passive.risks)}</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_active.type)}</td>
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_active.desc)}</td>
                            <td className="py-3 px-4">{t(translations.products.faq.a4_table_active.risks)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold mb-3">{t(translations.products.faq.a4_sources_title)}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {t(translations.products.faq.a4_sources_list).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    {t(translations.products.faq.q5)}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      {t(translations.products.faq.a5_1)}
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold mb-3">{t(translations.products.faq.a5_2_title)}</p>
                      <ul className="list-disc list-inside space-y-2">
                        {t(translations.products.faq.a5_2_list).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Numérique Section */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            {t(translations.products.investigation.title)}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Left Column: Sources */}
            <div className="lg:col-span-5">
              <ul className="space-y-3 text-white/85 text-lg leading-relaxed">
                <li>{t({ fr: '• Internet ouvert : sites web, blogs, forums, bases de données publiques.', en: '• Open internet: websites, blogs, forums, public databases.' })}</li>
                <li>{t({ fr: '• Réseaux sociaux : Facebook, X/Twitter, LinkedIn, TikTok, etc.', en: '• Social networks: Facebook, X/Twitter, LinkedIn, TikTok, etc.' })}</li>
                <li>{t({ fr: '• Médias : presse en ligne, télévision, radios.', en: '• Media: online press, television, radio.' })}</li>
                <li>{t({ fr: '• Images et données satellites : cartographie, photos aériennes.', en: '• Satellite images and data: mapping, aerial photos.' })}</li>
                <li>{t({ fr: '• Sources institutionnelles : registres officiels, rapports publics, publications académiques.', en: '• Institutional sources: official registers, public reports, academic publications.' })}</li>
                <li>{t({ fr: '• Renseignement publicitaire (ciblage, localisation, etc.)', en: '• Advertising intelligence (targeting, location, etc.)' })}</li>
              </ul>
              
              {/* Arrow Down */}
              <div className="flex justify-center my-8">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  <path d="M7.41 12.59L12 17.17l4.59-4.58L18 14l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </div>
              
              <p className="text-center text-white font-semibold text-lg mb-4">
                {t({ fr: 'Sélection, recoupement, analyse et exploitation', en: 'Selection, cross-referencing, analysis and exploitation' })}
              </p>
              
              {/* Arrow Down */}
              <div className="flex justify-center mb-8">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  <path d="M7.41 12.59L12 17.17l4.59-4.58L18 14l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </div>
              
              <p className="text-white/85 text-lg leading-relaxed">
                • {t({ fr: 'Les risques sont ', en: 'Risks are ' })}
                <span className="text-white font-bold">{t({ fr: 'maîtrisés', en: 'controlled' })}</span>
                {t({ fr: ', la probité des employés est ', en: ', employee integrity is ' })}
                <span className="text-white font-bold">{t({ fr: 'objectivée', en: 'objectified' })}</span>
                {t({ fr: ', la concurrence est ', en: ', competition is ' })}
                <span className="text-white font-bold">{t({ fr: 'modélisée', en: 'modeled' })}</span>
                {t({ fr: ', la e-réputation est ', en: ', e-reputation is ' })}
                <span className="text-white font-bold">{t({ fr: 'monitorée', en: 'monitored' })}</span>
                {t({ fr: ', l\'environnement est ', en: ', the environment is ' })}
                <span className="text-white font-bold">{t({ fr: 'surveillé', en: 'surveilled' })}</span>.
              </p>
            </div>

            {/* Middle Column: Vertical Timeline */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-white/30 transform -translate-x-1/2"></div>
                
                {/* Numbered Circles - aligned with step titles */}
                <div className="relative space-y-[5.5rem]">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex justify-center">
                      <div className="relative z-10 w-12 h-12 rounded-full border-2 border-white bg-black flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{num}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: 5 Steps with Icons */}
            <div className="lg:col-span-5 space-y-24">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#c9a55a] mb-1">{t(translations.products.investigation.step1)}</h4>
                  <p className="text-white/85 text-lg">{t(translations.products.investigation.step1_desc)}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#c9a55a] mb-1">{t(translations.products.investigation.step2)}</h4>
                  <p className="text-white/85 text-lg">{t(translations.products.investigation.step2_desc)}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#c9a55a] mb-1">{t(translations.products.investigation.step3)}</h4>
                  <p className="text-white/85 text-lg">{t(translations.products.investigation.step3_desc)}</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#c9a55a] mb-1">{t(translations.products.investigation.step4)}</h4>
                  <p className="text-white/85 text-lg">{t(translations.products.investigation.step4_desc)}</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#c9a55a] mb-1">{t(translations.products.investigation.step5)}</h4>
                  <p className="text-white/85 text-lg">{t(translations.products.investigation.step5_desc)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="border-2 border-white p-8 text-center">
            <p className="text-[#c9a55a] text-xl font-bold">
              {t(translations.products.investigation.summary)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;
