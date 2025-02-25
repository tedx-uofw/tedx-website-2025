import React from "react";

export default function TeamHero() {
    return (
        <div className="relative min-h-[100svh] -mt-[72px] md:-mt-[72px] lg:-mt-[88px] xl:-mt-[138px]">
            <div
                className="flex flex-col justify-end items-start px-[100px] pt-[300px] pb-[100px] gap-[10px] w-full min-h-screen left-0 top-0 bg-[#0C0133] xl:px-[195px]"
                style={{
                    backgroundImage: "url('/team/leavedot.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="flex flex-col items-start p-0 gap-[20px] w-[1520px] mix-blend-normal">
                    <div className="flex flex-row items-center p-0 gap-[15px]">
                        <div className="w-[11px] h-[11px] bg-white rounded-[60px]"></div>
                        <div className="text-white text-[20px] leading-[24px] tracking-[-0.01em] font-normal whitespace-nowrap font-favorit-mono">
                            MEET THE TEAM
                        </div>
                    </div>
                    <div className="max-w-[1224px] text-white text-[44px] leading-[50px] tracking-[-0.02em] font-normal font-favorit">
                        Driven by passion, creativity, and dedication, the TEDxUofW team unites to showcase visionary speakers, thought-provoking ideas, and immersive experiences.
                    </div>
                    <div className="max-w-[968px] text-[28px] leading-[34px] tracking-[-0.01em] font-normal font-favorit text-[#B1A8B3] xl:text-white">
                        See teams of co-presidents, design, marketing, and more...
                    </div>
                </div>
            </div>
        </div>
    );
}
