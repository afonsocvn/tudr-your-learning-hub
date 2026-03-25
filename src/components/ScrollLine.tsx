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
    <div className="fixed inset-0 z-30 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M 50 0 C 55 30, 35 50, 40 80 S 60 110, 55 140 S 35 170, 40 200 S 65 230, 58 260 S 38 290, 42 320 S 62 350, 55 380 S 35 410, 42 440 S 60 470, 52 500 S 40 530, 48 560 S 55 580, 50 600"
          stroke="hsl(var(--primary))"
          strokeWidth="0.12"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
          style={{ transition: "stroke-dashoffset 0.06s ease-out" }}
        />
      </svg>
    </div>
  );
};

export default ScrollLine;
