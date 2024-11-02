import { ArrowRight, Download, FileText } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const HamburgerIcon = ({ onClick }: { onClick: () => void}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onClick();
    setIsOpen(!isOpen);
  };

  return(  
    <button 
      onClick={handleClick} 
      className={`flex flex-col justify-center items-center mr-2 ${!isOpen && 'gap-y-[1px]'} sm:hidden`}
    >
      <span className={`bg-white block transition-all duration-300 ease-out h-[1px] w-6 rounded-sm ${isOpen ? 'rotate-[20deg] translate-y-[1px]' : '-translate-y-px' }`} />
      <span className={`bg-white block transition-all duration-300 ease-out h-[1px] w-6 rounded-sm ${isOpen ? '-rotate-[20deg] -translate-y-[0.25px]' : 'translate-y-px' }`} />
    </button>
  )
}

const Menu = ({ isCollapsed, location }: { isCollapsed: boolean, location: string }) => {
  return (
    <div
      className={`fixed z-20 w-screen h-screen bg-[#0d0d0d] border-b border-[#2f2f2f] transition-transform duration-500 top-0 ${
        isCollapsed ? 'scale-y-0 overflow-hidden' : 'scale-y-100 overflow-auto'
      } transform`}
    >
      <div className={`p-5 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 flex flex-col justify-end h-full gap-y-8 pb-28`}>
        <div className="flex flex-col gap-y-8">
          <a
            onClick={() => {}}
            href="/"
            className={`bold ${location === '/' ? 'text-white text-6xl' : 'text-[#2f2f2f] text-5xl'} transition-all duration-300 cursor-pointer hover:text-white w-fit`}
          >
            .works
          </a>
          <a
            onClick={() => {}}
            href="/about"
            className={`bold ${location === '/about' ? 'text-white text-6xl' : 'text-[#2f2f2f] text-5xl'} transition-all duration-300 cursor-pointer hover:text-white w-fit`}
          >
            .info
          </a>
        </div>
        <div className="border-t border-[#2f2f2f] pt-8">
          <div className="flex items-center justify-between ">
            <p className="text-sm text-white bold">resume.</p>
            <div className="flex items-center pl-[85px] text-sm gap-x-6 w-fit sub-color">
                <ArrowRight className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2f2f2f] pt-8">
          <div className="flex items-center justify-between ">
            <p className="text-sm text-white bold">contacts.</p>
            <div className="flex items-center pl-[85px] text-sm gap-x-6 w-fit sub-color">
                <a className="transition-all duration-300 cursor-pointer hover:text-white">email</a>
                <a className="transition-all duration-300 cursor-pointer hover:text-white">linkedin</a>
                <a className="transition-all duration-300 cursor-pointer hover:text-white">github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function CustomHeader () {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <Menu isCollapsed={isCollapsed} location={location.pathname}/>
      <div className={`w-full top-0 left-0 right-0 sm:h-[85px] h-[60px] max-lg:bg-[#0d0d0d] header-gradient fixed z-50`}>
        <div className='container relative z-50 flex items-center justify-between h-full lg:px-[10%] sm:px-[5%] px-5'>
          <div className="flex items-center">
            <h1 className="text-sm bold">nemaas.</h1>
            <div className="items-center hidden pl-40 sm:flex gap-x-8">
              <a href="/" className={`text-sm ${location.pathname === "/" ? 'text-white sub-text' : 'sub-color'} transition-all duration-300 hover:text-white`}>works</a>
              <a href="/about" className={`text-sm ${location.pathname === "/about" ? 'text-white sub-text' : 'sub-color'} transition-all duration-300 hover:text-white`}>info</a>
            </div>
          </div>
          <HamburgerIcon onClick={handleCollapsible}/>
          <button className="relative bg-[#1f1f1f] sm:inline-flex hidden  items-center max-sm:h-[40px] max-sm:w-[40px] justify-center py-2 mx-0 overflow-hidden text-sm font-semibold text-gray-300 transition-all rounded-full px-4 border-none gap-x-2 group">
            <span className="hidden text-xs sm:block">resume</span>
            <div className="relative w-[12px] h-[12px]">
              <FileText className="absolute z-10 w-full h-full text-gray-300 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-full group-hover:z-0"/>
              <Download className="absolute z-0 w-full h-full text-gray-300 transition-all duration-300 ease-in-out -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-10"/>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

