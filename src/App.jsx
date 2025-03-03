import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState, Suspense } from 'react'
import Lenis from '@studio-freight/lenis'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import SpeakerPage from "./pages/Speakers/SpeakerPage";
import Sponsors from './pages/Sponsors/Sponsors';
import About from './pages/About';

import Team from './pages/Team/Team'

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

export const lenis = new Lenis()
function App() {
  const resourcesLoaded = useResourcesLoaded();
  
  useEffect(() => {
    lenis.start();
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.stop()
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
              <SpeakerPage/>
            } />
            <Route path="team" element={
              <Team />
            } />
            <Route path="sponsors" element={
              <Sponsors/>
            } />
            <Route path="about" element={
              <About/>
            } />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
