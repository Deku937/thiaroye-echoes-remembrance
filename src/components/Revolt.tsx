
import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, AlertTriangle } from 'lucide-react';

const Revolt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      date: "20 novembre 1944",
      event: "Arrivée des tirailleurs à Thiaroye",
      description: "1 280 soldats démobilisés arrivent au camp de transit de Thiaroye, près de Dakar."
    },
    {
      date: "21-30 novembre",
      event: "Tensions croissantes",
      description: "Les soldats attendent leurs indemnités. L'administration française tente de les payer avec des francs CFA dévalués."
    },
    {
      date: "1er décembre 1944",
      event: "La révolte éclate",
      description: "Les tirailleurs refusent d'être payés en monnaie dévaluée. Ils prennent en otage le général Dagnan."
    },
    {
      date: "1er décembre - matin",
      event: "La fusillade",
      description: "L'armée française ouvre le feu sur les soldats désarmés. Le bilan officiel : 35 morts. La réalité : bien plus."
    }
  ];

  return (
    <section 
      id="revolt" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-card to-background relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-red mb-6">
            Thiaroye : La Révolte de l'Honneur
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Le 1er décembre 1944, des soldats qui ont servi la France avec bravoure 
            se révoltent contre l'injustice. Leur crime ? Demander ce qui leur était dû.
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { icon: Users, number: "1 280", label: "Soldats concernés" },
            { icon: Calendar, number: "4", label: "Années de guerre" },
            { icon: MapPin, number: "1", label: "Camp de Thiaroye" },
            { icon: AlertTriangle, number: "35+", label: "Victimes officielles" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card/50 rounded-lg border border-border">
              <stat.icon className="h-8 w-8 text-gold mx-auto mb-4" />
              <div className="font-serif text-3xl font-bold text-gold mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-center text-gold mb-12">
            Chronologie des Événements
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold/30" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background z-10" />
                  
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-card p-6 rounded-lg border border-border shadow-lg">
                      <div className="text-sm text-gold font-semibold mb-2">{item.date}</div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                        {item.event}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final message */}
        <div className={`text-center mt-16 p-8 bg-dark-red/10 border border-dark-red/20 rounded-lg transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <blockquote className="font-serif text-xl md:text-2xl italic text-foreground mb-4">
            "Ce jour-là, la France a tiré sur ses propres soldats.<br />
            Un crime resté dans l'ombre pendant des décennies."
          </blockquote>
          <cite className="text-muted-foreground">— Archives historiques de Thiaroye</cite>
        </div>
      </div>
    </section>
  );
};

export default Revolt;
