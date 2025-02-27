import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';
import TestimonialSection from './components/TestimonialSection';
import UrgencySection from './components/UrgencySection';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <div className="font-sans text-[#3E3E3E] bg-[#F7F3EB]">
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <FAQSection />
      <TestimonialSection />
      <UrgencySection />
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;