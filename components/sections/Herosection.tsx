"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Mail, MapPin, Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Column */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Avatar className="relative w-64 h-64 border-4 border-background shadow-2xl">
                  <AvatarImage
                    src="/profile.jpg"
                    alt="Dangeti Pardheev Krishna"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                    DPK
                  </AvatarFallback>
                </Avatar>

                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white border-none shadow-lg">
                    Open to Opportunities
                  </Badge>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>pardheevkrishna@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Kakinada, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Internships • Full-time</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="outline" className="mb-6 px-4 py-1.5">
                MERN Stack Developer
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-primary">Dangeti Pardheev Krishna</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
                Full Stack Developer | MERN | Real-Time Apps | GenAI
              </h2>

              <div className="h-1 w-24 bg-primary mx-auto lg:mx-0 mb-8" />

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I build scalable full-stack web applications using the MERN
                stack, focusing on secure authentication, real-time features,
                and clean UI. Experienced in building end-to-end products like
                booking platforms, chat applications, and AI-powered tools.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Full-Stack Apps
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1+</div>
                  <div className="text-sm text-muted-foreground">
                    Internship
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Dangeti_Pardheev_Krishna_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    Download Resume
                  </Button>
                </a>

                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Built projects using
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                  <span className="font-medium">MongoDB</span>
                  <span className="font-medium">Express</span>
                  <span className="font-medium">React</span>
                  <span className="font-medium">Node.js</span>
                  <span className="font-medium">Socket.IO</span>
                  <span className="font-medium">Gemini API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
