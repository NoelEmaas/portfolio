import CustomHeader from './components/custom-header';
import Hero from './components/hero';
import Projects from './components/projects';
import OtherProjects from './components/other-projects';
import Stack from './components/stack';
import CustomFooter from './components/custom-footer';
import SmoothScroll from './components/smooth-scroll';
import { useEffect, useRef, useState } from 'react';
import BottomGradient from './components/bottom-gradient';


function App() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [hideHero, setHideHero] = useState(false);
  
  useEffect(() => {
    const stack = stackRef.current;
    
    const handleScroll = (): void => {
      if (stack) {
        const rect = stack.getBoundingClientRect();
        if (rect.top <= 0) {
          setHideHero(true);
        } else {
          setHideHero(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScroll>
        <CustomHeader />
        <Hero hidden={hideHero}/>
        <Stack stackRef={stackRef}/>
        <Projects />
        <OtherProjects />
        <CustomFooter />
        {/* <BottomGradient /> */}
    </SmoothScroll>
  );
}

export default App
