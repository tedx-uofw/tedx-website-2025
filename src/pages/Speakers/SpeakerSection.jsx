import React from 'react'
import SpeakerHeader from './SpeakerHeader';
import SpeakerCard from './SpeakerCard';

const speakers = [
  {
    name: "Michael Wang",
    title: "Founder/Chief Clinical Officer at INSPIREN",
    talkName: "Crossing the Chasm of Life’s Changes",
    description: "Life's only certainty is change. From serving as a Special Forces soldier in Afghanistan to caring for patients as a nurse and founding a tech company, Michael Wang's story is a testament to the transformative power of introspection. Through pivotal life moments, he discovered that true impact lies not in changing the world at large but in transforming one person's world. Michael's journey underscores the profound possibilities that arise when we focus on meaningful, personal connections—revealing that small, deliberate actions can create ripples of change that extend far beyond our immediate reach.",
    image: "/speakers/mike.jpg",
    linkedin: "https://www.linkedin.com/in/michael-wang-inspiren",
    email: null
  },
  {
    name: "Gresshaa Mehta",
    title: "Senior Product Designer, Microsoft",
    talkName: "Breaking the Oppressive Nature of Time",
    description: "Time dictates our lives—often feeling oppressive, inaccessible, and unforgiving. But what if the problem isn't us, but the way we visualize time? In her thought-provoking talk, Gresshaa, a product designer at Microsoft, challenges conventional design perspectives by exploring the intersections of UX design, physics, time, and cultural influences. She invites the audience on a sensory journey to reimagine how we perceive and interact with time. By examining how design shapes our experience of time, Gresshaa offers fresh insights into making time more accessible and empowering us to take control of it, rather than feeling controlled by it.",
    image: "/speakers/gesshaa.jpg",
    linkedin: "https://www.linkedin.com/in/gresshaa/",
    email: null
  },
  {
    name: "Doc Wilson",
    title: "Non-Profit Leader/Social Entrepreneur",
    talkName: "The Transformative Power of Community Innovation",
    description: 'Connections and opportunities—not disruption—drive innovation. Doc Wilson champions a "together is better" mindset, demonstrating how equity serves as the foundation for community-driven progress. Drawing inspiration from historical and contemporary examples like the Black Panther\'s free breakfast program and Atlanta\'s The Village Market, Doc illustrates how equity transforms innovation from exclusive disruption into inclusive empowerment. By dismantling tokenism, scarcity mindsets, and power-hoarding, equity fosters opportunities at the roots rather than merely wealth at the top. Doc challenges the audience to "Do More Than Nothing" by supporting local changemakers, amplifying diverse voices, and redefining what success looks like.',
    image: "/speakers/doc.jpg",
    linkedin: "https://www.linkedin.com/company/peace-peloton/",
    email: null
  },
  {
    name: "Ana Maria Pinto da Silva",
    title: "Educator, Designer, Start-Up Founder, Community Servant",
    talkName: "Discovery, Exploration and Inquiry: A Love Story",
    description: "Community is the heartbeat of innovation—the infrastructure of our shared humanity. First-generation Portuguese-American designer, technologist, and educator Ana Pinto da Silva explores how community shapes our ideas, learning, and leadership. Drawing on her personal story at the intersection of culture, identity, and innovation, Ana reveals how family and enduring bonds influence our sense of belonging. She celebrates the transformative power of community in fostering connection and creativity, emphasizing its critical role in this pivotal moment of our human story.",
    image: "/speakers/ana.jpg",
    linkedin: null,
    email: null
  },
  {
  name: "Kris Engskov",
  title: "Co-Founder and CEO, Rippl",
  talkName: "Dementia needs a lot more thought. ",
  description: "Kris Engskov, former Starbucks executive and founder of Rippl, shares his powerful journey from corporate leadership to tackling the urgent challenges of dementia care. Inspired by his parents' struggles in the long-term care system and his experiences during the COVID-19 crisis in assisted living, Kris sheds light on the staggering prevalence and costs of dementia—affecting 1 in 3 of us over our lifetimes. He highlights the devastating cycle of emergency room visits for dementia patients and the critical need for specialized care. Kris calls for destigmatizing dementia, investing in innovative care models, and building a trained workforce to support aging Baby Boomers. Through Rippl's accessible, virtual, specialized care initiatives, Kris advocates for a national movement to transform dementia care, offering dignity and support to patients and caregivers with urgency and hope.",
  image: "/speakers/kris.jpg",
  linkedin: null,
  email: null
  },
  {
    name: "Diana Vicezar",
    title: "Product Manager",
    talkName: "Amplifying Potential Through Mentorship",
    description: "Mentorship has the power to ignite potential across communities and generations. Diana Vicezar shares how mentors shaped her own path and how mentoring others has created ripples of positive transformation. She challenges common misconceptions about mentorship and encourages everyone to embrace this role as a means to create change. Diana offers practical steps to start your mentorship journey, demonstrating how it benefits both mentors and mentees. Her talk inspires action, showing how even small acts of guidance can lead to profound impacts on individuals and communities alike.",
    image: "/speakers/diana.png",
    linkedin: "https://www.linkedin.com/in/dianavicezar/",
    email: null
  }
];

export default function SpeakerSection() {
  return (
  <div className="relative flex flex-col items-start px-4 sm:px-6 md:px-[50px] lg:px-[100px] 
                  py-[100px] gap-[72px] w-full min-h-screen bg-[#080808]">
    
    {/* Background Image with Reduced Opacity */}
    <div className="absolute inset-0 bg-[url('/speakers/leavesdot_2.png')] 
                    bg-contain bg-no-repeat bg-center 
                    opacity-20 pointer-events-none"></div>
    
    {/* Content Stays Fully Visible */}
    <SpeakerHeader header={'SPEAKERS'} />
    
    {speakers.map((speaker, index) => (
      <SpeakerCard key={index} speaker={speaker} />
    ))}
  </div>
  )
}



