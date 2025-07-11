
import React, { useEffect, useState, useRef } from "react";
import NewFooter from "./NewFooter";
import SkeletonLoader from "./SkeletonLoader";
import MissionHeader from "./MissionHeader";
import Hls from "hls.js";

// Your full press release content as HTML
const pressReleaseBody = `
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, a leading name in India’s integrated healthcare landscape, proudly announces the official launch of ‘Aayush Health’, a state of the art teleconsultation and health records management platform. This marks the company's strategic expansion into India’s rapidly growing $1.62 billion Telemedicine and Healthcare Records Management Market, which is progressing at a robust CAGR of 21.2%.
  </p>
  <p style="margin-bottom: 20px; color: black;">
   The new initiative reinforces Aayush Wellness Limited’s commitment to reshaping access to quality healthcare services, particularly across Tier 2 and Tier 3 cities in India—areas where the availability of healthcare professionals, diagnostic infrastructure, and specialized care remains limited.
  </p>
  <p style="margin-bottom: 20px;">
    <b style="color: black; margin-bottom: 20px;">Bridging Healthcare Gaps with Technology</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
 Aayush Health is available via <a href="https://www.aayush.health" target="_blank" style="color: black; text-decoration: underline;">www.aayush.health</a> and the <b>“Aayush Health”</b> Mobile App (Android & iOS), and is designed to bridge the long-standing divide between patients and medical professionals. By connecting users with qualified doctors virtually, the platform offers on-demand consultations, digital prescriptions, and secure health record management—all from the comfort of one’s home.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    “In a country where geography often limits access to quality healthcare, Aayush Health offers a seamless, affordable, and secure way for people to get the medical attention they need—on time and on demand,” said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p  style="color: black; margin-bottom: 20px;">
    <b>Empowering Patients and Doctors Alike</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    At the core of the Aayush Health platform is empowerment and accessibility—for both patients and doctors.
  </p style="margin-bottom: 20px; color: black;"> 
  <ol style="margin-left:1.5em;">
    <li><b>Patients</b> can review doctor profiles, view specialties, experience levels, ratings, and make informed choices for their healthcare needs.</li>
    <li style="margin-bottom: 20px;"><b>Doctors</b>, whether from urban centers or smaller towns, can empanel themselves on the platform and offer their services across India, removing geographical limitations while expanding their patient reach.</li>
  </ol>
  <p style="margin-bottom: 20px; color: black;">
    <b>Key Features of Aayush Health</b>
  </p>
  <ul>
    <li><b>24x7 Access to Verified Doctors:</b> Across general and specialty care disciplines.</li>
    <li><b>Digital Prescriptions:</b> Instantly available post consultation.</li>
    <li><b>Health Records Management:</b> Track, store, and share health documents securely.</li>
    <li><b>Smart Appointment Scheduling:</b> Enables hassle-free booking and follow-ups.</li>
    <li style="margin-bottom: 20px;"><b>Data Privacy & Security:</b> End-to-end encrypted patient data management.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform ensures an intuitive experience tailored to the Indian context, supporting multiple regional languages, minimal data usage, and simplified onboarding—especially for first-time users and the elderly.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Aligned with India’s Digital Health Vision</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Health is built to support and complement national initiatives like:
  </p>
  <ul style="margin-bottom: 20px; ">
   <b> <li>Ayushman Bharat Digital Mission (ABDM)</li></b>
  <b>  <li>National Digital Health Mission (NDHM)</li></b>
   <b> <li>Unified Health Interface (UHI)</li> </b>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform allows users to create and integrate their ABHA (Ayushman Bharat Health Account) IDs, fostering a more interoperable and accessible healthcare ecosystem. This integration ensures that health records and prescriptions can be universally accepted and shared across hospitals, clinics, and pharmacies—making patients future-ready for India’s digital health transformation.
  </p>
 
`;

