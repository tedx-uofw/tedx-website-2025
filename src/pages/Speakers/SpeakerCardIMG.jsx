import React from 'react'

export default function SpeakerCardIMG({image}) {
  return (
    <div className="w-full sm:w-[200px] md:w-[240px] lg:w-[268px] aspect-square flex-none order-0">
        <img src={image} alt={`Speaker Image ${image}`} className="w-full h-full object-cover"/>
    </div>
  )
}
