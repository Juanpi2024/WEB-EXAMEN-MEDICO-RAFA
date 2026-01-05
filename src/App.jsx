import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ExamsCatalog from './components/ExamsCatalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <ExamsCatalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
