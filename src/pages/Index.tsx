
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation showNavItems={false} />
      
      <div id="hero">
        <Hero />
      </div>
    </div>
  );
};

export default Index;
