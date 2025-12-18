import React from 'react';
import Banner from '../components/Banner';

const Galeria = () => {
  const images = [
    { src: '/images/galeria1.jpg', alt: 'Proyecto CUDeCo 1' },
    { src: '/images/galeria2.jpg', alt: 'Proyecto CUDeCo 2' },
    { src: '/images/galeria3.jpg', alt: 'Proyecto CUDeCo 3' },
    { src: '/images/galeria4.jpg', alt: 'Proyecto CUDeCo 4' },
  ];

  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <section className="content-section">
          <h2 className="section-title">Galería de Imágenes</h2>
          
          <div style={styles.galeria}>
            {images.map((image, index) => (
              <div key={index} style={styles.imagenContainer}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={styles.imagen}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  galeria: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    margin: '30px 0',
  },
  imagenContainer: {
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
  },
  imagen: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
  },
};

export default Galeria;