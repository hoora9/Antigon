import React from 'react';

const Publications = () => {
  const publications = [
    { date: '11/06/2025', title: 'Comment se prémunir des hackers et du vol de nos données sur internet ?' },
    { date: '05/06/2025', title: 'Cybersécurité : Baptiste Robert à La Réunion et à Mayotte pour la deuxième édition du Not[B]Hacked' },
    { date: '30/04/2025', title: 'Des cyberattaques russes identifiées en France' },
    { date: '04/04/2025', title: "Quand les pirates s'attaquent à la double authentification de nos comptes en ligne" },
    { date: '15/03/2025', title: 'Building emotional resilience to fight disinformation' },
    { date: '16/01/2025', title: 'Envie de quitter TikTok pour RedNote ? Faites attention' },
    { date: '15/01/2025', title: 'Privacy of millions worldwide compromised as huge data location broker got hacked' },
    { date: '14/01/2025', title: 'Tinder, Grindr, Candy Crush... des millions de données de géolocalisation ont été piratées' },
    { date: '13/01/2025', title: "A breach of Gravy Analytics' huge trove of location data threatens the privacy of millions" },
    { date: '10/01/2025', title: "Millions of people's 'intimate' location data stolen in major hack" }
  ];

  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-[7.6923%]">
          <div className="mb-12">
            <h1 className="text-5xl font-semibold text-white text-center mb-4">PUBLICATIONS</h1>
            <p className="text-3xl text-[#c9a55a] text-center font-semibold">2025</p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-[#121212] border border-white/25 p-6 rounded-sm hover:border-[#c9a55a] transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-[#c9a55a] font-semibold text-lg flex-shrink-0">{pub.date}:</span>
                  <p className="text-white/85 text-lg">{pub.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;