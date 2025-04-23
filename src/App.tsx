import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Why from './components/Why/Why';
import Services from './components/Services/Services';
import MobileMenuComponent from './components/MobileMenuComponent/MobileMenuComponent';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import { persons } from './data/persons';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    const ref = sectionRefs[section];
    if (!ref.current) return;

    setIsManualScrolling(true);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => setIsManualScrolling(false), 600);
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionKey = Object.keys(sectionRefs).find(
            key => sectionRefs[key].current === entry.target
          );
          if (sectionKey) {
            setActiveSection(sectionKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <div className="App">

      <Navbar scrollToSection={scrollToSection} openMenu={openMenu} activeSection={activeSection} />

      {isMenuOpen && <MobileMenuComponent scrollToSection={scrollToSection} closeMenu={closeMenu} />}

      <div className="Section" ref={sectionRefs.home}>
        <Home scrollToSection={scrollToSection} />
      </div>
      <div className="Section" ref={sectionRefs.why}>
        <Why />
      </div>
      <div className="SectionB" ref={sectionRefs.services}>
        <Services />
      </div>
      <div className="SectionB" ref={sectionRefs.team}>
        <Team persons={persons} />
      </div>
      <div className="SectionD" ref={sectionRefs.projects}>
        <Projects />
      </div>
      <div className="SectionC" ref={sectionRefs.contact}>
        <Contact />
      </div>
      <div className="SectionB SectionF">
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
