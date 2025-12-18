import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <img 
          src="/images/banner pequeño.png" 
          alt="CUDeCo Logo" 
          className="banner-logo"
        />
      </div>
    </section>
  );
};

export default Banner;