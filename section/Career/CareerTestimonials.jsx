"use client";

import TestimonialsSection from "@/component/Testimonials/TestimonialsSection";
import { careerTestimonials } from "./careerTestimonialsData";

export default function CareerTestimonials() {
  return (
    <TestimonialsSection
      testimonials={careerTestimonials}
      eyebrow="Testimonials"
      title="What Our Team Says"
      highlight="About Working Here."
      autoSlideMs={5000}
      sectionClassName="w-full overflow-hidden bg-black px-4 py-10 md:py-20"
    />
  );
}
