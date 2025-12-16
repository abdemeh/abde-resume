import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Portfolio />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
