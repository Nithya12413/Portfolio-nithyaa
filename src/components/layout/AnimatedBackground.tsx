'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticlesComponent from './ParticlesComponent';

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-primary-dark">
            {/* Dynamic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A1A] via-[#161026] to-[#0A0512]" />

            {/* Interactive Particles Layer */}
            <ParticlesComponent />

            {/* Animated Blob 1 - Top Right - Blue */}
            <motion.div
                className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-blue/15 blur-[100px]"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated Blob 2 - Bottom Left - Cyan */}
            <motion.div
                className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-cyan/15 blur-[120px]"
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated Blob 3 - Center - Light Blue */}
            <motion.div
                className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-primary-light/10 blur-[150px]"
                animate={{
                    x: [0, 50, -100, 0],
                    y: [0, 150, -50, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* subtle noise overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>
    );
}
