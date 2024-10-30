import { Button } from "@/components/ui/button"
import { AtSign, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  hidden?: boolean;
}

export default function Hero({ hidden = false }: HeroProps) {
    return (
      <div className={`${hidden ? 'hidden' : 'flex'} absolute overflow-hidden top-0 w-full shadow-inner sm:h-1/2 h-[450px] flex-col items-center md:justify-center justify-end md:pb-0 pb-[10%] bg-[#101010] z-10 inset-x-0`}>
        <div className="container lg:px-[12%] sm:px-[5%] px-5 fixed sm:pt-[5%]">
          <div className="">
            {/* <div className="flex group overflow-hidden w-[22px] duration-300 transition-all ease-in-out hover:w-[94px] cursor-pointer h-[20px] items-center gap-x-2 bg-gradient-to-br from-[#1f1f1f] to-[#181818] border border-[#2f2f2f] shadow-sm backdrop-blur-sm px-1 py-1 rounded-full">
              <img src={flag} alt="flag" className="object-cover w-3 h-3 rounded-full" />
              <p className="pr-2 text-xs transition-all duration-300 delay-200 opacity-0 group-hover:opacity-100">Philippines</p>
            </div> */}
            <h1 className='mt-2 font-light text-gray-200 md:text-lg text-md'>Hi! I am <span className='text-white bold'>Noel Emaas.</span> </h1> 
          </div>
          <div className='z-40 flex flex-col w-full md:items-end md:justify-between md:flex-row'>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              initial="hidden"
              animate="visible"
              className="sm:pt-[4%] pt-[10%] flex flex-col gap-y-1"
            >
              <h1 className="text-2xl lg:text-4xl md:text-3xl bold title drop-shadow-lg text-glow-white/40">
                Software developer
              </h1>
              <p className="sub-color sub-text sm:w-full w-[85%]">
                I design & build web and mobile apps with the latest tech.
              </p>
            </motion.div>
            <div className='flex mt-10 sm:flex-row gap-x-2 md:mt-0'>
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
      </div>
    );
}