"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Mollalign" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mollalign-daniel-ba88aa387/" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/mollalignD" },
    { name: "Email", icon: Mail, href: "mailto:molledan69@gmail.com" },
];

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Django", "AI/ML Engineer", "Flutter"];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden mt-25"
        >
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute left-1/4 top-1/4 h-125 w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
                <div className="absolute right-1/4 bottom-1/4 h-[400px] w-100 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Floating Shapes */}
                <motion.div
                    className="absolute left-[10%] top-[20%] h-20 w-20 rounded-2xl border border-primary/20 bg-primary/5"
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-[15%] top-[30%] h-16 w-16 rounded-full border border-accent/20 bg-accent/5"
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute left-[20%] bottom-[25%] h-24 w-24 rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5"
                    animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
            </div>

            <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">
                    {/* Pre-headline Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mx-auto lg:mx-0"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-sm font-medium text-primary">Available for new projects</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-xl mb-6"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">Mollalign Daniel</span>
                        <br />
                        <span className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl">
                            Full-Stack Developer
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 max-w-lg text-lg text-muted-foreground md:text-xl mx-auto lg:mx-0"
                    >
                        I craft{" "}
                        <span className="text-foreground font-medium">exceptional digital experiences</span>{" "}
                        that blend stunning design with robust functionality. Passionate about building products that make a difference.
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
                    >
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                className="badge"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-10 flex flex-col items-center justify-center lg:justify-start gap-4 sm:flex-row"
                    >
                        <motion.a
                            href="#projects"
                            className="btn-primary group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center lg:justify-start gap-4"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Profile Photo */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/30 to-accent/30 blur-[60px] rounded-full transform scale-110" />

                        {/* Decorative Ring */}
                        <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 rotate-6 scale-105" />

                        {/* Image Container */}
                        <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-card/50 shadow-2xl backdrop-blur-sm">
                            <Image
                                src="/images/my_photo-2.jpg"
                                alt="Mollalign"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/80 p-4 shadow-xl backdrop-blur-md"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="text-xl"></span>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-muted-foreground">Open to</p>
                                <p className="text-sm font-bold text-foreground">Opportunities</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>
        </section>
    );
}
