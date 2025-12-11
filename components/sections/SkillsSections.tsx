"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Server,
  Zap,
  Layout,
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = {
    Frontend: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 },
    ],
    Backend: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Database Design", level: 87 },
    ],
    "Tools & DevOps": [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 82 },
    ],
  };

  const iconMap = {
    Frontend: <Code className="w-5 h-5" />,
    Backend: <Server className="w-5 h-5" />,
    "Tools & DevOps": <Zap className="w-5 h-5" />,
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Skills & Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and areas of
            expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Skill Overview Cards */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Creating responsive, accessible, and performant user interfaces
              </p>
              <div className="space-y-3">
                {skillCategories["Frontend"].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Building scalable server-side applications and APIs
              </p>
              <div className="space-y-3">
                {skillCategories["Backend"].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Tools & DevOps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Modern development workflows and deployment practices
              </p>
              <div className="space-y-3">
                {skillCategories["Tools & DevOps"].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <Palette className="w-5 h-5" />,
                  name: "UI/UX Design",
                  desc: "Figma, Adobe XD",
                },
                {
                  icon: <Database className="w-5 h-5" />,
                  name: "Databases",
                  desc: "MongoDB, PostgreSQL",
                },
                {
                  icon: <Cloud className="w-5 h-5" />,
                  name: "Cloud Services",
                  desc: "AWS, Vercel",
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  name: "Mobile",
                  desc: "React Native",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="text-center p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Proficiency Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Advanced (75-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Intermediate (60-74%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
