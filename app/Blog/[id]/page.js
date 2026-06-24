import Link from "next/link";



async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page({ params }) {
  const { id } = await params;

  const blogs = await getBlogs();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Blog Not Found
      </div>
    );
  }

  const similarBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 5);

  return (
    <>
    <section className="bg-[#000000] py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className=" flex justify-between  gap-8">

          
          <div className="  shadow-lg rounded-[30px]">

            {/* Blog Image */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] rounded-[30px] "
              />

              <div className="absolute top-5 left-5">
              </div>
            </div>

            {/* Content */}
            {/* Content */}
<div className="p-6 md:p-10">

  {/* Meta */}
  <div className="flex flex-wrap items-center gap-4 mb-6">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-[#FF403A] text-white flex items-center justify-center font-bold">
        A
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Admin
        </h4>

        <p className="text-sm text-[#FFFFFF]">
          June 2026
        </p>
      </div>
    </div>

    <div className="h-8 w-px bg-gray-600"></div>

    <span className="text-[#FFFFFF]">
      5 Min Read
    </span>
  </div>

  {/* Title */}
  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
    {blog.title}
  </h1>

  {/* Intro */}
  <div className="bg-[#fff4f3] border border-[#ffd2cf] rounded-2xl p-6 mb-10">
    <p className="text-[#FFFFFF] text-lg leading-8">
      {blog.content}
    </p>
  </div>

</div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Similar Blogs */}
            <div className="w-full  rounded-[30px] shadow-lg p-6 sticky top-6">
             

              <div className="space-y-10">
                {similarBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/Blog/${item.id}`}
                    className="group block"
                  >
                    <div className="flex gap-6 my-6">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 rounded-xl  flex-shrink-0"
                      />

                      <div className="flex items-center">
                        <div>
                        
                        <h4 className="font-semibold text-[#FFFFFF] group-hover:text-[#FF403A] transition duration-300 line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-sm  text-[#FFFFFF] mt-0 line-clamp-2">
                          {item.content}
                        </p>
                      </div>
                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}