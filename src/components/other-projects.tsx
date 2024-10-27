import { SquareTerminal, Monitor, Globe, ArrowUpRight } from 'lucide-react';
import OtherProjectCard from '../components/other-project-card';
import AnzenUI from '../assets/images/anzen_ui_mock.png';
import EskolarUI from '../assets/images/eskolar_ui_mock.png';
import FlavorshareUI from '../assets/images/flavorshare_ui_mock.png';
import JobUI from '../assets/images/job_ui_mock.png';
import MediguideUI from '../assets/images/mediguide_ui_mock.png';
import StubuUI from '../assets/images/stubu_ui_mock.png';
import Stubu2UI from '../assets/images/stubu2_ui_mock.png';
import FigmaIcon from '../assets/images/figma_icon.png';
import TyperistMock from '../assets/images/typerist_mock.png';
import PokedexMock from '../assets/images/pokedex_mock.png';
import SpotifyMock from '../assets/images/spotify_mock.png';
import AmazonMock from '../assets/images/amazon_mock.png';
import QuizcriptMock from '../assets/images/quizcript_mock.png';
import DrawguesserMock from '../assets/images/drawguesser_mock.png';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
        image: TyperistMock,
        link: '#',
        icon: <Globe className="w-4 h-4 text-white"/>
    },
    {
        title: 'Pokedex',
        description: 'Pokemon encyclopedia',
        image: PokedexMock,
        link: '#',
        icon: <Globe className="w-4 h-4 text-white"/>
    },
    {
        title: 'Spotify Downloader',
        description: 'Download spotify music for free',
        image: SpotifyMock,
        link: '#',
        icon: <Globe className="w-4 h-4 text-white"/>
    },
    {
        title: 'Amazon Scraper',
        description: 'Scrape Amazon products',
        image: AmazonMock,
        link: '#',
        icon: <Globe className="w-4 h-4 text-white"/>
    },
    {
        title: 'Quizcript',
        description: 'Take quizzes on a terminal',
        image: QuizcriptMock,
        link: '#',
        icon: <SquareTerminal className="w-4 h-4 text-white"/>
    },
    {
        title: 'Draw Guesser',
        description: 'Multiplayer draw guessing game',
        image: DrawguesserMock,
        link: '#',
        icon: <Monitor className="w-4 h-4 text-white"/>
    },
];

export default function OtherProjects () {
    return (
      <div className='bg-[#0d0d0d] w-full relative border-0 border-t py-[20px] border-[#1f1f1f] flex items-center'>
        <div className='w-full py-[5%] px-[10%] container relative'>
          <div className='mb-10'>
            <h1 className="text-lg bold">Additional Works</h1>
            <p className='sub-text sub-color'>Other projects that are also worth showcasing.</p>
          </div>

          <div className='flex items-center mt-8 gap-x-10'>
            <h1 className='flex-none text-xs text-white/20'>SOFTWARE PROJECTS</h1>
            <hr className='border-[#1f1f1f] border-dashed w-full grow'/>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full pb-10 mt-4"
          >
            <CarouselContent className='pb-4'>
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
          
          <div className='flex items-center gap-x-10'>
            <h1 className='flex-none text-xs text-white/20'>DESIGN PROJECTS</h1>
            <hr className='border-[#1f1f1f] border-dashed w-full grow'/>
          </div>

          <div className='w-full flex items-center justify-between rounded-md h-[140px] border border-[#141414] border-t-[#303030] drop-shadow-lg shadow-sm mt-4 p-4 bg-[#111111] hover:bg-[#0f0f0f] transition-all duration-300 cursor-pointer group'>
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
              <div className="inline-block pr-2 animate-slide-left-infinite group-hover:animation-pause w-max mix-blend-plus-lighter">
                <div className='flex gap-4'>
                  {uiDesigns.map((design, index) => (
                    <img 
                      key={index} 
                      src={design} 
                      className='object-cover h-24 rounded-lg mix-blend-plus-lighter' 
                      alt={`UI Design ${index + 1}`} 
                    />
                  ))}
                </div>
              </div>
              <div className="inline-block animate-slide-left-infinite group-hover:animation-pause w-max mix-blend-plus-lighter">
                <div className='flex gap-4'>
                  {uiDesigns.map((design, index) => (
                    <img 
                      key={index * 2} 
                      src={design} 
                      className='object-cover h-24 rounded-lg mix-blend-plus-lighter' 
                      alt={`UI Design ${index + 1}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}