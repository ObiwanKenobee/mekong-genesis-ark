import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Compass, 
  Map, 
  Brain, 
  Coins,
  Settings,
  Navigation,
  BookOpen,
  Gem
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Ritual OS",
      description: "A programmable cultural layer powered by community-generated rituals, accessible via mobile or shrine interfaces."
    },
    {
      icon: Map,
      title: "Mekong Pilgrimage Map", 
      description: "Geolocated spiritual/eco-heritage sites, connected via digital passports and AI-guided purpose journeys."
    },
    {
      icon: Brain,
      title: "Ancestral AI Guide",
      description: "Trained on Buddhist texts, local oral histories, and climate wisdom to support inner discovery and communal healing."
    },
    {
      icon: Coins,
      title: "Purpose Credit Layer",
      description: "Soul-bound token system rewarding regenerative behavior, ritual participation, and cultural storytelling."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Key Features
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Sacred technologies that bridge the ancient and the digital, 
            weaving meaning into the fabric of our connected world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="container-sacred hover:shadow-mystical transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-mystical rounded-lg group-hover:animate-pulse-sacred">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl text-accent group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sacred geometry decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <Gem className="w-6 h-6 text-accent animate-float" />
            <div className="w-16 h-1 bg-gradient-river rounded"></div>
            <BookOpen className="w-6 h-6 text-primary animate-float" style={{animationDelay: '1s'}} />
            <div className="w-16 h-1 bg-gradient-sunrise rounded"></div>
            <Compass className="w-6 h-6 text-accent animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};