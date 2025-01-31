import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-dark py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <Link to="/" className="text-2xl font-bold hover:text-ted-red transition-colors">TEDx 2025</Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/speakers" className="text-white hover:text-ted-red transition-colors">Speakers</Link>
          <Link to="/team" className="text-white hover:text-ted-red transition-colors">Team</Link>
          <Link to="/sponsors" className="text-white hover:text-ted-red transition-colors">Sponsors</Link>
          <Link to="/about" className="text-white hover:text-ted-red transition-colors">About</Link>
        </div>
        <div>
          <Link to="/buy" className="bg-ted-red text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
            Buy Tickets
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 