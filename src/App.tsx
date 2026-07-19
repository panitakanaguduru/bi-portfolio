import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CurrentImplementation from './components/CurrentImplementation';
import WhyThisRole from './components/WhyThisRole';
import ConsumerCellularUseCase from './components/ConsumerCellularUseCase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'current-implementation', 'why-this-role', 'use-case', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'use-case' ? 'why-this-role' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <main className="flex-1">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CurrentImplementation />
        <WhyThisRole />
        <ConsumerCellularUseCase />
        <Contact />
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}
