"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Frontend",
        color: "from-indigo-500 to-violet-500",
        bgColor: "bg-indigo-500/10",
        textColor: "text-indigo-400",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 92 },
        ],
    },
    {
        title: "Backend",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500/10",
        textColor: "text-emerald-400",
        skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 85 },
            { name: "FastAPI", level: 82 },
            { name: "PostgreSQL", level: 80 },
        ],
    },
    {
        title: "Mobile",
        color: "from-sky-500 to-cyan-500",
        bgColor: "bg-sky-500/10",
        textColor: "text-sky-400",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 88 },
            { name: "Firebase", level: 85 },
        ],
    },
    {
        title: "Tools",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-500/10",
        textColor: "text-amber-400",
        skills: [
            { name: "Git", level: 90 },
            { name: "Docker", level: 78 },
            { name: "Figma", level: 82 },
        ],
    },
];

const technologies = [
    "JavaScript", "TypeScript", "Python", "Dart", "React", "Next.js",
    "Flutter", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis",
    "Git", "Docker", "Vercel", "Tailwind", "Framer Motion", "Figma",
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[180px]" />
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
                        Skills & Expertise
                    </span>
                    <h2 className="heading-lg mb-6">
                        Technologies I <span className="text-gradient">work with</span>
                    </h2>
                </motion.div>

                {/* Skills Cards Grid */}
                <div className="mb-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
                            className="group rounded-xl border border-border bg-card p-6 transition-all duration-400 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Category Header */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${category.color}`} />
                                <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                            </div>
                            
                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                                            <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-1 w-full overflow-hidden rounded-full bg-muted/50">
                                            <motion.div
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ 
                                                    duration: 0.8, 
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.06 + 0.3,
                                                    ease: "easeOut"
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technology Tags Cloud */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-2.5"
                >
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="cursor-default rounded-lg border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
