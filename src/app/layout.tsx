import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import AnimatedBackground from '@/components/layout/AnimatedBackground';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nithya S S | Portfolio',
    description: 'Software Engineer & AI Enthusiast',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-transparent text-white font-sans antialiased overflow-x-hidden min-h-screen selection:bg-primary-cyan selection:text-white`}>
                <Toaster position="bottom-right" toastOptions={{
                    style: {
                        background: '#161026',
                        color: '#fff',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                    },
                }} />
                <AnimatedBackground />
                {children}
            </body>
        </html>
    );
}
