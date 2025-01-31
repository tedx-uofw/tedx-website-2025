import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">TEDx 2025</Link>
      </div>
      <div className="nav-links">
        <Link to="/speakers">Speakers</Link>
        <Link to="/team">Team</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="nav-buy">
        <Link to="/buy">Buy Tickets</Link>
      </div>
    </nav>
  )
}

export default Navbar 