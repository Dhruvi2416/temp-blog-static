import React, { useEffect, useState } from "react";

export default function TestimonialAndBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BLOG_API = "http://3.7.81.243:3253/api/blog?limit=3";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(BLOG_API);
        const { data } = await res.json();

        const validBlogs = data.filter(
          (blog) =>
            typeof blog === "object" &&
            blog !== null &&
            "name" in blog &&
            "image_url" in blog
        );

        setBlogs(validBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      className=" py-20 px-4 bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/Rectangletestimonial-bg.png')",
      }}
    >
      <div
        className="max-w-6xl mx-auto"
        id="case-studies"
        style={{ scrollMarginTop: 75 }}
      >
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="/assets/user.png"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span className="font-semibold">Josh Brollins</span>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <img
                src="/assets/quote-icon.png"
                alt="Quote"
                className="absolute top-[-12px] left-4 w-6 h-6"
              />
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between mb-8"
          id="blogs"
          style={{ scrollMarginTop: 75 }}
        >
          <h2 className="text-4xl font-bold">Blogs</h2>
          <a className="text-blue-600 font-medium">View All →</a>
        </div>

        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={blog.image_url || "/assets/blog-placeholder.jpg"}
                  alt={blog.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{blog.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">
                    {new Date(blog.createdAt).toLocaleDateString()} by{" "}
                    <span className="text-blue-600">
                      {blog.writer_name || "Unknown"}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {blog.short_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
