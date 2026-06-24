"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <section className="min-h-screen bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-[45px] font-semibold text-[#FFFFFF]">
              Latest Blogs
            </h1>
    
          </div>

          {loading ? (
            <div className="text-center text-lg font-medium">
              Loading blogs...
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.slice(0, visibleCount).map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover rounded-xl"
                    />

                    <h2 className="text-2xl font-semibold text-gray-900 mt-4 mb-3">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
                      {blog.content}
                    </p>

                   
<Link href={`/Blog/${blog.id}`}>
  <button className="text-[#FF403A] font-medium hover:underline">
    Read More →
  </button>
</Link>
                  </div>
                ))}
              </div>

              {visibleCount < blogs.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 bg-[#FF403A] text-white rounded-full font-medium hover:bg-[#e33631] transition-all duration-300 cursor-pointer"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

