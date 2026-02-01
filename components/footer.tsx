"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Mollalign" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mollalign-daniel-ba88aa387/" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/mollalignD" },
    { name: "Email", icon: Mail, href: "mailto:molledan69@gmail.com" },
];

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border bg-card/50">
            <div className="container-custom py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <a href="#home" className="group flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                                <span className="text-lg font-bold text-white">M</span>
                            </div>
                            <span className="text-lg font-semibold">
                                <span className="text-gradient">Mollalign</span>
                            </span>
                        </a>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            Full-stack developer passionate about building exceptional digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 font-semibold">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mollalign. Made with
                        <Heart size={14} className="text-red-500" fill="currentColor" />
                        in Ethiopia
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        whileHover={{ y: -2 }}
                    >
                        Back to top
                        <ArrowUp size={16} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
