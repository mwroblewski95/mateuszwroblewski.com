import { useState, useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { scroller } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getAllProjects } from '../lib/projects-utility';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/ProjectList/ProjectList';
import Contact from '../components/Contact/Contact';

const HomePage = ({ projects }) => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionsRef = useRef();
  const [aboutSectionNode, setAboutSectionNode] = useState(null);

  useEffect(() => {
    const sectionToScroll = localStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      scroller.scrollTo(sectionToScroll, {
        duration: 400,
        smooth: true,
      });
      localStorage.removeItem('scrollToSection');
    }

    const sectionNodes = sectionsRef.current.children;
    for (const section of sectionNodes) {
      gsap.fromTo(
        section.children,
        { y: '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
          },
        },
      );
    }
  }, []);

  return (
    <>
      <Home aboutSectionNode={aboutSectionNode} />
      <main ref={sectionsRef}>
        <About setAboutSectionNode={setAboutSectionNode} />
        <Skills />
        <Portfolio projects={projects} />
        <Contact />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const allProjects = getAllProjects(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'about', 'skills', 'portfolio', 'contact'])),
      projects: allProjects,
    },
  };
};
export default HomePage;
