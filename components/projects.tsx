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
        description: "Intelligent mobile learning app featuring real-time AI chat assistance, personalized learning paths, and interactive study sessions.",
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
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
                <div className="absolute right-0 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Portfolio
                    </span>
                    <h2 className="heading-lg mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        A selection of projects that showcase my skills and passion for building great products.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-400 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            {/* Project Image */}
                            <div className={`relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 ${
                                project.image.includes("mobile-app") ? "aspect-[4/3]" : "aspect-[16/10]"
                            }`}>
                                {project.image.startsWith("/images/") ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={`transition-all duration-500 group-hover:scale-[1.03] ${
                                            project.image.includes("mobile-app")
                                                ? "object-contain"
                                                : "object-cover"
                                        }`}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl font-bold text-foreground/10">
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                                
                                {/* Action buttons */}
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/95 text-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <Github size={17} />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/95 text-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                                        aria-label={`View ${project.title} live`}
                                    >
                                        <ExternalLink size={17} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                        className="flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                                        size={18} 
                                    />
                                </div>
                                <p className="mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-14 text-center"
                >
                    <a
                        href="https://github.com/Mollalign?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2.5"
                    >
                        <Github size={17} />
                        View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
