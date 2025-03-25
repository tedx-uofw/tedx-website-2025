import React from 'react';
import LazyImage from '../common/LazyImage';

export default function LogoImage() {
  return (
    <LazyImage 
      src="/footer/logo.png" 
      alt="Logo" 
      className="flex flex-col items-start p-0 gap-[44px] w-[362px] h-[92px]"
      placeholderColor="#080808"
    />
  )
}
