import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black pt-[80px]">
      {/* Hero Section with Spline 3D */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">

        <div className="relative z-10 max-w-[1400px] mx-auto px-[7.6923%] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <h1 
                className="text-6xl lg:text-7xl font-semibold leading-tight" 
                style={{ letterSpacing: '2px' }}
              >
                {t(translations.home.hero.tagline)}
              </h1>
              
              <Link to="/produits" className="btn-primary inline-flex items-center gap-3">
                <span>{t(translations.home.hero.cta)}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Right: Spline 3D Animation */}
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
    </div>
  );
};

export default Home;