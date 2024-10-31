export default function CustomFooter () {
    return (
        <div className={`bottom-0 left-0 right-0 lg:fixed z-50 w-full h-[120px] max-lg:border-t border-[#1f1f1f]`}>
            <div className='container lg:px-[12%] sm:px-[5%] px-5 mx-auto flex flex-col h-full justify-center'>
            <div className='flex flex-col'>
                <p className='text-sm bold'>© 2024 NOEL EMAAS. ALL RIGHTS RESERVED.</p>
                <p className='mt-1 text-sm sub-text sub-color'>Happy to share my works. Thanks for stopping by :)</p>
            </div>
            </div>
        </div>
    );
}