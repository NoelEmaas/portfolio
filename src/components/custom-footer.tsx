export default function CustomFooter () {
    return (
        <div className={`bottom-0 left-0 right-0 lg:fixed w-full max-lg:border-t border-[#1f1f1f] pb-10`}>
            <div className='container lg:px-[10%] sm:px-[5%] px-5 mx-auto flex flex-col gap-y-8 h-full'>
                <div className="relative flex-col hidden w-fit lg:flex">
                    <div className="flex items-center justify-between ">
                        <p className="text-sm text-white bold">contacts.</p>
                        <div className="flex items-center pl-[85px] text-sm gap-x-6 w-fit sub-color">
                            <a className="transition-all duration-300 cursor-pointer hover:text-white">email</a>
                            <a className="transition-all duration-300 cursor-pointer hover:text-white">linkedin</a>
                            <a className="transition-all duration-300 cursor-pointer hover:text-white">github</a>
                        </div>
                    </div>
                    <hr className="w-full mt-8 border-transparent"/>
                </div>
                <div className='flex flex-col max-lg:pt-8'>
                    <p className='text-sm bold'>© 2024 Noel Emaas.</p>
                    <p className='mt-1 text-sm sub-text sub-color'>Happy to share my works. Thanks for stopping by :)</p>
                </div>
            </div>
        </div>
    );
}