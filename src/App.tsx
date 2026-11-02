import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E8DCC6] text-[#2A1418] selection:bg-[#722F37] selection:text-white relative font-poppins">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Hero Section */}
        <Hero
          onExploreWork={() => scrollTo('projects')}
          onConnect={() => scrollTo('contact')}
        />

        {/* 02. About Me Section */}
        <About onExploreSkills={() => scrollTo('skills')} />

        {/* 03. Skills & Expertise */}
        <Skills />

        {/* 04. Professional Experience */}
        <Experience />

        {/* 05. Featured Projects Gallery */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 06. Design Process Workflow */}
        <Process />

        {/* 07. Education & Qualifications */}
        <Education />

        {/* 08. Contact & Collaboration */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive In-Depth Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official CV & Qualifications Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
