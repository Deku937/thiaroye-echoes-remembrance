
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Introduction from '@/components/Introduction';
import Revolt from '@/components/Revolt';
import Testimonies from '@/components/Testimonies';
import Aftermath from '@/components/Aftermath';
import Sources from '@/components/Sources';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const Story = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-gray-700 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gray-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-600 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Navigation showNavItems={true} />
        
        <div className="pt-20">
          <Introduction />
          <Revolt />
          <Testimonies />
          <Aftermath />
          <Sources />
          <VideoSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Story;
