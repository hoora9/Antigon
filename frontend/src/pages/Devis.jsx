import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    requete: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/send-devis`, formData);
      
      if (response.data.success) {
        toast.success('Votre demande de devis a été envoyée avec succès !');
        setFormData({
          nom: '',
          prenom: '',
          tel: '',
          email: '',
          requete: ''
        });
      } else {
        toast.error('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error sending devis:', error);
      toast.error('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-[80px]">
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-[7.6923%]">
          <h1 className="text-5xl font-semibold text-white text-center mb-6">
            DEMANDER UN DEVIS
          </h1>
          <p className="text-lg text-white/85 text-center mb-12">
            ANTIGON FAIT DE VOTRE SATISFACTION UNE PRIORITÉ, EXPOSEZ-NOUS VOTRE REQUÊTE, NOUS REVIENDRONS VERS VOUS AVEC UN DEVIS CLAIR ET SIMPLE :
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 bg-[#121212] border border-white/25 p-8 md:p-12 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="nom" className="block text-white text-lg font-semibold mb-3">
                  NOM :
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-white text-lg font-semibold mb-3">
                  PRÉNOM :
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors"
                  style={{ borderRadius: '0px' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="tel" className="block text-white text-lg font-semibold mb-3">
                  TEL :
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors"
                  style={{ borderRadius: '0px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-lg font-semibold mb-3">
                  EMAIL :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors"
                  style={{ borderRadius: '0px' }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="requete" className="block text-white text-lg font-semibold mb-3">
                REQUÊTE :
              </label>
              <textarea
                id="requete"
                name="requete"
                value={formData.requete}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-black border border-white/25 text-white px-4 py-3 focus:outline-none focus:border-[#c9a55a] transition-colors resize-vertical"
                style={{ borderRadius: '0px' }}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Devis;