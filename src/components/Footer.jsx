import { Link } from 'react-router-dom'
import { useEffect, useRef, useLayoutEffect } from 'react'
import { 
  LazyImage,
  InstagramIcon, 
  FacebookIcon, 
  TiktokIcon, 
  LinkedinIcon, 
  EmailIcon 
} from './common'
import ResonanceGif from '../resources/img/components/footer/resonance-footer.gif'

const Footer = () => {
  const footerRef = useRef(null);

  const updateFooterHeight = () => {
    if (footerRef.current) {
      const height = footerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--footer-height', `${height}px`);
    }
  };

  // Initial measurement using useLayoutEffect to run before browser paint
  useLayoutEffect(() => {
    updateFooterHeight();
  }, []);

  // Setup listeners and handle dynamic updates
  useEffect(() => {
    // Run on mount with a slight delay to ensure content is loaded
    const initialTimer = setTimeout(updateFooterHeight, 100);
    
    // Run when images and fonts load
    window.addEventListener('load', updateFooterHeight);
    document.fonts.ready.then(updateFooterHeight);
    
    // Handle resize
    const resizeObserver = new ResizeObserver(updateFooterHeight);
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('load', updateFooterHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <footer ref={footerRef} className="fixed bottom-0 left-0 right-0 bg-[#0C0133] w-full">
      <div className="w-full px-12 md:px-12 lg:px-[100px] xl:px-[100px]">
        {/* Top Section */}
        <div className="py-4 md:py-6 lg:py-16">
          <div className="flex flex-wrap justify-between gap-4 md:gap-8 lg:gap-16">
            {/* Logo Section */}
            <div className="flex flex-col gap-2">
              <Link to="/" className="block">
                <LazyImage 
                  src="/logos/Logo.png"
                  alt="TEDx UofW"
                  className="max-w-[15rem] md:max-w-[10rem] lg:max-w-[15rem]"
                  placeholderColor="#0C0133"
                />
              </Link>
            </div>

            {/* Navigation Sections */}
            <div className="flex gap-8 md:gap-16">
              {/* Event Links */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#A5A5CC] font-normal">EVENT</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="text-white opacity-60 hover:opacity-100 transition-opacity">Home</Link>
                  <Link to="/speakers" className="text-white opacity-60 hover:opacity-100 transition-opacity">Speakers</Link>
                  {/* <Link to="/sponsors" className="text-white opacity-60 hover:opacity-100 transition-opacity">Sponsors</Link> */}
                </div>
              </div>

              {/* About Links */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#A5A5CC] font-normal">ABOUT</h3>
                <div className="flex flex-col gap-2">
                  <Link to="/about" className="text-white opacity-60 hover:opacity-100 transition-opacity">About Us</Link>
                  <Link to="/team" className="text-white opacity-60 hover:opacity-100 transition-opacity">Team</Link>
                  <Link to="https://www.tedxatuofw.com/past-events" className="text-white opacity-60 hover:opacity-100 transition-opacity">Past Events</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="mt-3 flex flex-col gap-2 w-full">
            <p className="text-white">©TEDxUofW 2025 | Resonance</p>
            <p className="text-white text-sm">This independent TEDx event is operated under license from TED.</p>
          </div>

            {/* Social Links */}
            <div className="w-full md:w-auto">
              <p className="text-white/50 mb-2 md:hidden">CONNECT WITH US:</p>
              <div className="flex justify-left md:justify-end gap-4">
                <a href="mailto:tedxuofw@uw.edu" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <EmailIcon />
                </a>
                <a href="https://www.facebook.com/TEDxUofW" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/tedxuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@tedxuofw" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <TiktokIcon />
                </a>
                <a href="https://www.linkedin.com/company/tedxatuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          {/* Resonance Gif */}
          <div className="mt-8 md:mt-16">
            <LazyImage 
              src={ResonanceGif}
              alt="RESONANCE sliding focus gif"
              className="object-cover w-full animate-expand-vertical"
              placeholderColor="#0C0133"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer