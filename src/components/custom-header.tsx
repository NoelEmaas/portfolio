import { Download, FileText } from "lucide-react";
import HeaderButton from "./header-button";
import logo from '@/assets/images/logo.png';


export default function CustomHeader () {
    return (
        <div className={`w-full top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#0f0f0f] to-transparent fixed z-50 bg-opacity-80 transition-transform duration-300 drop-shadow-lg`}>
        <div className='max-md:container relative z-50 flex items-center justify-between h-full mx-auto xl:px-32 lg:px-[9%] px-5'>
          <div className='flex items-center gap-x-1'>
            <img
                src={logo}
                height="40"
                width="40"
                className="object-cover rounded-lg group-hover/card:shadow-xl"
                alt="thumbnail"
            />
            <h1 className='hidden text-sm font-semibold sm:block'>nemaas.dev</h1>
          </div>
          <div className='flex items-center p-[5px] border border-[#262626] bg-[#131313] rounded-full gap-x-1 shadow-md drop-shadow-lg'>
            <HeaderButton active={true}>Works</HeaderButton>
            <HeaderButton>About</HeaderButton>
          </div>
          <button className="relative bg-[#1f1f1f] inline-flex items-center max-sm:h-[40px] max-sm:w-[40px] justify-center py-3 mx-0 overflow-hidden text-sm font-semibold text-gray-300 transition-all rounded-full px-4 border-none gap-x-2 group">
            <span className="hidden text-xs sm:block">Resume</span>
            <div className="relative w-[14px] h-[14px]">
              <FileText className="absolute z-10 w-full h-full text-gray-300 transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-full group-hover:z-0"/>
              <Download className="absolute z-0 w-full h-full text-gray-300 transition-all duration-300 ease-in-out -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-10"/>
            </div>
          </button>
        </div>
      </div>
    );
}