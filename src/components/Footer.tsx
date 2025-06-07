
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-yellow-300 mb-2">
              {t('title')}
            </h3>
            <p className="text-gray-300">
              {t('footerSubtitle')}
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-6">
            <span>{t('footerMessage').split(' ')[0]}</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>{t('footerMessage').split(' ').slice(1).join(' ')}</span>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-xs text-gray-400">
              {t('footerCopyright')}
              <br />
              {t('footerQuote')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
