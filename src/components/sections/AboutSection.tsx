'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="w-full py-24 px-8 lg:px-24 bg-[#141424]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <motion.div
                    className="flex-1 text-center lg:text-left space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">About Me</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Motivated Information Science graduate seeking opportunities in the IT and software industry where I can apply my analytical and technical skills to contribute to organizational growth.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-12">
                        {[
                            { num: "2+", label: "Major Projects" },
                            { num: "1", label: "Internships" },
                            { num: "4+", label: "Technical Tools" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="glass p-6 rounded-2xl w-40 text-center border border-primary-blue/20 hover:border-primary-cyan/50 transition-colors cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -10,
                                    boxShadow: "0px 10px 30px rgba(6,182,212,0.2)",
                                    backgroundColor: "rgba(255,255,255,0.05)"
                                }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }, type: "spring", stiffness: 300, damping: 20 }}
                                viewport={{ once: true }}
                            >
                                <motion.h3
                                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary-light to-primary-cyan"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.num}
                                </motion.h3>
                                <p className="text-sm text-gray-400 mt-2 font-semibold tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
