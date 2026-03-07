'use client';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "AI for Everyone",
        issuer: "DeepLearning.AI",
        date: "2023",
    },
    {
        title: "Python 101 for Data Science",
        issuer: "IBM",
        date: "2023",
    },
    {
        title: "Cybersecurity Roles, Processes & OS Security",
        issuer: "IBM",
        date: "2023",
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="w-full py-24 px-8 lg:px-24 bg-primary-dark">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl text-center group border border-white/10 hover:border-primary-cyan/50 transition-all"
                        >
                            <motion.div
                                className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                            >
                                <Award className="w-8 h-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-2 h-14 flex items-center justify-center">{cert.title}</h3>
                            <p className="text-primary-light font-medium mb-4">{cert.issuer}</p>

                            <button className="text-sm font-semibold text-gray-400 group-hover:text-primary-cyan transition-colors flex items-center justify-center gap-2 w-full">
                                Verify Certificate <ExternalLink className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
