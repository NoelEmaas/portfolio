import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { AtSign, Github, Linkedin } from "lucide-react";


export default function Hero() {
    return (
      <div className='fixed top-0 w-full shadow-inner'>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="container px-[10%]"
          >
            <div>
              <h1 className='text-lg font-light sub-text'>I am <span className='text-white bold'>Noel Emaas,</span> </h1> 
              <div className='flex items-end justify-between w-full'>
                <div className="mt-[40px] flex flex-col gap-y-1">
                  <h1 className="text-2xl bold title drop-shadow-lg shadow-white">
                    Software developer
                  </h1>
                  <p className="sub-color sub-text">
                    I design & build web and mobile apps with the latest tech.
                    {/* I can code and I am good at it. Don't believe me? <br/> Scroll down and see for yourself. */}
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
          </motion.div>
        </AuroraBackground>
      </div>
    );
}