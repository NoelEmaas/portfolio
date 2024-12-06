import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { About, Achievement, Experience, Info, Project, Setup } from './types';
import LeftPanel from './panels/left';
import RightPanel from './panels/right';
import SmoothScroll from './components/smooth-scroll';
import './App.css';
import { ThemeProvider } from './components/theme-provider';
import ThemeSwitcher from './components/theme-switcher';

function App() {
  const [info, setInfo] = useState<Info>({
    name: '',
    title: '',
    pitch: '',
    contacts: {},
  });

  const [sections, setSections] = useState<string[]>([]);
  const [about, setAbout] = useState<About | undefined>(undefined);
  const [experiences, setExperiences] = useState<Experience[] | undefined>(undefined);
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  const [otherProjects, setOtherProjects] = useState<Omit<Project, 'stack' | 'imageBgColorClass'>[] | undefined>(undefined);
  const [achievements, setAchievements] = useState<Achievement[] | undefined>(undefined);
  const [setup, setSetup] = useState<Setup | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      const { info, about, experiences, projects, otherProjects, achievements, setup } = result;
      setInfo(info);
      setAbout(about);
      setExperiences(experiences);
      setProjects(projects);
      setOtherProjects(otherProjects);
      setAchievements(achievements);
      setSetup(setup);
      setSections(Object.keys(result));
      console.log(experiences);
    };

    fetchData();
  }, []);

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const setupRef = useRef<HTMLDivElement | null>(null);
  
  const { ref: aboutInViewRef, inView: isAboutInView } = useInView({
    threshold: 0.8,
  });

  const { ref: experienceInViewRef, inView: isExperienceInView } = useInView({
    threshold: 0.2,
  });

  const { ref: projectsInViewRef, inView: isProjectsInView } = useInView({
    threshold: 0.2,
  });

  const { ref: achievementsInViewRef, inView: isAchievementsInView } = useInView({
    threshold: 0.5,
  });

  const { ref: setupInViewRef, inView: isSetupInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isAboutInView) setActiveSection('about');
    else if (isExperienceInView) setActiveSection('experiences');
    else if (isProjectsInView) setActiveSection('projects');
    else if (isAchievementsInView) setActiveSection('achievements');
    else if (isSetupInView) setActiveSection('setup');
  }, [isAboutInView, isExperienceInView, isProjectsInView, isAchievementsInView, isSetupInView]);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    const OFFSET = 112;
    const topPosition = sectionRef.current?.getBoundingClientRect().top;
    const scrollPosition = window.scrollY + (topPosition || 0) - OFFSET;
    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };
  
  return (
    <SmoothScroll>
      <ThemeProvider>
        <ThemeSwitcher/>
        <div className='xl:w-[1280px] flex lg:flex-row flex-col justify-end mx-auto relative md:px-20 sm:px-8 px-6 gap-x-[20%]'>
            <LeftPanel 
              info={info} 
              sections={sections} 
              scrollToSection={scrollToSection}
              activeSection={activeSection}
              aboutRef={aboutRef}
              experienceRef={experienceRef}
              projectsRef={projectsRef}
              achievementsRef={achievementsRef}
              setupRef={setupRef}
            />
            <RightPanel 
              sections={sections} 
              about={about} 
              experiences={experiences}
              projects={projects} 
              otherProjects={otherProjects}
              achievements={achievements}
              setup={setup}
              activeSection={activeSection}
              aboutRef={aboutRef}
              experienceRef={experienceRef}
              projectsRef={projectsRef}
              achievementsRef={achievementsRef}
              setupRef={setupRef}
              aboutInViewRef={aboutInViewRef}
              experienceInViewRef={experienceInViewRef}
              projectsInViewRef={projectsInViewRef}
              achievementsInViewRef={achievementsInViewRef}
              setupInViewRef={setupInViewRef}
            />
        </div>
      </ThemeProvider>
    </SmoothScroll>
  );
}

export default App;
