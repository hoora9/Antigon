import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produits from './pages/Produits';
import Services from './pages/Services';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Devis from './pages/Devis';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/services" element={<Services />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;