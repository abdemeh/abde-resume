import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <Portfolio />
        <About />
        <Resume />
        <Skills />
        <Contact />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
