import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Leaf,
  Mountain,
  Building,
  TreePine
} from "lucide-react";

export const ArkNodesSection = () => {
  const nodes = [
    {
      icon: Leaf,
      location: "Mekong Delta, Vietnam",
      description: "Youth temple meets permaculture sanctuary",
      color: "bg-gradient-to-r from-green-600 to-blue-600"
    },
    {
      icon: Mountain,
      location: "Luang Prabang, Laos", 
      description: "Meditation + AI Memory Vault site",
      color: "bg-gradient-to-r from-purple-600 to-indigo-600"
    },
    {
      icon: TreePine,
      location: "Chiang Mai, Thailand",
      description: "Forest monastic Ark with crypto-literacy lab", 
      color: "bg-gradient-to-r from-emerald-600 to-teal-600"
    },
    {
      icon: Building,
      location: "Phnom Penh, Cambodia",
      description: "Urban Ark for digital monks & ancestral coders",
      color: "bg-gradient-to-r from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-sacred">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            The First Ark Nodes
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Sacred spaces where ancient wisdom and future technology converge 
            along the blessed waters of the Mekong.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <Card key={index} className="container-sacred border-primary/20 hover:shadow-temple transition-all duration-500 group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-mystical rounded-full group-hover:animate-pulse-sacred">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="outline" className="mx-auto border-accent text-accent">
                    <MapPin className="w-3 h-3 mr-1" />
                    Genesis Node
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg mb-3 text-accent group-hover:text-primary transition-colors">
                    {node.location}
                  </CardTitle>
                  <p className="text-foreground/90 leading-relaxed">
                    {node.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Flow indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-gradient-river rounded-full animate-pulse"
                style={{animationDelay: `${i * 0.5}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};