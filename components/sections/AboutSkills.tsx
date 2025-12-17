// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Briefcase,
//   GraduationCap,
//   Award,
//   CheckCircle,
//   Target,
//   Users,
//   Clock,
//   Heart,
// } from "lucide-react";

// export default function AboutSkills() {
//   const skills = [
//     "React.js",
//     "Next.js",
//     "JavaScript (ES6+)",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "JWT Authentication",
//     "Socket.IO",
//     "Zustand",
//     "Tailwind CSS",
//     "DaisyUI",
//     "REST APIs",
//     "Git",
//     "C++",
//     "Data Structures & Algorithms",
//   ];

//   const experiences = [
//     {
//       year: "Apr 2025 – May 2025",
//       role: "Web Development Intern",
//       company: "Codveda Technologies",
//       location: "Remote",
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-secondary/30">
//       <div className="container px-4 mx-auto">
//         <div className="text-center mb-16">
//           <Badge variant="outline" className="mb-4 px-4 py-1.5">
//             About Me
//           </Badge>
//           <h2 className="text-4xl font-bold mb-4">Professional Background</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Full-stack MERN developer passionate about building scalable,
//             real-time, and user-focused web applications.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left Column */}
//           <div>
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Heart className="w-5 h-5 text-primary" />
//                   My Approach
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <p className="text-muted-foreground leading-relaxed">
//                   I enjoy building full-stack applications that solve real-world
//                   problems, with a strong focus on clean architecture, secure
//                   authentication, and seamless user experience.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold">Clean & Secure Code</h4>
//                       <p className="text-sm text-muted-foreground">
//                         JWT-based authentication, protected routes, and robust
//                         backend APIs
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Target className="w-5 h-5 text-blue-500 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold">Problem-Oriented</h4>
//                       <p className="text-sm text-muted-foreground">
//                         Focused on solving real user and business problems
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Users className="w-5 h-5 text-purple-500 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold">Team Collaboration</h4>
//                       <p className="text-sm text-muted-foreground">
//                         Experience working in remote teams and collaborative
//                         environments
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold">Continuous Learner</h4>
//                       <p className="text-sm text-muted-foreground">
//                         Constantly improving skills in MERN stack, GenAI, and
//                         system design
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Briefcase className="w-5 h-5 text-primary" />
//                   Experience
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-6">
//                   {experiences.map((exp, index) => (
//                     <div
//                       key={index}
//                       className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-primary"
//                     >
//                       <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5" />
//                       <div className="space-y-1">
//                         <h4 className="font-semibold">{exp.role}</h4>
//                         <p className="text-sm text-muted-foreground">
//                           {exp.company}
//                         </p>
//                         <div className="flex items-center gap-4 text-sm">
//                           <span className="text-primary">{exp.year}</span>
//                           <span className="text-muted-foreground">
//                             {exp.location}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Award className="w-5 h-5 text-primary" />
//                   Technical Skills
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.map((skill, index) => (
//                     <Badge
//                       key={index}
//                       variant="secondary"
//                       className="px-3 py-1.5 hover:bg-primary/10 hover:text-primary transition-colors"
//                     >
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Education */}
//         <div className="mt-16">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <GraduationCap className="w-5 h-5 text-primary" />
//                 Education
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <h4 className="font-semibold">
//                   Indian Institute of Information Technology, Srikakulam
//                 </h4>
//                 <p className="text-muted-foreground">
//                   B.Tech in Electronics and Communication Engineering
//                 </p>
//                 <p className="text-sm text-muted-foreground">
//                   2022 – 2026 • CGPA: 7.0
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }"use client";

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
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiSocketdotio,
  SiRazorpay,
  SiPython,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";
import { OrbitingCircles } from "../ui/orbiting-circles";

