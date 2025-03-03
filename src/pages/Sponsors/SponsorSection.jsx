import React from 'react';
import SponsorHeader from '../Speakers/SpeakerHeader';
import SponsorCard from "../Speakers/SpeakerCard"

  const innovator = [
    {
      name: "(ASUW) Associated Students of the University of Washington",
      description: "The Associated Students of the University of Washington is the democratic voice of students that engages the campus community through programming, services and advocacy. The ASUW is dedicated to fostering a safe and inclusive environment. The ASUW strives to enrich student life and develop future leaders.",
      image: "/sponsors/asuw.png",
    },
  ]

  const educator = [

  ]

  const thinker = [
    {
      name: "(UMAC) University Marketing & Communications",
      description: "University Marketing & Communications (UMAC) is the University of Washington’s central branding, marketing and communications office. Based within University Advancement, UMAC brings together talented staff from across a range of marketing and communications disciplines to carry out integrated efforts in support of the UW’s highest priorities.",
      image: "/sponsors/umac.png",
    },
    {
      name: "(GPSS) Graduate and Professional Student Senate",
      description: "The Graduate and Professional Student Senate (GPSS) represents over 17,000 graduate and professional students at the University of Washington. Our Senators represent academic departments as well as non-academic programs and communities. GPSS hosts events and programming, provides opportunities for a wide breadth of engagement through internal committees and university-wide liaison positions, and offers funding for academic and professional development. ",
      image: "/sponsors/gpss.jpg",
    },
  ]

  const friend = [
    {
      name: "(SBP) Seattle Bouldering Project",
      description: "SBP creates fun, inspiring and inclusive climbing, movement, and community spaces.",
      image: "/sponsors/s-bouldering.png",
    },
    {
      name: "TOASTED.",
      description: "Seattle's premier halal bagel cafe and coffee shop serving fresh, handcrafted bagels, artisanal coffee, and pastries in the University District.",
      image: "/sponsors/toasted.bmp",
    },
  ]

  
export default function SponsorSection() {
  return (
<div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[200px] py-[100px] gap-[48px] w-full min-h-screen bg-[#080808]">
  
  <div className="py-[0px]">
    <SponsorHeader header={'INNOVATOR'}/> 
    <div className="flex flex-col gap-y-[40px] mt-[72px]"> 
      {innovator.map((speaker, index) => (
        <SponsorCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>
  <div className="py-[px]"></div>

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

</div>
  )
}
