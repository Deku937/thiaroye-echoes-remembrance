
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('fr')}
        className="text-xs"
      >
        FR
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
