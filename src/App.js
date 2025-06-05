import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import './index.css';
import PageSkeleton from "./PageSkeleton";

// Regular import for homepage
import Layout from "./Layout";
import LabTieUpForm from "./Labtieup";

// Lazy imports for inner pages
const Pdf = lazy(() => import("./Pdf"));
const AdminPage = lazy(() => import("./AdminPage"));
const LifeCycle = lazy(() => import("./LifeCycle"));
const AboutUs = lazy(() => import("./AboutUs"));
const WaterRisk = lazy(() => import("./WaterRisk"));
const Ayurveda = lazy(() => import("./Ayurveda"));
const ErrorPage = lazy(() => import("./ErrorPage"));
const CsrAtAayush = lazy(() => import("./CsrAtAayush"));
const Investors = lazy(() => import("./Investors"));
const CompanyIntro = lazy(() => import("./CompanyIntro"));
const ModernScience = lazy(() => import("./ModernScience"));
const HealthWellness = lazy(() => import("./HealthWellness"));
const MissionVision = lazy(() => import("./MissionVision"));
const Malnutrition = lazy(() => import("./Malnutrition"));
const HealthCheck = lazy(() => import("./HealthCheck"));
const OurProduct = lazy(() => import("./OurProduct"));
const Sustnability = lazy(() => import("./Sustnability"));
const PressRelease = lazy(() => import("./PressRelease"));
const Career = lazy(() => import("./Career"));
const Support = lazy(() => import("./Support"));
const InTheNews = lazy(() => import("./InTheNews"));
const Library = lazy(() => import("./Library"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const ProductCarousel = lazy(() => import("./ProductPage"));
const ProductGummies = lazy(() => import("./ProductPageGummies"));
const ProductPageSleep = lazy(() => import("./ProductPageSleep"));
const AayushVenture = lazy(() => import("./AayushVenture"));
const Health = lazy(() => import("./Health"));
const Healthh = lazy(() => import("./Healthh"));

const Blog1 = lazy(() => import("./Blog1"));
const Blog2 = lazy(() => import("./Blog2"));
const Blog3 = lazy(() => import("./Blog3"));
const Blog4 = lazy(() => import("./Blog4"));
const Blog5 = lazy(() => import("./Blog5"));
const Blog6 = lazy(() => import("./Blog6"));
const BlogH7 = lazy(() => import("./BlogH7"));
const BlogH8 = lazy(() => import("./BlogH8"));
const BlogH9 = lazy(() => import("./BlogH9"));
const BlogH10 = lazy(() => import("./BlogH10"));
const BlogH11 = lazy(() => import("./BlogH11"));
const BlogH12 = lazy(() => import("./BlogH12")); 



const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton />}>
      <Routes location={location} key={location.pathname}>
      
        <Route path="/" element={<PageTransition><Layout /></PageTransition>} />
        <Route path="sustainability" element={<PageTransition><Sustnability /></PageTransition>} />
        <Route path="newsroom/in-the-news" element={<PageTransition><PressRelease/></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="support" element={<PageTransition><Support /></PageTransition>} />
        <Route path="newsroom/press-release" element={<PageTransition><InTheNews /></PageTransition>} />
        <Route path="newsroom/library" element={<PageTransition><Library /></PageTransition>} />
        <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        
        <Route path="growth-accelerator" element={<PageTransition><AayushVenture /></PageTransition>} />
        {/* this is for about us only name health*/}
        <Route path="about-us" element={<PageTransition><Health /></PageTransition>} />
         <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
    <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
    <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="healthcare" element={<PageTransition><Healthh /></PageTransition>} />
        <Route path="healthcare/Lab-registration" element={<PageTransition><LabTieUpForm /></PageTransition>} />
        <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
        <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
        <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
    <Route path="/nutraceuticals-vs-traditional" element={<Blog5 />} />
     <Route path="/top-7-ayurvedic-ingredients" element={<Blog6 />} />

     <Route path="/BlogH7" element={<BlogH7 />} />
     <Route path="/BlogH8" element={<BlogH8 />} />
     <Route path="/BlogH9" element={<BlogH9 />} />
     <Route path="/BlogH10" element={<BlogH10 />} />
     <Route path="/BlogH11" element={<BlogH11 />} />
     <Route path="/BlogH12" element={<BlogH12 />} />

        <Route path="ourproduct" element={<PageTransition><OurProduct /></PageTransition>} />
        <Route path="csr-at-aayush/health-check" element={<PageTransition><HealthCheck/></PageTransition>} />
        <Route path="csr-at-aayush/malnutrition" element={<PageTransition><Malnutrition/></PageTransition>} />
        <Route path="investors" element={<PageTransition><Investors/></PageTransition>} />
        <Route path="wellness/modern-science" element={<PageTransition><ModernScience/></PageTransition>} />
        <Route path="about/company-intro" element={<PageTransition><CompanyIntro/></PageTransition>} />
        <Route path="wellness/health-wellness" element={<PageTransition><HealthWellness/></PageTransition>} />
        <Route path="about/mission-vision" element={<PageTransition><MissionVision/></PageTransition>} />
        <Route path="ayurveda" element={<PageTransition><Ayurveda/></PageTransition>} />
        <Route path="sustainability/csr-at-aayush" element={<PageTransition><CsrAtAayush/></PageTransition>} />
        <Route path="sustainability/waterrisk" element={<PageTransition><WaterRisk/></PageTransition>} />
        <Route path="about" element={<PageTransition><AboutUs/></PageTransition>} />
        <Route path="pdf" element={<PageTransition><Pdf/></PageTransition>} />
        <Route path="sustainability/lifecycle" element={<PageTransition><LifeCycle/></PageTransition>} />
        <Route path="adminpage" element={<PageTransition><AdminPage/></PageTransition>} />
        <Route path="*" element={<PageTransition><ErrorPage /></PageTransition>} />
        
        
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
    <AnimatedRoutes />
  </Router>
  );
}


export default App;
