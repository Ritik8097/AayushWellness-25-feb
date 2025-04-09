import { useEffect, useState, useRef } from "react"
import Hls from "hls.js"
import NewFooter from "./NewFooter"
import SkeletonLoader from "./SkeletonLoader"
import MissionHeader from "./MissionHeader"

function MissionVision() {
  const [loading, setLoading] = useState(true)
  const desktopVideoRef = useRef(null)
  const mobileVideoRef = useRef(null)

  // Replace with your Cloudinary video URLs (must be .m3u8 format)
  const DESKTOP_VIDEO_URL =
    "https://res.cloudinary.com/dudn5tfkq/video/upload/v1744175630/mission_vision_banner_video_yzjdlo.m3u8"
  const MOBILE_VIDEO_URL =
    "https://res.cloudinary.com/dudn5tfkq/video/upload/v1744176194/mission_vision_banner_video_-_portrait_jergdi.m3u8"

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])

  useEffect(() => {
    if (!loading && Hls.isSupported()) {
      if (desktopVideoRef.current) {
        const hlsDesktop = new Hls()
        hlsDesktop.loadSource(DESKTOP_VIDEO_URL)
        hlsDesktop.attachMedia(desktopVideoRef.current)
      }

      if (mobileVideoRef.current) {
        const hlsMobile = new Hls()
        hlsMobile.loadSource(MOBILE_VIDEO_URL)
        hlsMobile.attachMedia(mobileVideoRef.current)
      }
    }
  }, [loading])

  if (loading) {
    return <SkeletonLoader />
  }

  return (
    <div>
      <style>
        {`
        ::-webkit-scrollbar {
      width: 6px; /* reduce for vertical scrollbar */
      height: 2px; /* reduce for horizontal scrollbar */
    }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #004037;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #004037;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #004037 transparent;
        }

        @keyframes scrollAnimation {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
        }

        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid white;
          border-radius: 20px;
          position: relative;
        }

        .scroll-line {
          position: absolute;
          width: 2px;
          height: 10px;
          background-color: white;
          left: 50%;
          top: 8px;
          transform: translateX(-50%);
          animation: scrollAnimation 1.5s infinite;
        }
      `}
      </style>

      <MissionHeader />

      <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
        {/* Black overlay */}
        <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} />

        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          className="w-full h-full object-cover hidden md:block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="w-full h-full object-cover md:hidden block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center  text-left px-6 md:px-[5vw] z-20 pb-[15vh] md:pb-0">
          <h1
            className="text-white font-semibold"
            style={{
              fontSize: "56px", // Mobile
              lineHeight: "100%",
            }}
          >
            <span className="hidden md:inline" style={{ fontSize: "5.8vw" }}>
              Purpose, Progress, Promise
            </span>
            <span className="md:hidden block">Purpose Progress Promise</span>
          </h1>

          <p
            className="text-white font-medium mt-4"
            style={{
              fontSize: "16px", // Mobile
              lineHeight: "180%",
              maxWidth: "90%",
            }}
          >
            <span className="hidden md:inline" style={{ fontSize: "1.25vw", maxWidth: "38.4vw" }}>
              Bringing the power of Ayurveda and modern science to your everyday health.
            </span>
            <span className="md:hidden block">
              Bringing the power of Ayurveda and modern science to your everyday health.
            </span>
          </p>
        </div>

        {/* Scroll Indicator - Only visible on large screens */}
        <div className="scroll-indicator hidden lg:block">
          <div className="mouse">
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Content */}
      <div className="pt-8 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Mission and Vision</h2>
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold mb-4">Aayush Wellness Mission</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Transforming healthcare and wellness by merging Ayurveda with modern scientific advancements.</li>
                <li>
                  Enhancing well-being through three key initiatives:
                  <ul className="list-disc list-inside pl-6">
                    <li>Combatting tobacco addiction.</li>
                    <li>Providing nutritional supplementation for all.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Combatting Tobacco Addiction</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Addressing the health risks of tobacco addiction by offering herbal alternatives to traditional
                  tobacco products like pan masala and gutka.
                </li>
                <li>
                  Formulating products with Ayurvedic herbs that mimic the tobacco experience without harmful effects.
                </li>
                <li>Supporting individuals in overcoming tobacco addiction and reducing tobacco-related diseases.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Nutritional Supplementation for All</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Tackling malnutrition, especially in vulnerable populations.</li>
                <li>Providing Ayurvedic nutritional supplements that nourish and strengthen those in need.</li>
                <li>
                  Collaborating with NGOs and government schemes to distribute supplements to underserved communities.
                </li>
                <li>
                  Integrating Ayurvedic principles with modern nutritional science to address deficiencies and promote
                  overall health.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Enhancing Healthcare Accessibility</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Making healthcare and wellness accessible regardless of geographical or socioeconomic barriers.</li>
                <li>Educating and inspiring people to take control of their health through comprehensive campaigns.</li>
                <li>Promoting the benefits of Ayurvedic practices and balanced lifestyles.</li>
                <li>
                  Working to improve healthcare infrastructure in collaboration with local health workers and government
                  bodies.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Holistic Approach</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Fostering long-term health, vitality, and balanced lifestyles through a holistic approach.</li>
                <li>Integrating Ayurveda with modern science to offer innovative products and solutions.</li>
                <li>Promoting the benefits of Ayurvedic practices and balanced lifestyles.</li>
                <li>
                  Addressing root causes of health problems, providing comprehensive nutrition, and promoting preventive
                  care.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Aayush Wellness Vision</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Aayush Wellness is rooted in ancient Ayurvedic wisdom combined with modern medical principles.</li>
                <li>
                  The primary vision is to offer a comprehensive approach to health and well-being, merging traditional
                  knowledge with modern scientific advancements.
                </li>
                <li>
                  Aiming to create a balanced, healthy, and sustainable lifestyle for individuals and communities.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Holistic Health Approach</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Health is viewed as a state of complete physical, mental, and spiritual well-being, not just the
                  absence of disease.
                </li>
                <li>
                  Emphasizes the interconnectedness of body, mind, and spirit, with each aspect influencing the others.
                </li>
                <li>Focuses on preventive care and maintaining balance in all aspects of life.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Integrating Ayurveda with Modern Medicine</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Bridges the gap between ancient Ayurvedic practices and modern medical science.</li>
                <li>
                  Fuses individualized treatment plans, natural remedies, and lifestyle changes of Ayurveda with the
                  precision of modern medicine.
                </li>
                <li>Provides treatments that address both symptoms and root causes, promoting long-term health.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Personalized Wellness Plans</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Creates personalized wellness plans tailored to each individual's unique needs.</li>
                <li>Considers factors like lifestyle, dietary habits, mental state, and environmental influences.</li>
                <li>Offers customized solutions that promote balance and well-being at all levels.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Emphasis on Prevention and Sustainability</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Focuses on prevention, emphasizing balanced nutrition, regular physical activity, stress management,
                  and adequate sleep.
                </li>
                <li>Reduces the risk of chronic conditions through a proactive approach.</li>
                <li>
                  Prioritizes sustainability in health practices, using natural, locally-sourced ingredients, and
                  promoting eco-friendly practices.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Community and Global Impact</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Aims to extend its impact to the well-being of communities and the planet.</li>
                <li>Promotes awareness of holistic health practices and sustainable living.</li>
                <li>
                  Seeks collaboration with global health organizations, contributing to the conversation on integrative
                  and preventive medicine.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Innovation and Continuous Learning</h3>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Committed to innovation while staying rooted in tradition.</li>
                <li>
                  Encourages ongoing research into Ayurvedic practices and their integration with modern medicine.
                </li>
                <li>
                  Stays informed about the latest scientific advancements to ensure practices remain relevant and
                  effective.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  )
}

export default MissionVision
