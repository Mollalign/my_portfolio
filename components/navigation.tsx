"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check initial theme
        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.slice(1));
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        
        if (newIsDark) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
                    isScrolled ? "py-3" : "py-5"
                }`}
            >
                <div className="container-custom">
                    <nav
                        className={`relative flex items-center justify-between rounded-2xl px-5 py-2.5 transition-all duration-400 ${
                            isScrolled
                                ? "glass shadow-lg shadow-black/5"
                                : "bg-transparent"
                        }`}
                    >
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="group flex items-center gap-2.5"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent overflow-hidden">
                                <span className="text-base font-bold text-white relative z-10">M</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
                            </div>
                            <span className="hidden text-base font-semibold sm:block">
                                <span className="text-gradient">Mollalign</span>
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-0.5 md:flex">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                                        activeSection === item.href.slice(1)
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.name}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 -z-10 rounded-lg bg-primary/8"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Theme Toggle */}
                            {mounted && (
                                <motion.button
                                    onClick={toggleTheme}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:bg-card hover:text-foreground"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Toggle theme"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={isDark ? "dark" : "light"}
                                            initial={{ y: -15, opacity: 0, rotate: -90 }}
                                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                                            exit={{ y: 15, opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.button>
                            )}

                            {/* CTA Button */}
                            <motion.a
                                href="#contact"
                                className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Let&apos;s Talk
                            </motion.a>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-card md:hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isMobileMenuOpen ? "close" : "menu"}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            className="flex h-full flex-col items-center justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.04 }}
                                    className={`text-2xl font-medium transition-colors ${
                                        activeSection === item.href.slice(1)
                                            ? "text-gradient"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="btn-primary mt-6"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Let&apos;s Talk
                            </motion.a>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
