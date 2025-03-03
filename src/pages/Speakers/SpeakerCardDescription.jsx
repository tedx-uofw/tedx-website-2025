import React from 'react'

export default function SpeakerCardDescription({ description }) {
  return (
    <div className="w-full lg:w-[740px] text-[#E4E0E4] font-abc-favorit-variable-edu text-sm sm:text-base md:text-lg lg:text-xl leading-[1.4em] sm:leading-[1.4em] tracking-[-0.01em]">
      {description}
    </div>
  );
}

