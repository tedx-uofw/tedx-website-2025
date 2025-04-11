import React from 'react'
import LazyImage from '../../components/common/LazyImage'
export default function SpeakerCardIMG({image}) {
  return (
    <div className="w-full sm:w-[200px] md:w-[240px] lg:w-[268px] aspect-square flex-none order-0">
        <LazyImage src={image} alt={`Speaker Image ${image}`} className="w-full h-auto object-cover" placeholderColor="#1E1E1E"/>
    </div>
  )
}
