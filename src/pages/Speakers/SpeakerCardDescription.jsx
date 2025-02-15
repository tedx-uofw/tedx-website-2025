import React from 'react'

export default function SpeakerCardDescription({description}) {
  return (
    <div className="w-[740px] min-w-[400px] h-[268px] text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-base leading-[22px] flex-none order-1 flex-grow">
      {description}
    </div>
  )
}
