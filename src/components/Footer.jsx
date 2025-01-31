const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">TEDx 2025</h3>
          <p className="text-gray-300">Ideas worth spreading</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-gray-300">Email: info@tedx2025.com</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-ted-red transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-ted-red transition-colors">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-ted-red transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-300 hover:text-ted-red transition-colors">About</a></li>
            <li><a href="/speakers" className="text-gray-300 hover:text-ted-red transition-colors">Speakers</a></li>
            <li><a href="/team" className="text-gray-300 hover:text-ted-red transition-colors">Team</a></li>
            <li><a href="/sponsors" className="text-gray-300 hover:text-ted-red transition-colors">Sponsors</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">&copy; 2025 TEDx. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 