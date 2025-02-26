import React from 'react'

export default function SpeakerCardDescription({description}) {
  return (
    <div className="w-full lg:w-[740px] text-[#E4E0E4] font-abc-favorit-variable-edu text-xl sm:text-2xl md:text-[26px] lg:text-[28px] leading-[3em] tracking-[-0.01em]">
      {description}
    </div>
  )
}
