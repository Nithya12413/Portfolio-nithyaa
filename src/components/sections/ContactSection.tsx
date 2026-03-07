'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-24 px-8 lg:px-24 bg-[#141424]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Let's Connect and Create Something Awesome!</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I'm always open to discussing product design work, software engineering roles, or partnership opportunities. Let's make an impact together.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:nithyass@example.com" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-primary-cyan/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary-cyan" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Email Me</p>
                                    <p className="text-lg text-white font-medium group-hover:text-primary-cyan transition-colors">nithya.ss.1309@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                                    <Phone className="w-6 h-6 text-primary-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Call Me</p>
                                    <p className="text-lg text-white font-medium group-hover:text-primary-blue transition-colors">+91 9110420967</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-primary-cyan/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-primary-cyan" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Location</p>
                                    <p className="text-lg text-white font-medium group-hover:text-primary-cyan transition-colors">Bangalore, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex gap-4">
                            <motion.a
                                href="https://www.linkedin.com/in/nithya-s-0824a327b"
                                target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5, boxShadow: "0px 0px 20px rgba(6,182,212,0.5)" }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://github.com/Nithya12413"
                                target="_blank" rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5, boxShadow: "0px 0px 20px rgba(255,255,255,0.5)" }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button className="w-full py-4 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
