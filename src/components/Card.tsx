import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  id?: string;
  cardTitle?: string;
  cardSubTitle?: React.ReactNode;
  cardImage?: string;
  ctaRedirect?: string;
  ctaMessage?: React.ReactNode;
  cardFooter?: React.ReactNode;
  children: React.ReactNode;
  textExpansion?: boolean;
  pulse?: boolean;
  className?: string;
}
function Card({
  id = "",
  children,
  textExpansion = false,
  pulse = false,
  cardTitle = "",
  cardSubTitle = "",
  cardImage = "",
  ctaRedirect = "",
  ctaMessage = "",
  cardFooter,
  className,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!contentRef.current) return;

      setIsOverflowing(contentRef.current.scrollHeight > 100);
    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div
      className={`${className} flex h-fit flex-col rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] backdrop-blur-xl border border-white/10`}
      id={id}
    >
      {pulse && (
        <div className="absolute inset-0 -z-10 w-full h-full shadow-[rgba(168,85,247,1)] shadow-[0px_0px_150px] animate-pulse rounded-2xl" />
      )}

      {cardImage && (
        <div className="md:aspect-video aspect-3/2 overflow-hidden mb-2 relative">
          <img
            src={cardImage}
            alt="logo"
            className="w-full h-full object-cover rounded-t-lg"
          />
          {ctaRedirect && (
            <a
              className="absolute z-20 top-0 right-0 bg-black/15 w-full h-full px-2 py-1 rounded-t-lg border-2 border-white/50 text-white font-bold flex justify-end items-end lg:text-3xl md:text-2xl sm:text-3xl text-2xl"
              href={ctaRedirect}
              target="_blank"
            >
              {ctaMessage}
            </a>
          )}
        </div>
      )}
      <div
        className={`border-b border-white/50 px-5 ${cardImage ? "pb-2" : "py-3"}`}
      >
        {cardTitle && (
          <h2 className="2xl:text-3xl xl:text-2xl text-xl font-semibold text-white">
            {cardTitle}
            {cardSubTitle && (
              <div className="text-sm text-white/60 max-h-[60px]">
                {cardSubTitle}
              </div>
            )}
          </h2>
        )}
      </div>

      <div className="flex-1 px-5 py-3 overflow-auto text-white sm:text-base text-sm">
        {!textExpansion ? (
          children
        ) : (
          <div className="relative">
            <motion.div
              animate={{
                height: expanded || !isOverflowing ? "auto" : 100,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className={`overflow-hidden
                ${
                  !expanded && isOverflowing
                    ? "[mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
                    : ""
                }`}
            >
              <div
                ref={contentRef}
                className={`text-white whitespace-pre-line ${expanded ? "pb-6" : ""}`}
              >
                {children}
              </div>
            </motion.div>

            {isOverflowing && (
              <button
                onClick={() => setExpanded(!expanded)}
                className={`
                        ${expanded ? "mt-5" : ""}
                        cursor-pointer
                        absolute bottom-0
                        mt-2
                        w-full
                        text-sm
                        font-medium
                        highlight
                        transition-colors
                        hover:text-[#a855f740]
                        flex
                        flex-row
                        justify-center
                    `}
              >
                <motion.div
                  animate={{
                    rotate: expanded ? 180 : 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  ▼
                </motion.div>{" "}
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
      {cardFooter && (
        <div className="border-t border-white/10 md:px-5 py-2">
          {cardFooter}
        </div>
      )}
    </div>
  );
}

export default Card;
