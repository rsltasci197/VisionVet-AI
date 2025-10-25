import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Comparison from './components/Comparison';
import Solution from './components/Solution';
import Features from './components/Features';
import MarketAnalysis from './components/MarketAnalysis';
import BusinessModel from './components/BusinessModel';
import FinancialMetrics from './components/FinancialMetrics';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <Solution />
        <Features />
        <MarketAnalysis />
        <BusinessModel />
        <FinancialMetrics />
        <Team />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
