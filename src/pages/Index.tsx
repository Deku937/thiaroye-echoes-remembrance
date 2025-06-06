
import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Introduction from '@/components/Introduction';
import Revolt from '@/components/Revolt';
import Testimonies from '@/components/Testimonies';
import Aftermath from '@/components/Aftermath';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleDiscover = () => {
    setShowContent(true);
    // Scroll to the content after it's shown
    setTimeout(() => {
      const introSection = document.getElementById('intro');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation showNavItems={showContent} />
      
      <div id="hero">
        <Hero onDiscover={handleDiscover} />
      </div>
      
      {showContent && (
        <>
          <Introduction />
          <Revolt />
          <Testimonies />
          <Aftermath />
          <Sources />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
