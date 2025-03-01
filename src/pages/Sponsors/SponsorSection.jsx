import React from 'react';
import SponsorHeader from '../Speakers/SpeakerHeader';
import SponsorCard from "../Speakers/SpeakerCard"

const dummy = [
    {
      name: "Aramis O. Hamer",
      title: "Tagline: Gear for Good",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    },
    {
      name: "Aramis O. Hamer",
      title: "Tagline: Gear for Good",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    }
  ]

  
export default function SponsorSection() {
  return (
<div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[200px] py-[100px] gap-[48px] w-full min-h-screen bg-[#080808]">
  
  <div className="py-[50px]">
    <SponsorHeader header={'INNOVATOR'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[75px]"> 
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <div className="py-[50px]">
    <SponsorHeader header={'EDUCATOR'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[75px]"> 
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <div className="py-[50px]">
    <SponsorHeader header={'THINKER'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[75px]"> 
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <div className="py-[50px]">
    <SponsorHeader header={'RAFFLE'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[75px]"> 
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

</div>
  )
}
