import React from 'react'
import SpeakerHeader from './SpeakerHeader';
import SpeakerCard from './SpeakerCard';


const data = [
    {
      name: "Kris Engskov",
      title: "Co-Founder & CEO, Rippl",
      description: "Kris Engskov, former Starbucks executive and founder of Rippl, shares his powerful journey from corporate leadership to tackling the urgent challenges of dementia care. Inspired by his parents' struggles in the long-term care system and his experiences during the COVID-19 crisis in assisted living, Kris sheds light on the staggering prevalence and costs of dementia—affecting 1 in 3 of us over our lifetimes. He highlights the devastating cycle of emergency room visits for dementia patients and the critical need for specialized care. Kris calls for destigmatizing dementia, investing in innovative care models, and building a trained workforce to support aging Baby Boomers. Through Rippl’s accessible, virtual, specialized care initiatives, Kris advocates for a national movement to transform dementia care, offering dignity and support to patients and caregivers with urgency and hope.",
      image: "/speakers/speaker/Kris_Engskov.png",
      linkedin: '',
      email: ''
    }, 
    {
      name: "Michael Wang",
      title: "Founder/Chief Clinical Officer at INSPIREN",
      description: "Life's only certainty is change. From serving as a Special Forces soldier in Afghanistan to caring for patients as a nurse and founding a tech company, Michael Wang’s story is a testament to the transformative power of introspection. Through pivotal life moments, he discovered that true impact lies not in changing the world at large but in transforming one person’s world. Michael’s journey underscores the profound possibilities that arise when we focus on meaningful, personal connections—revealing that small, deliberate actions can create ripples of change that extend far beyond our immediate reach.",
      image: "/speakers/speaker/Michael_Wang.png",
      linkedin: 'https://www.linkedin.com/in/michael-wang-inspiren/',
      email: ''
    },
    {
      name: "Gresshaa Mehta",
      title: "Senior Product Designer, Microsoft",
      description: "Time dictates our lives—often feeling oppressive, inaccessible, and unforgiving. But what if the problem isn’t us, but the way we visualize time? In her thought-provoking talk, Gresshaa, a product designer at Microsoft, challenges conventional design perspectives by exploring the intersections of UX design, physics, time, and cultural influences. She invites the audience on a sensory journey to reimagine how we perceive and interact with time. By examining how design shapes our experience of time, Gresshaa offers fresh insights into making time more accessible and empowering us to take control of it, rather than feeling controlled by it.",
      image: "/speakers/speaker/Gresshaa_Mehta.jpg",
      linkedin: 'https://www.linkedin.com/in/gresshaa/',
      email: 'aramis@example.com'
    },
    {
      name: "Diana Vicezar",
      title: "Product Manager",
      description: "Mentorship has the power to ignite potential across communities and generations. Diana Vicezar shares how mentors shaped her own path and how mentoring others has created ripples of positive transformation. She challenges common misconceptions about mentorship and encourages everyone to embrace this role as a means to create change. Diana offers practical steps to start your mentorship journey, demonstrating how it benefits both mentors and mentees. Her talk inspires action, showing how even small acts of guidance can lead to profound impacts on individuals and communities alike.",
      image: "/speakers/speaker/Diana_Vicezar.png",
      linkedin: 'https://www.linkedin.com/in/dianavicezar/',
      email: ''
    },
    {
      name: "Doc Wilson",
      title: "Non-Profit Leader/Social Entrepenuer",
      description: "Connections and opportunities—not disruption—drive innovation. Doc Wilson champions a “together is better” mindset, demonstrating how equity serves as the foundation for community-driven progress. Drawing inspiration from historical and contemporary examples like the Black Panther’s free breakfast program and Atlanta’s The Village Market, Doc illustrates how equity transforms innovation from exclusive disruption into inclusive empowerment. By dismantling tokenism, scarcity mindsets, and power-hoarding, equity fosters opportunities at the roots rather than merely wealth at the top. Doc challenges the audience to “Do More Than Nothing” by supporting local changemakers, amplifying diverse voices, and redefining what success looks like.",
      image: "/speakers/speaker/Doc_Wilson.jpg",
      linkedin: 'https://www.linkedin.com/in/ingajdoc/',
      email: ''
    },
    {
      name: "Ana Maria Pinto da Silva",
      title: "Educator, Designer, Start-Up Founder, Community Servant",
      description: "Community is the heartbeat of innovation—the infrastructure of our shared humanity. First-generation Portuguese-American designer, technologist, and educator Ana Pinto da Silva explores how community shapes our ideas, learning, and leadership. Drawing on her personal story at the intersection of culture, identity, and innovation, Ana reveals how family and enduring bonds influence our sense of belonging. She celebrates the transformative power of community in fostering connection and creativity, emphasizing its critical role in this pivotal moment of our human story.",
      image: "/speakers/speaker/Ana_Silva.jpg",
      linkedin: '',
      email: ''
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
      {data.map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker}/>
      ))}
      
    </div>
  )
}
