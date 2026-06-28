import { useEffect, useRef } from "react";

interface Props {
  techs: string[];
}

type Position = {
  x: number;
  y: number;
};

type Velocity = {
  x: number;
  y: number;
};

function FloatingIcons({ techs }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);

  const positions = useRef<Position[]>([]);
  const velocities = useRef<Velocity[]>([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    positions.current = techs.map(() => ({
      x: Math.random() * (width - 60),
      y: Math.random() * (height - 60),
    }));

    velocities.current = techs.map(() => ({
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5,
    }));

    let frameId: number;

    const animate = () => {
      const maxX = container.clientWidth - 60;
      const maxY = container.clientHeight - 60;

      positions.current.forEach((pos, index) => {
        const vel = velocities.current[index];

        vel.x += (Math.random() - 0.5) * 0.001;
        vel.y += (Math.random() - 0.5) * 0.001;

        pos.x += vel.x;
        pos.y += vel.y;

        if (pos.x <= 0) {
          pos.x = 0;
          vel.x *= -1;
        }

        if (pos.x >= maxX) {
          pos.x = maxX;
          vel.x *= -1;
        }
        if (pos.x <= 0) {
          pos.y = 0;
          vel.y *= -1;
        }

        if (pos.y >= maxY) {
          pos.y = maxY;
          vel.y *= -1;
        }

        const element = iconRefs.current[index];

        if (element) {
          element.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${50 / 40})`;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [techs]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {techs.map((tech, index) => (
        <img
          key={`${tech}-${index}`}
          ref={(el) => {
            iconRefs.current[index] = el;
          }}
          src={tech}
          alt=""
          className="absolute w-10 h-10 pointer-events-none will-change-transform blur-[1.5px]"
          style={{
            transform: `scale(${50 / 40})`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingIcons;
