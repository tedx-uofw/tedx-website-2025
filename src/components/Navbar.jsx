import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Image from './Image'
import { lenis } from '../App';

const MenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-12 h-12 flex items-center justify-center"
    aria-label="Toggle menu"
  >
    <div className="relative w-[32px] h-[32px] scale-[0.666] md:scale-[0.666] lg:scale-[0.833] xl:scale-1">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Closed State Dots */}
        {[0, 1, 2, 3, 4].map((col) => (
          [0, 1, 2].map((row) => {
            const cx = 3 + col * 8;
            const cy = 3 + row * 16;
            const dx = cx - 19;
            const dy = cy - 19;
            return (
              <circle
                key={`${col}-${row}`}
                cx={cx}
                cy={cy}
                r="3"
                fill="#D9D9D9"
                style={{
                  transformOrigin: '19px 19px',
                  transform: isOpen 
                    ? `translate(${-dx}px, ${-dy}px) scale(0)`
                    : 'translate(0, 0) scale(1)',
                  opacity: isOpen ? 0 : 1,
                  transition: 'all 0.2s linear',
                  transitionDelay: isOpen ? '0s' : '0.0s'
                }}
              />
            );
          })
        ))}

        {/* Center Dot (Transition State) */}
        <circle
          cx="19"
          cy="19"
          r="3"
          fill="#D9D9D9"
          style={{
            transform: `scale(1)`,
            opacity: 1,
            transition: 'all 0s linear'
          }}
        />

        {/* Opened State Dots */}
        {[
          [3, 3], [11, 11], [27, 12], [35, 3],
          [11, 26], [19, 19], [27, 26],
          [3, 35], [35, 35]
        ].map(([cx, cy], index) => {
          const dx = cx - 19;
          const dy = cy - 19;
          return (
            <circle
              key={`open-${index}`}
              cx={cx}
              cy={cy}
              r="3"
              fill="#D9D9D9"
              style={{
                transformOrigin: '19px 19px',
                transform: isOpen 
                  ? 'translate(0, 0) scale(1)'
                  : `translate(${-dx}px, ${-dy}px) scale(0)`,
                opacity: isOpen ? 1 : 0,
                transition: 'all 0.2s linear',
                transitionDelay: isOpen ? '0.0s' : '0s'
              }}
            />
          );
        })}
      </svg>
    </div>
  </button>
);

const MenuOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    scrollToTop();
    onClose();
    navigate(path);
  };

  return (
    <div 
      onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className="h-full pt-[72px] md:pt-[72px] px-6 md:px-12"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-6">
              {[
                { num: '01', text: 'Home', path: '/' },
                { num: '02', text: 'Speakers', path: '/speakers' },
                { num: '03', text: 'Team', path: '/team' },
                { num: '04', text: 'Sponsors', path: '/sponsors' },
                { num: '05', text: 'About', path: '/about' },
              ].map((item) => (
                <div 
                  key={item.num}
                  onClick={() => handleNavigation(item.path)}
                  className="cursor-pointer group"
                >
                  <div className="text-sm text-gray-500">{item.num}</div>
                  <div className="text-2xl font-bold text-white group-hover:text-ted-red transition-colors">
                    {item.text}
                  </div>
                  <div className="border-b border-white/20 mt-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="py-8">
            <Link 
              to="/buy"
              onClick={onClose}
              className="inline-block bg-[#E4E0E4] text-black px-8 py-3 rounded text-lg transition-colors hover:bg-[#ffffff]"
            >
              BUY TICKETS
            </Link>
            <div className="mt-8 flex gap-4">
              <a href="mailto:tedxuofw@uw.edu" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/TEDxUofW" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/tedxuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.982c2.937,0,3.285.011,4.445.064a6.087,6.087,0,0,1,2.042.379,3.408,3.408,0,0,1,1.265.823,3.408,3.408,0,0,1,.823,1.265,6.087,6.087,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.087,6.087,0,0,1-.379,2.042,3.643,3.643,0,0,1-2.088,2.088,6.087,6.087,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087,6.087,0,0,1-2.043-.379,3.408,3.408,0,0,1-1.265-.823,3.408,3.408,0,0,1-.823-1.265,6.087,6.087,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087,6.087,0,0,1,.379-2.042,3.408,3.408,0,0,1,.823-1.265,3.408,3.408,0,0,1,1.265-.823,6.087,6.087,0,0,1,2.043-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.074,8.074,0,0,0-2.67.511,5.392,5.392,0,0,0-1.949,1.27,5.392,5.392,0,0,0-1.27,1.949,8.074,8.074,0,0,0-.511,2.67C1.012,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.074,8.074,0,0,0,.511,2.67,5.392,5.392,0,0,0,1.27,1.949,5.392,5.392,0,0,0,1.949,1.27,8.074,8.074,0,0,0,2.67.511C8.638,22.988,9.013,23,12,23s3.362-.013,4.535-.066a8.074,8.074,0,0,0,2.67-.511,5.625,5.625,0,0,0,3.219-3.219,8.074,8.074,0,0,0,.511-2.67C22.988,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.074,8.074,0,0,0-.511-2.67,5.392,5.392,0,0,0-1.27-1.949,5.392,5.392,0,0,0-1.949-1.27,8.074,8.074,0,0,0-2.67-.511C15.362,1.012,14.987,1,12,1Z" />
                  <path d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z" />
                  <circle cx="17.872" cy="6.128" r="1.32" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@tedxuofw" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/tedxatuofw/" target="_blank" rel="noopener noreferrer" className="text-white opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9,1.637-1.85,3.37-1.85c3.601,0,4.267,2.37,4.267,5.455v6.286zM5.337,7.433c-1.144,0-2.063-.926-2.063-2.065c0-1.138.92-2.063,2.063-2.063c1.14,0,2.064.925,2.064,2.063c0,1.139-.925,2.065-2.064,2.065zm1.782,13.019H3.555V9h3.564v11.452zM22.225,0H1.771C.792,0,0,.774,0,1.729v20.542C0,23.227.792,24,1.771,24h20.451C23.2,24,24,23.227,24,22.271V1.729C24,.774,23.2,0,22.222,0h.003z" />
                </svg>
              </a>
            </div>
            <div className="mt-8 text-sm text-white/60">
              ©TEDxUofW 2025 | Resonance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function scrollToTop() {
  lenis.scrollTo(0, 0, {
    duration: 1, // Optional: Set a duration for the scroll animation (in seconds)
    easing: (t) => t, // Optional: Define an easing function for smooth scrolling
  });
}

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setVisible(true)
        return
      }

      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos
      
      setVisible(isScrollingUp || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      setVisible(true)
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 font-favorit transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div 
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
          }}
        />

        <div className="relative">
          <div className="flex justify-between items-center h-[72px] md:h-[72px] lg:h-[88px] xl:h-[138px] w-screen">
            <div className="w-full px-6 md:px-12 lg:px-[100px] xl:px-[100px] flex justify-between items-center">
              <div className="text-white">
                <Link to="/" className="block group">
                  <div className="scale-[0.666] md:scale-[0.666] lg:scale-[0.833] xl:scale-1 origin-left">
                    <Image 
                      src="/logos/Logo.png"
                      alt="TEDx UofW"
                      className="transition-all duration-300 group-hover:opacity-60"
                      width={187}
                      height={48}
                      layout="constrained"
                      priority="true"
                      background="transparent"
                      onClick={scrollToTop}
                    />
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex items-center justify-center space-x-8">
                <Link to="/speakers" className="text-white hover:text-ted-red transition-colors" onClick={scrollToTop}>Speakers</Link>
                <Link to="/team" className="text-white hover:text-ted-red transition-colors" onClick={scrollToTop}>Team</Link>
                <Link to="/sponsors" className="text-white hover:text-ted-red transition-colors" onClick={scrollToTop}>Sponsors</Link>
                <Link to="/about" className="text-white hover:text-ted-red transition-colors" onClick={scrollToTop}>About</Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0u-Lo0mPZioUITqURZVAg2ys_2FKB3ZWOwY1yqz45PSlElQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#E4E0E4] text-black px-4 py-2 rounded text-lg transition-colors hover:bg-[#ffffff]">
                  BUY TICKETS
                </a>
                </div>
                <div className="block md:hidden">
                  <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Navbar
