'use client';
import { motion } from 'framer-motion';

export default function EducationSection() {
    return (
        <section className="w-full py-24 px-8 lg:px-24 bg-primary-dark relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Education Journey
                </h2>

                <div className="relative border-l-2 border-primary-blue/30 ml-4 md:ml-12 space-y-12">

                    <motion.div
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="absolute w-6 h-6 bg-primary-cyan rounded-full -left-[13px] top-2 border-4 border-primary-dark"
                            animate={{ scale: [1, 1.2, 1], boxShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 15px rgba(6,182,212,0.6)", "0px 0px 0px rgba(6,182,212,0)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform border-l-4 border-l-primary-cyan">
                            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering in Information Science</h3>
                            <p className="text-primary-light font-medium mb-4">Sri Siddhartha Institute of Technology (2020–2024)</p>
                            <div className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm">
                                <span className="text-gray-400">CGPA:</span> <span className="font-bold text-primary-cyan">7.45</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            className="absolute w-6 h-6 bg-primary-blue rounded-full -left-[13px] top-2 border-4 border-primary-dark"
                            animate={{ scale: [1, 1.2, 1], boxShadow: ["0px 0px 0px rgba(59,130,246,0)", "0px 0px 15px rgba(59,130,246,0.6)", "0px 0px 0px rgba(59,130,246,0)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform border-l-4 border-l-primary-blue flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Pre-University Course (PUC)</h3>
                                <div className="inline-block mt-2 px-4 py-2 bg-white/5 rounded-full text-sm">
                                    <span className="text-gray-400">Score:</span> <span className="font-bold text-primary-blue">81.83%</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">SSLC</h3>
                                <div className="inline-block mt-2 px-4 py-2 bg-white/5 rounded-full text-sm">
                                    <span className="text-gray-400">Score:</span> <span className="font-bold text-primary-blue">83.20%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
