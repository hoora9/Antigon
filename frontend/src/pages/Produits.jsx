import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Produits = () => {
  return (
    <div className="min-h-screen bg-black pt-[80px]">
      {/* Two Column Layout */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Qui sommes nous */}
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-white mb-6">
                Qui sommes nous ?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                ANTIGON est une Entreprise de Services de Sûreté et de Défense (ESSD) qui s'inscrit dans le continuum sécurité-défense, à la croisée du secteur public et du privé. ANTIGON incarne une réponse moderne et agile qui s'adapte à la demande sécuritaire en agissant comme ensemblier ou agrégateur, capable de traiter des problématiques complexes intégrant des prestations multi-domaines.
              </p>
            </div>

            {/* Right Column: Accordion FAQ */}
            <div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    Qu'est ce que l'OSINT ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      Derrière les lettres OSINT se cache une immense masse de données qui ont un point commun essentiel : elles sont toutes accessibles publiquement et leur acquisition est légale et non intrusive. On parle ici d'informations accessibles et non classifiées.
                    </p>
                    <p className="mb-4">
                      L'OSINT, très précisément, c'est l'Open Source Intelligence ou en français l'acronyme ROSO (Renseignement d'Origine Sources Ouvertes). Il désigne la capacité d'acquérir et d'analyser des données publiques pour en tirer des prévisions ou une meilleure compréhension d'un phénomène ou d'une situation.
                    </p>
                    <p>
                      Il ne s'agit pas seulement de "googler" une requête, mais d'exploiter méthodiquement des sources ouvertes (sites web, réseaux sociaux, bases de données, forums, documents publics, fuites, etc.) pour produire un renseignement actionnable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    A quoi sert l'OSINT ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      Il est relativement aisé de comprendre l'intérêt stratégique que peut représenter l'analyse des données publiques dans le domaine cyber. Mais l'OSINT trouve des applications bien au-delà de la seule question des attaques informatiques.
                    </p>
                    <p>
                      L'OSINT est mise à profit pour la lutte contre le terrorisme, les cybermenaces, les pratiques financières frauduleuses, l'usurpation, la désinformation et toutes formes d'activités illégales. Il s'agit donc d'une cellule d'activité aussi précieuse pour les États que pour les entreprises.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    Quelles informations recouvrent l'OSINT?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      La mise en place et le développement de l'OSINT est en lien direct avec le contexte international actuel : c'est bien parce que nous vivons à l'ère de l'information, de la sur-numérisation et du tout digital que l'OSINT trouve matière à exister. Ce sont les milliers d'échanges qui ont lieu entre des milliards d'individus au jour le jour sur Internet qui fait apparaître, dans la sphère numérique, une multitude de données accessibles publiquement.
                    </p>
                    <p className="mb-4">
                      Cet océan de données représente une source de renseignements inouïe. Outre le travail d'analyse et de recherche en soi, le terme d'OSINT désigne aussi directement ce volume d'informations colossal.
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold mb-3">L'OSINT est un outil stratégique pour :</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>La cybersécurité (recherche d'identifiants compromis, shadow IT, cartographie d'infrastructure),</li>
                        <li>La sûreté (profilage de menaces, veille réputationnelle, cartographie humaine),</li>
                        <li>L'intelligence économique (veille concurrentielle, due diligence),</li>
                        <li>Les forces de l'ordre (lutte contre le terrorisme, la fraude, les trafics),</li>
                        <li>Les entreprises sensibles (détection de signaux faibles, risques pays, fuites internes).</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    Quels sont les types d'OSINT?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-white/25">
                            <th className="text-left py-3 px-4 font-semibold">TYPE</th>
                            <th className="text-left py-3 px-4 font-semibold">DESCRIPTION</th>
                            <th className="text-left py-3 px-4 font-semibold">RISQUES</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/25">
                            <td className="py-3 px-4">OSINT Passif</td>
                            <td className="py-3 px-4">Collecte de données publiquement accessibles sans interaction avec la cible</td>
                            <td className="py-3 px-4">Discrétion maximale, mais risque de données obsolètes</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">OSINT Actif</td>
                            <td className="py-3 px-4">Utilisation d'outils de scan ou d'interaction directe (par exemple via un crawler ou une requête DNS)</td>
                            <td className="py-3 px-4">Moins discret, risque de détection par la cible</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold mb-3">Quelles sont les sources OSINT les plus courantes ?</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Web ouvert (sites institutionnels, presse, données légales)</li>
                        <li>Réseaux sociaux (LinkedIn, X/Twitter, Telegram, TikTok)</li>
                        <li>Données techniques (Shodan, Censys, PublicWWW, GitHub)</li>
                        <li>Bases de leaks (HaveIBeenPwned, Bayonet, Pastebin, forums)</li>
                        <li>Données gouvernementales (marchés publics, brevets, registres légaux)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-white/25 bg-[#121212] rounded-sm">
                  <AccordionTrigger className="px-6 py-4 text-white text-lg font-semibold hover:no-underline">
                    En quoi la plateforme ANTIGON est-elle différente des autres ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-white/85 text-base leading-relaxed">
                    <p className="mb-4">
                      ANTIGON n'est pas seulement une plateforme OSINT, Il s'agit d'une plateforme holistique de WEBINT qui cumule GEOINT (imagerie satellite), ADINT (Advertising Intel), SOCMINT (Social Media Intel) & FININT (Financial Intel) dans une solution modulaire et enrichie par de l'IA.
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold mb-3">ANTIGON – une couverture complète de l'empreinte numérique :</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Extraction automatisée de la «signature digitale» d'un individu ou groupe.</li>
                        <li>Recherche par : nom, pseudo, téléphone, email, adresse IP, portefeuille crypto, réseaux sociaux, etc.</li>
                        <li>Cartographie relationnelle & chronologie automatisées.</li>
                        <li>Sémantisation, catégorisation, OCR (Reconnaissance Faciale Intégrée).</li>
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
            INVESTIGATION NUMÉRIQUE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Left Column: Sources */}
            <div className="lg:col-span-5">
              <ul className="space-y-3 text-white/85 text-lg leading-relaxed">
                <li>• Internet ouvert : sites web, blogs, forums, bases de données publiques.</li>
                <li>• Réseaux sociaux : Facebook, X/Twitter, LinkedIn, TikTok, etc.</li>
                <li>• Médias : presse en ligne, télévision, radios.</li>
                <li>• Images et données satellites : cartographie, photos aériennes.</li>
                <li>• Sources institutionnelles : registres officiels, rapports publics, publications académiques.</li>
                <li>• Renseignement publicitaire (ciblage, localisation, etc.)</li>
              </ul>
              
              {/* Arrow Down */}
              <div className="flex justify-center my-8">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  <path d="M7.41 12.59L12 17.17l4.59-4.58L18 14l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </div>
              
              <p className="text-center text-white font-semibold text-lg mb-4">
                Sélection, recoupement, analyse et exploitation
              </p>
              
              {/* Arrow Down */}
              <div className="flex justify-center mb-8">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  <path d="M7.41 12.59L12 17.17l4.59-4.58L18 14l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </div>
              
              <p className="text-white/85 text-lg leading-relaxed">
                • Les risques sont <span className="text-white font-bold">maîtrisés</span>, la probité des employés est <span className="text-white font-bold">objectivée</span>, la concurrence est <span className="text-white font-bold">modélisée</span>, la e-réputation est <span className="text-white font-bold">monitorée</span>, l'environnement est <span className="text-white font-bold">surveillé</span>.
              </p>
            </div>

            {/* Middle Column: Vertical Timeline */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform -translate-x-1/2"></div>
                
                {/* Numbered Circles */}
                <div className="relative space-y-32">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex justify-center">
                      <div className="relative z-10 w-16 h-16 rounded-full border-2 border-white bg-black flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{num}</span>
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
                  <h4 className="text-xl font-bold text-white mb-1">VÉRIFIER</h4>
                  <p className="text-white/85 text-base">l'intégrité de partenaires et fournisseurs.</p>
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
                  <h4 className="text-xl font-bold text-white mb-1">SÉCURISER</h4>
                  <p className="text-white/85 text-base">les recrutements grâce au criblage.</p>
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
                  <h4 className="text-xl font-bold text-white mb-1">SURVEILLER</h4>
                  <p className="text-white/85 text-base">la concurrence et anticiper leurs mouvements.</p>
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
                  <h4 className="text-xl font-bold text-white mb-1">PROTÉGER</h4>
                  <p className="text-white/85 text-base">votre réputation en détectant signaux faibles et campagnes hostiles.</p>
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
                  <h4 className="text-xl font-bold text-white mb-1">ANALYSER</h4>
                  <p className="text-white/85 text-base">les risques pays avant vos implantations internationales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="border-2 border-white p-8 text-center">
            <p className="text-white text-xl font-bold">
              EN RÉSUMÉ : L'OSINT TRANSFORME L'INFORMATION PUBLIQUE EN AVANTAGE STRATÉGIQUE POUR VOTRE ENTREPRISE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;