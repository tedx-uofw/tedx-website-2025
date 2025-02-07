import React from 'react'
import Links from './Footer/Links'
import LegalIcons from './Footer/LegalIcons'
import GIF from './Footer/GIF'
import Legal from './Footer/Legal'

export default function Footer() {
  return (
    <footer className="flex flex-col items-start px-0 py-[40px] w-full bg-[#0C0133]">
    <Links/>
    <div className="flex flex-col flex-wrap justify-between items-center content-start 
    px-[100px] mb-5 gap-x-[10px] gap-y-[32px] w-[1920px] h-[63px]">
      <Legal/>
      <LegalIcons/>
    </div>
    <GIF/>

</footer>
  )
}
