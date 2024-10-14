import { Github, Linkedin, AtSign, FileText, Download, SquareTerminal, Monitor, Globe, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import { HoverEffect } from './components/ui/card-hover-effect';
import HeaderButton from './components/header-button';
import ProjectCard from './components/project-card';
import logo from '@/assets/images/logo.png'

import RecipeMock from './assets/images/recipe_mock.png';
import EskolarMock from './assets/images/eskolar_mock.png';
import TodoMock from './assets/images/todo_mock.png';
import AgriconMock from './assets/images/agricon_mock.png';
import StubuMock from './assets/images/stubu_mock.png';
import MediguideMock from './assets/images/mediguide_mock.png'; 

import ReactIcon from './assets/images/react_icon.png';
import LaravelIcon from './assets/images/laravel_icon.png';
import NextjsIcon from './assets/images/nextjs_icon.png';
import TailwindIcon from './assets/images/tailwind_icon.png';
import FigmaIcon from './assets/images/figma_icon.png';
import OtherProjectCard from './components/other-project-card';

import QuizcriptImg from './assets/images/quizcript_img.png';
import DrawguesserImg from './assets/images/drawguesser_img.png';
import SpotifyImg from './assets/images/spotify_img.png';
import TyperistImg from './assets/images/typerist_img.png';
import PokedexImg from './assets/images/pokedex_img.png';
import AmazonImg from './assets/images/amazon_img.png';

import AnzenUI from './assets/images/anzen_ui_mock.png';
import EskolarUI from './assets/images/eskolar_ui_mock.png';
import FlavorshareUI from './assets/images/flavorshare_ui_mock.png';
import JobUI from './assets/images/job_ui_mock.png';
import MediguideUI from './assets/images/mediguide_ui_mock.png';
import StubuUI from './assets/images/stubu_ui_mock.png';
import Stubu2UI from './assets/images/stubu2_ui_mock.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Tool {
  title: string;
  description: string;
  link: string;
  icon: string;
  iconStyle: string;
}

interface OtherProject {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: JSX.Element;
}

const uiDesigns: string[] = [
  AnzenUI,
  EskolarUI,
  FlavorshareUI,
  JobUI,
  MediguideUI,
  StubuUI,
  Stubu2UI,
];

const otherProjects: OtherProject[] = [
  {
    title: 'Typerist',
    description: 'Typing speed test',
    image: TyperistImg,
    link: '#',
    icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
    title: 'Pokedex',
    description: 'Pokemon encyclopedia',
    image: PokedexImg,
    link: '#',
    icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
    title: 'Spotify Downloader',
    description: 'Download spotify music for free',
    image: SpotifyImg,
    link: '#',
    icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
    title: 'Amazon Scraper',
    description: 'Scrape Amazon products',
    image: AmazonImg,
    link: '#',
    icon: <Globe className="w-4 h-4 text-white"/>
  },
  {
    title: 'Quizcript',
    description: 'Take quizzes on a terminal',
    image: QuizcriptImg,
    link: '#',
    icon: <SquareTerminal className="w-4 h-4 text-white"/>
  },
  {
    title: 'Draw Guesser',
    description: 'Multiplayer draw guessing game',
    image: DrawguesserImg,
    link: '#',
    icon: <Monitor className="w-4 h-4 text-white"/>
  },
];

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
    description: 'Utility-first CSS framework',
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


const SimpleCard = ({title, link}: {title: string, link: string}) => {
  return (
    <div className='bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-transparent transition-all duration-300 cursor-pointer hover:border-[#1f1f1f] rounded-full px-4 py-2 text-sm sub-color hover:text-white'>
      {title}
    </div>
  );
}


