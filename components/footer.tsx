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
        <footer className="relative border-t border-border bg-card/30">
            <div className="container-custom py-14">
                {/* Main Footer Content */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1 space-y-4">
                        <a href="#home" className="group inline-flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                                <span className="text-base font-bold text-white">M</span>
                            </div>
                            <span className="text-base font-semibold">
                                <span className="text-gradient">Mollalign</span>
                            </span>
                        </a>
                        <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                            Full-stack developer passionate about building exceptional digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:molledan69@gmail.com" className="transition-colors duration-300 hover:text-primary">
                                    molledan69@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+251926560362" className="transition-colors duration-300 hover:text-primary">
                                    +251 926 560 362
                                </a>
                            </li>
                            <li>Hawassa City, Ethiopia</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Mollalign. Made with
                        <Heart size={13} className="text-red-500" fill="currentColor" />
                        in Ethiopia
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
