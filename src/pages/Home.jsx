import { Link } from 'react-router-dom'

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
      <div className="w-full px-12 md:px-12 lg:px-[100px] xl:px-[100px] py-6">
        <div className="flex justify-between items-center text-[#FDFCFD] text-xl md:text-2xl">
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
    <div className="space-y-16 font-favorit">
      {/* Hero Section */}
      <div className="relative min-h-screen -mt-[72px] md:-mt-[72px] lg:-mt-[88px] xl:-mt-[138px]">
        {/* Background div for future animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-default to-bg-footer pointer-events-none" />
        
        {/* Hero Nav */}
        <HeroNav />
        
        {/* Content */}
        <div className="absolute bottom-[60px] left-12 md:left-12 lg:left-[100px] xl:left-[100px] z-10 flex flex-col gap-y-6">
          <h1 className="text-[80px] font-bold">Resonance</h1>
          <p className="text-4xl max-w-2xl font-semibold">
            Reflects the idea that a single action or idea can echo and shape the world, leaving a lasting impact.
          </p>
          <div className="flex gap-x-10">
            <Link to="/buy" className="bg-[#E4E0E4] text-black px-4 py-2 rounded text-lg transition-colors hover:bg-[#ffffff]">
              BUY TICKETS
            </Link>
            <Link to="/about" className="border border-white/20 text-white px-4 py-2 rounded text-lg hover:bg-white/10 transition-colors">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <section className="section-padding">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-bg-footer rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Speaker {i + 1}</h3>
              <p className="text-gray-300">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      <div className="full-width bg-gradient-to-l from-bg-default to-bg-footer">
        <section className="section-padding py-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About the Event</h2>
          <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
            <p className="text-lg">Join us for an extraordinary day of ideas, innovation, and inspiration at TEDx 2025. Our carefully curated lineup of speakers will challenge your perspectives and ignite your imagination.</p>
            <p className="text-lg">This year's theme explores the intersection of technology, humanity, and sustainability, bringing together thought leaders from diverse fields to share their groundbreaking ideas.</p>
            <p className="text-lg">Experience the power of ideas worth spreading in an immersive environment designed to foster connection and creativity.</p>
          </div>
        </section>
      </div>

      {/* Rest of your existing sections... */}
    </div>
  )
}

export default Home
