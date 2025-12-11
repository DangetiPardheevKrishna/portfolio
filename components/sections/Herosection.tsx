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
            {/* Left Column - Avatar & Basic Info */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Avatar className="relative w-64 h-64 border-4 border-background shadow-2xl">
                  <AvatarImage
                    src="/profile.jpg"
                    alt="John Doe"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>

                {/* Status Badge */}
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white border-none shadow-lg">
                    Available for work
                  </Badge>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@johndoe.dev</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Full-time • Freelance</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="outline" className="mb-6 px-4 py-1.5">
                Professional Portfolio
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-primary">John Doe</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
                Full Stack Developer & UI/UX Designer
              </h2>

              <div className="h-1 w-24 bg-primary mx-auto lg:mx-0 mb-8" />

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I specialize in building exceptional digital experiences that
                are fast, accessible, visually appealing, and responsive. With
                over 3 years of experience, I&apos;ve worked with startups and
                enterprises to bring their ideas to life.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by companies like
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                  <span className="font-medium">TechCorp</span>
                  <span className="font-medium">DigitalFlow</span>
                  <span className="font-medium">StartUpXYZ</span>
                  <span className="font-medium">InnovateLabs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
