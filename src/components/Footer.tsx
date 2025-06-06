
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-memorial-black border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-gold mb-2">
              Thiaroye 1944
            </h3>
            <p className="text-muted-foreground">
              En mémoire des tirailleurs sénégalais
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-6">
            <span>Créé avec</span>
            <Heart className="h-4 w-4 text-dark-red" />
            <span>pour préserver la mémoire</span>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
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
