import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { CheckCircle2, Shield, Eye, Lock, TrendingUp } from 'lucide-react';

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

      {/* Investigation Timeline Section */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h2 className="text-4xl font-semibold text-white text-center mb-16">
            INVESTIGATION NUMÉRIQUE
          </h2>

          {/* Sources */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Sources:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/85 text-base">
              <li>• Internet ouvert : sites web, blogs, forums, bases de données publiques.</li>
              <li>• Réseaux sociaux : Facebook, X/Twitter, LinkedIn, TikTok, etc.</li>
              <li>• Médias : presse en ligne, télévision, radios.</li>
              <li>• Images et données satellites : cartographie, photos aériennes.</li>
              <li>• Sources institutionnelles : registres officiels, rapports publics, publications académiques.</li>
              <li>• Renseignement publicitaire (ciblage, localisation, etc.)</li>
            </ul>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9a55a] via-[#c9a55a] to-transparent" style={{ transform: 'translateX(-50%)' }} />

            <div className="space-y-16">
              {[
                { number: 1, title: 'VÉRIFIER', description: "l'intégrité de partenaires et fournisseurs.", icon: CheckCircle2 },
                { number: 2, title: 'SÉCURISER', description: 'les recrutements grâce au criblage.', icon: Shield },
                { number: 3, title: 'SURVEILLER', description: 'la concurrence et anticiper leurs mouvements.', icon: Eye },
                { number: 4, title: 'PROTÉGER', description: 'votre réputation en détectant signaux faibles et campagnes hostiles.', icon: Lock },
                { number: 5, title: 'ANALYSER', description: 'les risques pays avant vos implantations internationales.', icon: TrendingUp }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Number Circle */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#c9a55a] flex items-center justify-center text-black text-2xl font-bold mx-0 md:mx-auto">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-[#121212] border border-white/25 p-6 rounded-sm">
                      <div className="flex items-center gap-4 mb-2">
                        <Icon className="w-6 h-6 text-[#c9a55a]" />
                        <h4 className="text-2xl font-semibold text-white">{step.title}</h4>
                      </div>
                      <p className="text-white/85 text-lg">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Description */}
          <div className="mt-16 text-center">
            <p className="text-xl font-semibold text-white mb-4">Sélection, recoupement, analyse et exploitation</p>
            <p className="text-lg text-white/85 mb-8">
              Les risques sont maîtrisés, la probité des employés est objectivée, la concurrence est modélisée, la e-réputation est monitorée, l'environnement est surveillé.
            </p>
            <div className="inline-block bg-[#c9a55a] text-black px-8 py-4 font-bold text-lg">
              EN RÉSUMÉ : L'OSINT TRANSFORME L'INFORMATION PUBLIQUE EN AVANTAGE STRATÉGIQUE POUR VOTRE ENTREPRISE.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produits;