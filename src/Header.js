
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import menu from './images/menu.png';
import closepng from './images/close.png';
import searchIcon from './images/search-gray.svg'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAyurvedaDropdownOpen, setIsAyurvedaDropdownOpen] = useState(false);
  const [isWellnessDropdownOpen, setIsWellnessDropdownOpen] = useState(false);
  const [isNewsroomDropdownOpen, setIsNewsroomDropdownOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false); // Added state for "About Us"
  const [isCsrSubcategoryOpen, setIsCsrSubcategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // Added state for CSR subcategories
   const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false);
  

  const AyurvedaDropdownRef = useRef(null);
  const WellnessDropdownRef = useRef(null);
  const NewsroomDropdownRef = useRef(null);
  const AboutUsDropdownRef = useRef(null); // Added ref for "About Us"
  const CsrDropdownRef = useRef(null); // Added ref for CSR
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAyurvedaDropdown = () => {
    setIsAyurvedaDropdownOpen(!isAyurvedaDropdownOpen);
    toggleIcon('svg', 'svg4');
  };

  const toggleWellnessDropdown = () => {
    setIsWellnessDropdownOpen(!isWellnessDropdownOpen);
    toggleIcon('svg', 'svg2');
  };

  const toggleNewsroomDropdown = () => {
    setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen);
    toggleIcon('svg1', 'svg3');
  };

  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen);
    toggleIcon('svg5', 'svg6');
  };

  const toggleCsrSubcategory = () => { // Added toggle function for CSR subcategories
    setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen);
    toggleIcon('svg7', 'svg8');
  };

  const handleDropdownLinkClick = () => {
    setIsAyurvedaDropdownOpen(false);
    setIsWellnessDropdownOpen(false);
    setIsNewsroomDropdownOpen(false);
    setIsAboutUsDropdownOpen(false); // Close "About Us" dropdown when a link is clicked
    setIsCsrSubcategoryOpen(false);
    setIsSearchOpen(false); // Close CSR subcategories when a link is clicked
  };

  const toggleIcon = (iconIdToToggle, iconIdToToggleOther) => {
    var iconToToggle = document.getElementById(iconIdToToggle);
    var iconToToggleOther = document.getElementById(iconIdToToggleOther);
    if (iconToToggle && iconToToggleOther) {
      iconToToggle.classList.toggle('svg');
      iconToToggleOther.classList.toggle('svg');
    }
  };

  return (
    <>
      
      <nav className=" text-[rgb(112, 112, 112)] bg-white f font-serif" style={{ fontFamily: '"Source Serif 4", sans-serif',  fontWeight: 'bold', fontSize: 'clamp(0.875rem, 0.9rem + 0.2667vw, 1.125rem)' }}>
        <div className="max-w-[109rem] mx-auto px-4">
          <div className="flex justify-between md:justify-between items-center h-auto">
            <div className="flex items-center">
              <Link to="/">
                <img className="md:h-[5.7rem] h-[4rem] md:pt-3 md:pb-3" src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" alt="logo" />
              </Link>
            </div>
            <div className="hidden gap-4 md:flex space-x-4  text-[20px] font-[500]">
              <Link to="/" className=" hover:text-primary/80">Home</Link>

              
             
              <div className="navbar-dropdown relative">
                <button className=" hover:text-primary/80 flex items-center">
                  About Us
                  <svg  className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="navbar-dropdown-content bg-white  w-48 shadow-lg rounded-lg">
                 
                  <Link to="/about/company-intro" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Our Story</Link>
                  <Link to="/about-us" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>About</Link>
                  <Link to="/about/mission-vision" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Mission & Vision</Link>
                </div>
              </div>




              <div className="navbar-dropdown relative">
                <button className=" hover:text-primary/80 flex items-center">
                  Wellness & You
                  <svg className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="navbar-dropdown-content bg-white  w-48 shadow-lg rounded-lg">
                  <Link to="/wellness/modern-science" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Modern Science</Link>
                  <Link to="/ayurveda" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Ayurveda</Link>
                  <Link to="/wellness/health-wellness" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Health & Wellness</Link>
                </div>
              </div>

              <div className="navbar-dropdown relative">
                <button className=" hover:text-primary/80 flex items-center">
                  Newsroom
                  <svg className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="navbar-dropdown-content bg-white  w-48 shadow-lg rounded-lg">
                  <Link to="/newsroom/in-the-news" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>In the News</Link>
                  <Link to="/newsroom/press-release" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Press Release</Link>
                  <Link to="/newsroom/library" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Library</Link>
                </div>
              </div>

              

              <Link to="/investors" className=" hover:text-primary/80">Investors</Link>
              <Link to="/ourproduct" className=" hover:text-primary/80">Our Product</Link>
              <div className="navbar-dropdown relative">
                <button className=" hover:text-primary/80 flex items-center">
                  CSR
                  <svg className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="navbar-dropdown-content bg-white pt-2 w-48 shadow-lg rounded-lg ">
                  <div className="relative">
                    <button className="text-[#d1a272]  hover:text-primary/80 flex items-center md:w-full md:justify-center">
                      CSR At Aayush 
                      <svg className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className=" bg-white  w-48  rounded-lg">
                      <Link to="/csr-at-aayush/malnutrition" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Malnutrition</Link>
                      <Link to="/csr-at-aayush/health-check" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Healthcare Check</Link>
                    </div>
                  </div>
                  <Link to="/sustainability" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Sustainability</Link>
                </div>
              </div>

              <Link to="/career" className=" hover:text-primary/80">Careers</Link>
              <Link to="/support" className=" hover:text-primary/80">Support</Link>
              <Link to="/healthcare" className="block  hover:text-primary/80"> HealthCare</Link>
               <Link  to="/growth-accelerator" className="block   hover:text-primary/80">Accelerator</Link>
             
              
            </div>
            <div className='js pl-[5px]  flex justify-center items-center'>
           
           {/* Search Input */}
           <button  onClick={toggleSearch} className="   pl-[20px] pr-3  relative hidden md:flex">
                <img  src={searchIcon} alt="Search" className="h-6 w-6" />
              </button>
    {isSearchOpen && (
                <div class="sp" className=" hidden md:flex  absolute right-44 top-16 z-[99999]">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-md focus:outline-none"
                    onBlur={() => setIsSearchOpen(false)} // Hide search input when it loses focus
                  />
                </div>
              )}
  </div>
          
        
  <div className="md:hidden">
              <div className="flex">
                <button
                  onClick={toggleSearch}
                  className="block py-2 px-2  hover:text-primary/80"
                >
                  <img src={searchIcon} alt="Search" className="h-6 w-6" />
                </button>

                {isSearchOpen && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 py-2 border rounded-md  absolute top-14 left-[30%] z-[9999]"
                    onBlur={() => setIsSearchOpen(false)}
                  />
                )}
                <button
                  id="mobile-menu-button"
                  className=" hover:text-primary/80 focus:outline-none"
                  onClick={toggleMenu}
                >
                  {/* Mobile Search */}

                  <img className="h-7" src={menu} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-md z-50 transition-all duration-300 ${
            isMenuOpen ? "block !translate-x-0" : "hidden !-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 ">
    {/* Logo on the left */}
    <img
      className="h-15 w-36 "
      src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" 
      alt="Logo"
    />

    {/* Close Button on the right */}
    <button
      className="hover:text-primary/80 focus:outline-none"
      onClick={toggleMenu}
    >
      <img
        className="h-8"
        src={closepng || "/placeholder.svg"}
        alt="Close Menu"
      />
    </button>
  </div>

          <div className="flex flex-col mt-10 px-6 overflow-y-auto h-full pb-20">
            {/* Home Link */}
            <Link
              to="/"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Home
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <div className="relative">
  <button
    onClick={() => setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Our Story</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isAboutUsDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isAboutUsDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Our Story</h3>
        <p className="text-lg text-gray-600 mt-2">
          We started with a vision to create something meaningful.
          Our journey has been shaped by passion, innovation, and dedication.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        <Link
          to="/about-us"
          className="block px-4 py-3 text-[#004037] font-bold transition"
          onClick={() => setIsAboutUsDropdownOpen(false)}
        >
          About Us
          <p className="text-sm text-gray-600">We started with a vision to create something</p>
        </Link>

        <Link
          to="/about/mission-vision"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsAboutUsDropdownOpen(false)}
        >
          Mission & Vision
          <p className="text-sm text-gray-600">Our mission is to do something Great</p>
        </Link>
      </div>
    </div>
  )}
