import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="speakers" element={<div>Speakers Page</div>} />
          <Route path="team" element={<div>Team Page</div>} />
          <Route path="sponsors" element={<div>Sponsors Page</div>} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
