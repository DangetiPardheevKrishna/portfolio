"use client";

import HeroSection from "../components/sections/Herosection";
import AboutSkills from "@/components/sections/AboutSkills";
import SkillsSection from "@/components/sections/SkillsSections";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import NavigationSection from "@/components/sections/NavigationSection";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* 🌌 PARTICLES BACKGROUND */}
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={120}
        ease={80}
        color={color}
        refresh
      />

      {/* 🌟 CONTENT */}
      <div className="relative z-10">
        <NavigationSection />
        <HeroSection />
        <AboutSkills />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
