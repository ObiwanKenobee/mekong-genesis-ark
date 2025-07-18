import { Card, CardContent } from "@/components/ui/card";
import { Waves, TreePine, Users, Zap } from "lucide-react";

export const MekongSection = () => {
  const reasons = [
    {
      icon: Waves,
      text: "The Mekong feeds millions and carries centuries of spiritual memory."
    },
    {
      icon: TreePine,
      text: "It's a frontline for climate change, cultural erosion, and economic precarity."
    },
    {
      icon: Users,
      text: "Vietnam, Cambodia, Laos, and Thailand hold deep ancestral technologies that AI can assist—but never replace."
    },
    {
      icon: Zap,
      text: "This Genesis launch partners with monks, farmers, coders, and youth to build the first Ark nodes in the region."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-sacred">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Why Start in the Mekong Basin?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Where ancient wisdom flows with the river, and the future emerges from sacred waters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="container-sacred border-primary/20 hover:border-accent/40 transition-all duration-500 group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-river rounded-full group-hover:animate-float">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-3">
                    {reason.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sacred pattern */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 border-2 border-accent rounded-full animate-pulse-sacred"></div>
            <div className="absolute inset-4 border border-primary rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute inset-8 w-8 h-8 bg-gradient-sunrise rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};