import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState, Suspense } from 'react'
import Lenis from '@studio-freight/lenis'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-bg-default flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

function useResourcesLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add loading class to body immediately
    document.body.classList.add('loading');

    // Preload fonts
    const fontFamilies = ['ABC Favorit Variable', 'ABC Favorit Mono Variable'];
    const fontPromises = fontFamilies.map(family =>
      document.fonts.load(`1em "${family}"`)
    );

    // Create a promise for font loading
    const fontLoaded = Promise.all([
      ...fontPromises,
      document.fonts.ready
    ]);

    // Create a promise for image loading
    const imageLoaded = new Promise((resolve) => {
      const images = Array.from(document.images);
      const imagePromises = images.map(img => {
        if (img.complete) {
          return Promise.resolve();
        } else {
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        }
      });
      Promise.all(imagePromises).then(resolve);
    });

    // Wait for both fonts and images to load
    Promise.all([fontLoaded, imageLoaded])
      .then(() => {
        // Remove loading class and set loaded state
        document.body.classList.remove('loading');
        setLoaded(true);
      })
      .catch(() => {
        // If there's an error, we still want to show the content after a timeout
        setTimeout(() => {
          document.body.classList.remove('loading');
          setLoaded(true);
        }, 3000);
      });

    // Cleanup
    return () => {
      document.body.classList.remove('loading');
    };
  }, []);

  return loaded;
}

function App() {
  const resourcesLoaded = useResourcesLoaded();
  
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  if (!resourcesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="speakers" element={
              <div className="container mx-auto px-4 py-8 font-favorit">
                <h1 className="text-4xl font-bold mb-8">Speakers</h1>
                <p className="text-gray-300">Coming soon...</p>
              </div>
            } />
            <Route path="team" element={
              <div className="container mx-auto px-4 py-8 font-favorit">
                <h1 className="text-4xl font-bold mb-8">Our Team</h1>
                <p className="text-gray-300">Coming soon...</p>
              </div>
            } />
            <Route path="sponsors" element={
              <div className="container mx-auto px-4 py-8 font-favorit">
                <h1 className="text-4xl font-bold mb-8">Sponsors</h1>
                <p className="text-gray-300">Coming soon...</p>
              </div>
            } />
            <Route path="about" element={
              <div className="container mx-auto px-4 py-8 font-favorit">
                <h1 className="text-4xl font-bold mb-8">About TEDx 2025</h1>
                <p className="text-gray-300">Coming soon...</p>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
