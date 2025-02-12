import React from "react";

export default function TeamHero() {
    return (
        <div
            className="absolute top-0 left-0 w-full h-[1000px] flex flex-col justify-end items-start p-[400px_200px_100px] gap-[10px] bg-[#0C0133] isolate"
            style={{
                backgroundImage: "url('/team/leavedot.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: 'multiply',
                zIndex: -1,
            }}
        >
            <div class="flex flex-col items-start p-0 gap-[20px] mix-blend-normal flex-none order-0 z-0">
                <div class="flex flex-row items-center p-0 gap-[15px] flex-none">
                    <div class="w-[11px] h-[11px] bg-white flex-none rounded-[60px]"></div>
                    <div class="text-white text-[20px] leading-[24px] tracking-[-0.01em] font-normal whitespace-nowrap font-favorit-mono">
                        MEET THE TEAM
                    </div>
                </div>
                <div class="max-w-[1220px] text-white text-[44px] leading-[50px] tracking-[-0.02em] font-bold font-favorit">
                    Driven by passion, creativity, and dedication, the TEDxUofW team unites to showcase visionary speakers, thought-provoking ideas, and immersive experiences.
                </div>
                <div class="max-w-[968px] text-white text-[28px] leading-[34px] tracking-[-0.01em] font-normal font-favorit">
                    See teams of copresidents, design, marketing, blah blah blah....
                </div>
            </div>
        </div>
    )
}

