import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderButtonProps {
    children: React.ReactNode;
    route: string;
    active?: boolean;
}

export default function HeaderButton(props: HeaderButtonProps) {
    const { children, active = false, route } = props;
    const [scrollProgress, setScrollProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = () => {
      navigate(route);
    }
  
    return (
      <Button 
        className={`
          relative text-xs rounded-full font-semibold
          transition-colors duration-300 ease-in-out
          group overflow-hidden py-0
          ${active 
            ? 'text-white text-glow-white/50 bg-[#1f1f1f] border border-[#1f1f1f] hover:text-white hover:bg-[#171717] hover:border hover:border-[#1f1f1f]' 
            : 'text-[#8c8c8c] bg-transparent hover:text-white hover:bg-[#171717]'
          }
        `}
        variant="ghost"
        onClick={handleNavigate}
      >
        {active && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 w-full bg-[#50666a]"
              style={{ 
                height: `${scrollProgress + 3}%`,
              }}
            />
            <div 
              className="absolute w-full animate-wave bg-[#50666a]"
              style={{ 
                bottom: `${scrollProgress}%`,
                height: '65%'
              }}
            />
          </div>
        )}
  
        <span 
          className={`
            relative z-10 transition-colors duration-300 ease-in-out
            ${active ? '' : 'group-hover:text-white'}
          `}
        >
          {children}
        </span>
      </Button>
    );
}