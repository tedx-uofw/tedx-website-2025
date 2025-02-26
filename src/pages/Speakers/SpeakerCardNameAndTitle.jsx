import React from 'react'

export default function SpeakerCardNameAndTitle({name, title, talkName}) {
  return (
    <div className='flex flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-[16px]'>
        <h2 className="w-full font-abc-favorit-variable-edu font-medium text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-tight sm:leading-snug md:leading-[44px] lg:leading-[48px] tracking-[-0.02em] text-[#FDFCFD]">
            {name}
        </h2>
        <h4 className="w-full font-abc-favorit-variable-edu font-medium text-lg sm:text-xl md:text-[22px] lg:text-[24px] leading-snug sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.01em] text-[#B1A8B3]">
            {title}
        </h4>
        {talkName && (
            <h3 className="w-full font-abc-favorit-variable-edu font-medium text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-snug sm:leading-[32px] md:leading-[34px] lg:leading-[36px] tracking-[-0.01em] text-[#FDFCFD]">
                {talkName}
            </h3>
        )}
    </div>
  )
}
