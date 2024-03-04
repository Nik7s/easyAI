"use client";
import React, { useState, useEffect } from "react";

const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 1000; // Adjust typing speed as needed
  const deleteSpeed = 500; // Adjust delete speed as needed

  useEffect(() => {
    const animateTypewriter = () => {
      const currentWord = words[currentIndex];

      if (!isDeleting) {
        setCurrentText((prevText) =>
          prevText === currentWord
            ? prevText
            : currentWord.substring(0, prevText.length + 1),
        );
      } else {
        setCurrentText((prevText) =>
          prevText.length === 0
            ? ""
            : prevText.substring(0, prevText.length - 1),
        );
      }

      const timeout = isDeleting ? deleteSpeed : typingSpeed;

      const timeoutId = setTimeout(() => {
        if (!isDeleting && currentText === currentWord) {
          setIsDeleting(true);
          setTimeout(() => {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) =>
              prevIndex === words.length - 1 ? 0 : prevIndex + 1,
            );
          }, deleteSpeed);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
        }
      }, timeout);

      return () => clearTimeout(timeoutId);
    };

    animateTypewriter();
  }, [currentText, currentIndex, isDeleting, words]);

  return (
    <h2 className="text-5xl text-easycolor sm:text-6xl md:text-7xl">
      Easy {currentText}
      <span className="cursor-blink">|</span>
    </h2>
  );
};

const MyComponent: React.FC = () => {
  const words: string[] = ["Organize", "Retrieve", "Create", "Delete", "Edit"];

  return <Typewriter words={words} />;
};

export default MyComponent;
