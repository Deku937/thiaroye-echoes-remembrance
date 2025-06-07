
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = ({ showNavItems }: { showNavItems: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/story') {
      navigate('/story');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/');
  };

  const navItems = [
    { id: 'intro', label: t('introduction') },
    { id: 'revolt', label: t('revolt') },
    { id: 'testimonies', label: t('testimonies') },
    { id: 'aftermath', label: t('aftermath') },
    { id: 'sources', label: t('sources') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={goToHome}
            className="font-serif text-xl md:text-2xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
          >
            {t('title')}
          </button>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            {/* Desktop Navigation - only show if content is visible */}
            {showNavItems && (
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile Navigation Toggle - only show if content is visible */}
            {showNavItems && (
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && showNavItems && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
