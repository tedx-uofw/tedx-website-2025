import { lazy, Suspense, useState, useEffect } from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import LazySection from '../components/common/LazySection';
import usePageLoad from '../hooks/usePageLoad';

// Lazy-loaded components
const AboutSection = lazy(() => import('../components/HomePage/AboutSection'));
const VideoSection = lazy(() => import('../components/HomePage/VideoSection'));
const ScheduleSection = lazy(() => import('../components/HomePage/ScheduleSection'));
const VenueAndAccessibilitySection = lazy(() => import('../components/HomePage/VenueAndAccessibilitySection'));
const SponsorsSection = lazy(() => import('../components/HomePage/SponsorsSection'));

// Fallback loading component
const LoadingFallback = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  const { coreContentLoaded } = usePageLoad();
  const [animationSequence, setAnimationSequence] = useState(0);

  // Start animation sequence once core content is loaded
  useEffect(() => {
    if (coreContentLoaded) {
      // Start animation sequence with staggered delays
      const timer = setInterval(() => {
        setAnimationSequence(prev => {
          const next = prev + 1;
          if (next > 5) {
            clearInterval(timer);
          }
          return next;
        });
      }, 200);

      return () => clearInterval(timer);
    }
  }, [coreContentLoaded]);

  return (
    <div>
      {/* Hero section is always loaded immediately for best UX */}
      <HeroSection />

      {/* About section with animation delay */}
      <LazySection 
        className="w-full" 
        rootMargin="200px" 
        delay={100} 
        threshold={0.1}
      >
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
      </LazySection>

      {/* Video section */}
      <LazySection 
        className="w-full" 
        rootMargin="200px" 
        delay={150} 
        threshold={0.1}
      >
        <Suspense fallback={<LoadingFallback />}>
          <VideoSection />
        </Suspense>
      </LazySection>

      {/* Schedule section */}
      <div className="relative z-10 mt-[50px]">
        <LazySection 
          className="w-full" 
          rootMargin="200px" 
          delay={200} 
          threshold={0.1}
        >
          <Suspense fallback={<LoadingFallback />}>
            <ScheduleSection />
          </Suspense>
        </LazySection>
      </div>

      {/* Venue section */}
      <LazySection 
        className="w-full" 
        rootMargin="200px" 
        delay={250} 
        threshold={0.1}
      >
        <Suspense fallback={<LoadingFallback />}>
          <VenueAndAccessibilitySection />
        </Suspense>
      </LazySection>

      {/* Sponsors section */}
      <LazySection 
        className="w-full" 
        rootMargin="200px" 
        delay={300} 
        threshold={0.1}
      >
        <Suspense fallback={<LoadingFallback />}>
          <SponsorsSection />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;
