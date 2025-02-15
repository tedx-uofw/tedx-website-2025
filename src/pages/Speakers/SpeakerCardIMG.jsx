import React from 'react'

export default function SpeakerCardIMG({image}) {
  return (
    <div className="w-[268px] h-[268px] flex-none order-0 grow-0">
        <img src={image} alt={`Speaker Image ${image}`} className="w-full h-full object-cover"/>
    </div>
  )
}
