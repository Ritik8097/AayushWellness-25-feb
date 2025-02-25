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
            <div className='flex'>

<button onClick={toggleSearch} className="block py-2 px-2  hover:text-primary/80">
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
         
                <img className='h-7' src={menu} alt="menu" />
         
               
              </button>
</div>
              
            </div>
          </div>
        </div>
        <div
         id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transform ${isMenuOpen  ? 'open' : ''}`}
       >
          <button
            className="absolute top-4 right-4  hover:text-primary/80 focus:outline-none"
            onClick={toggleMenu}
          >
            <img className='h-8' src={closepng} alt="close menu" />
          </button>
          <div className="flex flex-col mt-16">
            <Link to="/" className="block py-2 px-4  hover:text-primary/80">Home</Link>

            <div className="relative" ref={WellnessDropdownRef}>
              <button
                onClick={toggleWellnessDropdown}
                className="py-2 px-4  hover:text-primary/80 flex items-center"
              >
                Wellness & You
                <svg id="svg2" className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isWellnessDropdownOpen && (
                <div className="relative bg-white  w-48 shadow-lg rounded-lg">
                  <Link to="/wellness/modern-science" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Modern Science</Link>
                 
                  <Link to="/ayurveda" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Ayurveda</Link>
                  
                  <Link to="/wellness/health-wellness" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Health & Wellness</Link>
                </div>
              )}
            </div>

            <div className="relative" ref={NewsroomDropdownRef}>
              <button
                onClick={toggleNewsroomDropdown}
                className="py-2 px-4  hover:text-primary/80 flex items-center"
              >
                Newsroom
                <svg id="svg3" className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isNewsroomDropdownOpen && (
                <div className="relative bg-white  w-48 shadow-lg rounded-lg">
                  <Link to="/newsroom/press-release" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Press Release</Link>
                  <Link to="/newsroom/in-the-news" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>In the News</Link>
                  <Link to="/newsroom/library" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Library</Link>
                </div>
              )}
            </div>

            <div className="relative" ref={AboutUsDropdownRef}>
              <button
                onClick={toggleAboutUsDropdown}
                className="py-2 px-4  hover:text-primary/80 flex items-center"
              >
                About Us
                <svg id="svg6" className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isAboutUsDropdownOpen && (
                <div className="relative bg-white  w-48 shadow-lg rounded-lg">
                 
                  <Link to="/about/company-intro" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Our Story</Link>
                  <Link to="/about/mission-vision" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Mission & Vision</Link>
                </div>
              )}
            </div>

            <Link to="/investors" className="block py-2 px-4  hover:text-primary/80">Investors</Link>
            <Link to="/ourproduct" className="block py-2 px-4  hover:text-primary/80">Our Product</Link>
            <div className="relative" ref={AyurvedaDropdownRef}>
              <button
                onClick={toggleAyurvedaDropdown}
                className="py-2 px-4  hover:text-primary/80 flex items-center"
              >
               CSR
                <svg id="svg4" className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isAyurvedaDropdownOpen && (
                <div className="relative bg-white  w-48 shadow-lg rounded-lg">
                  <div className="relative" ref={CsrDropdownRef}>
                    <button
                      onClick={toggleCsrSubcategory}
                      className="py-2 px-4  hover:text-primary/80 flex items-center"
                    >
                      CSR At Aayush
                      <svg id="svg7" className="svg w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {isCsrSubcategoryOpen && (
                      <div className="relative bg-white  w-48 shadow-lg rounded-lg">
                        <Link to="/csr-at-aayush/malnutrition" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>malnutrition</Link>
                        <Link to="/csr-at-aayush/health-check" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Healthcare Check</Link>
                      </div>
                    )}
                  </div>
                  <Link to="/sustainability" className="block px-4 py-2  hover:bg-primary/80" onClick={handleDropdownLinkClick}>Sustainability</Link>
                  
                </div>
              )}
            </div>

            <Link to="/career" className="block py-2 px-4  hover:text-primary/80">Careers</Link>
            <Link to="/support" className="block py-2 px-4  hover:text-primary/80">Support</Link>
          </div>
          


          
       
</div>

    </nav> 
    
    </>
  );
}
