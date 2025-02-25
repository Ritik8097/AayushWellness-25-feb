import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbOffset, setThumbOffset] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('Blue');

  // Define image sets for each flavor
  const flavorImages = {
    
    Black: [
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_black_product.jpg?v=1724397529',
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-2_black_product.jpg?v=1724397529',
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-3_balck.jpg?v=1724397529',
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-4_black_product.jpg?v=1724397528',
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-5_black_product.jpg?v=1724397529',
        'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-_gold_pan_masala_1.gif?v=1724399830'
      ],
    Blue: [
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1.jpg?v=1724245732',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-2.jpg?v=1724245733',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-3_blue.jpg?v=1724245732',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-4.jpg?v=1724245732',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-5.jpg?v=1724400057',
      'https://iili.io/dVSnjfa.gif'
    ],
   
   Gold: [
      // Add images for Beige flavor
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_gold.jpg?v=1724397529',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-2_gold_1.jpg?v=1724397529',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-3_gold.jpg?v=1724397529',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-4_gold.jpg?v=1724397529',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-5_gold_product.jpg?v=1724397529',
      'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-_gold_pan_masala_2.gif?v=1724399800'

    ],
  };

  const images = flavorImages[selectedFlavor] || [];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <>
      <Header />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Carousel Section */}
            <div className="relative">
              <div className="relative overflow-hidden">
                {/* Display the current image */}
                <img
                  src={images[currentIndex]}
                  alt={`Product Image ${currentIndex + 1}`}
                  className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out"
                />
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
                >
                  &gt;
                </button>
              </div>
              <div className="relative mt-4">
                <div
                  className="js flex space-x-2 mt-4 overflow-scroll scrollbar-hide"
                  style={{ transform: `translateX(${thumbOffset}px)`, transition: 'transform 0.5s ease' }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`min-w-24 h-24 cursor-pointer rounded-lg ${
                        index === currentIndex ? 'border-4 border-[#d1a272]' : 'border'
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col justify-start pt-[0px] md:pt-[85px]">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Aayush Herbal Pan Masala</h1>
              <p className="text-base text-gray-500 mb-4">100% Natural And Chemical Free.</p>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">₹750</h2>
              </div>
              <p className="font-medium text-lg text-gray-900 mb-2">Flavour</p>
              <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                <div
                  className="color-box group cursor-pointer"
                  onClick={() => setSelectedFlavor('Blue')}
                >
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1.jpg?v=1724245732"
                      alt="Black Color"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-[#d1a272]"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-[#d1a272]">
                      Blue
                    </p>
                  </div>
                </div>
                <div
                  className="color-box group cursor-pointer"
                  onClick={() => setSelectedFlavor('Black')}
                >
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_black_product.jpg?v=1724397529"
                      alt="Brown Color"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-[#d1a272]"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-[#d1a272]">
                      Black
                    </p>
                  </div>
                </div>
                <div
                  className="color-box group cursor-pointer"
                  onClick={() => setSelectedFlavor('Gold')}
                >
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_gold.jpg?v=1724397529"
                      alt="Beige Color"
                      className="border-2 border-gray-100 rounded-xl transition-all duration-500 group-hover:border-[#d1a272]"
                    />
                    <p className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-[#d1a272]">
                      Gold
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a target='_blank' className=' w-full bg-[#d1a272] text-white py-2 px-6 rounded-lg flex-1 text-center font-semibold' href='https://aayushveda.in/'>
              
                  Buy Now
               
                </a>
              </div>
              <div>
                <p className="text-lg text-gray-500 mb-4 font-[400] ">Description :</p>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                An exquisite, all-natural concoction designed to harmonise and rejuvenate your senses using the heritage of Ayurveda. Crafted from a precise blend of natural & ayurvedic herbs with healing properties, this pan masala and gutka alternative is not only a delight for your taste buds but also a beneficial choice for overall well-being. Our blend not only mimics the taste and aroma of traditional pan & tobacco products but also support numerous health benefits, thereby encouraging users to do away with their harmful habits, and contributing to the prevention of tobacco-related illnesses. 
               
                </p>
                <p>Swaad Wahi, Sehat Bhi  ✅</p>
                <br></br>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                <li >0% Tobacco | 0% Nicotine | 0% Supari | 100% Natural 🍀</li>
                <li >11 healing Ayurvedic & Natural herbs formula</li>
                <li >A healthy alternative with same Taste & Feeling</li>
                <li >Helps replace harmful habits with better alternatives</li>
                <li >Restores Oral & Dental health*</li>
                <li >Non-Spitting and Non-Addictive</li>
                <li >Mood Enhancer & Stress Relief*</li>
                <li >Supports Digestion & Reduces Inflammation*</li>
                <li >Supports Immunity & Stamina*</li>
                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                Usage Instructions - Eat 7 to 8 spoons daily or as per your requirements/cravings 


                </p>
              </div>

              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                FSSAI Approved & HACCP Approved | Cruelty Free | 100% Veg | Clinically Researched

                </p>
              </div>
              <div>
                <p className="text-base text-gray-500 mb-4 font-[400]">
                *based on key properties of the natural ingredients

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

export default ProductCarousel;
