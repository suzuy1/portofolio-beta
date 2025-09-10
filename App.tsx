import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#030341] min-h-screen text-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ThankYou />
      <Footer />
    </div>
  );
};

export default App;
