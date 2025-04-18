import React, { useState, useEffect, useRef } from "react"

function HomeBlog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false)
  const readMoreButtonRef = useRef(null)

  // Scroll after showing more blogs
  useEffect(() => {
    if (showMoreBlogs && readMoreButtonRef.current) {
      // Wait for DOM update before scrolling
      const scrollToButton = () => {
        window.scrollTo({
          top: readMoreButtonRef.current.offsetTop - 20,
          behavior: "smooth",
        })
      }

      // Wait for next tick to allow DOM rendering
      requestAnimationFrame(() => {
        setTimeout(scrollToButton, 100)
      })
    }
  }, [showMoreBlogs])

  const additionalBlogs = [
    {
      date: "18. 04. 2025",
      title: "The Science Behind Adaptogenic Herbs and Stress Management",
      link: "/Blog1",
      image:
        "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248",
    },
    {
      date: "18. 04. 2025",
      title: "How Modern Lifestyle Affects Cognitive Performance and What to Do About It",
      link: "/Blog1",
      image:
        "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490",
    },
    {
      date: "18. 04. 2025",
      title: "The Connection Between Gut Health and Mental Clarity",
      link: "/Blog1",
      image:
        "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248",
    },
    {
      date: "18. 04. 2025",
      title: "Natural Nootropics: Enhancing Brain Function Without Side Effects",
      link: "/Blog1",
      image:
        "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490",
    },
  ]

  const handleToggleBlogs = () => {
    document.body.style.overflow = "auto"
    document.body.style.height = "auto"
    setShowMoreBlogs(!showMoreBlogs)
  }

  return (
    <div className="min-h-screen bg-[#000] text-white">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1
          className="text-center text-[25px] md:text-[40px] pb-[25px] md:pb-[60px]"
          style={{ fontFamily: "ROGBold" }}
        >
          Blogs
        </h1>

        {/* Blog 1 */}
        <article className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#3c3c3c] p-[25px] rounded-xl">
            <div className="order-2 md:order-1">
              <div className="text-[#33cccc] mb-4" style={{ fontFamily: "Minionpro" }}>
                01. 03. 2025
              </div>
              <h2
                className="text-[25px] md:text-4xl text-white font-bold mb-6"
                style={{ fontFamily: "Minionpro" }}
              >
                Nutraceuticals vs. Traditional Supplements: What's the Difference?
              </h2>
              <a
                href="/nutraceuticals-vs-traditional"
                className="inline-flex items-center text-white hover:text-[#33cccc] transition-colors"
                style={{ fontFamily: "Minionpro" }}
              >
                Read Post
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248"
                alt="Green moss on rocks"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </article>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Blog 2 */}
        <article className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#3c3c3c] p-[25px] rounded-xl">
            <div className="order-2 md:order-1">
              <div className="text-[#33cccc] mb-4" style={{ fontFamily: "Minionpro" }}>
                01. 03. 2025
              </div>
              <h2
                className="text-[25px] md:text-4xl text-white font-regular mb-6"
                style={{ fontFamily: "Minionpro" }}
              >
                Top 7 Ayurvedic Ingredients to Improve Focus and Mental Clarity.
              </h2>
              <a
                href="/top-7-ayurvedic-ingredients"
                className="inline-flex items-center text-white hover:text-[#33cccc] transition-colors"
                style={{ fontFamily: "Minionpro" }}
              >
                Read Post
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490"
                alt="Formula 1 team member"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </article>

        {/* Read All Blogs Button */}
        <div className="flex justify-center my-12">
          <button
            ref={readMoreButtonRef}
            id="read-more-button"
            onClick={handleToggleBlogs}
            className="glow-button relative px-8 py-4 bg-[#33cccc] hover:bg-[#2aa8a8] text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#33cccc]/30"
            style={{ fontFamily: "Minionpro" }}
          >
            <span className="relative z-10">
              {showMoreBlogs ? "Show Less" : "Read All Blogs"}
            </span>
          </button>
        </div>

        {/* Additional Blogs */}
        {showMoreBlogs && (
          <div className="additional-blogs">
            {additionalBlogs.map((blog, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="border-t border-gray-800 my-8"></div>}
                <article className="mb-16 md:mb-24">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-[#3c3c3c] p-[25px] rounded-xl">
                    <div className="order-2 md:order-1">
                      <div
                        className="text-[#33cccc] mb-4"
                        style={{ fontFamily: "Minionpro" }}
                      >
                        {blog.date}
                      </div>
                      <h2
                        className="text-[25px] md:text-4xl text-white font-regular mb-6"
                        style={{ fontFamily: "Minionpro" }}
                      >
                        {blog.title}
                      </h2>
                      <a
                        href={blog.link}
                        className="inline-flex items-center text-white hover:text-[#33cccc] transition-colors"
                        style={{ fontFamily: "Minionpro" }}
                      >
                        Read Post
                      </a>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-64 md:h-80 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default HomeBlog
