export default function FloatingCircles() {
  const circles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {circles.map((_, i) => {
        const size = Math.random() * 200 + 80;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-[#a855f740]/20 blur-2xl animate-float"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
