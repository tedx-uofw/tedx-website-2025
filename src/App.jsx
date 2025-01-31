import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="speakers" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-8">Speakers</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          } />
          <Route path="team" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-8">Our Team</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          } />
          <Route path="sponsors" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-8">Sponsors</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          } />
          <Route path="about" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-8">About TEDx 2025</h1>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
