import { Setup } from "@/types";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface SetupSectionProps {
    setup: Setup;
}

function SetupSection(props: SetupSectionProps) {
    const { setup } = props;
    const { current } = setup;

    return (
        <div className="flex flex-col w-full mb-48 lg:mb-28">
            <p className='top-0 z-40 block py-3 text-sm font-medium text-foreground max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>Setup ✦</p>
            <div className="grid w-full grid-cols-2 mt-8 sm:grid-cols-3">
                <p className="text-xs font-medium text-subtle">CURRENT</p>
                <div className="flex flex-col col-span-2 mt-2 sm:mt-0 gap-y-2">
                    <p className="text-sm text-subtle"><span className="text-foreground">I love linux.</span> It is the OS I use most of the time for development. It allows users to easily take control and configure their computers, which is important for programmers since we spend most of our time with our machine. That’s why I always configure my OS to feel like home, where it runs, looks, and feels the way I want it to, for efficient dev experience.</p>
                    <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
                        <PhotoProvider>
                            {current?.map((image, index) => {
                                const imageSrc = new URL(`../assets/images/${image}.png`, import.meta.url).href
                                return (
                                    <PhotoView key={index} src={imageSrc}>
                                        <img src={imageSrc} alt="" className='object-cover w-[120px] rounded-lg p-1 border border-border cursor-pointer hover:bg-sbackground transition-all duration-300'/>
                                    </PhotoView>
                                )
                            })}
                        </PhotoProvider>
                    </div>
                    <div className="w-full mt-4">
                        <div className="flex flex-col gap-y-2">
                            {Object.entries(setup).map(([key, value], index) => {
                                if (key === 'past' || key === 'current') return null;
                                return (
                                    <div key={index} className="grid grid-cols-2 pb-3 mt-1 border-b border-border">
                                        <p className="text-xs font-medium text-subtle">{key.toUpperCase()}</p>
                                        <div className="flex justify-between w-full">
                                            <p className="text-xs font-medium text-foreground">{value.toUpperCase()}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SetupSection;