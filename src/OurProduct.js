import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './OurProduct.css'; // Import the CSS file
import { Link } from 'react-router-dom';


const products = [
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1.jpg?v=1724245732",
    title: "Aayush Herbal Pan Masala",
    description: "100% Natural And Chemical Free.",
    link:'/pan-masala'
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_black_product.jpg?v=1724397529",
    title: "Aayush Herbal Pan Masala",
    description: "100% Natural And Chemical Free.",
    link:'/pan-masala'
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/our_product_-1_gold.jpg?v=1724397529",
    title: "Aayush Herbal Pan Masala",
    description: "100% Natural And Chemical Free",
    link:'/pan-masala'
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Beauty_gummy_product_bannner_1_1.jpg?v=1724399086",
    title: "Aayush Beauty Gummies",
    description: "100% Effective And Help To Glow.",
    link:'/gummies'
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/sleep_gummy_product_banner1_1.jpg?v=1724399086",
    title: "Aayush Sleep Gummies",
    description: "100% Effective And Help To Restful Night Sleeps.",
     link:'/gummies'
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/coming_us_banner.jpg?v=1724408124",
    title: "Comming Soon",
    description: ".",
     link:''
  }
];

function ProductCard({ image, title, description,link }) {
  return (
    
    <div className='product-card'>
   
      <div className='image-container'>
        <img src={image} alt={title} />
      </div>
     
      <div className='product-title'>

        {title}
      </div>
     
      <div className='product-description'>
        {description}
      </div>
      
      <div className='explore-button'>
        <Link to={link}>Explore</Link>
       
      </div>
      
     
    </div>
  );
}

function OurProduct() {
  return (
    <div>
      <Header />
      <div className='product-grid pt-[85px]'>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default OurProduct;
