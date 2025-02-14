import React from 'react'

export default function SpeakerHeader({header}) {
  return (
    <div className="flex flex-row items-start p-0 gap-[10px] w-[1520px] h-[50px]">
        <div className="flex-none order-0 self-stretch flex-grow-0 w-[229px] h-[50px]">
          <h1 className="font-abc-favorit-variable-edu font-bold text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD]">
            {header}
          </h1>
        </div>
    </div>
  )
}
