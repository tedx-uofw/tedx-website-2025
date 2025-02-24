import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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
  }, []);

  const handleInitialPlay = () => {
    if (!hasInteracted && videoRef.current) {
      setHasInteracted(true);
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!isInView || !videoRef.current) return;

    const initHls = () => {
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferSize: 30 * 1000 * 1000,
          maxBufferLength: 60,
          startLevel: -1,
          debug: false
        });

        hlsRef.current = hls;
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource('/about/hls/TEDxUofW Resonance Promotional Video/master.m3u8');
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.log('Network error, trying to recover...');
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log('Media error, trying to recover...');
                hls.recoverMediaError();
                break;
              default:
                console.error('Fatal error:', data);
                hls.destroy();
                break;
            }
          }
        });

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = '/about/hls/TEDxUofW Resonance Promotional Video/master.m3u8';
        videoRef.current.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
        });
      }
    };

    initHls();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [isInView]);

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
        {isInView && (
          <>
            {!hasInteracted && (
              <button
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/50"
                onClick={handleInitialPlay}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" fill="white"/>
                  </svg>
                </div>
              </button>
            )}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              poster="/about/video-poster.jpg"
              controls={hasInteracted}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default VideoSection; 