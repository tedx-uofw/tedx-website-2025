const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TEDx 2025</h3>
          <p>Ideas worth spreading</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@tedx2025.com</p>
          <p>Follow us on social media</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TEDx. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 