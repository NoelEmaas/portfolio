import { Button } from "./ui/button";

interface HeaderButtonProps {
    children: React.ReactNode;
    active?: boolean;
  }
  

export default function HeaderButton(props: HeaderButtonProps) {
    const { children, active = false } = props;

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
        >
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