import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

const RotatingWord = () => {
  const words = [
    { text: "flexible", className: styles.alizarin },
    { text: "secure", className: styles.emerald },
    { text: "reliable", className: styles.wisteria },
    { text: "scalable", className: styles.peterRiver },
    { text: "modern", className: styles.sunFlower },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const initialRender = useRef(true); // Ref to track initial render

  useEffect(() => {
    const rotateText = () => {
      const currentWord = words[currentWordIndex];
      const nextWordIndex =
        currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
      const nextWord = words[nextWordIndex];

      // Get letters of current and next words
      const currentWordLetters = Array.from(
        document.querySelectorAll(
          `.${styles.word}.${currentWord.className} .${styles.letter}`
        )
      );
      const nextWordLetters = Array.from(
        document.querySelectorAll(
          `.${styles.word}.${nextWord.className} .${styles.letter}`
        )
      );

      // Hide letters of current word one by one
      currentWordLetters.forEach((letter, i) => {
        setTimeout(() => {
          letter.style.opacity = "0";
          letter.style.transform = "translateY(100%)";
        }, i * 50); // Adjust delay as needed
      });

      // Show letters of next word after hiding current word
      setTimeout(() => {
        nextWordLetters.forEach((letter, i) => {
          letter.style.opacity = "0";
          letter.style.transform = "translateY(-100%)";
          setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translateY(0)";
          }, 50 + i * 50); // Adjust delay as needed
        });

        setCurrentWordIndex(nextWordIndex);
      }, currentWordLetters.length * 50 + 50); // Delay after all current word letters have hidden
    };

    // If it's the initial render, start animation immediately
    if (initialRender.current) {
      rotateText();
      initialRender.current = false;
    } else {
      // Otherwise, start the interval for rotating text
      const intervalId = setInterval(rotateText, 4000);

      return () => clearInterval(intervalId);
    }
  }, [currentWordIndex, words]);

  return (
    <span className={styles.rotatingWord}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${styles.word} ${word.className}`}
          style={{ opacity: index === currentWordIndex ? 1 : 0 }}
        >
          {word.text.split("").map((letter, i) => (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default RotatingWord;
