
import { ExternalLink, Book, Film, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Sources = () => {
  const { t } = useLanguage();

  const sources = [
    {
      type: 'book',
      icon: Book,
      title: 'Le massacre de Thiaroye',
      author: 'Armelle Mabon',
      description: 'L\'étude historique de référence sur les événements de Thiaroye',
      link: '#'
    },
    {
      type: 'film',
      icon: Film,
      title: 'Camp de Thiaroye',
      author: 'Ousmane Sembène',
      description: 'Film sénégalais de 1988 qui retrace les événements',
      link: '#'
    },
    {
      type: 'web',
      icon: Globe,
      title: 'Archives nationales du Sénégal',
      author: '',
      description: 'Documents d\'époque et témoignages',
      link: '#'
    },
    {
      type: 'book',
      icon: Book,
      title: 'Tirailleurs sénégalais',
      author: 'Anthony Clayton',
      description: 'Histoire des troupes coloniales françaises',
      link: '#'
    }
  ];

  return (
    <section id="sources" className="py-20 bg-gradient-to-b from-gray-800/20 to-gray-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-yellow-300 mb-6">
            {t('sourcesTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('sourcesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sources.map((source, index) => {
            const IconComponent = source.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30 hover:border-yellow-300/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-yellow-300/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-yellow-300" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-200 group-hover:text-yellow-300 transition-colors duration-300">
                        {source.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-yellow-300 transition-colors duration-300" />
                    </div>
                    {source.author && (
                      <p className="text-sm text-yellow-300 mb-2">{source.author}</p>
                    )}
                    <p className="text-gray-300 text-sm">{source.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
            <p className="text-gray-300 text-sm">
              Cette liste n'est pas exhaustive. De nombreux autres travaux d'historiens, 
              d'artistes et de militants contribuent à préserver la mémoire de Thiaroye.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;
