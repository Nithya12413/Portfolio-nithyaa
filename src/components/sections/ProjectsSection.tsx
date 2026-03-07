'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Database } from 'lucide-react';
import BusScene from '@/components/3d/BusScene';
import BrainScene from '@/components/3d/BrainScene';


const projects = [
    {
        title: "Bus Pass Management System",
        description: "Developed using HTML, CSS, JavaScript, and SQL. Features include secure login system, seat selection, payment integration, and a comprehensive online pass management system.",
        tags: ["HTML", "CSS", "JavaScript", "SQL"],
    },
    {
        title: "Deepfake Multimedia Detection",
        description: "Hybrid deep learning model combining ResNet, LSTM, and CNN to detect manipulated facial content by capturing spatial and temporal features. Academic team project (4 members).",
        tags: ["ResNet", "LSTM", "CNN", "Deep Learning"],
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-24 px-8 lg:px-24 bg-primary-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(6,182,212,0.2)" }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="glass rounded-3xl overflow-hidden flex flex-col border border-white/10 hover:border-primary-blue/50 transition-colors group cursor-pointer"
                        >
                            <div className="h-64 bg-[#1A1A2E] w-full relative flex items-center justify-center border-b border-white/10 overflow-hidden">
                                <motion.div
                                    className="w-full h-full"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {index === 0 ? <BusScene /> : <BrainScene />}
                                </motion.div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-cyan transition-colors z-10">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-1 line-clamp-3 hover:line-clamp-none transition-all z-10">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6 z-10">
                                    {project.tags.map((tag, i) => (
                                        <motion.span
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.4)" }}
                                            key={i}
                                            className="text-xs font-semibold px-3 py-1 bg-primary-blue/20 text-primary-light rounded-full cursor-default"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex justify-start z-10">
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        animate={{ opacity: [1, 0.7, 1] }}
                                        transition={{ opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-cyan transition-colors"
                                    >
                                        View Details <ExternalLink className="w-4 h-4" />
                                    </motion.button>
                                </div>
                                {/* Hover Gradient Background Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-primary-cyan/10 to-transparent z-0 pointer-events-none"
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
