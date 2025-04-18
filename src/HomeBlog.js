import React, { useState, useEffect, useRef } from "react";

function HomeBlog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const buttonRef = useRef(null);

  const additionalBlogs = [
    {
      date: "18. 04. 2025",
      title: "Home Workouts That Actually Work: Fitness Without the Gym",
      link: "/BlogH9",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_7.jpg?v=1744959347",
    },
    {
      date: "18. 04. 2025",
      title: "The Gut-Skin Connection: How Your Digestive Health Affects Your Glow",
      link: "/BlogH10",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_9.jpg?v=1744959346",
    },
    {
      date: "01. 03. 2025",
      title: "Nutraceuticals vs. Traditional Supplements: What's the Difference?",
      link: "/nutraceuticals-vs-traditional",
      image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248",
    },
    {
      date: "01. 03. 2025",
      title: "Top 7 Ayurvedic Ingredients to Improve Focus and Mental Clarity.",
      link: "/top-7-ayurvedic-ingredients",
      image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490",
    },
  ];

  const handleToggleBlogs = () => {
    setShowMoreBlogs((prev) => !prev);
  };

  useEffect(() => {
    if (showMoreBlogs && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [showMoreBlogs]);

  const renderBlog = (blog, index) => (
    <React.Fragment key={index}>
      {index > 0 && <div className="border-t border-gray-800 my-8"></div>}
      <article className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#023932] p-[25px] rounded-xl">
          <div className="order-2 md:order-1">
            <div className="text-gray-400 mb-4">{blog.date}</div>
            <h2 className="text-[25px] md:text-4xl text-white font-bold mb-6">
              {blog.title}
            </h2>
            <a
              href={blog.link}
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              Read Post
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-64 md:h-80 object-fill rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );

  return (
    <div className="min-h-screen bg-[#004037] text-white">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-center text-[25px] md:text-[40px] pb-[25px] md:pb-[60px]">
          Blogs
        </h1>

        {renderBlog({
          date: "18. 04. 2025",
          title: "The Power of Mindfulness: How It Can Improve Your Mental and Physical Health",
          link: "/BlogH7",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_5.jpg?v=1744959350",
        }, 0)}

        {renderBlog({
          date: "18. 04. 2025",
          title: "The Role of Yoga in Holistic Wellness and Overall Health",
          link: "/BlogH8",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_6.jpg?v=1744959349",
        }, 1)}

        {showMoreBlogs && additionalBlogs.map((blog, index) => renderBlog(blog, index + 2))}

        <div className="flex justify-center my-12" ref={buttonRef}>
          <button
            id="read-more-button"
            onClick={handleToggleBlogs}
            className="relative px-8 py-4 bg-[#00c9a7] hover:bg-[#00a88a] text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00c9a7]/30"
          >
            <span className="relative z-10">{showMoreBlogs ? "Show Less" : "Explore More Articles"}</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomeBlog;
