import { Link } from 'react-router-dom'
import { useEffect, useRef, useLayoutEffect } from 'react'
import Image from './Image'
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
                <Image 
                  src="/logos/Logo.png"
                  alt="TEDx UofW"
                  width={240}
                  height={62}
                  layout="constrained"
                  priority={false}
                  background="transparent"
                  className="max-w-[15rem] md:max-w-[10rem] lg:max-w-[15rem]"
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
                  <Link to="/sponsors" className="text-white opacity-60 hover:opacity-100 transition-opacity">Sponsors</Link>
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/TEDxUofW" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/tedxuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.982c2.937,0,3.285.011,4.445.064a6.087,6.087,0,0,1,2.042.379,3.408,3.408,0,0,1,1.265.823,3.408,3.408,0,0,1,.823,1.265,6.087,6.087,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.087,6.087,0,0,1-.379,2.042,3.643,3.643,0,0,1-2.088,2.088,6.087,6.087,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087,6.087,0,0,1-2.043-.379,3.408,3.408,0,0,1-1.265-.823,3.408,3.408,0,0,1-.823-1.265,6.087,6.087,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087,6.087,0,0,1,.379-2.042,3.408,3.408,0,0,1,.823-1.265,3.408,3.408,0,0,1,1.265-.823,6.087,6.087,0,0,1,2.043-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.074,8.074,0,0,0-2.67.511,5.392,5.392,0,0,0-1.949,1.27,5.392,5.392,0,0,0-1.27,1.949,8.074,8.074,0,0,0-.511,2.67C1.012,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.074,8.074,0,0,0,.511,2.67,5.392,5.392,0,0,0,1.27,1.949,5.392,5.392,0,0,0,1.949,1.27,8.074,8.074,0,0,0,2.67.511C8.638,22.988,9.013,23,12,23s3.362-.013,4.535-.066a8.074,8.074,0,0,0,2.67-.511,5.625,5.625,0,0,0,3.219-3.219,8.074,8.074,0,0,0,.511-2.67C22.988,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.074,8.074,0,0,0-.511-2.67,5.392,5.392,0,0,0-1.27-1.949,5.392,5.392,0,0,0-1.949-1.27,8.074,8.074,0,0,0-2.67-.511C15.362,1.012,14.987,1,12,1Z"/>
                    <path d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z"/>
                    <circle cx="17.872" cy="6.128" r="1.32"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@tedxuofw" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/tedxatuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9,1.637-1.85,3.37-1.85c3.601,0,4.267,2.37,4.267,5.455v6.286zM5.337,7.433c-1.144,0-2.063-.926-2.063-2.065c0-1.138.92-2.063,2.063-2.063c1.14,0,2.064.925,2.064,2.063c0,1.139-.925,2.065-2.064,2.065zm1.782,13.019H3.555V9h3.564v11.452zM22.225,0H1.771C.792,0,0,.774,0,1.729v20.542C0,23.227.792,24,1.771,24h20.451C23.2,24,24,23.227,24,22.271V1.729C24,.774,23.2,0,22.222,0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Resonance Gif */}
          <div className="mt-8 md:mt-16">
            <Image 
              src={ResonanceGif}
              alt="RESONANCE sliding focus gif"
              layout="fill"
              background="transparent"
              className="object-cover animate-expand-vertical w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer