import React from 'react'
import SpeakerCardNameAndTitle from './SpeakerCardNameAndTitle'
import SpeakerCardIcon from './SpeakerCardIcon'
export default function SpeakerCardMiddle({name, title, linkedin, email}) {
  return (
    <div className='flex flex-col justify-between items-start p-0 w-[400px] min-w-[200px] max-w-[400px] h-[260px]'>
        <SpeakerCardNameAndTitle name={name} title={title}/>          
        <SpeakerCardIcon linkedin={linkedin} email={email}/>
    </div>
  )
}
