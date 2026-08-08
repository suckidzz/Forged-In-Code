import { useEffect, useRef, useState } from "react";

const directions = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Respect user's reduced motion preference.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenTransform = directions[direction] ?? directions.up;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={`transform transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenTransform} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
