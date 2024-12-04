import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import Hero from './sections/hero/hero';
import About from './sections/about/about';
import Services from './sections/services/services';
import Contact from './sections/contact/contact';
import Footer from './components/footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = ['hero', 'about', 'services', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div
          style={{
            backgroundColor: 'white',
          
            minHeight: '10vh',
            color: '#111827',
          }}
        >
          < Navbar activeSection={activeSection} />
          <div id="hero" className="section ">
            <Hero />
          </div>
          <div id="about" className="section ">
            <About />
          </div>
          <div id="services" className="section ">
            <Services />
          </div>
          <div id="contact" className="section ">
            <Contact />
          </div>
          <Footer/>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
