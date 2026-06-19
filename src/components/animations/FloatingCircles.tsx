import { useEffect, useState, useMemo } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

export default function FloatingCircles() {
  const circles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 80,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 6,
    }));
  }, []);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const stars: Star[] = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  useEffect(() => {
    let raf: number;

    const handleMouse = (e: MouseEvent) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        setMouse({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        });
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const animatedStars = useMemo(() => {
    return stars.map((star) => {
      let x = star.x + star.vx;
      let y = star.y + star.vy;

      if (x > 100) x = 0;
      if (x < 0) x = 100;
      if (y > 100) y = 0;
      if (y < 0) y = 100;

      return { ...star, x, y };
    });
  }, [stars]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="fixed inset-0 opacity-30"
        style={{
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="fixed inset-0">
        {animatedStars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-[twinkle_3s_ease-in-out_infinite] [will-change:transform]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)`,
              animationDelay: `${(star.id % 10) * 0.3}s`,
              animationDuration: `${2.5 + (star.id % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>
      {circles.map((c) => {
        return (
          <div
            key={c.id}
            className="absolute rounded-full bg-[#a855f740]/20 blur-2xl animate-[drift_20s_linear_infinite] [will-change:transform]"
            style={{
              width: c.size,
              height: c.size,
              top: `${c.top}%`,
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