export default function AboutSkills() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQLite",
    "JWT Authentication",
    "Socket.IO",
    "Zustand",
    "Tailwind CSS",
    "DaisyUI",
    "Bootstrap",
    "REST APIs",
    "Git",
    "Python",
    "C++",
    "Firebase",
    "Razorpay",
    "Figma",
    "Data Structures & Algorithms",
  ];

  const experiences = [
    {
      year: "Apr 2025 – May 2025",
      role: "Web Development Intern",
      company: "Codveda Technologies",
      location: "Remote",
      description:
        "Full-stack development with focus on scalable applications and secure authentication systems",
    },
  ];

  const projects = [
    {
      title: "Doctor Appointment System",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST API",
        "Tailwind CSS",
        "Razorpay",
        "React Context API",
      ],
      highlights: [
        "Built full-stack doctor appointment system with role-based authentication for patients, doctors, and admins",
        "Established admin control panel with real-time analytics, improving team response times by 15%",
        "Implemented Razorpay payment integration reducing manual scheduling time by 80%",
        "Developed secure JWT-based authentication and protected routes for data access security",
      ],
    },
    {
      title: "Real-Time Chat Application",
      tech: [
        "MERN Stack",
        "Socket.io",
        "TailwindCSS",
        "DaisyUI",
        "Zustand",
        "React Context API",
      ],
      highlights: [
        "Architected secure JWT-based authentication system with protected route enforcement",
        "Integrated Socket.IO for real-time bi-directional messaging with minimal latency",
        "Engineered real-time user presence detection with dynamic online/offline indicators",
        "Leveraged Zustand for efficient global state management with persistent storage",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Professional Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack MERN developer specializing in real-time applications,
            secure authentication, and scalable web solutions with expertise in
            both frontend and backend technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  My Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I build full-stack applications that solve real-world
                  problems, focusing on clean architecture, secure
                  authentication, and seamless user experiences with real-time
                  capabilities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Clean & Secure Code</h4>
                      <p className="text-sm text-muted-foreground">
                        JWT authentication, protected routes, and robust backend
                        APIs with proper validation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Real-Time Solutions</h4>
                      <p className="text-sm text-muted-foreground">
                        Expertise in Socket.IO for real-time applications and
                        live user interactions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Scalable Architecture</h4>
                      <p className="text-sm text-muted-foreground">
                        Building applications that can grow with user demand and
                        business needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Full-Stack Proficiency</h4>
                      <p className="text-sm text-muted-foreground">
                        End-to-end development from UI/UX to database design and
                        API development
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Key Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="space-y-3 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience Card */}
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
                      <div className="space-y-2">
                        <h4 className="font-semibold">{exp.role}</h4>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
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

            {/* Orbiting Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[350px] w-full overflow-visible flex items-center justify-center">
                  {/* Inner Orbit - Core Technologies */}
                  <OrbitingCircles radius={60} speed={1.2}>
                    <FaReact
                      className="text-blue-400 w-9 h-9"
                      title="React.js"
                    />
                    <FaNodeJs
                      className="text-green-600 w-9 h-9"
                      title="Node.js"
                    />
                    <FaDatabase
                      className="text-green-700 w-9 h-9"
                      title="MongoDB"
                    />
                    <SiExpress
                      className="text-gray-800 w-9 h-9"
                      title="Express.js"
                    />
                  </OrbitingCircles>

                  {/* Middle Orbit - Frontend & Tools */}
                  <OrbitingCircles radius={120} speed={1} reverse>
                    <FaJsSquare
                      className="text-yellow-400 w-10 h-10"
                      title="JavaScript"
                    />
                    <SiTailwindcss
                      className="text-cyan-500 w-10 h-10"
                      title="Tailwind CSS"
                    />
                    <BsBootstrap
                      className="text-purple-600 w-10 h-10"
                      title="Bootstrap"
                    />
                    <FaHtml5
                      className="text-orange-500 w-10 h-10"
                      title="HTML5"
                    />
                    <FaCss3Alt
                      className="text-blue-600 w-10 h-10"
                      title="CSS3"
                    />
                  </OrbitingCircles>

                  {/* Outer Orbit - Additional Technologies */}
                  <OrbitingCircles radius={180} speed={0.8}>
                    <SiSocketdotio
                      className="text-black w-11 h-11"
                      title="Socket.IO"
                    />
                    <SiRazorpay
                      className="text-blue-800 w-11 h-11"
                      title="Razorpay"
                    />
                    <TbApi
                      className="text-green-800 w-11 h-11"
                      title="REST API"
                    />
                    <SiPython
                      className="text-blue-500 w-11 h-11"
                      title="Python"
                    />
                    <FaGitAlt className="text-red-500 w-11 h-11" title="Git" />
                    <SiFirebase
                      className="text-yellow-500 w-11 h-11"
                      title="Firebase"
                    />
                    <CgFigma
                      className="text-purple-800 w-11 h-11"
                      title="Figma"
                    />
                  </OrbitingCircles>

                  {/* Center Text */}
                  <div className="absolute z-10 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary block">
                        Tech
                      </span>
                      <span className="text-xl font-bold text-primary block">
                        Stack
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-center">
                    Skills Overview
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.slice(0, 12).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1.5 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education & Soft Skills */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
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
                <div className="pt-4 border-t">
                  <h5 className="font-semibold mb-2">Technical Foundation</h5>
                  <p className="text-sm text-muted-foreground">
                    Strong background in C++, Data Structures & Algorithms, and
                    problem-solving methodologies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Soft Skills & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem-solving",
                      "Communication",
                      "Time Management",
                      "Team Collaboration",
                      "Adaptability",
                    ].map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-3 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Development Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "VS Code",
                      "Chrome DevTools",
                      "Firebase",
                      "Figma",
                      "Postman",
                    ].map((tool, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1.5"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Advancing skills in Next.js, TypeScript, GenAI integration,
                    and advanced system design patterns
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
