import { useEffect, useState } from "react";

interface Props {
  text: string[];
  speed?: number;
  pause?: number;
  deleteSpeed?: number;
  className?: string;
}
function TypingText({
  text,
  speed = 100,
  pause = 1000,
  deleteSpeed = 50,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const currentText = text[index % text.length];

    let timeout: ReturnType<typeof setTimeout>;
    if (isPausing) {
      // 🟡 pause entre delete et next phrase
      timeout = setTimeout(() => {
        setIsPausing(false);
      }, 300);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // ✍️ écriture
          const next = currentText.slice(0, displayed.length + 1);
          setDisplayed(next);

          if (next === currentText) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          // ⌫ suppression
          const next = currentText.slice(0, displayed.length - 1);
          setDisplayed(next);

          if (next === "") {
            setIsDeleting(false);
            setIsPausing(true); // 🆕 pause avant nouvelle phrase
            setIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    isPausing,
    index,
    text,
    speed,
    deleteSpeed,
    pause,
  ]);

  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      {displayed}
      <span className="ml-1 inline-block h-[1em] w-[2px] bg-white animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

export default TypingText;
