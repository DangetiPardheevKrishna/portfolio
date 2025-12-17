"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Socket.IO",
    "Zustand",
    "Tailwind CSS",
    "DaisyUI",
    "REST APIs",
    "Git",
    "C++",
    "Data Structures & Algorithms",
  ];

  const experiences = [
    {
      year: "Apr 2025 – May 2025",
      role: "Web Development Intern",
      company: "Codveda Technologies",
      location: "Remote",
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
            Full-stack MERN developer passionate about building scalable,
            real-time, and user-focused web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  My Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy building full-stack applications that solve real-world
                  problems, with a strong focus on clean architecture, secure
                  authentication, and seamless user experience.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Clean & Secure Code</h4>
                      <p className="text-sm text-muted-foreground">
                        JWT-based authentication, protected routes, and robust
                        backend APIs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Problem-Oriented</h4>
                      <p className="text-sm text-muted-foreground">
                        Focused on solving real user and business problems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Team Collaboration</h4>
                      <p className="text-sm text-muted-foreground">
                        Experience working in remote teams and collaborative
                        environments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Continuous Learner</h4>
                      <p className="text-sm text-muted-foreground">
                        Constantly improving skills in MERN stack, GenAI, and
                        system design
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
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

        {/* Education */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">
                  Indian Institute of Information Technology, Srikakulam
                </h4>
                <p className="text-muted-foreground">
                  B.Tech in Electronics and Communication Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  2022 – 2026 • CGPA: 7.0
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
