import { AtSign, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import 'react-photo-view/dist/react-photo-view.css';
import ExperienceCard, { ExperienceProps } from "./experience-card";
import AchievementCard, { AchievementProps } from "./achievement-card";
import Idea2Startup from "@/assets/images/idea2startup.jpg";
import Idea2Startup2 from "@/assets/images/idea2startup_2.jpg";
import Laad from "@/assets/images/laad.jpg";
import Laad2 from "@/assets/images/laad_2.jpg";
import APC1 from "@/assets/images/APC_1.jpg";
import APC2 from "@/assets/images/APC_2.jpg";
import APC3 from "@/assets/images/APC_3.jpg";
import APC4 from "@/assets/images/APC_4.jpg";
import ACPC from "@/assets/images/ACPC.png";
import BorderRice from "@/assets/images/border.png";
import BorderFullRice from "@/assets/images/border_full.png";
import ComfyRice from "@/assets/images/comfy.png";
import ForestRice from "@/assets/images/forest.png";
import I3Rice from "@/assets/images/i3.png";
import MountainRice from "@/assets/images/mountain.png";
import OldRice from "@/assets/images/old.png";
import OldModernRice from "@/assets/images/old_modern.png";
import RainyRice from "@/assets/images/rainy.png";
import RoninRice from "@/assets/images/ronin.png";
import RoninFullRice from "@/assets/images/ronin_full.png";
import WaveRice from "@/assets/images/wave.png";
import WaveFullRice from "@/assets/images/wave_full.png";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import RiceCard from "./rice-card";

interface RiceImg {
  image: string;
  imageFull?: string;
}

const rices: RiceImg[] = [
  {
    image: BorderRice,
    imageFull: BorderFullRice
  },
  {
    image: ComfyRice
  },
  {
    image: ForestRice
  },
  {
    image: I3Rice
  },
  {
    image: MountainRice
  },
  {
    image: OldRice,
    imageFull: OldModernRice
  },
  {
    image: RainyRice
  },
  {
    image: RoninRice,
    imageFull: RoninFullRice
  },
  {
    image: WaveRice,
    imageFull: WaveFullRice
  }
]

const experiences: ExperienceProps[] = [
  {
    startYear: "AUG 2024",
    endYear: "NOW",
    role: "React Native Developer Intern",
    company: "PrimeAnalytIQ",
    stack: ["React Native", "Firebase", "Typescript", "Jest"],
    description: "Developed and maintained Android applications for clients using Kotlin and Jetpack Compose."
  },
  {
    startYear: "JUN 2024",
    endYear: "OCT 2024",
    role: "Lead Programmer (Contract)",
    company: "Ateneo de Naga University",
    stack: ["Laravel", "React", "Typescript", "Tailwind CSS"],
    description: "Developed and maintained Android applications for clients using Kotlin and Jetpack Compose."
  },
  {
    startYear: "JUN 2024",
    endYear: "AUG 2024",
    role: "Full Stack Developer Intern",
    company: "Old.St Labs",
    stack: ["React", "Next.js", "Nest.js", "Typescript", "DynamoDB", "Jest"],
    description: "Developed and maintained Android applications for clients using Kotlin and Jetpack Compose."
  },
  {
    startYear: "JUL 2023",
    endYear: "JUN 2024",
    role: "Application Developer Intern",
    company: "Ateneo de Naga University",
    stack: ["Laravel", "PHP", "Javascript"],
    description: "Developed and maintained Android applications for clients using Kotlin and Jetpack Compose."
  },
  {
    startYear: "SEPT 2022",
    endYear: "APR 2023",
    role: "Android Developer",
    company: "CodeArmy",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"],
    description: "Developed and maintained Android applications for clients using Kotlin and Jetpack Compose."
  },
];

const achievements: AchievementProps[] = [
  {
    date: "MAY 2024",
    title: "Idea2Startup Grantee",
    description: "Funded and awarded by local city government of Naga for an AI powered web application that provides easy access of education for all.",
    images: [
      Idea2Startup,
      Idea2Startup2
    ]
  },
  {
    date: "NOV 2023",
    title: "LAAD Festival Hackathon Champion",
    description: "Placed 1st in the LAAD Festival Hackathon for developing a mobile first web application that helps local farmers sell their products without middlemen.",
    images: [
      Laad,
      Laad2
    ]
  },
  {
    date: "MAY 2023",
    title: "Ateneo Computer Programming Challenge 2023 Champion",
    description: "Placed 1st in a Team Based Competitive Programming Competition against other universities across the Bicol region.",
    images: [
      APC1,
      APC2,
      APC3,
      APC4
    ]
  },
  {
    date: "DEC 2021",
    title: "Ateneo Computer Programming Competition Freshmen Edition - 2nd Place",
    description: "Placed 2nd in am individual Competitive Programming Competition against other freshment within the university.",
    images: [
      ACPC
    ]
  },
];


export default function Info() {
  return (
    // Move the margin to a wrapper div
    <div className="mt-40">
      <div className="flex lg:flex-row flex-col justify-end w-full container lg:px-[10%] sm:px-[5%] px-5 gap-x-28">
        {/* Sticky div now starts behaving correctly */}
        <div className="bg-transparent lg:sticky top-40 h-fit">
          <div>
            <h1 className='mt-2 font-light text-gray-200 md:text-lg text-md'>
              Hi! I am <span className='text-white bold'>Noel Emaas.</span>
            </h1>
          </div>
          <div className='z-40 flex flex-col w-full md:justify-between'>
            <div className="sm:pt-[4%] pt-[10%] flex flex-col gap-y-1">
              <h1 className="text-2xl lg:text-4xl md:text-3xl bold title drop-shadow-lg text-glow-white/40">
                Software developer
              </h1>
              <p className="sub-color sub-text sm:w-full w-[85%]">
                I design & build web and mobile apps with the latest tech.
              </p>
            </div>
            <div className='flex mt-10 sm:flex-row gap-x-2'>
              <Button className='hover:bg-[#1d1d1d] drop-shadow-lg shadow-lg bg-[#181818] border-0 border-t border-[#3d3d3d] rounded-lg' variant="outline" size="icon">
                <Linkedin className="w-4 h-4 text-white"/>
              </Button>
              <Button className='hover:bg-[#1d1d1d] drop-shadow-lg shadow-lg bg-[#181818] border-0 border-t border-[#3d3d3d] rounded-lg' variant="outline" size="icon">
                <Github className="w-4 h-4 text-white"/>
              </Button>
              <Button 
                className="shadow-sm group bg-gradient-to-r drop-shadow-lg to-[#2A3F60] border-glow-[#344245] from-[#50666a] border-0 border-none rounded-lg font-semibold hover:text-white text-sm gap-x-2 transition-all duration-300 ease-in-out"
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
        
        <div className="flex-1 max-lg:mt-28">
            <div className="mb-28 sub-color">
                <p>
                  With over <span className="text-white">two and a half years of professional experience</span> crafting web and mobile applications, I've transformed my teenage passion into a thriving career. My journey in programming began at 16 when I chose the programming track in senior high school—a decision that would shape my future path. While I dedicate myself to building elegant digital solutions, I maintain balance through active pursuits like cycling and, more recently, discovering the joy of running. This blend of technical expertise and personal interests fuels my creative approach to software development.</p>
            </div>
            <div className="flex flex-col gap-y-10 mb-28">
              {experiences.map((exp) => (
                <ExperienceCard {...exp} />
              ))}
            </div>
            <div className="flex flex-col gap-y-10 mb-28">
              {achievements.map((achievement) => (
                <AchievementCard {...achievement} />
              ))}
            </div>
            <div className="flex flex-col gap-y-5 mb-28">
              <div className="flex flex-col sm:flex-row gap-x-24">
                <p className="text-sm bold sub-color">∞</p>
                <div className="flex flex-col max-sm:mt-2">
                  <p className="text-sm sub-color"><span className="text-white bold">I love linux.</span> It is the OS I use most of the time for development. I also believe that computers should feel like home, especially for programmers who spend most of their lives in front of their machines. That’s why I always configure my OS to feel like home, where it runs, looks, and feels the way I want it to. So here are some of my <a href="https://pesos.github.io/2020/07/14/what-is-ricing.html" className="text-white underline">rice</a> that I want to share.</p>
                  <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
                    <PhotoProvider>
                      {rices.map((rice) => (
                        <PhotoView src={rice.imageFull || rice.image}>
                          <img src={rice.image} alt="" className='object-cover w-[100px] rounded-lg p-1 border border-[#1f1f1f] cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300'/>
                        </PhotoView>
                      ))}
                    </PhotoProvider>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}