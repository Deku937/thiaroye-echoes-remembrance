
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-yellow-300 mb-2">
              Thiaroye 1944
            </h3>
            <p className="text-gray-300">
              En mémoire des tirailleurs sénégalais
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-6">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>pour préserver la mémoire</span>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-xs text-gray-400">
              © 2024 Mémoire Thiaroye. Site éducatif et mémoriel.
              <br />
              "La mémoire est le seul paradis dont nous ne puissions être chassés." - Jean Paul Richter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
