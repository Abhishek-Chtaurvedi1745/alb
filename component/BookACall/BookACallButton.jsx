"use client";

import { useBookACall } from "./BookACallContext";

export default function BookACallButton({
  children = "Book a Call",
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const { openBookACall } = useBookACall();

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openBookACall();
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
