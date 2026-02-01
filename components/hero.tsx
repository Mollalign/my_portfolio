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

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Django", "AI/ML", "Flutter"];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
        >
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0">
                {/* Primary gradient orb */}
                <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[150px] animate-pulse-glow" />
                {/* Accent gradient orb */}
                <div 
                    className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent/12 blur-[130px] animate-pulse-glow" 
                    style={{ animationDelay: "3s" }} 
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid-pattern opacity-40" />
            </div>

            <div className="container-custom relative z-10">
                {/* Mobile: Image first, Desktop: Text left, Image right */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    
                    {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
                    <motion.div 
                        className="text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Pre-headline Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            <span className="text-sm font-medium text-foreground/80">Available for new projects</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="heading-xl mb-6"
                        >
                            <span className="block text-muted-foreground text-2xl sm:text-3xl font-normal mb-2">Hi, I&apos;m</span>
                            <span className="text-gradient">Mollalign Daniel</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/90 mb-6"
                        >
                            Full-Stack Developer
                        </motion.p>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0"
                        >
                            I craft <span className="text-foreground font-medium">exceptional digital experiences</span> that 
                            blend stunning design with robust functionality.
                        </motion.p>

                        {/* Tech Stack Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
                        >
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.35 + index * 0.04 }}
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
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="mb-12 flex flex-col items-center justify-center lg:justify-start gap-4 sm:flex-row"
                        >
                            <motion.a
                                href="#projects"
                                className="btn-primary group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View My Work
                                <motion.span
                                    className="inline-block"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="btn-secondary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.45 }}
                            className="flex items-center justify-center lg:justify-start gap-3"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.05 }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Photo - Order 1 on mobile, Order 2 on desktop */}
                    <motion.div 
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Soft glow effect behind image */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/25 to-accent/20 blur-[80px] rounded-full transform scale-125" />
                            
                            {/* Decorative ring */}
                            <motion.div 
                                className="absolute -inset-3 rounded-[28px] border border-primary/10"
                                initial={{ opacity: 0, rotate: -3 }}
                                animate={{ opacity: 1, rotate: 3 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            />

                            {/* Main Image Container - Chest-up crop with soft rounded corners */}
                            <motion.div 
                                className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[370px] lg:w-[360px] lg:h-[440px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 bg-card/30 shadow-2xl shadow-black/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <Image
                                    src="/images/my_photo-2.jpg"
                                    alt="Mollalign Daniel - Full-Stack Developer"
                                    fill
                                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 360px"
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Subtle gradient overlay at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/60 to-transparent" />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-xl px-4 py-3 shadow-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                                    <span className="text-lg">✦</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Open to</p>
                                    <p className="text-sm font-semibold text-foreground">Opportunities</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-foreground"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
                    <ArrowDown size={16} />
                </motion.a>
            </motion.div>
        </section>
    );
}
