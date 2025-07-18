import { Waves } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Sacred quote */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Waves className="w-12 h-12 text-accent mx-auto animate-float" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-flow mb-6 italic leading-relaxed max-w-4xl mx-auto">
            "The Nile had Moses. The Ganges had the Buddha. 
            The Mekong now carries us all."
          </blockquote>
          <div className="w-24 h-1 bg-gradient-sunrise rounded-full mx-auto"></div>
        </div>

        {/* Brand */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-accent mb-2">
            Ark Horizon
          </h3>
          <p className="text-foreground/70 text-lg">
            A Civilization Worth Remembering
          </p>
        </div>

        {/* Sacred geometry footer decoration */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-river rounded"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-8 h-1 bg-gradient-mystical rounded"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Ark Horizon. Where meaning flows like water.</p>
        </div>
      </div>
    </footer>
  );
};