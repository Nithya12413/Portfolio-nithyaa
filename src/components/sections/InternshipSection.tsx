'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function InternshipSection() {
    return (
        <section id="internship" className="w-full py-24 px-8 lg:px-24 bg-[#141424] relative overflow-hidden">
            {/* Decorative blobs */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Internship Experience
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary-blue/50 transition-all group"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8 pb-8 border-b border-white/10">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary-cyan transition-colors">Java Full Stack Developer</h3>
                            <p className="text-xl text-primary-light font-medium flex items-center gap-2">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                                    <Briefcase className="w-5 h-5" />
                                </motion.div>
                                Glisten Project Solutions Pvt. Ltd.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-3 glass rounded-full text-gray-300 font-medium whitespace-nowrap">
                            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                <Calendar className="w-5 h-5 text-primary-blue" />
                            </motion.div>
                            August 2023 - September 2023
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white mb-4">Key Learnings & Contributions:</h4>
                        <ul className="space-y-4">
                            {[
                                "Developed scalable full-stack web applications using Java technologies.",
                                "Gained hands-on experience in backend development and database integration.",
                                "Learned best practices in software architecture and deployment workflows."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start text-gray-400">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-blue flex-shrink-0" />
                                    <p className="flex-1">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
