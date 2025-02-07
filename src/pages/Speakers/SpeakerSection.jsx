import React from 'react'
import SpeakerHeader from './SpeakerHeader';
import SpeakerCard from './SpeakerCard';


const dummy = [
    {
      name: "Aramis O. Hamer",
      title: "Visual Artist & Muralist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    }, 
    {
      name: "Aramis O. Hamer",
      title: "Visual Artist & Muralist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    },
    {
      name: "Aramis O. Hamer",
      title: "Visual Artist & Muralist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    },
    {
      name: "Aramis O. Hamer",
      title: "Visual Artist & Muralist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    },
    {
      name: "Aramis O. Hamer",
      title: "Visual Artist & Muralist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
      image: "/speakers/model.jpeg",
      linkedin: 'https://www.linkedin.com/',
      email: 'aramis@example.com'
    },
];
const performers = [
  {
    name: "Aramis O. Hamer",
    title: "Visual Artist & Muralist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
    image: "/speakers/model.jpeg",
    linkedin: 'https://www.linkedin.com/',
    email: 'aramis@example.com'
  },
  {
    name: "Aramis O. Hamer",
    title: "Visual Artist & Muralist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa vel enim consectetur, et lobortis dui ultricies. Donec vel risus faucibus, facilisis nunc sed, finibus neque. Donec ut est vel urna fermentum viverra. Sed eget arcu id odio vulputate faucibus. Sed consectetur, nunc vel consectetur pretium, nunc ligula condimentum ipsum, vel pharetra ex ex vel neque. Vestibulum vel dolor et nunc hendrerit finibus. Duis ultricies neque vel neque facilisis, vitae ullamcorper lectus sagittis. Nam vel sapien id neque semper pellentesque. Sed vel nulla vel turpis bibendum luctus.",
    image: "/speakers/model.jpeg",
    linkedin: 'https://www.linkedin.com/',
    email: 'aramis@example.com'
  }
]
export default function SpeakerSection() {
  return (
    <div className="flex flex-col items-start p-[100px_200px_200px] gap-[100px] w-full min-h-screen left-0 top-[1000px]
    bg-[#080808]
    ">
      <SpeakerHeader header={'SPEAKERS'}/>
      {dummy.map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker}/>
      ))}
      <SpeakerHeader header={'PERFORMERS'}/>
      {performers.map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker}/>
      ))}
    </div>
  )
}
