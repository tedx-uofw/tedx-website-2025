import { useState, useEffect } from 'react';

/**
 * Hook to track various page loading states
 * @returns {Object} Loading states for different parts of the page
 */
const usePageLoad = () => {
  const [state, setState] = useState({
    domContentLoaded: false,
    windowLoaded: false,
    imagesLoaded: false,
    fontLoaded: false,
    coreContentLoaded: false
  });

  useEffect(() => {
    // Check if DOMContentLoaded has already fired
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      setState(prev => ({ ...prev, domContentLoaded: true }));
    } else {
      // Otherwise, listen for the event
      const domContentLoadedHandler = () => {
        setState(prev => ({ ...prev, domContentLoaded: true }));
      };
      document.addEventListener('DOMContentLoaded', domContentLoadedHandler);
      return () => document.removeEventListener('DOMContentLoaded', domContentLoadedHandler);
    }
  }, []);

  useEffect(() => {
    // Check if window load has already fired
    if (document.readyState === 'complete') {
      setState(prev => ({ ...prev, windowLoaded: true }));
    } else {
      // Otherwise, listen for the event
      const windowLoadHandler = () => {
        setState(prev => ({ ...prev, windowLoaded: true }));
      };
      window.addEventListener('load', windowLoadHandler);
      return () => window.removeEventListener('load', windowLoadHandler);
    }
  }, []);

  // Track font loading
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setState(prev => ({ ...prev, fontLoaded: true }));
      });
    } else {
      // Fallback for browsers without document.fonts
      setTimeout(() => {
        setState(prev => ({ ...prev, fontLoaded: true }));
      }, 1000);
    }
  }, []);

  // Determine when images in viewport are loaded
  useEffect(() => {
    // Only run this after DOM is initially loaded
    if (!state.domContentLoaded) return;

    // Get images that are likely in the viewport
    const aboveTheFoldImages = Array.from(document.querySelectorAll('img'))
      .filter(img => {
        const rect = img.getBoundingClientRect();
        return rect.top < window.innerHeight * 1.5;
      });

    if (aboveTheFoldImages.length === 0) {
      setState(prev => ({ ...prev, imagesLoaded: true }));
      return;
    }

    let loadedCount = 0;
    
    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount >= aboveTheFoldImages.length) {
        setState(prev => ({ ...prev, imagesLoaded: true }));
      }
    };

    aboveTheFoldImages.forEach(img => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
        img.addEventListener('error', checkAllImagesLoaded); // Count errors as "loaded"
      }
    });

    return () => {
      aboveTheFoldImages.forEach(img => {
        img.removeEventListener('load', checkAllImagesLoaded);
        img.removeEventListener('error', checkAllImagesLoaded);
      });
    };
  }, [state.domContentLoaded]);

  // Determine when core content is loaded (critical resources)
  useEffect(() => {
    if (state.domContentLoaded && state.fontLoaded && state.imagesLoaded) {
      setState(prev => ({ ...prev, coreContentLoaded: true }));
    }
  }, [state.domContentLoaded, state.fontLoaded, state.imagesLoaded]);

  return state;
};

export default usePageLoad; 