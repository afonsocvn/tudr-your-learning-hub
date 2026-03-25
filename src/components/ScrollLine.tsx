import { useEffect, useRef, useState } from "react";

const ScrollLine = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const onScroll = () => {
      const scrollable = document.querySelector(".hero-scroll-container");
      if (!scrollable) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollable;
      const scrollFraction = scrollTop / (scrollHeight - clientHeight);
      const clampedFraction = Math.min(Math.max(scrollFraction, 0), 1);
      const drawLength = totalLength * (1 - clampedFraction);

      path.style.strokeDashoffset = `${drawLength}`;
    };

    const scrollable = document.querySelector(".hero-scroll-container");
    if (scrollable) {
      scrollable.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    return () => {
      if (scrollable) {
        scrollable.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-30 pointer-events-none"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M 50 0 C 50 20, 30 30, 30 50 S 70 70, 70 100 S 30 130, 30 150 S 50 180, 50 200"
          stroke="hsl(var(--primary))"
          strokeWidth="0.15"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
          style={{
            transition: "stroke-dashoffset 0.08s ease-out",
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollLine;
