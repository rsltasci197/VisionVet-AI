import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Partnerships from './components/Partnerships';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    // Initialize AOS with mobile-responsive settings
    AOS.init({
      duration: 800, // Daha hızlı animasyon mobil için
      easing: 'ease-out-cubic',
      once: true,
      offset: 50, // Mobilde daha erken başlasın
      delay: 50,
      disable: false, // Mobilde de aktif
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      // Mobil cihazlarda performans için
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50,
      // Mobilde daha hassas
      anchorPlacement: 'top-bottom',
    });

    // Refresh on resize for responsive
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 scroll-smooth">
      <ScrollProgress />
      <Header />
      <main className="relative">
        <Hero />
        <Problem />
        <Comparison />
        <Solution />
        <Features />
        <MarketAnalysis />
        <BusinessModel />
        <FinancialMetrics />
        <Team />
        <Partnerships />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
