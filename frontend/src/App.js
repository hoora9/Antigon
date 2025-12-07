import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <HomePage />
          <Footer />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;