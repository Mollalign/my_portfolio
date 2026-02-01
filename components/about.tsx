"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users, Coffee, Heart } from "lucide-react";

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
        description: "Writing maintainable, scalable, and well-documented code is my obsession.",
    },
    {
        icon: Palette,
        title: "Design Eye",
        description: "Strong sense of aesthetics with attention to the smallest details.",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed and efficiency without compromising quality.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Love working with teams and bringing ideas to life together.",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
                        About Me
                    </span>
                    <h2 className="heading-lg mb-6">
                        Passionate about creating{" "}
                        <span className="text-gradient">impactful</span> solutions
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        I&apos;m a developer who believes in the power of technology to solve real problems
                        and create meaningful experiences.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative border */}
                            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />

                            <div className="space-y-6 pl-8">
                                <h3 className="heading-md">
                                    My Journey <Coffee className="inline-block ml-2 text-primary" size={24} />
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    I am <span className="text-foreground font-medium">Mollalign Daniel</span>, a 4th-year Computer Science student living in <span className="text-foreground font-medium">Hawassa City</span>. I am set to graduate in June 2026.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    As a passionate <span className="text-foreground font-medium">Full-Stack Developer</span>, I specialize in building web and mobile applications using modern technologies. My journey involves breaking down complex problems into elegant, user-friendly solutions.
                                </p>

                                <p className="text-muted-foreground leading-relaxed">
                                    I love exploring new technologies, contributing to open-source projects, and constantly learning to improve my craft.
                                </p>

                                {/* Personal touch */}
                                <div className="flex items-center gap-3 pt-4">
                                    <Heart className="text-red-500" size={20} />
                                    <span className="text-sm text-muted-foreground">
                                        Based in Hawassa City, Ethiopia • Future Graduate '26
                                    </span>
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
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="group card p-5"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-transform group-hover:scale-110">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="mb-1 font-semibold text-foreground">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="grid grid-cols-4 gap-4"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="mb-1 text-2xl font-bold text-gradient sm:text-3xl">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground sm:text-sm">
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
