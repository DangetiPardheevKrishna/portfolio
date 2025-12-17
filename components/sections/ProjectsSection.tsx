"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Eye,
  Code2,
  Calendar,
  Users,
  Star,
} from "lucide-react";

export default function ProjectsSection() {
  const projects = {
    All: [
      {
        id: 1,
        title: "Doctor Appointment & Teleconsultation Platform",
        description:
          "Full-stack doctor appointment system with role-based access, admin analytics, secure authentication, and online payments.",
        category: "Web Application",
        year: "2024",
        tags: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Razorpay",
          "Tailwind",
          "REST API",
        ],
        github: "https://github.com/DangetiPardheevKrishna",
        demo: "https://prescripto-frontend-x53j.onrender.com/",
        featured: true,
      },
      {
        id: 2,
        title: "Real-Time Chat Application",
        description:
          "MERN-based real-time chat app with JWT authentication, Socket.IO messaging, online presence detection, and Zustand state management.",
        category: "Web Application",
        year: "2024",
        tags: ["MERN", "Socket.IO", "JWT", "Zustand", "Tailwind", "DaisyUI"],
        github: "https://github.com/DangetiPardheevKrishna",
        demo: "https://mern-chat-app-3rtz.onrender.com/",
        featured: true,
      },
      {
        id: 3,
        title: "StayFinder (Airbnb-like Booking Platform)",
        description:
          "Full-stack property listing and booking platform with host & user roles, real-time booking approvals, and protected routes.",
        category: "Web Application",
        year: "2024",
        tags: [
          "React",
          "Node.js",
          "MongoDB",
          "JWT",
          "Socket.IO",
          "Cookies",
          "Tailwind",
        ],
        github: "https://github.com/DangetiPardheevKrishna",
        demo: "https://stayfinder-frontend-rkk6.onrender.com",
        featured: true,
      },
      {
        id: 4,
        title: "InterviewPrepAI",
        description:
          "AI-powered interview preparation and application tracking platform with chatbot assistance and dynamic quiz generation.",
        category: "AI + Web Application",
        year: "2025",
        tags: ["React", "Node.js", "MongoDB", "JWT", "Gemini API", "Tailwind"],
        github: "https://github.com/DangetiPardheevKrishna",
        demo: "#",
        featured: true,
      },
    ],

    Featured: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    "Web Apps": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  };

  const getProjectById = (id: number) => {
    return projects["All"].find((project) => project.id === id);
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            Portfolio
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my skills and approach to
            problem-solving
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {Object.keys(projects).map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project) => {
                  const fullProject = getProjectById(project.id);
                  if (!fullProject) return null;

                  return (
                    <Card
                      key={fullProject.id}
                      className="group hover:shadow-lg transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {fullProject.title}
                          </CardTitle>
                          {fullProject.featured && (
                            <Badge className="bg-primary/10 text-primary border-none">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="line-clamp-2">
                          {fullProject.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pb-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {fullProject.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Code2 className="w-4 h-4" />
                            {fullProject.category}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {fullProject.tags.slice(0, 3).map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {fullProject.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{fullProject.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <div className="flex gap-2 w-full">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() =>
                              window.open(fullProject.github, "_blank")
                            }
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1"
                            onClick={() =>
                              window.open(fullProject.demo, "_blank")
                            }
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
