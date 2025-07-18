import { Card, CardContent } from "@/components/ui/card";
import { 
  Wheat, 
  Heart, 
  Users, 
  Wrench
} from "lucide-react";

export const AudienceSection = () => {
  const audiences = [
    {
      icon: Wheat,
      title: "Rural Communities", 
      description: "Seeking new purpose and meaning in a post-automation world",
      emoji: "🌾"
    },
    {
      icon: Heart,
      title: "Spiritual Seekers",
      description: "Wanting culturally-grounded AI guides and authentic wisdom paths",
      emoji: "🧘"
    },
    {
      icon: Users,
      title: "Diaspora Youth",
      description: "Reconnecting with ancestral identity and cultural memory",
      emoji: "🌍"
    },
    {
      icon: Wrench,
      title: "Meaning Builders",
      description: "Builders of meaning systems in Web3, regenerative tech, and AI",
      emoji: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Who Is This For?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Every soul seeking to bridge the ancient and the emerging, 
            to find purpose in connection and meaning in belonging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card key={index} className="container-sacred hover:shadow-mystical transition-all duration-500 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    {audience.emoji}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-mystical rounded-full group-hover:animate-pulse-sacred">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-accent group-hover:text-primary transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sacred connection pattern */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="flex items-center gap-8">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="w-24 h-1 bg-gradient-river"></div>
              <div className="w-6 h-6 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-24 h-1 bg-gradient-sunrise"></div>
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};