import React from "react";

export default function TeamHero() {
        <div 
            className="h-[100svh] w-full"
            style={{ 
                backgroundImage: "url('/speakers/Leaf_pic.png')",
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
                            MEET THE TEAM
                        </div>
                    </div>
                    <div className="max-w-[90%] md:max-w-[1220px]">
                        <div className="text-white font-favorit text-xl sm:text-3xl md:text-[36px] lg:text-[44px] font-medium leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em]">
                            Driven by passion, creativity, and dedication, the TEDxUofW team unites to showcase visionary speakers, thought-provoking ideas, and immersive experiences.
                        </div>
                        <div className="text-[#B1A8B3] font-favorit text-base sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-snug sm:leading-[28px] md:leading-[32px] lg:leading-[34px] mt-4 sm:mt-6 md:mt-8">
                            Get to know the team behind the conference—a dedicated group of professionals whose expertise and passion drive every detail of the event.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
