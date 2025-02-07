import React from 'react'
import SpeakerCardDescription from './SpeakerCardDescription';
import SpeakerCardLeft from './SpeakerCardLeft';

export default function SpeakerCard({speaker}) {
    const {name, title, description, image, linkedin, email} = speaker;
  return (
    <div className="box-border flex flex-col items-start p-0 gap-10 w-[1520px] h-[268px]">
          {/**Wrapper */}
          <div className="flex flex-wrap items-start content-start p-0 gap-10 w-[1520px] h-[268px]">
              <SpeakerCardLeft name={name} title={title} image={image} linkedin={linkedin} email={email}/>
              <SpeakerCardDescription description={description}/>
          </div>
      </div>
  )
}
