import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mekong-genesis.jpg";
import { Sparkles, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        <div className="absolute inset-0 pattern-river opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-float">
          <Sparkles className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse-sacred" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-flow leading-tight">
          Ark Horizon
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-accent">
          Mekong Genesis
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Where the River Remembers and the Future Begins
        </p>
        
        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-medium text-primary mb-4">
            Reawakening Purpose at the Source of Civilization
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ancestral rituals, regenerative tech, and planetary AI converge on the Mekong River 
            to launch a new future—where meaning flows like water.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-sacred text-lg px-8 py-4">
            <Sparkles className="w-5 h-5 mr-2" />
            Begin the Journey
          </Button>
          
          <Button variant="outline" className="btn-mystical text-lg">
            <Play className="w-5 h-5 mr-2" />
            Explore Mekong Arks
          </Button>
        </div>
      </div>

      {/* Flowing scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};