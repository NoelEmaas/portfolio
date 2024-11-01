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
import OldModernRice from "@/assets/images/old_modern.png";
import RainyRice from "@/assets/images/rainy.png";
import RoninRice from "@/assets/images/ronin.png";
import RoninFullRice from "@/assets/images/ronin_full.png";
import WaveRice from "@/assets/images/wave.png";
import WaveFullRice from "@/assets/images/wave_full.png";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
    image: OldModernRice,
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
    role: "React Native / Firebase Developer Intern",
    company: "PrimeAnalytIQ",
    stack: ["React Native", "Firebase", "Typescript", "Jest"],
    description: "Developed and implemented key frontend features for a mobile application using. Collaborated with the team to create intuitive UI/UX using Figma for multiple mobile app screens, ensuring user-friendly interactions. Debugged and optimized mobile application performance for smoother user experiences."
  },
  {
    startYear: "JUN 2024",
    endYear: "OCT 2024",
    role: "Lead Programmer (Contract)",
    company: "Ateneo de Naga University",
    stack: ["Laravel", "React", "Typescript", "Tailwind CSS"],
    description: "Designed and developed an RFID system portal for the university, used by different departments to view the records of individuals (students, employees) that go in and out of the campus."
  },
  {
    startYear: "JUN 2024",
    endYear: "AUG 2024",
    role: "Full Stack Developer Intern",
    company: "Old.St Labs",
    stack: ["React", "Next.js", "Nest.js", "Typescript", "DynamoDB", "Jest"],
    description: "Developed web applications for different projects using React, Next.js, and Nest.js. Performed database and system design to implement a scalable architecture for a web application. Developed a backend API service and unit tests for an actual project of the company’s client using  NestJS, DynamoDB and AWS."
  },
  {
    startYear: "JUL 2023",
    endYear: "JUN 2024",
    role: "Application Developer Intern",
    company: "Ateneo de Naga University",
    stack: ["Laravel", "PHP", "Javascript"],
    description: "Developed a procurement and asset management system within the university, significantly improving work efficiency of employees by streamlining manual processes."
  },
  {
    startYear: "SEPT 2022",
    endYear: "APR 2023",
    role: "Android Developer",
    company: "CodeArmy",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"],
    description: "Developed and deployed a task management Android application. Integrated Firebase for deployment, implemented Facebook User Authentication, and used Firestore for the database."
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { ref: aboutInViewRef, inView: isAboutInView } = useInView({
    threshold: 0.5,
  });

  const { ref: experienceInViewRef, inView: isExperienceInView } = useInView({
    threshold: 0.5,
  });

  const { ref: achievementsInViewRef, inView: isAchievementsInView } = useInView({
    threshold: 0.5,
  });

  const { ref: riceInViewRef, inView: isRiceInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isAboutInView) setActiveSection('about');
    else if (isExperienceInView) setActiveSection('experience');
    else if (isAchievementsInView) setActiveSection('achievements');
    else if (isRiceInView) setActiveSection('rice');
  }, [isAboutInView, isExperienceInView, isAchievementsInView, isRiceInView]);

  return (
    <div className="mt-20 lg:mt-56">
      <div className="flex lg:flex-row flex-col justify-end w-full container lg:px-[10%] sm:px-[5%] px-5 gap-x-24">
        <div className="bg-transparent lg:sticky top-56 h-fit w-[40%] max-lg:hidden">
          <div className="flex flex-col gap-y-8">
            <div>
              <h1 className={`bold ${activeSection === 'about' ? 'text-white text-5xl' : 'text-[#2f2f2f] text-xl'} transition-all duration-300`}>
                .about
              </h1>
            </div>
            <div>
              <h1 className={`bold ${activeSection === 'experience' ? 'text-5xl text-white' : 'text-xl text-[#2f2f2f]'} transition-all duration-300`}>
                .experiences
              </h1>
            </div>
            <div>
              <h1 className={`bold ${activeSection === 'achievements' ? 'text-5xl text-white' : 'text-xl text-[#2f2f2f]'} transition-all duration-300`}>
                .triumphs
              </h1>
            </div>
            <div>
              <h1 className={`bold ${activeSection === 'rice' ? 'text-5xl text-white' : 'text-xl text-[#2f2f2f]'} transition-all duration-300`}>
                .setup
              </h1>
            </div>
          </div>
        </div>
        
        <div className="flex-1 max-lg:mt-28">
            <motion.div className={`mb-28 sub-color ${activeSection === 'about' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="about" ref={aboutInViewRef}>
                <h1 className='block bold italic lg:hidden text-[#1f1f1f]'>ABOUT</h1>
                <p className='mt-10 lg:mt-0'>
                  With over <span className="text-white l">two and a half years of professional experience</span> crafting web and mobile applications, I've transformed my teenage passion into a thriving career. My journey in programming began at 16 when I chose the programming track in senior high school—a decision that would shape my future path. While I dedicate myself to building elegant digital solutions, I maintain balance through active pursuits like cycling and, more recently, discovering the joy of running. This blend of technical expertise and personal interests fuels my creative approach to software development.</p>
            </motion.div>
            <motion.div className={`mb-28 ${activeSection === 'experience' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="experience" ref={experienceInViewRef}>
              <h1 className='block bold italic lg:hidden text-[#1f1f1f]'>EXPERIENCE</h1>
              <div className='flex flex-col mt-10 gap-y-10'>
                {experiences.map((exp) => (
                  <ExperienceCard {...exp} />
                ))}
              </div>
            </motion.div>
            <motion.div className={`mb-28 ${activeSection === 'achievements' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="achievements" ref={achievementsInViewRef}>
              <h1 className='block bold italic lg:hidden text-[#1f1f1f]'>TRIUMPHS</h1>
              <div className='flex flex-col mt-10 gap-y-10'>
                {achievements.map((achievement) => (
                  <AchievementCard {...achievement} />
                ))}
              </div>
            </motion.div>
            <motion.div className={`flex flex-col lg:mb-60 mb-28 gap-y-5 ${activeSection === 'rice' ? 'opacity-100' : 'opacity-50'} transition-all duration-300 max-sm:opacity-100`} id="rice" ref={riceInViewRef}>
              <h1 className='block bold italic lg:hidden text-[#1f1f1f]'>SETUP</h1>
              <div className="flex flex-col mt-6 sm:flex-row gap-x-24">
                <p className="text-sm bold sub-color">∞</p>
                <div className="flex flex-col max-sm:mt-2">
                  <h1 className="sub-text">Desktop Environment</h1>
                  <p className="mt-2 text-sm sub-color"><span className="text-white">I love linux.</span> It is the OS I use most of the time for development. I also believe that computers should feel like home, especially for programmers who spend most of their time with their machines. That’s why I always configure my OS to feel like home, where it runs, looks, and feels the way I want it to. So here are some of my <a href="https://pesos.github.io/2020/07/14/what-is-ricing.html" className="text-white underline">rice</a> that I want to share.</p>
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
            </motion.div>
        </div>
      </div>
    </div>
  );
}