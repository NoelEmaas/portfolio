import { Download, FileText } from "lucide-react";
import HeaderButton from "./header-button";
import logo from '@/assets/images/logo.png';


export default function CustomHeader () {
    return (
        <div className={`w-full top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#0f0f0f] to-transparent fixed z-50 bg-opacity-80 transition-transform duration-300 drop-shadow-lgS`}>
        <div className='relative z-50 flex items-center justify-between h-full px-32 mx-auto'>
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
          <div className='flex items-center p-[5px] border border-[#262626] bg-[#131313] rounded-full gap-x-1 shadow-md drop-shadow-lg'>
            <HeaderButton active={true}>Works</HeaderButton>
            <HeaderButton>About</HeaderButton>
          </div>
          <div>
            <button className="relative inline-flex items-center justify-center h-10 px-4 py-2 overflow-hidden text-sm font-semibold text-gray-300 transition-all bg-transparent border-none gap-x-2 group">
              <span className="">Resume</span>
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