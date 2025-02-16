import { Link } from 'react-router-dom'
import Schedule from '../components/schedule';
import Sponsors from '../components/home-sponsors';

const HeroNav = () => {
  const handleCalendarClick = () => {
    const event = {
      title: 'TEDx UofW 2025',
      start: '2025-04-12T10:00:00',
      duration: '8', // Duration in hours
      location: 'Kane Hall, 4069 Spokane Ln NE, Seattle, WA 98105'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}00Z/${event.start.replace(/[-:]/g, '')}00Z&details=${encodeURIComponent('Join us for TEDx UofW 2025')}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="absolute top-0 left-0 right-0 pt-[72px] md:pt-[72px] lg:pt-[88px] xl:pt-[138px]">
      <div className="w-full px-6 md:px-12 lg:px-[100px] xl:px-[100px] py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 text-[#FDFCFD] text-base md:text-xl">
          <div className="flex items-start">
            <span>04.12.2025</span>
            <span className="text-[#CBC4CC] text-sm md:text-base ml-2 relative top-0">Saturday</span>
          </div>
          <div className="flex items-start">
            <span>10:00 AM</span>
            <span 
              onClick={handleCalendarClick} 
              className="text-[#CBC4CC] text-sm md:text-base ml-2 relative top-0 cursor-pointer hover:text-[#FDFCFD] transition-colors"
            >
              Calendar↗
            </span>
          </div>
          <div className="flex items-start">
            <span>Kane Hall</span>
            <a 
              href="https://maps.google.com/?q=4069+Spokane+Ln+NE,+Seattle,+WA+98105" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#CBC4CC] text-sm md:text-base ml-2 relative top-0 cursor-pointer hover:text-[#FDFCFD] transition-colors"
            >
              Maps↗
            </a>
          </div>
          <div>Seattle, WA</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[100svh] -mt-[72px] md:-mt-[72px] lg:-mt-[88px] xl:-mt-[138px]">
        {/* Background Video */}
        <div className="relative w-full h-[1060px]">
          <video className="w-full h-full object-cover m-0 p-0" autoPlay loop muted>
            <source src="/about/home-background-vid.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(0,0,7)] to-[#2a218000] pointer-events-none"> {/* Overlay (to darken video) */}
          </div>
        </div>
        {/* Hero Nav */}
        <HeroNav />
        {/* Hero Content */}
        <div className="absolute bottom-[40px] sm:bottom-[60px] px-6 md:px-12 lg:px-[100px] xl:px-[100px] w-full">
          <div className="flex flex-col gap-y-4 sm:gap-y-6 max-w-[90%] md:max-w-2xl">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight">Resonance</h1>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl font-semibold leading-snug">
              Reflects the idea that a single action or idea can echo and shape the world, leaving a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-10 mt-2">
              <Link to="/buy" className="rounded-[4px] bg-[#E4E0E4] text-black px-4 py-2 text-lg transition-colors hover:bg-[#ffffff] flex items-center justify-center">
                BUY TICKETS
              </Link>
              <Link to="/about" className="rounded-[4px] border-[4px] border-dashed border-[#CBC4CC] text-white px-4 py-2 text-lg hover:bg-white/10 transition-colors text-center">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* About Section */}
      <section className="flex px-[100px] py-[120px] items-end gap-[100px] self-stretch bg-[#0C0634]">
        <div className="w-[480px] h-[480px]"> {/* Animation */}
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/about/nervous-dots3.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="flex flex-col items-start gap-[24px] flex-1"> {/* Text Container */}
          <div className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[36px] font-medium leading-[48px] tracking-[-0.72px]">
            (noun) A single action or idea can echo and shape the world, leaving a lasting impact.
          </div>

          <div className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[28px] font-normal leading-[34px] tracking-[-0.28px]">
            The way a single action, idea, or event emerges and continues to echo over time, creating waves that extend far beyond the initial moment. 
            Learn how the essence of a single moment can contribute to a larger, lasting legacy that connects people and ideas across time and space.
          </div>
        </div>
      </section>


      {/* Video Section*/}
      <div className="h-[800px] flex flex-col items-center self-stretch bg-[#080808]">
        <div className="w-full flex justify-center bg-[#080808]">
          <video className="w-full m-0 p-0" autoPlay loop muted>
            <source src="/about/cinematic-flares.mp4" type="video/mp4" />
          </video>
        </div>
      </div>


      {/* Schedule Section (seperate component in /components/schedule.jsx) */}
      <div className="relative z-10 mt-[50px]"> 
        <Schedule />
      </div>


      {/* Venue + Accessibility Section*/}
      <div className="flex p-[100px_200px] flex-col justify-center items-center gap-[60px] self-stretch">
        <div className="flex flex-col items-start gap-[20px] self-stretch"> {/* Venue */}
          <div className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[44px] font-bold leading-[50px] tracking-[-0.88px]">
            Venue
          </div>

          <div className="max-w-[1000px] self-stretch text-[#FDFCFD] leading-none font-[ABC Favorit Variable Edu] text-[24px] font-medium leading-[28px] tracking-[-0.24px]">
            Kane Hall is a dynamic hub for lectures, performances, and events located at the heart of UW's stunning Seattle campus.
            The venue houses excellent acoustics and a welcoming atmosphere to engage in cultural showcases, 
            academic milestones, thought-provoking discussions.
            <div className="mt-2">
              <br></br>
              <a href="https://transportation.uw.edu/park" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-[#B1A8B3] cursor-pointer text-[#FF0000]">Parking Information </span>
              </a> |
              <a href="https://www.google.com/maps?q=4069+Spokane+Ln+NE,+Seattle,+WA+98105" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-[#B1A8B3] cursor-pointer text-[#FF0000]"> Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[20px] self-stretch"> {/* Accessibility */}
          <div className="flex max-w-[1200px] flex-col items-end gap-[40px] self-stretch"> {/* Content Container */}
            <img
              src="/about/kane2.jpg"
              alt="Kane Hall"
              className="flex h-[600px] max-w-[1200px] justify-end items-start gap-[10px] self-stretch rounded-[8px] object-cover"
            />

            <div className="flex items-start gap-[10px] self-stretch"> {/* Text */}
              <div className="flex-1 text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[44px] font-bold leading-[50px] tracking-[-0.88px]">
                Accessibility
              </div>
              <div className="w-[525px] text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[24px] font-medium leading-[28px] tracking-[-0.24px]">
                The venue provides adequate accommodations for those in need of wheelchair seating or closed captions. Please email tedxuofw@uw.edu if you require further accommodations.
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Sponsors Section (seperate component in /components/home-sponsors.jsx) */}
      <Sponsors/>
      
    </div>
  )
}

export default Home