// 2nd Press Release Body
const pressReleaseBody2 = `
  <p style="margin-bottom: 20px; color: black;">
    <b>Affordable, Accessible Healthcare Right at Your Doorstep</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, India’s leading integrated healthcare company, proudly announces its strategic expansion into the diagnostic testing, home sample collection, and teleconsultation segments, in line with its mission to make healthcare simple, accessible, and affordable for every Indian household.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    With an already operational and successful primary healthcare center, Aayush Wellness Limited continues to transform the way health services are accessed, by launching a digital-first model that blends convenience, quality, and reliability. The newly introduced services will be available via the Aayush Health website and mobile application designed specifically to help families, working professionals, and senior citizens access essential health services from the comfort of their homes.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Comprehensive Healthcare, Now Simplified</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The new platform will offer a wide range of integrated features and services, including:
  </p>
  <ul style="color: black;">
    <li><b>Diagnostic Testing:</b> Access to a broad spectrum of lab tests such as blood profiles, preventive health panels, and chronic disease monitoring—all at competitive prices and processed through certified labs.</li>
    <li><b>Home Sample Collection:</b> Phlebotomist-enabled doorstep sample collection, ensuring complete comfort and time efficiency, especially for the elderly, differently abled, or those with busy schedules.</li>
    <li><b>Video-Based Teleconsultation:</b> Consult with certified doctors online for general health queries, specialist advice, or chronic condition follow-ups, without the hassle of clinic visits.</li>
    <li><b>Digital Medical Reports:</b> Easy-to-access lab reports, prescriptions, and consultation history delivered securely on the platform’s web and mobile versions.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>Capturing Growth in India’s Booming Diagnostics Market</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    India’s diagnostics market is currently valued at ₹1.11 lakh crores, with a CAGR of 14%, and home sample collection is projected to account for 25–30% of this share in the upcoming year. Recognizing the immense potential and rising consumer demand, Aayush Wellness Limited is strategically positioned to tap into this high-growth vertical by combining user-friendly technology with reliable on-ground service delivery.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    “Our goal is to bring simplicity and reliability to every household where booking a test or consulting a doctor is as easy as ordering groceries online. We’re entering this segment with a focus on affordability, trust, and convenience. This is more than a business expansion—it’s a step towards reshaping everyday healthcare for millions,” said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>An End-to-End Digital Health Ecosystem</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    In today’s fragmented healthcare environment, accessing even the most basic services often means long wait times, confusing logistics, and high costs. With the launch of this initiative, Aayush Wellness Limited eliminates these challenges by offering a unified digital healthcare ecosystem, where:
  </p>
  <ul style="color: black;">
    <li>Patients can book tests online</li>
    <li>Samples are collected from their doorstep</li>
    <li>Doctors consult remotely</li>
    <li>Reports and prescriptions are delivered digitally</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    This integrated solution helps patients save time, avoid unnecessary travel, and receive quality medical care from the safety and convenience of home.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Empowering Proactive Health Management</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness’s digital-first model is not just about convenience, it's about empowering individuals to take control of their health proactively. Whether it’s:
  </p>
  <ul style=" color: black;">
    <li>Chronic condition management,</li>
    <li>Preventive screenings,</li>
    <li>Senior citizen monitoring, or</li>
    <li>Busy professionals delaying checkups due to packed schedules,</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform brings health management directly into users’ lives on-demand and without disruption.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Strategic Fit in a Vertically Integrated Health Ecosystem</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    With this expansion, Aayush Wellness Limited is deepening its ecosystem, now spanning across:
  </p>
  <ul  color: black;">
    <li>Preventive care & diagnostics</li>
    <li>Telemedicine & health record management</li>
    <li>Wellness & herbal nutraceutical products</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    This vertical integration allows the company to serve the complete preventive and wellness journey of its consumers, while improving operational efficiency, risk management, and revenue visibility.
  </p>
`;


