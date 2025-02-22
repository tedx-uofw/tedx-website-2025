import React from 'react'

export default function SpeakerCardNameAndTitle({name, title}) {
  return (
    <div className='flex flex-col items-start p-0 gap-[8px] mx-auto w-[400px] h-[244px]'>
        <h2 className="w-[400px] h-[34px] font-[ABC Favorit Variable Edu] text-[28px] leading-[34px] tracking-[-0.01em] text-[#FDFCFD]">
            Underwater Source
        </h2>
        <h2 className="font-[ABC Favorit Variable Edu] text-[28px] leading-[34px] tracking-[-0.01em] text-[#CBC4CC] flex items-center">
            {name}
        </h2>
        <h4 className="w-[400px] h-[24px] font-[ABC Favorit Mono Variable Edu] text-[18px] leading-[24px] tracking-[-0.01em] text-[#B1A8B3]"
>
            {title}
        </h4>
    </div>
  )
}
