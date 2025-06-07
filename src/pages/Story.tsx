
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Introduction from '@/components/Introduction';
import Revolt from '@/components/Revolt';
import Testimonies from '@/components/Testimonies';
import Aftermath from '@/components/Aftermath';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';

const Story = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation showNavItems={true} />
      
      <div className="pt-20">
        <Introduction />
        <Revolt />
        <Testimonies />
        <Aftermath />
        <Sources />
        <Footer />
      </div>
    </div>
  );
};

export default Story;
