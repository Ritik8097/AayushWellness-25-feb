import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer2 = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [videoSrc, setVideoSrc] = useState(
    "https://cdn.shopify.com/videos/c/o/v/ef92913a3d004ba4bbe7ab21d8d6afe3.mp4"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("https://cdn.shopify.com/videos/c/o/v/your-mobile-video.mp4");
      } else {
        setVideoSrc("https://cdn.shopify.com/videos/c/o/v/ef92913a3d004ba4bbe7ab21d8d6afe3.mp4");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="relative w-full md:h-[80vh] overflow-hidden text-white font-sans">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col h-full p-4 md:p-10">
        <div className="flex flex-col md:flex-row justify-between mb-auto">
          <div className="flex-1 min-w-[300px] mb-8 md:mb-0">
            <h2 className="mb-2 text-xxl font-semibold text-white">Connect With Us</h2>
            <p className="mb-5 text-base md:text-lg max-w-[600px] text-white text-lg">
              Subscribe for 15% off your first order and unlock your inner potential with us.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center max-w-[500px]">
              {!isSubscribed ? (
                <div className="flex w-full rounded-full overflow-hidden border-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="py-4 px-5 flex-grow border-none text-sm text-black outline-none h-[60px]"
                  />
                  <button
                    type="submit"
                    className="bg-white-500 text-white border-none cursor-pointer flex items-center justify-center px-4 h-[60px]"
                  >
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                      <ArrowRight size={18} className="text-green-500" />
                    </div>
                  </button>
                </div>
              ) : (
                <p className="text-green-500">Thanks for subscribing!</p>
              )}
            </form>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:pl-2 md:border-l md:border-white/90">
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium">Company</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><Link to="/about-us" className="text-white no-underline hover:underline font-bold text-[25px]">About Us</Link></li>
                <li className="mb-2"><Link to="/about/company-intro" className="text-white no-underline hover:underline font-bold text-[25px]">Our Story</Link></li>
                <li className="mb-2"><Link to="/career" className="text-white no-underline hover:underline font-bold text-[25px]">Contact Us</Link></li>
                <li><Link to="/about/mission-vision" className="text-white no-underline hover:underline font-bold text-[25px]">Mission & Vision</Link></li>
              </ul>
            </div>
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium">Wellness</h3>
              <ul className="list-none p-0">
              <li><Link to="/wellness/modern-science" className="text-white no-underline hover:underline font-bold text-[25px]">Modern Science</Link></li>
                            <li><Link to="/ayurveda" className="text-white no-underline hover:underline font-bold text-[25px]">Ayurveda</Link></li>
                            <li><Link to="/wellness/health-wellness" className="text-white no-underline hover:underline font-bold text-[25px]">Health & Wellness</Link></li>
                            <h3 className="mb-4 mt-4 text-xxl font-medium">Newsroom</h3>
                            <li><Link to="/newsroom/in-the-news" className="text-white no-underline hover:underline font-bold text-[25px]">In the News</Link></li>
                            <li><Link to="/newsroom/press-release" className="text-white no-underline hover:underline font-bold text-[25px]">Press Release</Link></li>
                            <li><Link to="/newsroom/library" className="text-white no-underline hover:underline font-bold text-[25px]">Library</Link></li>
              </ul>
            </div>
            <div className="min-w-[120px]">
              <h3 className="mb-4 text-xxl font-medium font-bold">Corporate</h3>
              <ul className="list-none p-0">
              <li><Link to="/csr-at-aayush/malnutrition" className="text-white no-underline hover:underline font-bold text-[25px]">Malnutrition</Link></li>
                            <li><Link to="/csr-at-aayush/health-check" className="text-white no-underline hover:underline font-bold text-[25px]">Healthcare Check</Link></li>
                            <li><Link to="/sustainability" className="text-white no-underline hover:underline font-bold text-[25px]">Sustainability</Link></li>
                            <li><Link to="/healthcare" className="text-white no-underline hover:underline font-bold text-[25px]">Healthcare</Link></li>
                            <li><Link to="/growth-accelerator" className="text-white no-underline hover:underline font-bold text-[25px]">Accelarator</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1791px] h-auto md:h-[267px] flex items-center justify-center mx-auto px-4">
          <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/footer_logo.png?v=1741340063" alt="Aayushwellness Logo" className="w-full h-full object-contain" />
        </div>

        <div className="w-full h-px bg-white/30 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 pb-4">
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm text-white mb-2">© 2025 Aayush. All rights reserved.</p>
            <p className="text-sm text-gray-300">Elevating experiences through innovative design and technology.</p>
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-white no-underline hover:underline">Terms</Link>
            <Link to="/privacy-policy" className="text-sm text-white no-underline hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
