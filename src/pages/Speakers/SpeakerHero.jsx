import React from 'react'

export default function SpeakerHero() {
  return (
    <div className="relative min-h-[100svh] -mt-[72px] md:-mt-[72px] lg:-mt-[88px] xl:-mt-[138px]">
      <div className="flex flex-row items-end pt-[88px] px-[200px] pb-[100px] gap-[40px]
        w-full min-h-[100svh] relative left-0 top-0 
        "
        style={{
          backgroundImage: "url('/speakers/speakerbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: 'multiply',
          zIndex: -1,
        }}
          
        >
          <div className="flex flex-col items-start p-0 gap-[20px] w-[1520px] h-[332px]">
            <div className="flex flex-row items-center p-0 gap-[15px] h-[24px]">
              <span> ⚪️ </span>
              <p className="w-[119px] h-[24px] font-[ABC Favorit Mono Variable Edu] font-normal text-[20px]
              leading-[24px] tracking-[-0.01em] text-[#FFFFFF] order-0
              ">
                THE LINEUP
              </p>
            </div>
            <div className="w-[1090px] h-[200px] font-[ABC Favorit Variable Edu] font-normal not-italic text-[44px] leading-[50px] tracking-[-0.02em] text-[#FFFFFF] order-1">
              Seven speakers from around the Seattle community will join us at TEDxUofW Resonance 2025 to share how they’re inspiring, thinking, what they’re sharing with the community, and what’s next.
            </div>


              <div className="w-[1090px] h-[68px] font-[ABC Favorit Variable Edu] font-normal not-italic text-[28px] leading-[34px] tracking-[-0.01em] text-[#FFFFFF] order-2">
                Attendees will leave feeling more connected to a community of builders and to the future of community leaders inspiring change.
              </div>
          </div>
        </div>
      </div>
  )
}
