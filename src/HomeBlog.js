import React, { useState, useEffect, useRef } from "react";

function HomeBlog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const buttonRef = useRef(null);

  const additionalBlogs = [
    {
          date: "12. 07. 2025",
      title: "Daily Wellness Routine for Balanced Mind and Healthy Body",
      link: "/BlogH26",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_25.jpg?v=1752318696",
        },

     {
          date: "12. 07. 2025",
      title: "Pan Masala Addiction: Causes, Symptoms, and Herbal Alternatives",
      link: "/BlogH25",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_24.jpg?v=1752318692",
        },

    {
         date: "12. 07. 2025",
      title: "Skin Glow Supplements: How Beauty Gummies Support Clearer, Healthier Skin",
      link: "/BlogH24",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_22.jpg?v=1751981382",
        },

        {
       date: "12. 07. 2025",
      title: "  Herbal Stress Relief Remedies: Natural Ways to Reduce Anxiety and Stay Calm",
      link: "/BlogH23",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_23.jpg?v=1751981381",
        },
    {
         date: "05. 07. 2025",
      title: " How Meditation Can Enhance Your Overall Wellness and Calm Your Mind",
      link: "/BlogH21",
      image: " https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_20.jpg?v=1751719097",
        },

        {
       date: "05. 07. 2025",
      title: " Surprising Reasons You’re Still Tired After 8 Hours of Sleep",
      link: "/BlogH22",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_21.jpg?v=1751719094",
        },
    {
     date: "03. 07. 2025",
      title: " Top 5 Natural Ways to Boost Your Energy and Wellness Every Day",
      link: "/BlogH19",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_18.jpg?v=1751461690 ",
        },

      {
       date: "03. 07. 2025",
      title: " How Harmful Ingredients in Pan Masala Affect Your Health",
      link: "/BlogH20",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_19.jpg?v=1751461688",
        },
    {
      date: "25. 06. 2025",
      title: "Side Effects of Chewing Tobacco: What It’s Really Doing to Your Body",
      link: "/BlogH15",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_15.jpg?v=1750765642 ",
        }, 

      {
       date: "25. 06. 2025",
      title: " How Practicing Gratitude Can Transform Your Emotional and Physical Wellness",
      link: "/BlogH16",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_14.jpg?v=1750765644",
      },

      {
date: "21. 06. 2025",
      title: "Easy Ways to Detox Your Body Naturally at Home",
      link: "/BlogH13",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_13.jpg?v=1750338371"

    },

    {
 date: "21. 06. 2025",
      title: "Stress vs Burnout: How to Tell the Difference and Heal Naturally",
      link: "/BlogH14",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_12.jpg?v=1750338371"
    },
    {
          date: "18. 04. 2025",
          title: "The Power of Mindfulness: How It Can Improve Your Mental and Physical Health",
          link: "/BlogH7",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_5.jpg?v=1744959350",
    },
    {
      date: "18. 04. 2025",
      title: "The Role of Yoga in Holistic Wellness and Overall Health",
      link: "/BlogH18",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_6.jpg?v=1744959349",
    },
    {
      date: "18. 04. 2025",
      title: "Home Workouts That Actually Work: Fitness Without the Gym",
      link: "/BlogH19",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_7.jpg?v=1744959347",
    },
    {
      date: "18. 04. 2025",
      title: "The Gut-Skin Connection: How Your Digestive Health Affects Your Glow",
      link: "/BlogH10",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_9.jpg?v=1744959346",
    },
     {
     date: "18. 04. 2025",
          title: "Unlock the Benefits of Sleep: The Health Hack You Need",
          link: "/BlogH11",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_1.jpg?v=1745575993",
    },
    {
       date: "18. 04. 2025",
          title: "The Effects of Too Much Screen Time on Your Health and How to Fix It",
          link: "/BlogH12",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_2.jpg?v=1745575992",
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
    {
       date: "25. 06. 2025",
      title: "Sattvic Diet: The Underrated Key to Calm, Clear Thinking",
      link: "/BlogH17",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_16.jpg?v=1750919519 ",
    },
    {
       date: "25. 06. 2025",
      title: " Exploring Mental Health Stigma in Today’s Fast-Moving World",
      link: "/BlogH18",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_17.jpg?v=1750919516",

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
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#292929] p-[25px] rounded-xl">
          <div className="order-2 md:order-1">
            <div className="text-[#33cccc] mb-4">{blog.date}</div>
            <h2 className="text-[25px] md:text-4xl text-white font-bold mb-6" style={{fontFamily: "Minionpro"}}>
              {blog.title}
            </h2>
            <a
              href={blog.link}
              className="inline-flex items-center text-[#33cccc] hover:text-white transition-colors" style={{fontFamily: "Minionpro"}}
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
    <div className="min-h-screen bg-[#000] text-[#33cccc]">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-center text-[25px] md:text-[40px] pb-[25px] md:pb-[60px]" style={{fontFamily: "Minionpro"}}>
          Blogs
        </h1>

        {renderBlog({
         date: "15. 07. 2025",
      title: "The Role of Sleep Gummies in Supporting Natural and Restful Sleep",
      link: "/BlogH27",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_26.jpg?v=1752559874",
        }, 0)}

        {renderBlog({
        date: "15. 07. 2025",
      title: "Skin Glow Supplements: How Beauty Gummies Support Clearer, Healthier Skin",
      link: "/BlogH28",
      image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_27.jpg?v=1752559874",
        }, 1)}

        {showMoreBlogs && additionalBlogs.map((blog, index) => renderBlog(blog, index + 2))}

        <div className="flex justify-center my-12" ref={buttonRef}>
          <button
            id="read-more-button"
            onClick={handleToggleBlogs}
            className="relative px-8 py-4 bg-[#33cccc] hover:bg-[#33cccc] text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00c9a7]/30"
          >
            <span className="relative z-10" style={{fontFamily: "Minionpro"}}>{showMoreBlogs ? "Show Less" : "Explore More Articles"}</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomeBlog;
