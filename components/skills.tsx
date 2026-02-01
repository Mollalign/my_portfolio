"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Frontend",
        color: "from-violet-500 to-purple-600",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 92 },
        ],
    },
    {
        title: "Backend",
        color: "from-cyan-500 to-blue-600",
        skills: [
            { name: "Node.js", level: 88 },
            { name: "Python", level: 85 },
            { name: "FastAPI", level: 82 },
            { name: "PostgreSQL", level: 80 },
        ],
    },
    {
        title: "Mobile",
        color: "from-emerald-500 to-teal-600",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 88 },
            { name: "Firebase", level: 85 },
        ],
    },
    {
        title: "Tools",
        color: "from-orange-500 to-red-600",
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
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
                        Skills & Expertise
                    </span>
                    <h2 className="heading-lg mb-6">
                        Technologies I <span className="text-gradient">work with</span>
                    </h2>
                </motion.div>

                <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="card group"
                        >
                            <div className="mb-6 flex items-center gap-3">
                                <div className={`h-10 w-1 rounded-full bg-gradient-to-b ${category.color}`} />
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                            </div>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                                            <motion.div
                                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-3"
                >
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.02 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
