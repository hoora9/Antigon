import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, subtitle, content, image, reversed = false }) => {
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
          Je me protège !
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "DEFAC (DEEP FAKE CLEANSING)",
      subtitle: "DÉTECTION ET LUTTE CONTRE LES DEEPFAKES",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/cyps0yhu_medium-shot-futuristic-romantic-couple.png",
      content: (
        <>
          <div className="mb-4">
            <p className="font-semibold mb-3 text-white">LES DEEPFAKES SONT DE PLUS EN PLUS SOPHISTIQUÉS, ET PEUVENT ÊTRE UTILISÉS POUR :</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Propagande politique, diffamation de personnalités publiques</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Diffusion de fausses informations, harcèlement ou vengeance numérique</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Escroqueries ou fraudes financières</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2 text-white">ANTIGON lutte contre cette menace via :</p>
            <p>L'expérience en fraude documentaire et des outils puissants pour détecter les artefacts visuels et audio.</p>
          </div>
        </>
      )
    },
    {
      title: "BACKGROUND CHECK",
      subtitle: "COLLECTEUR ET VERIFICATEUR DE DONNÉES",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/crzrcy8x_Screenshot%202025-11-23%20at%2017.13.00.png",
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Les background checks, ou vérifications d'antécédents, sont des processus d'enquête visant à collecter et vérifier des informations relatives à une personne.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Ils permettent de s'assurer de la véracité des données fournies, telles que les diplômes, les expériences professionnelles, les références, ou encore l'existence éventuelle d'antécédents judiciaires.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>La pratique des background checks selon ANTIGON s'inscrit dans un cadre légal strict, notamment en respectant le Règlement Général sur la Protection des Données (RGPD).</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "SERVICE D'INVESTIGATION",
      subtitle: "OBJECTIF :",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/0p7cbahx_Screenshot%202025-11-23%20at%2017.14.58.png",
      content: (
        <>
          <div className="mb-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/4u1fdecb_contact%28smashicons%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Se mettre en conformité réglementaire et se prémunir contre les principaux risques de fraude, de réputation ou de corruption pouvant entrainer de lourdes sanctions judiciaires et des pertes financières.</span>
              </li>
              <li className="flex items-start gap-3">
                <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/4u1fdecb_contact%28smashicons%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>Décrypter l'environnement stratégique et concurrentiel, appréhender les réseaux d'influence et circuits de décision.</span>
              </li>
            </ul>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Service opérationnel d'aide à la décision à destination des services Sûreté et Compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Identifier les menaces</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Vérifier l'honorabilité et la probité de relations d'affaires</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Maîtriser les risques à l'international</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ciowlz3l_clarte%20uniconlabs-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Préservation de preuves numériques</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "AUDIT DES OUTILS NUMÉRIQUES",
      subtitle: "NOUS TRAQUONS LES FAILLES, VOUS GARDEZ LE CONTRÔLE.",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/nmhzi4dr_2148546897.jpg",
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Les appareils numériques – ordinateurs, téléphones, tablettes – sont devenus des outils indispensables, mais aussi des points d'entrée privilégiés pour des menaces invisibles.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Nous réalisons des audits complets de vos équipements afin de garantir qu'ils sont fiables, protégés et exempts de logiciels malveillants ou espions.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dschb17w_gestion-de-la-reputation%20%28uniconlabs%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Chaque audit est accompagné d'un rapport clair et détaillé, indiquant le niveau de sûreté de vos appareils et proposant d'éventuelles mesures correctives concrètes.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "PROTECTION DIGITALE OPÉRATIONNELLE – ADINT",
      subtitle: "ADVERTISING INTELLIGENCE",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/rabcx72n_location-symbol-with-landscape-background.jpg",
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/4u1fdecb_contact%28smashicons%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Cette technique permet de détecter une présence, d'anticiper une menace et de participer à la protection d'un lieu ou de tiers partout dans le monde entier.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/4u1fdecb_contact%28smashicons%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Il peut également s'agir de mener des investigations offensives par exemple mais également de lutter contre l'espionnage, les fuites d'information, la concurrence déloyale, etc.</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/4u1fdecb_contact%28smashicons%29-01.svg" alt="icon" className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Cela permet également de vérifier des liens entre plusieurs « devices » par des recherches croisées « géofencées ».</span>
            </li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <h1 className="text-5xl font-bold text-white text-center mb-20">Services</h1>
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} reversed={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
