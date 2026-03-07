'use client';
import { motion } from 'framer-motion';

const skills = [
    { category: "Programming", items: ["Python"] },
    { category: "Database", items: ["SQL", "MySQL"] },
    { category: "Web", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Tools", items: ["Power BI", "Advanced Excel", "VS Code"] }
];

export default function SkillsSection() {
    return (
        <section className="w-full py-24 px-8 lg:px-24 bg-[#141424]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(6,182,212,0.15)" }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-primary-cyan/50 transition-colors border border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 group-hover:text-primary-cyan transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59,130,246,0.3)" }}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
