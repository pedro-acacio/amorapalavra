import { useEffect, useState } from "react";

export default function ScrollLine() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50"
      style={{ background: "rgba(85,35,31,0.1)" }}
      aria-hidden="true"
    >
      <div
        className="h-full"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #d8527d, #cf9a4c)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
