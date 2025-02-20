export default function About() {
    return (
        <div className="relative min-h-[100svh] -mt-[72px] md:-mt-[72px] lg:-mt-[88px] xl:-mt-[138px]">
            <div className="flex w-[1920px] h-[1060px] p-[200px] flex-col justify-center items-start gap-[40px] flex-shrink-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('/about/bgimage.png')" }}> {/* Body */}

                <div className="flex justify-between items-center self-stretch"> {/* Top */}
                    <div className="flex items-start gap-[4px]"> {/* Frame 628 */}
                        <div className="text-[#FDFCFD] font-['ABC Favorit Variable Edu'] text-[36px] font-medium leading-[48px] tracking-[-0.72px]">
                            EST. 2012
                        </div>
                    </div>
                    <div className="flex justify-end items-start gap-[4px]">{/* Frame 631 */}
                        <p className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[36px] font-medium leading-[48px] tracking-[-0.72px]">
                            SEATTLE, WA
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[32px] self-stretch">{/* Text Container */}
                    <div className="w-[314.455px] h-[80px]">
                        <img src="/logos/Logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>

                    <div className="flex flex-col items-start gap-[60px] self-stretch">{/* Caption */}
                        <div className="text-[#FFF] font-[ABC Favorit Variable Edu] text-[36px] font-medium leading-[48px] tracking-[-0.72px]">
                            TEDxUofW was established to bring inspirational yet informative TED style talks to the University of Washington based
                            in Seattle. Since 2012, our student organization has sought to give amazing speakers a receptive audience to share
                            their passions with.
                        </div>
                        {/* Button */}
                        <a href="https://tedxatuofw.com" className="rounded-[4px] bg-[#E4E0E4] text-black px-4 py-2 text-lg transition-colors hover:bg-[#ffffff] flex items-center justify-center">
                            MAIN WEBSITE
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    )
  }