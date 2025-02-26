export default function About() {
    return (
        <div 
            className="h-[100svh] w-full"
            style={{ 
                backgroundImage: "url('/about/clock_pic.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="h-full w-full flex items-end">
                <div className="flex flex-col items-start p-4 sm:p-6 md:p-12 lg:p-[200px] pb-[max(40px,calc(env(safe-area-inset-bottom)+24px))] sm:pb-[40px] gap-[20px] md:gap-[40px] w-full max-w-[1920px]">
                    <div className="flex flex-row items-center gap-[15px]">
                        <div className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] bg-white rounded-[60px]"></div>
                        <div className="text-white text-sm sm:text-lg md:text-xl lg:text-[20px] leading-tight sm:leading-snug md:leading-[24px] tracking-[-0.01em] font-normal whitespace-nowrap font-favorit-mono">
                            ABOUT
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0 max-w-[90%] md:max-w-[1220px]">
                        <div className="text-[#FDFCFD] font-favorit text-xl sm:text-3xl md:text-[36px] lg:text-[44px] font-medium leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em]">
                            EST. 2012
                        </div>
                        <div className="text-[#FDFCFD] font-favorit text-xl sm:text-3xl md:text-[36px] lg:text-[44px] font-medium leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em]">
                            SEATTLE, WA
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-[32px] w-full max-w-[90%] md:max-w-[1220px]">
                        <div className="flex flex-col items-start gap-[20px] md:gap-[60px]">
                            <div className="text-white font-favorit text-xl sm:text-3xl md:text-[36px] lg:text-[44px] font-medium leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em]">
                                TEDxUofW was established to bring inspirational yet informative TED style talks to the University of Washington based
                                in Seattle. Since 2012, our student organization has sought to give amazing speakers a receptive audience to share
                                their passions with.
                            </div>
                            <a href="https://tedxatuofw.com" 
                               className="rounded-[4px] bg-[#E4E0E4] text-black px-4 py-2 text-base sm:text-lg transition-colors hover:bg-[#ffffff] flex items-center justify-center">
                                MAIN WEBSITE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}