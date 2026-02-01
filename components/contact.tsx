"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";

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
            value: "0926560362",
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
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
                        Get In Touch
                    </span>
                    <h2 className="heading-lg mb-6">
                        Let&apos;s <span className="text-gradient">work together</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{item.title}</p>
                                        {item.href ? (
                                            <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium text-foreground">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="card border-gradient p-8"
                        >
                            <h3 className="mb-3 text-xl font-semibold">Ready to start?</h3>
                            <p className="mb-6 text-muted-foreground">
                                I&apos;m currently available for freelance work and open to discussing new opportunities.
                            </p>
                            <a href="mailto:molledan69@gmail.com" className="btn-primary">
                                <Mail size={18} />
                                Send an Email
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="card"
                    >
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-custom"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="input-custom"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="input-custom resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={formState !== "idle"}
                                className="btn-primary w-full disabled:opacity-50"
                            >
                                {formState === "loading" && <Loader2 size={18} className="animate-spin" />}
                                {formState === "success" && <CheckCircle size={18} />}
                                {formState === "idle" && <Send size={18} />}
                                {formState === "loading" ? "Sending..." : formState === "success" ? "Sent!" : "Send Message"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
