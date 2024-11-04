import CustomHeader from './components/custom-header';
import CustomFooter from './components/custom-footer';
import SmoothScroll from './components/smooth-scroll';
import { useEffect, useRef, useState } from 'react';
import ReactIcon from './assets/images/react_icon.png';
import LaravelIcon from './assets/images/laravel_icon.png';
import NextjsIcon from './assets/images/nextjs_icon.png';
import TailwindIcon from './assets/images/tailwind_icon.png';
import FigmaIcon from './assets/images/figma_icon.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ToolCard from './components/tool-card';
import ProjectCard from './components/project-card';
import TodoMock from './assets/images/todo_mock.png';
import AgriconMock from './assets/images/agricon_mock_tmp.png';
import StubuMock from './assets/images/stubu_mock_final.png';
import AnzenMock from './assets/images/anzen_mock.png';
import TyperistMock from './assets/images/typerist_mock.png';
import PokedexMock from './assets/images/pokedex_mock.png';
import SpotifyMock from './assets/images/spotify_mock.png';
import AmazonMock from './assets/images/amazon_mock.png';
import QuizcriptMock from './assets/images/quizcript_mock.png';
import DrawguesserMock from './assets/images/drawguesser_mock.png';
import { SquareTerminal, Monitor, Globe } from 'lucide-react';
import OtherProjectCard from './components/other-project-card';

interface OtherProject {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: JSX.Element;
}


const otherProjects: OtherProject[] = [
  {
      title: 'Typerist',
      description: 'Typing speed test',
      image: TyperistMock,
      link: 'https://noelemaas.github.io/typerist/',
      icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
      title: 'Pokedex',
      description: 'Pokemon encyclopedia',
      image: PokedexMock,
      link: 'https://pokedex-nemaas.vercel.app/',
      icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
      title: 'Spotify Downloader',
      description: 'Download spotify music for free',
      image: SpotifyMock,
      link: 'https://github.com/bibookss/spotify-downloader-web-app',
      icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
      title: 'Amazon Scraper',
      description: 'Scrape Amazon products',
      image: AmazonMock,
      link: 'https://github.com/NoelEmaas/amazon-scraper',
      icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
      title: 'Quizcript',
      description: 'Take quizzes on a terminal',
      image: QuizcriptMock,
      link: 'https://github.com/NoelEmaas/quizcript',
      icon: <SquareTerminal className="w-4 h-4 text-white"/>
  },
  {
      title: 'Draw Guesser',
      description: 'Multiplayer draw guessing game',
      image: DrawguesserMock,
      link: 'https://github.com/NoelEmaas/draw-guesser',
      icon: <Monitor className="w-4 h-4 text-white"/>
  },
];

interface Tool {
  title: string;
  description: string;
  link: string;
  icon: string;
  iconStyle: string;
}

const tools: Tool[] = [
  {
      title: 'React',
      description: 'Javascript library',
      link: 'https://react.dev/',
      icon: ReactIcon,
      iconStyle: 'w-20 h-20 -bottom-6 -right-6 brightness-50'
  },
  {
      title: 'Next.js',
      description: 'React framework',
      link: 'https://nextjs.org/',
      icon: NextjsIcon,
      iconStyle: 'w-16 h-16 -bottom-4 -right-4 brightness-50'
  },
  {
      title: 'Tailwind CSS',
      description: 'CSS framework',
      link: 'https://tailwindcss.com/',
      icon: TailwindIcon,
      iconStyle: 'w-16 bottom-2 -right-2 brightness-75'
  },
  {
      title: 'React Native',
      description: 'Mobile app framework',
      link: 'https://reactnative.dev/',
      icon: ReactIcon,
      iconStyle: 'w-20 h-20 -bottom-6 -right-6 brightness-50'
  },
  {
      title: 'Laravel',
      description: 'PHP framework',
      link: 'https://laravel.com/',
      icon: LaravelIcon,
      iconStyle: 'w-20 h-20 -bottom-4 -right-6 brightness-150'
  },
  {
      title: 'Figma',
      description: 'UI/UX design tool',
      link: 'https://www.figma.com/',
      icon: FigmaIcon,
      iconStyle: 'h-16 -bottom-4 -right-2 brightness-75'
  },
];

interface Project {
  title: string;
  year: string;
  imagePadding?: string;
  imageStyle?: string;
  hoverGradient?: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}

