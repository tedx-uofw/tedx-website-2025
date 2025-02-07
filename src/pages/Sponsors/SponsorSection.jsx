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
    <div className="flex flex-col items-center p-[100px_200px_200px] gap-[48px] w-full min-h-screen
    bg-[#080808]
    "
    >
      <SponsorHeader header={'INNOVATOR'}/>
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker}/>
      ))}
      <SponsorHeader header={'EDUCATOR'}/>
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker}/>
      ))}
      <SponsorHeader header={'THINKER'}/>
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker}/>
      ))}
      <SponsorHeader header={'RAFFLE'}/>
      {dummy.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker}/>
      ))}
    </div>
  )
}
