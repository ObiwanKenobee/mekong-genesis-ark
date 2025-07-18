import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Github, 
  MapPin, 
  Trophy, 
  Twitter,
  ExternalLink,
  Play
} from "lucide-react";

export const LinksSection = () => {
  const primaryLinks = [
    {
      icon: FileText,
      title: "Whitepaper",
      description: "Dive deep into the vision and architecture",
      action: "Read PDF"
    },
    {
      icon: Github,
      title: "GitHub Repository", 
      description: "Explore the open-source codebase",
      action: "View Code"
    },
    {
      icon: MapPin,
      title: "Genesis Pilgrimage",
      description: "Join the founding community",
      action: "Apply Now"
    }
  ];

  const secondaryLinks = [
    {
      icon: Trophy,
      title: "Aptos Hackathon",
      description: "Our Vietnam submission"
    },
    {
      icon: Twitter,
      title: "Social Links",
      description: "Twitter | Mirror | Gitcoin | Lens"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-sacred">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Join the Genesis
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Begin your journey into a civilization worth remembering. 
            Every path starts with a single step into the sacred.
          </p>
        </div>

        {/* Primary action cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {primaryLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="container-sacred border-primary/20 hover:shadow-temple transition-all duration-500 group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-gradient-mystical rounded-full group-hover:animate-pulse-sacred">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">
                    {link.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {link.description}
                  </p>
                  <Button className="btn-mystical w-full">
                    {link.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Demo video section */}
        <Card className="container-sacred border-accent/30 mb-12">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="p-4 bg-gradient-mystical rounded-full inline-flex group-hover:animate-pulse-sacred">
                <Play className="w-10 h-10 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              Demo Video
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed">
              Cinematic walkthrough showing Ark nodes, youth rituals, rivers merging with code, 
              people planting trees with AR overlays of ancestors watching.
            </p>
            <Button className="btn-sacred text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch the Vision
            </Button>
          </CardContent>
        </Card>

        {/* Secondary links */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="container-sacred border-muted/20 hover:border-accent/30 transition-all duration-500">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-gradient-river rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-1">
                      {link.title}
                    </h4>
                    <p className="text-foreground/70">
                      {link.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sacred flow */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-river rounded-full animate-flow"></div>
        </div>
      </div>
    </section>
  );
};