import { useEffect, useRef } from "react";

const ScrollLine = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const scrollable = document.querySelector(".hero-scroll-container");
    if (!path || !scrollable) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;

    const onScroll = () => {
      const firstSection = document.querySelector(".hero-brush-section");
      if (!firstSection) return;

      const maxScroll = firstSection.clientHeight * 0.95;
      const progress = Math.min(Math.max(scrollable.scrollTop / maxScroll, 0), 1);
      const eased = 1 - Math.pow(1 - progress, 1.6);
      path.style.strokeDashoffset = `${totalLength * (1 - eased)}`;
    };

    path.style.strokeDashoffset = `${totalLength}`;
    scrollable.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      scrollable.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M 80 120 C 160 180, 250 260, 330 360 S 470 520, 560 620 S 700 760, 840 900"
          stroke="hsl(var(--primary))"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.22"
          style={{ transition: "stroke-dashoffset 0.12s ease-out" }}
        />
      </svg>
    </div>
  );
};

export default ScrollLine;
