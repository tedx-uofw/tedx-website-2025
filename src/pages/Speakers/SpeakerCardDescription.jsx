import React from 'react'

export default function SpeakerCardDescription({description}) {
  return (
    <div className="w-full lg:w-[740px] text-[#FDFCFD] font-abc-favorit-variable-edu text-base sm:text-lg leading-[22px] sm:leading-[26px] md:leading-[28px]">
      {description}
    </div>
  )
}
