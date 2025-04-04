import React from 'react';
import LazyImage from '../common/LazyImage';

export default function GIF() {
  return (
    <div className="flex flex-row justify-center items-start px-[100px] py-0 gap-[10px] w-[1920px] h-[276px]">
        <LazyImage 
          src="/footer/letter.gif" 
          alt="Animated letter GIF" 
          className="flex flex-col p-0 gap-0 w-3/4 h-[276px]" 
          placeholderColor="#080808"
        />
    </div>
  )
}
