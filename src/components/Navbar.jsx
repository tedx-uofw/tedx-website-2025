import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from '../resources/img/logos/Logo.png'
import Image from './Image'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos
      
      setVisible(isScrollingUp || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
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
          <div className="w-full px-12 md:px-12 lg:px-[100px] xl:px-[100px] flex justify-between items-center">
            <div className="text-white">
              <Link to="/" className="block group">
                <div className="scale-[0.666] md:scale-[0.666] lg:scale-[0.833] xl:scale-1 origin-left">
                  <Image 
                    src={Logo} 
                    alt="TEDx UofW"
                    className="transition-all duration-300 group-hover:opacity-60"
                    width={187}
                    height={48}
                    layout="constrained"
                    priority={true}
                    background="transparent"
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8">
              <Link to="/speakers" className="text-white hover:text-ted-red transition-colors">Speakers</Link>
              <Link to="/team" className="text-white hover:text-ted-red transition-colors">Team</Link>
              <Link to="/sponsors" className="text-white hover:text-ted-red transition-colors">Sponsors</Link>
              <Link to="/about" className="text-white hover:text-ted-red transition-colors">About</Link>
            </div>
            <div>
              <Link to="/buy" className="bg-[#E4E0E4] text-black px-4 py-2 rounded text-lg transition-colors hover:bg-[#ffffff]">
                BUY TICKETS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

