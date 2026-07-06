"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    slug: "value-stream-management",
    image:
      "/images/blog/uploads/2024/06/Value-Stream-Management-Its-Importance-Albatroz.webp",
    title: "Value Stream Management",
    description:
      "Value Stream Management (VSM) optimizes the flow of value to customers by mapping, analyzing, and improving workflows.",
  },
  {
    slug: "project-management-best-practices",
    image:
      "/images/blog/uploads/2024/06/Project-Management-Best-Practices-Albatroz.webp",
    title: "Project Management Best Practices",
    description:
      "Projects are crucial for an organization's success, especially in competitive industries where rapid execution matters.",
  },
  {
    slug: "what-is-project-portfolio-management",
    image:
      "/images/blog/uploads/2024/02/What-is-Project-Portfolio-Managemnt.webp",
    title: "What is Project Portfolio Management",
    description:
      "Project portfolio management centrally manages an organization's projects to optimize resource allocation and address conflicts.",
  },
  {
    slug: "clarity-16-1-3-key-user-experience-enhancements",
    image:
      "/images/blog/uploads/2023/08/banner2-ezgif.com-jpg-to-webp-converter.webp",
    title: "Clarity 16.1.3 – Key User Experience Enhancements",
    description:
      "Broadcom Clarity 16.1.3 introduces new features around blueprints, visualizations, roadmaps, hierarchies, and OKR management.",
  },
  {
    slug: "running-jasper-report-in-an-html-portlet-with-dynamic-filter-values",
    image: "/images/blog/uploads/2023/06/reports.webp",
    title: "Jasper Report in an HTML Portlet with Dynamic Filters",
    description:
      "Learn how a Jasper report can be run from a PPM dashboard with dynamically set filter parameters.",
  },
];

function BlogSlider() {
  return (
    <section className="w-full overflow-hidden bg-black px-4 pb-10 pt-0">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-[40px]">
            Our <span className="text-[#ff403a]">Blogs</span>
          </h2>
        </div>

        <button
          type="button"
          className="blog-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-2 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-all hover:scale-110 md:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          className="blog-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-2 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-all hover:scale-110 md:flex"
        >
          <ChevronRight size={24} />
        </button>

        <div className="px-1 md:px-14">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            loop
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: ".blog-prev", nextEl: ".blog-next" }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.slug}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                  <div className="h-[220px] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-all duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-white">
                      {blog.title}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
                      {blog.description}
                    </p>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="mt-5 inline-block rounded-lg border border-[#ff403a] px-5 py-2 text-[#ff403a] transition-all duration-300 hover:bg-[#ff403a] hover:text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full bg-[#FF403A] px-8 py-3 font-medium text-white transition hover:opacity-90"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSlider;