const projects: Project[] = [
  {
      title: 'Stubu.AI',
      year: '2024',
      imageStyle: 'rounded-lg shadow-lg drop-shadow-lg',
      hoverGradient: 'to-[#888CBA] from-[#888CBA]',
      description: 'AI-driven app generating personalized lessons, quizzes, and modules tailored to users\' chosen topics.',
      image: StubuMock,
      stack: ["React", "Intertia", "Typescript", "Tailwind CSS"],
      link: 'https://github.com/STUBU-AI'
  },
  {
      title: 'Anzen',
      year: '2024',
      imagePadding: 'p-5',
      imageStyle: 'rounded-lg',
      hoverGradient: 'bg-[#8FACE3]',
      description: 'University RFID system displaying real-time time-in/out logs for departments, with user info visible at every gates. (Link not yet available as it contains private data)',
      image: AnzenMock,
      stack: ["React", "Laravel", "Intertia", "PL/SQL", "Typescript", "Tailwind CSS"],
      link: '#'
  },
  {
      title: 'AgriCon',
      year: '2023',
      imagePadding: 'sm:p-20',
      hoverGradient: 'to-[#0e6e2f] from-[#18453a]',
      description: 'Mobile-first web app that helps farmers to sell products online directly to consumers without a middlemen.',
      image: AgriconMock,
      stack: ["Laravel", "TailwindCSS", "Javascript", "PHP"],
      link: 'https://github.com/CSjianbel/AgriCon'
  },
  {
      title: 'To Do It',
      year: '2022',
      imagePadding: 'sm:p-20',
      hoverGradient: 'to-sky-800 from-sky-950',
      description: 'Task and notes app with markdown, date assignments, and live weather for organized, context-rich planning',
      image: TodoMock,
      stack: ["Kotlin", "Jetpack Compose", "Firebase"],
      link: 'https://github.com/NoelEmaas/todo-list-app'
  },
];

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const otherRef = useRef<HTMLDivElement | null>(null);

  const { ref: welcomeInRef, inView: isWelcomeInView } = useInView({
    threshold: 0.5,
  });

  const { ref: worksInRef, inView: isWorksInView } = useInView({
    threshold: 0.2,
  });

  const { ref: otherInRef, inView: isOtherInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (isWelcomeInView) setActiveSection('welcome');
    else if (isWorksInView) setActiveSection('works');
    else if (isOtherInView) setActiveSection('others');
  }, [isWelcomeInView, isWorksInView, isOtherInView]);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    const OFFSET = 224;
    const topPosition = sectionRef.current?.getBoundingClientRect().top;
    const scrollPosition = window.scrollY + (topPosition || 0) - OFFSET;
    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  return (
    <SmoothScroll>
        <CustomHeader />
          <div className="flex justify-start mt-0 sm:mt-20 lg:mt-56">
            <div className="flex lg:flex-row flex-col justify-end sm:px-[5%] px-5 gap-x-24 mx-0">
              <div className="bg-transparent lg:sticky top-56 h-fit w-[40%] max-lg:hidden">
                <div className="flex flex-col gap-y-8">
                  <div>
                    <h1 onClick={() => scrollToSection(welcomeRef)} className={`sub-text ${activeSection === 'welcome' ? 'text-white text-5xl' : 'text-[#2f2f2f] text-xl'} transition-all duration-300 cursor-pointer hover:text-white w-fit`}>
                      .WELCOME
                    </h1>
                  </div>
                  <div>
                    <h1 onClick={() => scrollToSection(worksRef)} className={`sub-text ${activeSection === 'works' ? 'text-5xl text-white' : 'text-xl text-[#2f2f2f]'} transition-all duration-300 cursor-pointer hover:text-white w-fit`}>
                      .PROJECTS
                    </h1>
                  </div>
                  <div>
                    <h1 onClick={() => scrollToSection(otherRef)} className={`sub-text ${activeSection === 'others' ? 'text-5xl text-white' : 'text-xl text-[#2f2f2f]'} transition-all duration-300 cursor-pointer hover:text-white w-fit`}>
                      .OTHERS
                    </h1>
                  </div>
                </div>
              </div>
              <div className="z-10 flex-1 w-full max-sm:mt-0 max-lg:mt-28">
                <motion.div className={`sm:min-h-fit flex flex-col justify-end min-h-screen mb-28 max-sm:mb-0 sub-color max-sm:pb-28 ${activeSection === 'welcome' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="about" ref={(node) => { welcomeInRef(node); welcomeRef.current = node; }}>
                  <p className='text-xl text-white sub-text'>Software Developer ✦</p>
                  <p className='mt-2'>Hi! I am <span className='text-white'>Noel Emaas.</span> I design and develop web and mobile applications with the latest technologies.</p>
                
                  <div className='grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3'>
                    {tools.map((tool, index) => (
                      <ToolCard key={index} {...tool} />
                    ))}
                  </div>
                </motion.div>
                <motion.div className={`mb-28 sub-color ${activeSection === 'works' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="works" ref={(node) => { worksInRef(node); worksRef.current = node; }}>
                  <p className='text-xl text-white sub-text'>Selected Works ✦</p>
                  <p className='mt-2'>Some projects that I am really proud of.</p>
                
                  <div className='flex flex-col gap-y-8 mt-8 border-[#2f2f2f]'>
                    {projects.map((tool, index) => (
                      <ProjectCard key={index} {...tool} />
                    ))}
                  </div>
                </motion.div>
                <motion.div className={`lg:pb-60 mb-28 sub-color ${activeSection === 'others' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="others" ref={(node) => { otherInRef(node); otherRef.current = node; }}>
                  <p className='text-xl text-white sub-text'><span></span>Other Works ✦</p>
                  <p className='mt-2'>Other projects that are also worth showcasing.</p>
                
                  <div className='flex flex-col gap-y-8 mt-8 border-[#2f2f2f]'>
                    {otherProjects.map((project, index) => (
                      <OtherProjectCard key={index} {...project} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        <CustomFooter />
    </SmoothScroll>
  );
}
