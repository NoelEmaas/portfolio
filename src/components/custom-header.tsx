import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import HeaderButton from "./header-button";
import logo from '@/assets/images/logo.png';


export default function CustomHeader () {
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
        <div className={`w-full top-0 left-0 right-0 h-[75px] bg-[#0d0d0d] border-0 border-b border-[#1f1f1f] fixed z-50 bg-opacity-80 backdrop-blur-sm  transition-transform duration-300 drop-shadow-lg  ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='container px-[10%] mx-auto flex items-center h-full justify-between z-50 relative'>
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
              border-[#1f1f1f] bg-[linear-gradient(110deg,#171717,45%,#1f2b2e,55%,#171717)] bg-[length:200%_100%] 
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
    );
}