function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
        <div className={`w-full top-0 left-0 right-0 h-[75px] bg-[#0F0F0F] border-0 border-b border-[#1f1f1f] fixed z-50 bg-opacity-90 backdrop-blur-md  transition-transform duration-300  ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className='container px-[15%] mx-auto flex items-center h-full justify-between'>
            <div className='flex items-center gap-x-1'>
              <img
                  src={logo}
                  height="40"
                  width="40"
                  className="object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
              />
              <h1 className='text-sm font-semibold'>nemaas.dev</h1>
            </div>
            <div className='flex items-center gap-x-2'>
              <HeaderButton active={true}>Projects</HeaderButton>
              <HeaderButton>Stack</HeaderButton>
              <HeaderButton>About</HeaderButton>
            </div>
            <div>
              <button className="
                relative inline-flex h-10 px-4 py-2 rounded-lg animate-shimmer items-center justify-center border 
                border-[#1f1f1f] bg-[linear-gradient(110deg,#171717,45%,#263b36,55%,#171717)] bg-[length:200%_100%] 
                text-gray-300 transition-all focus:outline-none focus:ring-2 font-semibold
                focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xs gap-x-2
                overflow-hidden group
              ">
                <span>Resume</span>
                <div className="relative w-[14px] h-[14px]">
                  <FileText className="absolute z-10 w-full h-full text-gray-300 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-full group-hover:z-0"/>
                  <Download className="absolute z-0 w-full h-full text-gray-300 transition-all duration-300 ease-in-out -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-10"/>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="container px-[15%] mx-auto py-[5%] flex flex-col gap-y-16 pt-[8%]">
          {/* Header Section */}
          <div>
            <h1 className='sub-text'> I am Noel Emaas, </h1> 
            <div className='flex items-end justify-between w-full'>
              <div className="mt-[20px]">
                <h1 className="text-xl bold title">
                  Software developer
                </h1>
                <p className="sub-color sub-text">
                  I design & build web and mobile apps with the latest tech.
                </p>
              </div>
              <div className='flex gap-x-2'>
                <Button className='hover:bg-[#262626] bg-[#171717] border-[#1f1f1f] rounded-lg' variant="outline" size="icon">
                  <Linkedin className="w-4 h-4 text-white"/>
                </Button>
                <Button className='hover:bg-[#262626] bg-[#171717] border-[#1f1f1f] rounded-lg' variant="outline" size="icon">
                  <Github className="w-4 h-4 text-white"/>
                </Button>
                <Button 
                  className="group bg-gradient-to-r to-[#599084] from-[#0E454E] border-[#0a0c0c] rounded-lg font-semibold hover:text-white text-sm gap-x-2 transition-all duration-300 ease-in-out"
                  variant="outline"
                >
                  <span className="w-0 overflow-hidden transition-all duration-300 ease-in-out opacity-0 group-hover:w-4 group-hover:opacity-100">
                    <AtSign className="hidden w-4 h-4 text-white group-hover:block" />
                  </span>
                  <span className="mr-2 transition-all duration-300 ease-in-out group-hover:mr-0 whitespace-nowrap">Get in touch</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div>
            <div>
              <h1 className="text-lg bold">Highlighted Projects</h1>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
              <ProjectCard
                title='To Do It'
                imgageContainerStyle='p-[30px] group-hover:from-sky-400 group-hover:to-sky-950'
                description='Hover over this card to unleash the power of CSS perspective'
                image={TodoMock}
                link='#'
              />
              <ProjectCard
                title='ESkolar'
                imgageContainerStyle='group-hover:from-blue-400 group-hover:to-indigo-950 p-[10px]'
                description='Hover over this card to unleash the power of CSS perspective'
                image={EskolarMock}
                link='#'
              />
              <ProjectCard
                title='AgriCon'
                imgageContainerStyle='group-hover:from-[#16C250] group-hover:to-[#18453a] p-[20px]'
                description='Hover over this card to unleash the power of CSS perspective'
                image={AgriconMock}
                link='#'
              />
              <ProjectCard
                title='FlavorShare'
                imgageContainerStyle='group-hover:from-[#fce86f] group-hover:to-[#45470e] p-[10px]'
                description='Hover over this card to unleash the power of CSS perspective'
                image={RecipeMock}
                link='#'
              />
              <ProjectCard
                title='MediGuide'
                imgageContainerStyle='group-hover:from-[#1DA1F3] group-hover:to-[#072436] p-[60px]'
                description='Hover over this card to unleash the power of CSS perspective'
                image={MediguideMock}
                link='#'
              />
              <ProjectCard
                title='Stubu.AI'
                imgageContainerStyle='group-hover:from-cyan-400 group-hover:to-[#0e1f47] p-[10px]'
                description='Hover over this card to unleash the power of CSS perspective'
                image={StubuMock}
                link='#'
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-lg bold">Additional Works</h1>
              <p className='sub-text sub-color'>Other projects that are also worth showcasing.</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full mt-4"
            >
              <CarouselContent>
                {otherProjects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <OtherProjectCard 
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      icon={project.icon}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className='w-full flex items-center justify-between rounded-md bg-transparent h-[140px] border border-dashed border-[#1f1f1f] mt-4 p-4 hover:bg-[#0f0f0f] transition-all duration-300 cursor-pointer group'>
              <div className='flex flex-col justify-between h-full grow'>
                <div className='flex items-center gap-x-4'>
                    <img src={FigmaIcon} className='h-5' alt="" />
                    <div className='flex items-center'>
                      <h1 className='font-semibold'>Figma</h1>
                      <ArrowUpRight 
                        className="w-4 h-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                      />
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-y-1'>
                    <h1 className='text-sm font-semibold'>UI/UX Designs</h1>
                    <p className='text-sm sub-color'>Here are some of the UI designs I have created using Figma.</p>
                </div>
              </div>
              <div className='group w-[45%] relative overflow-hidden whitespace-nowrap sm:[mask-image:_linear-gradient(to_right,_transparent_0,_#080808_128px,#080808_calc(100%-128px),_transparent_100%)]'>
                <div className="inline-block pr-2 animate-slide-left-infinite group-hover:animation-pause w-max">
                  <div className='flex gap-4'>
                    {uiDesigns.map((design, index) => (
                      <img 
                        key={index} 
                        src={design} 
                        className='object-cover h-24 rounded-lg' 
                        alt={`UI Design ${index + 1}`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="inline-block animate-slide-left-infinite group-hover:animation-pause w-max">
                  <div className='flex gap-4'>
                    {uiDesigns.map((design, index) => (
                      <img 
                        key={index * 2} 
                        src={design} 
                        className='object-cover h-24 rounded-lg' 
                        alt={`UI Design ${index + 1}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div>
              <h1 className="text-lg bold">Stack</h1>
              <p className='sub-text sub-color'>Tools & frameworks I am proficient with.</p>
            </div>
            <HoverEffect items={tools} />
            {/* <p className='mt-4 sub-text sub-color'>Other technologies that I use in my projects.</p> */}
            <div className='mt-4 group relative overflow-hidden whitespace-nowrap sm:[mask-image:_linear-gradient(to_right,_transparent_0,_#080808_128px,#080808_calc(100%-128px),_transparent_100%)]'>
              <div className="inline-block pr-1 animate-slide-left-infinite group-hover:animation-pause w-max">
                <div className='flex gap-2'>
                  <SimpleCard title='Node.js' link='#'/>
                  <SimpleCard title='Express.js' link='#'/>
                  <SimpleCard title='Nest.js' link='#'/>
                  <SimpleCard title='MongoDB' link='#'/>
                  <SimpleCard title='MySQL' link='#'/>
                  <SimpleCard title='Firebase' link='#'/>
                  <SimpleCard title='Kotlin' link='#'/>
                  <SimpleCard title='Flutter' link='#'/>
                  <SimpleCard title='Python' link='#'/>
                  <SimpleCard title='Typescript' link='#'/>
                  <SimpleCard title='C++' link='#'/>
                  <SimpleCard title='Java' link='#'/>
                  <SimpleCard title='Jest' link='#'/>
                  <SimpleCard title='Linux' link='#'/>
                </div>
              </div>
              <div className="inline-block animate-slide-left-infinite group-hover:animation-pause w-max">
                <div className='flex gap-2'>
                  <SimpleCard title='Node.js' link='#'/>
                  <SimpleCard title='Express.js' link='#'/>
                  <SimpleCard title='Nest.js' link='#'/>
                  <SimpleCard title='MongoDB' link='#'/>
                  <SimpleCard title='MySQL' link='#'/>
                  <SimpleCard title='Firebase' link='#'/>
                  <SimpleCard title='Kotlin' link='#'/>
                  <SimpleCard title='Flutter' link='#'/>
                  <SimpleCard title='Python' link='#'/>
                  <SimpleCard title='Typescript' link='#'/>
                  <SimpleCard title='C++' link='#'/>
                  <SimpleCard title='Java' link='#'/>
                  <SimpleCard title='Jest' link='#'/>
                  <SimpleCard title='Linux' link='#'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bottom-0 left-0 right-0 h-[75px] bg-gradient-to-br from-[#0F0F0F] to-[#080808] border-0 border-t border-[#1f1f1f] z-50 bg-opacity-90 backdrop-blur-md  transition-transform duration-300'>
          <div className='container px-[15%] mx-auto flex items-center h-full justify-between'>
            Hello
          </div>
        </div>
    </>

  );
}

export default App
