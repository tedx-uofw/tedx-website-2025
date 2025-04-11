import React from 'react'
import LazyImage from '../../components/common/LazyImage'

const coaches = [
  {
    name: "Ro Verdeja",
    title: "Speaker Coach",
    image: "speakers/speakerCoaches/ro.jpeg",
    linkedin: "https://www.linkedin.com/in/ro-verdeja/"
  },
  {
    name: "Kimberly Colburn",
    title: "Speaker Coach",
    image: "speakers/speakerCoaches/kimberly.jpeg",
    linkedin: "https://www.linkedin.com/in/kimberly-colburn-1ba7398/"
  }
];

export default function SpeakerCoachThanks() {
  return (
    <div className="relative flex flex-col items-start px-4 sm:px-6 md:px-[50px] lg:px-[100px] 
                py-[100px] gap-[72px] w-full bg-[#080808]">
      
      {/* Background Image with Reduced Opacity */}
      <div className="absolute inset-0 bg-[url('/speakers/leavesdot_2.png')] 
                  bg-contain bg-no-repeat bg-center 
                  opacity-20 pointer-events-none"></div>
      
      {/* Content Stays Fully Visible */}
      <div className="w-full z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Special Thanks to our Speaker Coaches</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <LazyImage 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover"
                  placeholderColor="#1E1E1E"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center">{coach.name}</h3>
              <p className="text-gray-300 text-center">{coach.title}</p>
              {coach.linkedin && (
                <a 
                  href={coach.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 text-red-500 hover:text-red-400"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 