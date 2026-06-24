"use client";

import TestimonialsSection from "@/component/Testimonials/TestimonialsSection";
import { homeTestimonials } from "./homeTestimonialsData";

export default function HomeTestimonials() {
  return (
    <TestimonialsSection
      testimonials={homeTestimonials}
      eyebrow="Testimonials"
      title="What our clients say"
      highlight="About Us."
      autoSlideMs={5000}
      sectionClassName="w-full overflow-hidden bg-black px-4 py-10 pt-0 md:pt-20"
    />
  );
}
