import React from 'react'
import SpeakerCardDescription from './SpeakerCardDescription';
import SpeakerCardLeft from './SpeakerCardLeft';

export default function SpeakerCard({speaker}) {
    const {name, title, talkName, description, image, linkedin, email} = speaker;
  return (
    <div className="box-border flex flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full min-h-[268px]">
          {/**Wrapper */}
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
              <SpeakerCardLeft name={name} title={title} talkName={talkName} image={image} linkedin={linkedin} email={email}/>
              <SpeakerCardDescription description={description}/>
          </div>
      </div>
  )
}
