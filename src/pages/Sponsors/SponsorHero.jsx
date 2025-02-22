import React from 'react'

export default function SponsorHero() {
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
        <div className='flex flex-col items-start p-0 gap-[20px] w-[1520px] h-[216px] order-1 flex-grow-0'>
            <div className='flex flex-row items-center p-0 gap-[15px] w-[121px] h-[24px]'>
                <span>⚪️</span>
                <p className='w-[95px] h-[24px] font-[ABC Favorit Mono Variable Edu] not-italic font-normal text-[20px] leading-[24px] tracking-[-0.01em] text-[#FDFCFD]
                order-1 flex-grow-0
                ' >
                    SPONSORS
                </p>
            </div>
            <div className='w-[1224px] h-[50px] font-[ABC Favorit Variable Edu]
            not-italic font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] order-1 flex-grow-0
            '>
                Thank you, sponsors!
            </div>
            <div className='w-[590px] h-[102px] font-[ABC Favorit Variable Edu] not-italic font-normal text-[28px] leading-[34px] tracking-[-0.01em] text-[#FDFCFD] order-2'>
                Attendees will leave feeling more connected to a community of builders and to the future of community leaders inspiring change.
            </div>
        </div>
    </div>
    </div>
  )
}
