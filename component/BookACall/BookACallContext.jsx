"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const BookACallContext = createContext(null);

export function BookACallProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookACall = useCallback(() => setIsOpen(true), []);
  const closeBookACall = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeBookACall();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeBookACall]);

  return (
    <BookACallContext.Provider value={{ isOpen, openBookACall, closeBookACall }}>
      {children}
    </BookACallContext.Provider>
  );
}

export function useBookACall() {
  const context = useContext(BookACallContext);
  if (!context) {
    throw new Error("useBookACall must be used within BookACallProvider");
  }
  return context;
}