const pressReleaseBody3 = `
  <p style="margin-bottom: 20px; color: black;">
    <b>June 09, 2025</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Aayush Wellness Limited to Establish Wholly Owned Subsidiary in Singapore to Accelerate Southeast Asia Expansion</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, India’s leading integrated healthcare and wellness company, is pleased to announce that its Board of Directors has approved the formation of a wholly owned subsidiary in Singapore with an initial capital investment of SGD 10,000.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    This strategic move represents a pivotal milestone in Aayush Wellness Limited’s global growth strategy, enabling the company to tap into the high-potential Southeast Asian wellness and nutraceutical markets, and further expand its international footprint in preventive healthcare, herbal supplements, and functional nutrition.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Strengthening Global Presence Through Singapore</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The newly formed Singapore subsidiary will serve as a regional base to launch and scale the company’s nutraceutical and wellness products across the ASEAN region. Singapore has been identified as an optimal location due to its:
  </p>
  <ul style="color: black;">
    <li>Strong consumer demand for holistic wellness and health supplements</li>
    <li>Business-friendly environment and regulatory clarity</li>
    <li>Robust infrastructure and access to neighboring markets</li>
    <li>Position as a trusted international trade and innovation hub</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    “Our new Singapore-based subsidiary will enable us to tap into one of the world’s most dynamic wellness markets, offering greater agility in operations, regulatory efficiency, and direct access to high-growth ASEAN economies. This is a critical step toward building a global wellness brand,”
    said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Unlocking ASEAN Growth Opportunities</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The Southeast Asian nutraceutical market is witnessing significant growth, projected to reach USD 15.1 billion by 2028, with a CAGR of 7.5%. Factors driving this growth include increasing health awareness, a preference for natural remedies, rising lifestyle diseases, and growing urban populations.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Singapore’s own nutraceutical sector is valued at over USD 1.3 billion, fueled by high health literacy, an aging population, and increasing demand for plant-based and science-backed wellness products. This provides a launchpad for Aayush Wellness Limited to expand into neighboring markets such as:
  </p>
  <ul style="color: black;">
    <li>Malaysia</li>
    <li>Indonesia</li>
    <li>Thailand</li>
    <li>Vietnam</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>Core Objectives of the Singapore Subsidiary</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The formation of the subsidiary is not just an operational extension, it is a strategic investment in regional innovation and distribution. Key focus areas will include:
  </p>
  <ul style="color: black;">
    <li>Localization of Product Offerings: Tailoring formulations to meet regional consumer preferences and regulatory guidelines.</li>
    <li>Strategic Alliances: Building partnerships with regional distributors, e-commerce platforms, and wellness retailers.</li>
    <li>Export-Led Growth: Driving exports from India while expanding global brand presence.</li>
    <li>Innovation & R&D Hub: Establishing a regional research center to align with local wellness trends and develop new product pipelines.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>In Line with Aayush Wellness Limited’s Global Vision</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The expansion into Singapore supports Aayush Wellness Limited’s long-term mission of delivering science-backed, sustainable, and natural healthcare solutions to global consumers. The company’s broader vision is to become a trusted international name in herbal, preventive, and functional wellness, while also promoting Indian formulations and innovations to the world stage.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    This move complements Aayush Wellness’s diversified operations across:
  </p>
  <ul style=" color: black;">
    <li>Primary healthcare services</li>
    <li>Diagnostics & teleconsultation</li>
    <li>Nutraceuticals & herbal formulations</li>
    <li>Digital health platforms</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>About Aayush Wellness Limited</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Headquartered in New Delhi, the company focuses on bridging the gap between traditional wellness and modern healthcare through products and services that are effective, affordable, and rooted in nature and science.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    From herbal masalas and health supplements to digital-first diagnostic and telemedicine platforms, Aayush Wellness Limited is actively shaping the future of preventive health in India and beyond.
  </p>
`;

