import React from 'react'
import LogoImage from './LogoImage';
import EventsColumn from './EventsColumn';
import AboutColumn from './AboutColumn';


export default function LogoAndLinks() {
  return (
    <div className="box-border flex flex-row flex-wrap justify-between items-start content-start py-[32px] px-[100px] gap-x-[10px] gap-y-[60px] w-[1920px] 
          h-[184px] filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <LogoImage/>
            <div className="flex flex-row items-start p-0 gap-[44px] w-[264px] h-[120px]">
              <EventsColumn/>
              <AboutColumn/>
            </div>
          </div>
  )
}
