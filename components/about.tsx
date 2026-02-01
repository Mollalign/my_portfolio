"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users, MapPin, GraduationCap } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Lines of Code", value: "100K+" },
];

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code.",
    },
    {
        icon: Palette,
        title: "Design Eye",
        description: "Strong sense of aesthetics with attention to details.",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed without compromising quality.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Love working with teams to bring ideas to life.",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/8 blur-[160px]" />
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
                        About Me
                    </span>
                    <h2 className="heading-lg mb-6">
                        Passionate about creating{" "}
                        <span className="text-gradient">impactful</span> solutions
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        I&apos;m a developer who believes in the power of technology to solve real problems
                        and create meaningful experiences.
                    </p>
                </motion.div>

                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div className="relative">
                            {/* Decorative border */}
                            <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />

                            <div className="space-y-6 pl-8">
                                <h3 className="heading-md text-foreground">
                                    My Journey
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    I am <span className="text-foreground font-medium">Mollalign Daniel</span>, 
                                    a 4th-year Computer Science student living in Hawassa City. 
                                    I am set to graduate in June 2026.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    As a passionate <span className="text-foreground font-medium">Full-Stack Developer</span>, 
                                    I specialize in building web and mobile applications using modern technologies. 
                                    My journey involves breaking down complex problems into elegant, user-friendly solutions.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    I love exploring new technologies, contributing to open-source projects, 
                                    and constantly learning to improve my craft.
                                </p>

                                {/* Info badges */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="text-primary" size={16} />
                                        <span>Hawassa City, Ethiopia</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <GraduationCap className="text-accent" size={16} />
                                        <span>Graduating June 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Highlights & Stats */}
                    <div className="space-y-8">
                        {/* Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                    className="group rounded-xl border border-border bg-card p-5 transition-all duration-400 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/12 to-accent/8 text-primary transition-transform duration-300 group-hover:scale-105">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="mb-1.5 font-semibold text-foreground text-sm">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-4 gap-3 rounded-xl border border-border bg-card/50 p-5"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.55 + index * 0.08 }}
                                    className="text-center"
                                >
                                    <div className="mb-1 text-xl font-bold text-gradient sm:text-2xl lg:text-3xl">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground sm:text-xs leading-tight">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
