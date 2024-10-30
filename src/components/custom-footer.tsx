import logo from '@/assets/images/logo.png';

export default function CustomFooter () {
    return (
        <div className='w-full bottom-0 left-0 py-10 flex items-center right-0 min-h-[300px] bg-gradient-to-b from-[#101010] to-[#080808] border-0 border-t border-[#1f1f1f] z-50 backdrop-blur-md transition-transform duration-300'>
            <div className='container lg:px-[12%] sm:px-[5%] px-5 mx-auto flex flex-col h-full justify-center'>
                <div className="flex justify-between w-full">
                    <div>
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="object-cover rounded-lg group-hover/card:shadow-xl drama-[#50666a] drama-4"
                            alt="thumbnail"
                        />
                    </div>
                    <div className='flex sm:gap-x-20 gap-x-14'>
                        <div className='flex flex-col gap-y-4'>
                            <h1 className='flex-none text-xs font-medium text-white/20'>SITES</h1>
                            <h1 className='font-semibold'>Works</h1>
                            <h1 className='font-semibold'>About</h1>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <h1 className='flex-none text-xs font-medium text-white/20'>LINKS</h1>
                            <h1 className='font-semibold'>Resume</h1>
                            <h1 className='font-semibold'>LinkedIn</h1>
                            <h1 className='font-semibold'>Github</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full mt-10 sm:mt-0'>
                    <div className='flex flex-col'>
                        <p className='font-semibold'>© 2024 Noel Emaas. All Rights Reserved.</p>
                        <p className='mt-1 text-sm sub-text sub-color'>Happy to share my works. Thanks for stopping by.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}