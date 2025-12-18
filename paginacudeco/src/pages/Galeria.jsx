import React, { useState } from 'react';
import Banner from '../components/Banner';

const Galeria = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

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
                  onClick={() => setImagenActiva(image)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {imagenActiva && (
        <div style={styles.modal} onClick={() => setImagenActiva(null)}>
          <img
            src={imagenActiva.src}
            alt={imagenActiva.alt}
            style={styles.imagenGrande}
          />
        </div>
      )}
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
    cursor: 'pointer',
  },
  imagen: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    display: 'block',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  imagenGrande: {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
  },
};

export default Galeria;
