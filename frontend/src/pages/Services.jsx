import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, subtitle, content, image, buttonText = "Je me protège !" }) => {
  return (
    <div className="bg-[#121212] border border-white/25 rounded-sm overflow-hidden">
      {image && (
        <div className="w-full h-64 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-8">
        <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
        {subtitle && <p className="text-xl text-[#c9a55a] mb-6">{subtitle}</p>}
        <div className="space-y-4 text-white/85 text-base leading-relaxed mb-8">
          {content}
        </div>
        <Link to="/devis" className="btn-primary">
          {buttonText}
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
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/8lxe1xbr_Capture%20d%E2%80%99e%CC%81cran%202025-09-28%20a%CC%80%2015.00.12.png",
      content: (
        <>
          <p className="font-semibold mb-3">LES DEEPFAKES SONT DE PLUS EN PLUS SOPHISTIQUÉS, ET PEUVENT ÊTRE UTILISÉS POUR :</p>
          <p className="mb-4">
            Propagande politique, diffamation de personnalités publiques, diffusion de fausses informations, harcèlement ou vengeance numérique, escroqueries ou fraudes financières, des stratégies de détection multi-supports (image, vidéo, audio, texte).
          </p>
          <p className="font-semibold mb-2">ANTIGON lutte contre cette menace via :</p>
          <p>L'expérience en fraude documentaire et des outils puissants pour détecter les artefacts visuels et audio.</p>
        </>
      )
    },
    {
      title: "BACKGROUND CHECK",
      subtitle: "COLLECTEUR ET VERIFICATEUR DE DONNÉES",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/h5fxluhb_keyboard-enlarged-by-loupe.psd",
      content: (
        <>
          <p className="mb-4">
            Les background checks, ou vérifications d'antécédents, sont des processus d'enquête visant à collecter et vérifier des informations relatives à une personne. Ils permettent de s'assurer de la véracité des données fournies, telles que les diplômes, les expériences professionnelles, les références, ou encore l'existence éventuelle d'antécédents judiciaires.
          </p>
          <p>
            La pratique des background checks selon ANTIGON s'inscrit dans un cadre légal strict, notamment en respectant le Règlement Général sur la Protection des Données (RGPD).
          </p>
        </>
      )
    },
    {
      title: "SERVICE D'INVESTIGATION",
      subtitle: "OBJECTIF :",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/arjt8g0d_SCHEMA.psd",
      content: (
        <>
          <div className="mb-6">
            <p className="mb-3">Se mettre en conformité réglementaire et se prémunir contre les principaux risques de fraude, de réputation ou de corruption pouvant entrainer de lourdes sanctions judiciaires et des pertes financières.</p>
            <p>Décrypter l'environnement stratégique et concurrentiel, appréhender les réseaux d'influence et circuits de décision.</p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Service opérationnel d'aide à la décision à destination des services Sûreté et Compliance</li>
            <li>Identifier les menaces</li>
            <li>Vérifier l'honorabilité et la probité de relations d'affaires</li>
            <li>Maîtriser les risques à l'international</li>
            <li>Préservation de preuves numériques</li>
            <li>Appréhender les réseaux d'influence et circuits de décision</li>
          </ul>
        </>
      )
    },
    {
      title: "AUDIT DES OUTILS NUMÉRIQUES",
      subtitle: "NOUS TRAQUONS LES FAILLES, VOUS GARDEZ LE CONTRÔLE.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23000000' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23FFFFFF' font-size='24' font-family='Arial'%3EFRAUD IMAGE%3C/text%3E%3C/svg%3E",
      content: (
        <>
          <p className="mb-4">
            Les appareils numériques – ordinateurs, téléphones, tablettes – sont devenus des outils indispensables, mais aussi des points d'entrée privilégiés pour des menaces invisibles.
          </p>
          <p className="mb-4">
            Nous réalisons des audits complets de vos équipements afin de garantir qu'ils sont fiables, protégés et exempts de logiciels malveillants ou espions.
          </p>
          <p className="mb-6">
            Chaque audit est accompagné d'un rapport clair et détaillé, indiquant le niveau de sûreté de vos appareils et proposant d'éventuelles mesures correctives concrètes.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Contrôle de l'intégrité des appareils : inspection des systèmes pour détecter toute anomalie ou comportement suspect.</li>
            <li>Détection de logiciels espions et intrusifs : identification de programmes indésirables pouvant compromettre vos données ou vos communications.</li>
            <li>Évaluation des paramètres de sécurité : vérification des configurations, accès, mises à jour et protections installées.</li>
            <li>Recommandations pratiques : mise en place de bonnes pratiques et solutions adaptées pour fiabiliser vos terminaux et limiter les risques futurs.</li>
          </ul>
        </>
      )
    },
    {
      title: "PROTECTION DIGITALE OPÉRATIONNELLE – ADINT (ADVERTISING INTELLIGENCE)",
      subtitle: "",
      image: "https://customer-assets.emergentagent.com/job_antigon-cyber/artifacts/dqkrfv3w_location-symbol-with-landscape-background.jpg",
      content: (
        <>
          <p className="mb-4">
            Les appareils numériques – ordinateurs, téléphones, tablettes – sont devenus des outils indispensables, mais aussi des points d'entrée privilégiés pour des menaces invisibles. Nous réalisons des audits complets de vos équipements afin de garantir qu'ils sont fiables, protégés et exempts de logiciels malveillants ou espions.
          </p>
          <p className="mb-4">
            Cette technique permet de détecter une présence, d'anticiper une menace et de participer à la protection d'un lieu ou de tiers partout dans le monde entier ; il peut également s'agir de mener des investigations offensives par exemple mais également de lutter contre l'espionnage, les fuites d'information, la concurrence déloyale, etc. Cela permet également de vérifier des liens entre plusieurs « devices » par des recherches croisées « géofencées ».
          </p>
          <p className="mb-4">
            Dans le cadre de la protection d'un lieu il suffit de tracer sur une carte présente dans la plate-forme un « géofencing » du lieu et de rechercher sur des plages de dates l'ensemble des « devices » présents dans cet environnement. La recherche prend seulement quelques minutes. En utilisant les filtres jour/nuit, les recherches sont affinées pour limiter le nombre de « devices » détectés notamment dans un environnement urbain. La présence régulière d'un « device » à des heures « non ouvrées » n'est pas à ce stade un sujet de malveillance mais s'y intéresser permettra de classer le « device-cible » dans un groupe à analyser.
          </p>
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
          <h1 className="text-5xl font-semibold text-white text-center mb-16">Services</h1>
          
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;