import { Button } from "@/components/ui/button"
import { AtSign, Github, Linkedin } from "lucide-react";

interface HeroProps {
  hidden?: boolean;
}

export default function Hero({ hidden = false }: HeroProps) {
    return (
      <div className={`${hidden ? 'hidden' : 'flex'} absolute top-0 w-full shadow-inner h-1/2 flex-col items-center justify-center bg-gradient-to-br from-[#1f1f1f] to-[#080808] z-10`}>
        <div className="container px-[10%] fixed pt-[5%]">
          <h1 className='text-lg font-light text-gray-200'>Hi! I am <span className='text-white bold'>Noel Emaas.</span> </h1> 
          <div className='z-40 flex items-end justify-between w-full'>
            <div className="pt-[4%] flex flex-col gap-y-1">
              <h1 className="text-4xl bold title drop-shadow-lg text-glow-white/40">
                Software developer
              </h1>
              <p className="sub-color sub-text">
                I design & build web and mobile apps with the latest tech.
              </p>
            </div>
            <div className='flex gap-x-2'>
              <Button className='hover:bg-[#1d1d1d] drop-shadow-lg shadow-lg bg-[#181818] border-0 border-t border-[#3d3d3d] rounded-lg' variant="outline" size="icon">
                <Linkedin className="w-4 h-4 text-white"/>
              </Button>
              <Button className='hover:bg-[#1d1d1d] drop-shadow-lg shadow-lg bg-[#181818] border-0 border-t border-[#3d3d3d] rounded-lg' variant="outline" size="icon">
                <Github className="w-4 h-4 text-white"/>
              </Button>
              <Button 
                className="shadow-sm group bg-gradient-to-r drop-shadow-lg to-[#2A3F60] from-[#50666a] border-0 border-none rounded-lg font-semibold hover:text-white text-sm gap-x-2 transition-all duration-300 ease-in-out"
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