const pressReleases = [
  {
    id: 1,
    name: "Aayush Wellness Enters $1.62 Billion Telemedicine Market with the Launch of Aayush Health Platform",
    url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/63aed704-65fa-4a90-b496-87da8bf457ee.pdf?v=1752142566",
    date: "2025-07-01",
    year: 2025,
    type: "Announcement",
    body: pressReleaseBody,
  },
  {
    id: 2,
    name: "Aayush Wellness Limited Expands into Diagnostic Testing and Teleconsultation Services",
    url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/PR-_20.06.25.pdf?v=1752210983",
    date: "2025-06-20",
    year: 2025,
    type: "Announcement",
    body: pressReleaseBody2,
    
  },
  {
  id: 3,
  name: "Aayush Wellness Limited to Establish Wholly Owned Subsidiary in Singapore to Accelerate Southeast Asia Expansion",
  url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/June_09.25.pdf?v=1752210981", 
  date: "2025-06-09",
  year: 2025,
  type: "Announcement",
  body: pressReleaseBody3,
},
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return (
    date.toLocaleString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
     
    })
  );
}
function getAllYears(list) {
  return Array.from(new Set(list.map((pr) => pr.year))).sort((a, b) => b - a);
}
function getAllTypes(list) {
  return Array.from(new Set(list.map((pr) => pr.type))).sort();
}

// Custom hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

