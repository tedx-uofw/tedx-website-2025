import React from 'react'

export default function SpeakerCardNameAndTitle({name, title}) {
  return (
    <div className='flex flex-col items-start p-0 gap-[12px] mx-auto w-[400px] h-[244px]'>
        <h2 className="w-[400px] h-[48px] font-abc-favorit-variable-edu font-medium text-[36px] leading-[48px] tracking-[-0.02em] text-[#FDFCFD] flex items-center">
            {name}
        </h2>
        <h4 className="w-[400px] h-[17px] font-abc-favorit-variable-edu font-medium text-[24px] leading-[28px] tracking-[-0.01em] text-[#B1A8B3]"
            style={{
                leadingTrim: 'both',
                textEdge: 'cap'
            }}>
            {title}
        </h4>
    </div>
  )
}
