"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const BookACallContext = createContext(null);

const defaultSource = {
  buttonLabel: "Book a Call",
  formType: "Popup form",
};

export function BookACallProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [leadSource, setLeadSource] = useState(defaultSource);

  const openBookACall = useCallback((meta = {}) => {
    setLeadSource({
      buttonLabel: meta.buttonLabel || defaultSource.buttonLabel,
      formType: meta.formType || defaultSource.formType,
    });
    setIsOpen(true);
  }, []);

  const closeBookACall = useCallback(() => {
    setIsOpen(false);
  }, []);

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
    <BookACallContext.Provider
      value={{ isOpen, openBookACall, closeBookACall, leadSource }}
    >
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
