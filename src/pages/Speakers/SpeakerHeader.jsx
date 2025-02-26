import React from 'react'

export default function SpeakerHeader({header}) {
  return (
    <div className="flex flex-row items-start w-full">
      <h1 className="font-abc-favorit-variable-edu font-bold text-2xl sm:text-3xl md:text-[36px] lg:text-[44px] leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em] text-[#FDFCFD]">
        {header}
      </h1>
    </div>
  )
}
