
import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Introduction from '@/components/Introduction';
import Revolt from '@/components/Revolt';
import Testimonies from '@/components/Testimonies';
import Aftermath from '@/components/Aftermath';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="hero">
        <Hero onDiscover={scrollToIntro} />
      </div>
      
      <Introduction />
      <Revolt />
      <Testimonies />
      <Aftermath />
      <Sources />
      <Footer />
    </div>
  );
};

export default Index;
