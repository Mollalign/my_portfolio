"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Hena Books Platform",
        description: "A modern digital library platform with AI-powered recommendations, built for seamless reading experiences.",
        image: "/images/hena-books.png",
        tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
        liveUrl: "https://hena-books-frontend-luyi.vercel.app/",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        title: "AI Tutor",
        description: "Intelligent mobile learning app featuring real-time AI chat assistance, personalized learning paths, and interactive study sessions powered by advanced language models.",
        image: "/images/mobile-app.jpg",
        tech: ["Flutter", "FastAPI", "Redis", "RAG"],
        liveUrl: "https://github.com/Mollalign/Ai_tutor_Api.git",
        githubUrl: "https://github.com/Mollalign/mobile_app_ai_tutor.git",
        featured: true,
    },
    {
        title: "Evangelism Data Tracker",
        description: "Comprehensive data management system for tracking evangelism activities, member engagement, and ministry analytics.",
        image: "/images/evanglisim.png",
        tech: ["Next.js", "FastAPI", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        title: "Finance Tracker API",
        description: "Robust RESTful API for personal finance management with expense tracking, budgeting, and financial reporting.",
        image: "/projects/finance.jpg",
        tech: ["FastAPI", "PostgreSQL", "Redis"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        title: "ERP System",
        description: "Enterprise resource planning system with modules for HR, inventory, sales, and accounting management.",
        image: "/images/erp-project.png",
        tech: ["Django", "React", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        title: "Weather App",
        description: "Beautiful weather application with real-time forecasts, location search, and dynamic weather animations.",
        image: "/images/weather-app.png",
        tech: ["Next.js", "Express.js", "Tailwind"],
        liveUrl: "https://weather-app-one-sooty-64.vercel.app/",
        githubUrl: "https://github.com/Mollalign/weather-app",
        featured: false,
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section relative overflow-hidden" ref={ref}>
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
                <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
                        Portfolio
                    </span>
                    <h2 className="heading-lg mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        A selection of projects that showcase my skills and passion for building great products.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group card-interactive overflow-hidden ${project.featured ? "md:col-span-1" : ""
                                }`}
                        >
                            {/* Project Image */}
                            <div className={`relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ${project.image.includes("mobile-app") ? "aspect-[4/3]" : "aspect-video"
                                }`}>
                                {project.image.startsWith("/images/") ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={`transition-transform duration-500 group-hover:scale-105 ${project.image.includes("mobile-app")
                                            ? "object-contain"
                                            : "object-cover"
                                            }`}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white/20">
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all group-hover:opacity-100">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div>
                                <div className="mb-3 flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                                </div>
                                <p className="mb-4 text-muted-foreground">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/Mollalign?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <Github size={18} />
                        View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
