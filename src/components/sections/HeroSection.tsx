'use client';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import HeroScene from '@/components/3d/HeroScene';


export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-[100vh] w-full flex items-center justify-center p-8 lg:p-24 overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 bg-primary-dark opacity-90">
                <div className="absolute inset-0 bg-gradient-radial from-primary-blue/20 to-transparent blur-3xl opacity-50" />
            </div>

            <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 text-white">
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-2 rounded-full glass text-primary-cyan border-primary-cyan/30 text-sm font-semibold tracking-wider font-poppins"
                    >
                        SOFTWARE ENGINEER
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-poppins"
                    >
                        Hi, I'm <motion.span
                            animate={{
                                color: ["#3B82F6", "#06B6D4", "#3B82F6"],
                                textShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 20px rgba(6,182,212,0.8)", "0px 0px 0px rgba(6,182,212,0)"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan"
                        >
                            Nithya S S
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl text-gray-300"
                    >
                        Python Developer | AI Enthusiast
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-gray-400"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                            <path d="M12 21A10 10 0 1 0 12 1A10 10 0 0 0 12 21Z" strokeWidth="2" />
                        </svg>
                        <span>Bangalore, India</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center gap-4 pt-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(6,182,212,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-blue to-primary-cyan text-white font-medium transition-all flex items-center gap-2"
                        >
                            View Projects
                            <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href="/nithya_resume.pdf"
                            download="Nithya_S_S_Resume.pdf"
                            onClick={() => toast.success('Resume download started!')}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full glass border border-white/20 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </motion.a>
                        <div className="flex items-center gap-4 ml-2">
                            <motion.a
                                href="https://github.com/Nithya12413"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 15px rgba(255,255,255,0.4)" }}
                                whileTap={{ scale: 0.9 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                className="p-3 rounded-full glass hover:bg-primary-blue/20 hover:text-primary-cyan transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/nithya-s-0824a327b"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5, boxShadow: "0px 0px 15px rgba(6,182,212,0.4)" }}
                                whileTap={{ scale: 0.9 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                className="p-3 rounded-full glass hover:bg-primary-blue/20 hover:text-primary-cyan transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex-1 w-full h-[400px] md:h-[600px] relative flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {mounted && <HeroScene />}
                </motion.div>
            </div>
        </section>
    );
}
