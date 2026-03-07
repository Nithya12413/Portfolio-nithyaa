import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import InternshipSection from '@/components/sections/InternshipSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <InternshipSection />
            <CertificationsSection />
            <ContactSection />
        </main>
    );
}
