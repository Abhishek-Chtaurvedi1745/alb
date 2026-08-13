"use client";

import { useBookACall } from "./BookACallContext";
import { extractButtonLabel } from "@/lib/formSource";

export default function BookACallButton({
  children = "Book a Call",
  className = "",
  type = "button",
  onClick,
  buttonLabel,
  formType = "Popup form",
  ...props
}) {
  const { openBookACall } = useBookACall();
  const resolvedLabel = buttonLabel || extractButtonLabel(children);

  return (
    <button
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openBookACall({
            buttonLabel: resolvedLabel,
            formType,
          });
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
