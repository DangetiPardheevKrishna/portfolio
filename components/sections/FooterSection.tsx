"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Copyright,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function FooterSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DangetiPardheevKrishna",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pardheev-krishna-370b7b331/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:pardheevkrishna@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <div className="container px-4 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                PK
              </div>
              <div>
                <h3 className="text-xl font-bold">Pardheev Krishna</h3>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Building digital experiences with clean code and thoughtful design
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-lg"
                onClick={() => window.open(social.href, "_blank")}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Copyright className="w-4 h-4" />
            <span>
              {new Date().getFullYear()} Pardheev Krishna. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using Next.js & ShadCN UI</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Back to Top for Mobile */}
        <div className="mt-8 md:hidden text-center">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="w-full"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
