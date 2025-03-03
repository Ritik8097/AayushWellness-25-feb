import React, { Suspense } from "react";
import HeaderLoad from "./HeaderLoad";
import SectionFirst from "./SectionFirst";
import SectionSecond from "./Second";
import SectionThird from "./SectionThird";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import Footer from "./Footer";
import FooterCopyright from "./FooterCopyright";
import SliderThird from "./SliderThird";
import Sliding from "./Slider";
import SectionSix from "./SectionSix";
import SectionSixAbove from "./SectionSixAbove";
import SectionMissionHome from "./SectionMissionHome";
import NewsletterSignup from "./NewsLetter";
import StackImage from "./StackImage";
import HeroSection from "./HeroSection";
import NewFooter from "./NewFooter";
import SmoothScroll from "./SmoothScroll"; // Import SmoothScroll

import "./index.css";
import SectionTrail from "./SectionTrail";
import AwCard from "./AwCard";
import AwCard2 from "./AwCard2";
import StackImageMobile from "./StackImageMobile";
import StackImageMobile2 from "./StackImageMobile2";
import CircularSlider from "./CircularSlider";
import CleanEnergyHero from "./CleanEnergyHero";
import HomeBlog from "./HomeBlog";
import Banner from "./Banner";

function Layout() {
  return (
     <SmoothScroll>
     
      <Sliding />     
      <CleanEnergyHero/>
      <StackImage />
      <StackImageMobile/>
      <StackImageMobile2/>
      <AwCard/>
    <Banner/>
      <AwCard2/>
      <HeroSection />
      {/* <SectionTrail/> */}

      {/* <SectionSecond />
      <SliderThird /> */}
      {/* <SectionSixAbove />
      <SectionFive />
      <SectionSix /> */}
   {/* <CircularSlider/> */}
   <HomeBlog/>
      <NewsletterSignup />
      <NewFooter />
      {/* <FooterCopyright /> */}
    </SmoothScroll>
  );
}

export default Layout;
