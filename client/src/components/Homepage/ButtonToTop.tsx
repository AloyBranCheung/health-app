import React, { useState, useEffect, useCallback } from "react";

export default function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const buttonIsVisible = useCallback(() => {
    const currentPos = window.pageYOffset;

    if (prevScrollPos > currentPos) {
      setIsVisible(true);
    } else if (prevScrollPos < currentPos) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setPrevScrollPos(currentPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", buttonIsVisible);
    return () => {
      window.removeEventListener("scroll", buttonIsVisible);
    };
  });

  return (
    <a
      href="#home"
      className={`fixed right-5 bottom-10 transition-all duration-500  ${
        !isVisible ? `opacity-100` : "opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-mainFontColor"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
