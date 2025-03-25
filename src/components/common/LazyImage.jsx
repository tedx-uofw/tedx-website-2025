import { useState, useRef, useEffect } from 'react';

/**
 * LazyImage component that loads images only when they enter the viewport
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.placeholderColor - Background color to show while loading
 * @param {boolean} props.threshold - Intersection observer threshold
 * @param {string} props.rootMargin - Intersection observer root margin
 */
const LazyImage = ({
  src,
  alt = "",
  className = "",
  placeholderColor = "#0C0133",
  threshold = 0.1,
  rootMargin = "100px",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Set up intersection observer to detect when image enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [rootMargin, threshold]);

  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
      }}
      {...props}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoaded}
          loading="lazy"
        />
      )}
      
      {/* Show loading spinner for large images or GIFs that might take time to load */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage; 