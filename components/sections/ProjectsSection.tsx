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
        title: "Enterprise E-Commerce Platform",
        description:
          "Full-featured online marketplace with admin dashboard, payment integration, and inventory management.",
        category: "Web Application",
        year: "2023",
        tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "Task Management System",
        description:
          "Collaborative project management tool with real-time updates and drag-drop functionality.",
        category: "SaaS Product",
        year: "2023",
        tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description:
          "Responsive weather application with forecasts, maps, and historical data visualization.",
        category: "Web Application",
        year: "2022",
        tags: ["Vue.js", "Chart.js", "WeatherAPI", "PWA", "Vite"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
      },
      {
        id: 4,
        title: "Fitness Tracking App",
        description:
          "Mobile application for workout tracking, progress monitoring, and community features.",
        category: "Mobile App",
        year: "2022",
        tags: ["React Native", "Firebase", "Redux", "Expo"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 5,
        title: "Portfolio Website",
        description:
          "Modern portfolio with animations, dark mode, and contact form integration.",
        category: "Website",
        year: "2024",
        tags: ["Next.js", "Framer Motion", "ShadCN", "EmailJS"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
      },
    ],
    Featured: [{ id: 1 }, { id: 2 }, { id: 4 }],
    "Web Apps": [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 5 }],
    Mobile: [{ id: 4 }],
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

        {/* Project Stats */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  On-time Delivery
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
