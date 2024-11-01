import { Download, FileText } from "lucide-react";
import { useLocation } from "react-router-dom";


export default function CustomHeader () {
  const location = useLocation();
  return (
    <div className={`w-full top-0 left-0 right-0 sm:h-[85px] h-[65px] max-lg:bg-[#0d0d0d] header-gradient fixed z-50`}>
      <div className='container relative z-50 flex items-center justify-between h-full lg:px-[10%] sm:px-[5%] px-5'>
        <div className="flex items-center">
          <h1 className="text-sm bold">nemaas.</h1>
          <div className="items-center hidden pl-40 sm:flex gap-x-8">
            <a href="/" className={`text-sm ${location.pathname === "/" ? 'text-white sub-text' : 'sub-color'} transition-all duration-300 hover:text-white`}>works</a>
            <a href="/about" className={`text-sm ${location.pathname === "/about" ? 'text-white sub-text' : 'sub-color'} transition-all duration-300 hover:text-white`}>info</a>
          </div>
        </div>
        <button className="relative bg-[#1f1f1f] inline-flex items-center max-sm:h-[40px] max-sm:w-[40px] justify-center py-2 mx-0 overflow-hidden text-sm font-semibold text-gray-300 transition-all rounded-full px-4 border-none gap-x-2 group">
          <span className="hidden text-xs sm:block">resume</span>
          <div className="relative w-[12px] h-[12px]">
            <FileText className="absolute z-10 w-full h-full text-gray-300 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-full group-hover:z-0"/>
            <Download className="absolute z-0 w-full h-full text-gray-300 transition-all duration-300 ease-in-out -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-10"/>
          </div>
        </button>
      </div>
    </div>
  );
}