import { useState, useRef, useEffect } from 'react';
import { LazyImage } from '../common';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const sectionRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // Pause video when out of view
        if (!entry.isIntersecting && playerRef.current && isPlayerReady) {
          playerRef.current.pauseVideo();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isPlayerReady]);

  useEffect(() => {
    if (hasInteracted) return;

    // Initialize player when API is ready
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'uRJ6P51vHHI',
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            setIsLoading(false);
            setIsPlayerReady(true);
          },
        }
      });
    };

    // If API is already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    // Setup callback for when API is ready
    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    // Add script to page
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [hasInteracted]);

  const handleInitialPlay = () => {
    if (!hasInteracted && playerRef.current) {
      setHasInteracted(true);
      playerRef.current.playVideo();
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#080808] w-full"
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#080808] z-20">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Container */}
      <div className="relative w-full max-w-[2000px] mx-auto aspect-video">
        <>
          {!hasInteracted && (
            <div className="absolute inset-0 z-10">
              <LazyImage 
                src="/about/video-poster2.png" 
                alt="Video thumbnail" 
                className="w-full h-full"
                placeholderColor="#080808"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/50"
                onClick={handleInitialPlay}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
          )}
          <div className={`w-full h-full ${!hasInteracted ? 'invisible' : ''}`}>
            <div id="youtube-player" className="w-full h-full"></div>
          </div>
        </>
      </div>
    </section>
  );
};

export default VideoSection; 