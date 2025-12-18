import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Síguenos en nuestras redes sociales:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/CUDeCO.UAA/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src="/images/Facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/cudeco_uaa" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="/images/Instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="http://tiktok.com/@cudeco_uaa" target="_blank" rel="noopener noreferrer" title="TikTok">
            <img src="/images/TikTok.png" alt="TikTok" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@cudeco_uaa" target="_blank" rel="noopener noreferrer" title="YouTube">
            <img src="/images/YouTube.png" alt="YouTube" className="social-icon" />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} CUDeCo - Universidad Autónoma de Aguascalientes
        </p>
      </div>
    </footer>
  );
};

export default Footer;