import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  className = "",
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor Blink Effect - nur wenn wir im Wartezustand sind
  useEffect(() => {
    let cursorInterval: NodeJS.Timeout;

    if (isWaiting) {
      cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);
    } else {
      setShowCursor(true); // Cursor immer sichtbar während des Schreibens/Löschens
    }

    return () => clearInterval(cursorInterval);
  }, [isWaiting]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length === currentWord.length) {
          setIsWaiting(true);
        }
      }
    };

    timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : isWaiting ? delayBetweenWords : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    isWaiting,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      {text}
      <span style={{ opacity: showCursor ? 1 : 0 }} className="ml-[2px]">
        |
      </span>
    </span>
  );
};

const styles = `
  @keyframes cursor-blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

// Füge die Styles zum document head hinzu
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
