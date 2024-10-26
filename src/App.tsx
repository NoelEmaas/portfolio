import CustomHeader from './components/custom-header';
import Hero from './components/hero';
import Projects from './components/projects';
import OtherProjects from './components/other-projects';
import Stack from './components/stack';
import CustomFooter from './components/custom-footer';
import SmoothScroll from './components/smooth-scroll';


function App() {
  return (
    <SmoothScroll>
        <CustomHeader />
        <Hero />
        <Stack />
        <Projects />
        <OtherProjects />
        <div className='"w-full py-[5%] bg-[#101010] relative'>
          <div className='container px-[10%] mx-auto flex flex-col gap-y-32'>
            <div className='mb-10'>
              <h1 className="text-lg bold">The Human Element</h1>
              <p className='sub-text sub-color'>Know more about the man behind the codes.</p>
            </div>
          </div>
        </div>
        <CustomFooter />

    </SmoothScroll>
  );
}

export default App
