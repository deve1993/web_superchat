"use client";
import { motion } from "framer-motion";

interface LetterAnimationProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function LetterAnimation({
  text,
  className,
  staggerDelay = 0.02,
}: LetterAnimationProps) {
  const words = text.split(" ");

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.4,
                    ease,
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.1 },
                },
              }}
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </motion.h2>
  );
}
