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
          <p className="font-semibold mb-4 text-white">
            LES DEEPFAKES SONT DE PLUS EN PLUS SOPHISTIQUÉS,<br />
            ET PEUVENT ÊTRE UTILISÉS POUR :
          </p>
          <div className="flex items-start gap-3 mb-6">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Propagande politique, diffamation de personnalités publiques, diffusion de fausses informations, harcèlement ou vengeance numérique, escroqueries ou fraudes financières, des stratégies de détection multi-supports (image, vidéo, audio, texte).
            </p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p className="font-semibold text-white">ANTIGON lutte contre cette menace via :</p>
          </div>
          <p>
            L'expérience en fraude documentaire et des outils puissants pour détecter les artefacts visuels et audio.
          </p>
        </>
      )
    },
    {
      title: "BACKGROUND CHECK",
      subtitle: "COLLECTEUR ET VERIFICATEUR DE DONNÉES",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/crzrcy8x_Screenshot%202025-11-23%20at%2017.13.00.png",
      content: (
        <>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Les background checks, ou vérifications d'antécédents, sont des processus d'enquête visant à collecter et vérifier des informations relatives à une personne. Ils permettent de s'assurer de la véracité des données fournies, telles que les diplômes, les expériences professionnelles, les références, ou encore l'existence éventuelle d'antécédents judiciaires.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              La pratique des background checks selon ANTIGON s'inscrit dans un cadre légal strict, notamment en respectant le Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>
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
            <div className="flex items-start gap-3 mb-4">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <p>
                Se mettre en conformité réglementaire et se prémunir contre les principaux risques de fraude, de réputation ou de corruption pouvant entraîner de lourdes sanctions judiciaires et des pertes financières.
              </p>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <p>
                Décrypter l'environnement stratégique et concurrentiel, appréhender les réseaux d'influence et circuits de décision.
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Service opérationnel d'aide à la décision à destination des services Sûreté et Compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Identifier les menaces</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Vérifier l'honorabilité et la probité de relations d'affaires</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Maîtriser les risques à l'international</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Préservation de preuves numériques</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/avpd5xnl_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span>Appréhender les réseaux d'influence et circuits de décision</span>
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
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Les appareils numériques – ordinateurs, téléphones, tablettes – sont devenus des outils indispensables, mais aussi des points d'entrée privilégiés pour des menaces invisibles.
            </p>
          </div>
          <p className="mb-6">
            Nous réalisons des audits complets de vos équipements afin de garantir qu'ils sont fiables, protégés et exempts de logiciels malveillants ou espions.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
              <span><strong>Contrôle de l'intégrité des appareils :</strong> inspection des systèmes pour détecter toute anomalie ou comportement suspect. <strong>Détection de logiciels espions et intrusifs :</strong> identification de programmes indésirables pouvant compromettre vos données ou vos communications. <strong>Évaluation des paramètres de sécurité :</strong> vérification des configurations, accès, mises à jour et protections installées. <strong>Recommandations pratiques :</strong> mise en place de bonnes pratiques et solutions adaptées pour fiabiliser vos terminaux et limiter les risques futurs.</span>
            </div>
          </div>
          
          <p>
            Chaque audit est accompagné d'un rapport clair et détaillé, indiquant le niveau de sûreté de vos appareils et proposant d'éventuelles mesures correctives concrètes.
          </p>
        </>
      )
    },
    {
      title: "PROTECTION DIGITALE OPÉRATIONNELLE – ADINT",
      subtitle: "ADVERTISING INTELLIGENCE",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/ss5vipnk_2150458977.jpg",
      content: (
        <>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Les appareils numériques – ordinateurs, téléphones, tablettes – sont devenus des outils indispensables, mais aussi des points d'entrée privilégiés pour des menaces invisibles. Nous réalisons des audits complets de vos équipements afin de garantir qu'ils sont fiables, protégés et exempts de logiciels malveillants ou espions.
            </p>
          </div>
          <div className="flex items-start gap-3 mb-6">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Cette technique permet de détecter une présence, d'anticiper une menace et de participer à la protection d'un lieu ou de tiers partout dans le monde entier ; il peut également s'agir de mener des investigations offensives par exemple mais également de lutter contre l'espionnage, les fuites d'information, la concurrence déloyale, etc. Cela permet également de vérifier des liens entre plusieurs « devices » par des recherches croisées « géofencées ».
            </p>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/jnwrqce2_pointille%CC%81s%20Antigon%20multicolor-01.svg" alt="icon" className="w-10 h-10 flex-shrink-0 mt-0.5" />
            <p>
              Dans le cadre de la protection d'un lieu il suffit de tracer sur une carte présente dans la plateforme un « géofencing » du lieu et de rechercher sur des plages de dates l'ensemble des « devices » présents dans cet environnement. La recherche prend seulement quelques minutes. En utilisant les filtres jour/nuit, les recherches sont affinées pour limiter le nombre de « devices » détectés notamment dans un environnement urbain. La présence régulière d'un « device » à des heures « non ouvrées » n'est pas à ce stade un sujet de malveillance mais s'y intéresser permettre de classer le « device-cible » dans un groupe à analyser.
            </p>
          </div>
          <p>
            La recherche permet de remonter les informations concernant l'identité du « device », le nombre de jours sur la zone, l'heure de présence, la marque du « device » (Apple/android) et la précision de localisation.
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
              <ServiceCard key={index} {...service} reversed={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
