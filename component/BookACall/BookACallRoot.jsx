"use client";

import { BookACallProvider } from "./BookACallContext";
import BookACallModal from "./BookACallModal";
import FloatingContactAction from "@/component/FloatingContact/FloatingContactAction";

export default function BookACallRoot({ children }) {
  return (
    <BookACallProvider>
      {children}
      <BookACallModal />
      <FloatingContactAction />
    </BookACallProvider>
  );
}
