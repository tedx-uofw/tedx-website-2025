import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroNav = ({ isReady }) => {
  const handleCalendarClick = () => {
    const event = {
      title: 'TEDx UofW 2025',
      start: '2025-04-12T10:30:00',
      duration: '4', // Duration in hours
      location: 'Kane Hall, 4069 Spokane Ln NE, Seattle, WA 98105'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '')}00Z/${event.start.replace(/[-:]/g, '')}00Z&details=${encodeURIComponent('Join us for TEDx UofW 2025')}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className={`w-full px-6 md:px-12 lg:px-[100px] xl:px-[100px] py-6 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 text-[#FDFCFD] text-base md:text-xl">
        <div className="flex items-start">
          <span>04.12.2025</span>
          <span className="text-[#CBC4CC] text-sm md:text-base ml-2 relative top-0">Saturday</span>
        </div>
        <div className="flex items-start">
          <span>10:30 AM</span>
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
  );
};

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Once video is loaded, set content ready after a small delay
  useEffect(() => {
    if (videoLoaded) {
      const timer = setTimeout(() => {
        setContentReady(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [videoLoaded]);

  // Start content animation once content is ready
  useEffect(() => {
    if (contentReady) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [contentReady]);

  return (
    <div className="relative h-[100svh] w-full">
      {/* Loading Overlay */}
      {!contentReady && (
        <div className="absolute inset-0 z-30 bg-[#000007] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
            <div className="text-white/70 text-sm">Loading...</div>
          </div>
        </div>
      )}

      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`} 
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedData={handleVideoLoaded}
        >
          {/* Mobile version (low resolution) */}
          <source src="/about/cinematic-flares-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          {/* Tablet version (medium resolution) */}
          <source src="/about/cinematic-flares-tablet.mp4" type="video/mp4" media="(min-width: 768px) and (max-width: 1023px)" />
          {/* Desktop version (high resolution) */}
          <source src="/about/cinematic-flares-optimized.mp4" type="video/mp4" media="(min-width: 1024px)" />
          {/* Fallback for older browsers */}
          <source src="/about/cinematic-flares.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(0,0,7)] via-[rgba(0,0,7,0.7)] to-transparent pointer-events-none">
        </div>
      </div>

      <div className="relative h-full flex flex-col">
        {/* Hero Nav */}
        <div className="mt-[72px] md:mt-[72px] lg:mt-[88px] xl:mt-[138px]">
          <HeroNav isReady={showContent} />
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex items-end px-6 md:px-12 lg:px-[100px] xl:px-[100px]">
          <div className="w-full pb-[max(40px,calc(env(safe-area-inset-bottom)+24px))] sm:pb-[40px]">
            <div 
              className={`flex flex-col gap-y-4 sm:gap-y-6 max-w-[90%] md:max-w-2xl transition-all duration-1000 ${
                showContent 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
              }`}
            >
              <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-medium leading-tight">Resonance</h1>
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl max-w-2xl font-medium leading-snug">
                Reflects the idea that a single action or idea can echo and shape the world, leaving a lasting impact.
              </p>
              <div className="flex flex-row gap-4 sm:gap-x-10 mt-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0u-Lo0mPZioUITqURZVAg2ys_2FKB3ZWOwY1yqz45PSlElQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-[4px] bg-[#E4E0E4] text-black px-2 sm:px-4 py-2 text-md md:text-lg transition-colors hover:bg-[#ffffff] flex items-center justify-center">
                  BUY TICKETS
                </a>

                <Link to="/about" className="rounded-[4px] border-[4px] border-dashed border-[#CBC4CC] text-white px-2 sm:px-4 py-2 text-md md:text-lg hover:bg-white/10 transition-colors text-center">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 