</div>

            <div className="h-px w-full bg-gray-200 my-1"></div>

            {/* Wellness & You Dropdown */}
            <div className="relative">
  <button
    onClick={() => setIsWellnessDropdownOpen(!isWellnessDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Wellness & You</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isWellnessDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isWellnessDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Wellness & You</h3>
        <p className="text-lg text-gray-600 mt-2">
          Discover the perfect balance of modern science and ancient
          wisdom to enhance your well-being.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        <Link
          to="/wellness/modern-science"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Modern Science
          <p className="text-sm text-gray-600">Explore the latest advancements in science</p>
        </Link>

        <Link
          to="/ayurveda"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Ayurveda
          <p className="text-sm text-gray-600">Ancient wisdom for holistic wellness</p>
        </Link>

        <Link
          to="/wellness/health-wellness"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsWellnessDropdownOpen(false)}
        >
          Health & Wellness
          <p className="text-sm text-gray-600">Your guide to a healthier lifestyle</p>
        </Link>
      </div>
    </div>
  )}
</div>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <div className="relative">
  <button
    onClick={() => setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Newsroom</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isNewsroomDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isNewsroomDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Newsroom</h3>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest news, press releases, and important announcements.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        <Link
          to="/newsroom/in-the-news"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          In the News
          <p className="text-sm text-gray-600">Latest media coverage and reports</p>
        </Link>

        <Link
          to="/newsroom/press-release"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          Press Release
          <p className="text-sm text-gray-600">Official statements and updates</p>
        </Link>

        <Link
          to="/newsroom/library"
          className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
          onClick={() => setIsNewsroomDropdownOpen(false)}
        >
          Library
          <p className="text-sm text-gray-600">Access research and archived news</p>
        </Link>
      </div>
    </div>
  )}
