"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2, ArrowRight } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 3000);
    };

    const contactInfo = [
        {
            title: "Email",
            value: "molledan69@gmail.com",
            icon: Mail,
            href: "mailto:molledan69@gmail.com",
        },
        {
            title: "Phone",
            value: "+251 926 560 362",
            icon: Phone,
            href: "tel:+251926560362",
        },
        {
            title: "Location",
            value: "Hawassa City, Ethiopia",
            icon: MapPin,
            href: "https://maps.google.com/?q=Hawassa,Ethiopia",
        },
    ];

    return (
        <section id="contact" className="section relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[160px]" />
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
                        Get In Touch
                    </span>
                    <h2 className="heading-lg mb-6">
                        Let&apos;s <span className="text-gradient">work together</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
                    {/* Contact Info - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.href}
                                    target={item.title === "Location" ? "_blank" : undefined}
                                    rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/25 hover:bg-card/80"
                                >
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/12 to-accent/8 text-primary transition-transform duration-300 group-hover:scale-105">
                                        <item.icon size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">{item.title}</p>
                                        <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors duration-300">
                                            {item.value}
                                        </p>
                                    </div>
                                    <ArrowRight size={16} className="text-muted-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6"
                        >
                            <h3 className="mb-2 text-lg font-semibold text-foreground">Ready to start?</h3>
                            <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
                                I&apos;m currently available for freelance work and open to discussing new opportunities.
                            </p>
                            <a 
                                href="mailto:molledan69@gmail.com" 
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <Mail size={16} />
                                Send an Email
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 sm:p-8"
                    >
                        <h3 className="mb-6 text-lg font-semibold text-foreground">Send a Message</h3>
                        
                        <div className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-custom"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>
                            
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="input-custom"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            
                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="input-custom resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formState !== "idle"}
                                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {formState === "loading" && <Loader2 size={17} className="animate-spin" />}
                                {formState === "success" && <CheckCircle size={17} />}
                                {formState === "idle" && <Send size={17} />}
                                <span>
                                    {formState === "loading" ? "Sending..." : formState === "success" ? "Message Sent!" : "Send Message"}
                                </span>
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
