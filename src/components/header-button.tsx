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
                relative text-xs rounded-lg font-semibold
                transition-colors duration-300 ease-in-out
                group overflow-hidden
                ${active 
                    ? 'text-white bg-[#171717] border border-[#1f1f1f] hover:text-white hover:bg-[#171717] hover:border hover:border-[#1f1f1f]' 
                    : 'text-[#8c8c8c] bg-transparent hover:text-white hover:bg-[#171717]'
                }
            `}
            variant="ghost"
        >
            <span 
                className={`
                    relative z-10 transition-colors duration-300 ease-in-out
                    ${active ? '' : 'group-hover:text-white group-hover:delay-500'}
                `}
            >
                {children}
            </span>
            {!active && (
                <span 
                    className="
                    absolute inset-0 border border-[#1f1f1f] rounded-lg
                    opacity-0 group-hover:opacity-100
                    scale-0 group-hover:scale-100
                    transition-all duration-700 ease-in-out
                    "
                />
            )}
        </Button>
    );
}