import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MekongSection } from "@/components/MekongSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArkNodesSection } from "@/components/ArkNodesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { LinksSection } from "@/components/LinksSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MekongSection />
      <FeaturesSection />
      <ArkNodesSection />
      <AudienceSection />
      <LinksSection />
      <Footer />
    </div>
  );
};

export default Index;
