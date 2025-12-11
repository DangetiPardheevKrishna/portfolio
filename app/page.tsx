import Image from "next/image";
import HeroSection from "../components/sections/Herosection";
import AboutSkills from "@/components/sections/AboutSkills";
import SkillsSection from "@/components/sections/SkillsSections";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import NavigationSection from "@/components/sections/NavigationSection";

export default function Home() {
  return (
    <div>
      <NavigationSection />
      <HeroSection />
      <AboutSkills />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
