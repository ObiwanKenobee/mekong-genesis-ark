import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Globe, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI & Ancestral Wisdom",
      description: "Planetary intelligence guided by centuries of spiritual memory"
    },
    {
      icon: Heart,
      title: "Regenerative Design", 
      description: "Healing ecosystems while rebuilding human connection and purpose"
    },
    {
      icon: Globe,
      title: "Decentralized Sanctuaries",
      description: "A network of Arks serving as new infrastructure for identity and belonging"
    },
    {
      icon: Sparkles,
      title: "Cultural Memory",
      description: "Preserving and evolving ancestral technologies for the digital age"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            What is Ark Horizon?
          </h2>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            A planetary-scale project designed to rebuild human meaning, cultural memory, 
            and ecological balance through decentralized sanctuaries called Arks. Each Ark 
            combines AI, regenerative design, and ancestral wisdom to serve as a new 
            infrastructure for identity, belonging, and healing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="container-sacred hover:shadow-temple transition-all duration-500 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-mystical rounded-full group-hover:animate-pulse-sacred">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-accent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Flowing divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-river rounded-full animate-flow"></div>
        </div>
      </div>
    </section>
  );
};