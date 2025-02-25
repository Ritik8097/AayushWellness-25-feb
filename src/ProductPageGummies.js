import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ProductGummies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    
    'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_gummy_product_bannner_1_1.jpg?v=1724399086',
   
    'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_gummy_product_bannner_2-ingredients_1.jpg?v=1724399086',
    'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/beauty_gummy_product_banner_benefits_1.jpg?v=1724399086',
    'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_Gummies_Product_banner_-_Nutraceutical_Values_Corousal_1.jpg?v=1724399108',
    'https://iili.io/dWaG7LX.gif',
    
    
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Header />
      <section className="py-12 bg-gray-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Carousel Section */}
            <div className="relative">
              <div className="relative overflow-hidden">
                {/* Display either an image or video based on the currentIndex */}
                {currentIndex === images.length ? (
                  <video
                    src={images[currentIndex]}
                    controls
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <img
                    src={images[currentIndex]}
                    alt={`Product Image ${currentIndex + 1}`}
                    className="  w-full h-auto rounded-lg"
                  />
                )}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  &gt;
                </button>
              </div>
              <div className="js flex space-x-2 mt-4 overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-24 h-24 cursor-pointer rounded-lg ${
                      index === currentIndex ? 'border-4 border-[#d1a272]' : 'border'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {index === images.length ? (
                      <video
                        src={image}
                        className="w-full h-full object-cover rounded-lg"
                        muted
                      />
                    ) : (
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="  w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col justify-start md:pt-[85px]">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Aayush Beauty Gummies</h1>
              <p className="text-base text-gray-500 mb-4">100% Effective And Help To Glow.</p>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">₹649</h2>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2">variant</p>
              <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                <div className="color-box group">
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_gummy_product_bannner_1_1.jpg?v=1724399086"
                      alt="Black Color"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-[#d1a272]"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-[#d1a272]">
                      Beauty
                    </p>
                  </div>
                </div>
                <div className="color-box group">
                    <Link to='/gummies-sleep'>
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/sleep_gummy_product_banner1_1.jpg?v=1724399086"
                      alt="Brown Color"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-[#d1a272]"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-[#d1a272]">
                     Sleep
                    </p>
                  </div>
                  </Link>
                </div>
                
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        <a href="https://aayushlife.com/products/beauty-vitamin-gummies" target="_blank">
                <button className="bg-[#d1a272] text-white py-2 px-6 rounded-lg flex-1 text-center font-semibold">
                  Buy Now
                </button>
                        </a>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                Say hello to radiant skin and luscious hair with our Glow Beauty Gummies. Crafted with a blend of Modern Scientific ingredients such as Glutathione, Hyaluronic Acid, and Biotin, and Active Ayurveda such as Curcumin and Sea Buckthorn Extract. These gummies support skin hydration, repair, and nourishment while promoting healthy hair growth, helping you achieve a youthful, glowing complexion and strong, vibrant locks. These gummies are Non-GMO & 100% Vegan.
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                Our Glow Beauty Gummies offer a gluten-free, 100% vegan solution, meticulously formulated to enhance your natural beauty. Infused with Glutathione to brighten your skin and reduce pigmentation, Hyaluronic Acid to boost skin hydration and elasticity, and Biotin to nourish hair and reduce hair fall. The inclusion of Vitamin C and Curcumin further supports skin repair, fights free radicals, and promotes a luminous, healthy complexion. Easy to carry and deliciously simple to consume, our Beauty Gummies provide a rejuvenating, flavorful experience that seamlessly integrates wellness into your daily routine, making radiant, youthful skin and hair more accessible than ever.
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                
Promotes Radiant Skin: Enhances natural glow and reduces pigmentation.
Supports Skin Hydration: Boosts moisture levels and improves skin elasticity.
Nourishes Hair: Reduces hair fall and promotes strong, healthy hair growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductGummies;
