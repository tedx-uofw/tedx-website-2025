import React from 'react'
import SpeakerCardNameAndTitle from './SpeakerCardNameAndTitle'
import SpeakerCardIcon from './SpeakerCardIcon'

export default function SpeakerCardMiddle({name, title, talkName, linkedin, email}) {
  return (
    <div className='flex flex-col justify-between items-start gap-4 sm:gap-6 w-full sm:w-[280px] md:w-[340px] lg:w-[400px]'>
        <SpeakerCardNameAndTitle name={name} title={title} talkName={talkName}/>          
        <SpeakerCardIcon linkedin={linkedin} email={email}/>
    </div>
  )
}