function PressReleaseSection() {
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({ year: "", type: "", name: "" });
  const isMobile = useIsMobile();

  // Filter logic
  const filtered = pressReleases.filter((pr) => {
    const matchesYear = filters.year ? pr.year.toString() === filters.year : true;
    const matchesType = filters.type ? pr.type === filters.type : true;
    const matchesName = filters.name
      ? pr.name.toLowerCase().includes(filters.name.toLowerCase())
      : true;
    return matchesYear && matchesType && matchesName;
  });

  // Auto-select first item if none selected and list is not empty (desktop only)
  useEffect(() => {
    if (!isMobile && !selected && filtered.length > 0) setSelected(filtered[0]);
    if (!isMobile && selected && !filtered.find((pr) => pr.id === selected.id)) setSelected(filtered[0] || null);
    // eslint-disable-next-line
  }, [filters, filtered.length, isMobile]);

  // On mobile, if filters change, deselect
  useEffect(() => {
    if (isMobile) setSelected(null);
  }, [filters.year, filters.type, filters.name, isMobile]);

  return (
    <div className="container mx-auto px-0 md:px-4 py-8 flex flex-col md:flex-row gap-0 md:gap-8 max-w-7xl min-h-[80vh] md:h-[80vh]">
      {/* Left: Filters + List (sticky, never scrollable, hidden on mobile if content is open) */}
      <div
        className={`
          md:w-1/3 w-full md:pr-4 mb-0 md:mb-0
          ${isMobile && selected ? "hidden" : ""}
        `}
      >
        <div className="md:sticky md:top-8 px-4 md:px-0">
          <div className="flex gap-4 mb-4 flex-col sm:flex-row">
            {/* Year Dropdown */}
            <select
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <option value="">All Years</option>
              {getAllYears(pressReleases).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {/* Release Type Dropdown */}
            <select
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Releases</option>
              {getAllTypes(pressReleases).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* List */}
          <div>
            {filtered.length === 0 && <div>No press releases found.</div>}
            {filtered.map((pr) => (
              <div key={pr.id} className="mb-6">
                <div className="text-gray-600 text-sm mb-[1.24rem]">{formatDate(pr.date)}</div>
                <button
                  className={`
                    text-black font-medium text-lg text-left
                    hover:underline hover:decoration-black
                    ${selected?.id === pr.id ? "font-bold underline decoration-black" : ""}
                  `}
                  onClick={() => setSelected(pr)}
                  style={{ lineHeight: "1.2" }}
                >
                  {pr.name}
                </button>
                <hr className="my-4 border-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Content (scrollable on desktop, centered on mobile) */}
      <div
        className={`
          flex-1
          ${isMobile && selected ? "w-full" : "md:w-2/3 md:pl-4"}
          ${isMobile ? "" : "h-[80vh] overflow-y-auto"}
        `}
      >
        {selected ? (
          <div
            className={`
              bg-white
              ${isMobile ? "mx-auto max-w-md px-8 py-8" : "px-0 py-0"}
              pb-8
              rounded-lg
              shadow-none
              flex flex-col justify-center
            `}
            style={{
              ...(isMobile
                ? { minHeight: "60vh", display: "flex", justifyContent: "center" }
                : {}),
            }}
          >
            {/* Back button for mobile */}
            {isMobile && (
              <button
                className="mb-4 text-black underline font-medium"
                onClick={() => setSelected(null)}
              >
                ← Back to Press Release
              </button>
            )}
            <h1 className=" md:text-4xl font-bold text-black mb-2 sm:text-sm" style={{ lineHeight: "1.1" }}>
              {selected.name}
            </h1>
            <div className="text-gray-600 mb-4">{formatDate(selected.date)}</div>
            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center mb-6"
              download
            >
              <span className="material-icons mr-1"></span>
              Download as PDF
            </a>
            <div
              className="text-black text-lg"
              style={{ lineHeight: "1.7" }}
              dangerouslySetInnerHTML={{ __html: selected.body }}
            />
          </div>
        ) : (
          <div className="text-gray-500 text-xl mt-20 px-4 md:px-0">Select a press release to view its content.</div>
        )}
      </div>
    </div>
  );
}

function PressReleases() {
  const [loading, setLoading] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const DESKTOP_VIDEO_URL =
    "https://res.cloudinary.com/da2qlhv5l/video/upload/v1751522019/ur6urwkotb4kl7r4twfq_isfb2b.m3u8";
  const MOBILE_VIDEO_URL =
    "https://res.cloudinary.com/da2qlhv5l/video/upload/v1751522011/eb4kqbvu48fawrrfixap_utkyxp.m3u8";

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  useEffect(() => {
    if (!loading && Hls.isSupported()) {
      if (desktopVideoRef.current) {
        const hlsDesktop = new Hls();
        hlsDesktop.loadSource(DESKTOP_VIDEO_URL);
        hlsDesktop.attachMedia(desktopVideoRef.current);
      }
      if (mobileVideoRef.current) {
        const hlsMobile = new Hls();
        hlsMobile.loadSource(MOBILE_VIDEO_URL);
        hlsMobile.attachMedia(mobileVideoRef.current);
      }
    }
  }, [loading]);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MissionHeader />

      {/* --- Video Hero Section --- */}
      <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
        {/* Black overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />

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
              fontSize: "56px",
              lineHeight: "100%",
            }}
          >
            <span
              className="font-rogbold hidden md:inline"
              style={{ fontSize: "5.8vw", fontFamily: "ROGBold" }}
            >
              Our Press Releases
            </span>
            <span
              className="font-rogbold md:hidden block"
              style={{ fontFamily: "ROGBold" }}
            >
              Our Press Releases
            </span>
          </h1>

          <p
            className="text-white font-medium mt-4"
            style={{
              fontSize: "16px",
              lineHeight: "180%",
              maxWidth: "90%",
            }}
          >
            <span
              className="font-minion hidden md:inline"
              style={{ fontSize: "1.25vw", maxWidth: "38.4vw", fontFamily: "Minionpro" }}
            >
              Stay updated with our latest announcements and milestones
            </span>
            <span className="font-minion md:hidden block" style={{ fontFamily: "Minionpro" }}>
              Stay updated with our latest announcements and milestones
            </span>
          </p>
        </div>
      </div>

      {/* --- Press Release Section --- */}
      <div className="flex-1 bg-white">
        <PressReleaseSection />
      </div>

      {/* --- Footer --- */}
      <NewFooter />
    </div>
  );
}

export default PressReleases;
