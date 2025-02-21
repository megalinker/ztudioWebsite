import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Stars from './components/Stars/Stars';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof SectionRefs) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      const navbarHeight = 133;
      const elementPosition = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Stars />
      <Navbar scrollToSection={scrollToSection} openMenu={openMenu} />
    </div>
  );
}

export default App;
