import { useRef, useState, useEffect } from 'react';

/**
 * LazySection - A component that lazy loads its children and adds a fade-in effect
 * when it enters the viewport.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be lazy loaded
 * @param {string} props.className - Additional classes for the container
 * @param {string} props.rootMargin - Margin around the root
 * @param {number} props.threshold - Intersection threshold
 * @param {number} props.delay - Delay before fade-in animation starts (ms)
 * @param {number} props.duration - Duration of the fade-in animation (ms)
 */
const LazySection = ({ 
  children, 
  className = "", 
  rootMargin = "100px", 
  threshold = 0.1,
  delay = 0,
  duration = 600,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Once visible, start animation after delay
          if (!hasAnimated) {
            setTimeout(() => {
              setHasAnimated(true);
            }, delay);
          }
          
          // Unobserve after becoming visible
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin,
        threshold
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, delay, hasAnimated]);

  const animationStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-out`,
    opacity: hasAnimated ? 1 : 0,
    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
  };

  return (
    <div 
      ref={sectionRef} 
      className={className}
      style={animationStyle}
      {...props}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default LazySection; 