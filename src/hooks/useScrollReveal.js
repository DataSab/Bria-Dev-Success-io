import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once) observer.unobserve(entry.target);
      } else if (!options.once) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${options.distance || '30px'})`,
    transition: `all ${options.duration || 0.8}s cubic-bezier(0.4, 0, 0.2, 1) ${options.delay || 0}s`
  };

  return [elementRef, style];
};
