
import { useLanguage } from '@/contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800/30 to-gray-700/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
            {t('videoSectionTitle')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('videoSectionDescription')}
          </p>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/ez0EW3Fte8o"
              title="Thiaroye 44 - Dip Doundou Guiss"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 italic">
            {t('videoCredit')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