</div>

            <div className="h-px w-full bg-gray-200 my-1"></div>

            <Link
              to="/ourproduct"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Our Product
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <div className="relative">
  <button
    onClick={() => setIsCorporateDropdownOpen(!isCorporateDropdownOpen)}
    className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
  >
    <span>Corporate</span>
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isCorporateDropdownOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {isCorporateDropdownOpen && (
    <div className="rounded-md mt-2 mb-3 py-2 ">
      {/* Title & Description */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold text-[#004037]">Corporate Initiatives</h3>
        <p className="text-lg text-gray-600 mt-2">
          Our dedication to ethical business practices, community engagement, and sustainability.
        </p>
      </div>

      {/* Dropdown Links */}
      <div className="flex flex-col">
        {/* CSR Section with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen)}
            className="block w-full px-4 py-3 text-[#004037] font-extrabold  flex justify-between items-center"
          >
            <span>CSR</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isCsrSubcategoryOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {isCsrSubcategoryOpen && (
            <div className="ml-4  mt-2 py-2">
              <Link
                to="/csr-at-aayush/malnutrition"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Malnutrition
                <p className="text-sm text-gray-600">Fighting malnutrition with dedicated programs</p>
              </Link>
              <Link
                to="/csr-at-aayush/health-check"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Healthcare Check
                <p className="text-sm text-gray-600">Providing essential healthcare services</p>
              </Link>
              <Link
                to="/sustainability"
                className="block px-4 py-3 text-[#004037] "
                onClick={() => {
                  setIsCsrSubcategoryOpen(false);
                  setIsCorporateDropdownOpen(false);
                }}
              >
                Sustainability
                <p className="text-sm text-gray-600">Driving positive change for a greener future</p>
              </Link>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          to="/career"
          className="block px-4 py-3 text-[#004037] font-bold "
          onClick={() => setIsCorporateDropdownOpen(false)}
        >
          Careers
          <p className="text-sm text-gray-600">Join our team and shape the future</p>
        </Link>

        <Link
          to="/investors"
          className="block px-4 py-3 text-[#004037] font-bold "
          onClick={() => setIsCorporateDropdownOpen(false)}
        >
          Investors
          <p className="text-sm text-gray-600">Partner with us for sustainable growth</p>
        </Link>
      </div>
    </div>
  )}
</div>


            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/support"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Support
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/healthcare"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Healthcare
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <Link
              to="/growth-accelerator"
              className="block py-4 font-extrabold text-[#004037] text-[36px]"
              onClick={handleDropdownLinkClick}
            >
              Accelerator
            </Link>
          </div>
        </div>

    </nav> 
    
    </>
  );
}







