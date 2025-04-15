import React from 'react';
import SponsorHeader from '../Speakers/SpeakerHeader';
import SponsorCard from "../Speakers/SpeakerCard"

  const innovator = [
    {
      name: "Associated Students of the University of Washington (ASUW)",
      description: "The University of Washington is committed to providing access, equal opportunity and reasonable accommodation in its services, programs, activities, education and employment for individuals with disabilities. To request disability accommodation contact the Disability Services Office at least ten days in advance at: 206.543.6450/V, 206.543.6452/TTY, 206.685.7264 (FAX), or e-mail at dso@u.washington.edu.",
      image: "/sponsors/asuw.png",
    },
    {
      name: "CELSIUS",
      description: "We aim to inspire those who want to live fit by giving them a sustained energy source that’s specially formulated to work with your body to help you reach your goals. We support those who work overtime at everything they do and never take shortcuts. We power through the extra set, we push through the last sprint, and we hustle through the workday. CELSIUS stands out against other brands because it’s made with healthier ingredients such as ginger, guarana, green tea and 7 essential vitamins. Our drinks contain no sugar, no aspartame, no high fructose corn syrup, and no artificial colors or flavors. CELSIUS is certified gluten free, kosher, and non-GMO. We’re made with nothing but the best, so you can do your best and take on any challenge that comes your way!",
      image: "/sponsors/Celsius_Logo.png",
    },
  ]

  const educator = [

  ]

  const thinker = [
    {
      name: "University Marketing & Communications (UMAC)",
      description: "University Marketing & Communications (UMAC) is the University of Washington’s central branding, marketing and communications office. Based within University Advancement, UMAC brings together talented staff from across a range of marketing and communications disciplines in support of the UW’s highest priorities. At the center of our work is the Boundless brand, reflecting the optimistic spirit and extensive positive impact of the University on our students’ lives and on communities near and far.",
      image: "/sponsors/umac.png",
    },
    {
      name: "Graduate and Professional Student Senate (GPSS)",
      description: "The Graduate and Professional Student Senate (GPSS) represents over 15,000 graduate and professional students at the University of Washington. Our Senators represent academic departments as well as non-academic programs and communities. GPSS hosts events and programming, provides opportunities for engagement through internal committees and university-wide liaison positions, and offers funding for academic and professional development.",
      image: "/sponsors/gpss-new.png",
    },
    {
      name: "Figma",
      description: "Figma Design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences. It is a popular tool for designers, product managers, writers and developers and helps anyone involved in the design process contribute, give feedback, and make better decisions, faster.",
      image: "/sponsors/figma.png",
    },
  ]

  const friend = [
    {
      name: "UW Alumni Association Fund",
      description: "Founded in 1889, the UW Alumni Association has been the foundation of the UW alumni community for more than 125 years. UWAA’s mission is to support the University of Washington and higher education in the state of Washington.",
      image: "/sponsors/UW-Alumni.jpg",
    },
    {
      name: "HUB RSO Event Fund",
      description: "The HUB supports the Husky Experience by enhancing UW community, providing a dynamic event center, and fostering student engagement.",
      image: "/sponsors/UW-Hub.png",
    },
  ]

  const raffle = [
    {
      name: "UW Intercollegiate Athletics (UW ICA)",
      description: "We strive to set the example for equitable and inclusive excellence in sport, and build on a legacy of success that reflects equity, advocacy and belonging.",
      image: "/sponsors/UWICA1.svg",
    },
    {
      name: "Seattle Bouldering Project (SBP)",
      description: "SBP creates fun, inspiring and inclusive climbing, movement, and community spaces.",
      image: "/sponsors/s-bouldering.png",
    },
    {
      name: "TOASTED.",
      description: "Started by two UW Undergrads & crafted from Mediterranean inspiration, TOASTED. Bagels & Coffee offers a unique take on the classic bagel experience.",
      image: "/sponsors/toasted.png",
    },
  ]

  
export default function SponsorSection() {
  return (
<div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[100px] py-[100px] gap-[48px] w-full min-h-screen bg-[#080808]">
<div className="w-full md:max-w-[1200px] lg:max-w-none">
  <div className="py-[0px]">
    <SponsorHeader header={'INNOVATOR'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {innovator.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>
  <div className="py-[25px]"></div>

  {/* <div className="py-[50px]">
    <SponsorHeader header={'EDUCATOR'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {educator.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div> */}

  <div className="py-[50px]">
    <SponsorHeader header={'THINKER'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {thinker.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <div className="py-[50px]">
    <SponsorHeader header={'FRIEND'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {friend.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <div className="py-[50px]">
    <SponsorHeader header={'RAFFLE'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {raffle.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>

  <SponsorHeader header={'Donate to TEDx UofW'}/> 

  <div className="flex justify-center w-full mb-100">
    
    <givebutter-widget className="w-full" id="jNXbyg"></givebutter-widget>
  </div>

  </div>
</div>
  )
}
