"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  Target,
  Users,
  Clock,
  Heart,
} from "lucide-react";

export default function AboutSkills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Tailwind CSS",
  ];

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Developer",
      company: "TechVision Inc.",
      location: "San Francisco, CA",
    },
    {
      year: "2022 - 2023",
      role: "Frontend Engineer",
      company: "DigitalFlow Agency",
      location: "Remote",
    },
    {
      year: "2021 - 2022",
      role: "Full Stack Developer",
      company: "StartUpXYZ",
      location: "New York, NY",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Professional Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated developer with a passion for creating elegant solutions
            to complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  My Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of clean code, thoughtful design, and
                  user-centered development. Every project is an opportunity to
                  learn, grow, and create something meaningful.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Quality First</h4>
                      <p className="text-sm text-muted-foreground">
                        Never compromise on code quality or user experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Problem Solver</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on solving real problems with practical solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Team Player</h4>
                      <p className="text-sm text-muted-foreground">
                        Collaborate effectively to achieve common goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Lifelong Learner</h4>
                      <p className="text-sm text-muted-foreground">
                        Constantly updating skills and exploring new
                        technologies
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-primary"
                    >
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5" />
                      <div className="space-y-1">
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-primary">{exp.year}</span>
                          <span className="text-muted-foreground">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold">Stanford University</h4>
                  <p className="text-muted-foreground">BSc Computer Science</p>
                  <p className="text-sm text-muted-foreground">
                    2016 - 2020 • GPA: 3.8/4.0
                  </p>
                  <p className="text-sm">
                    Specialized in Software Engineering and Artificial
                    Intelligence. President of Computer Science Club.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Certifications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AWS Certified Solutions Architect
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Google UX Design Professional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      React Advanced Certification
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
