import { useEffect, useRef } from "react";

const ScrollLine = () => {
  const pathRef = useRef<SVGPathElement>(null);

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
      if (scrollable) scrollable.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 3000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Natural diagonal brush stroke path — top-left to bottom-right with organic curves */}
        <path
          ref={pathRef}
          d="M -20 -10 C 80 120, 150 180, 200 300 S 280 500, 350 650 C 400 780, 320 850, 420 1000 S 550 1200, 500 1350 C 480 1450, 560 1550, 620 1700 S 700 1900, 680 2050 C 660 2150, 740 2300, 800 2450 S 880 2600, 920 2750 C 950 2850, 980 2920, 1020 3010"
          stroke="hsl(var(--primary))"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.08"
          style={{ transition: "stroke-dashoffset 0.08s ease-out" }}
        />
      </svg>
    </div>
  );
};

export default ScrollLine;
