import React from 'react';
import Banner from '../components/Banner';

const Practicas = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <section className="content-section">
          <h2 className="section-title">Prácticas Profesionales</h2>
          
          <div style={styles.content}>
            <div style={styles.section}>
              <h3 style={styles.subtitle}>¿Qué son?</h3>
              <p>
                Es un requisito de titulación y representa la oportunidad para que el alumno entre 
                en contacto con el ambiente laboral, desarrolle sus habilidades y refuerce sus conocimientos.
              </p>
            </div>
            
            <div style={styles.section}>
              <h3 style={styles.subtitle}>¿Cuál es su objetivo?</h3>
              <p>
                Contribuir a la formación de estudiantes capaces de interactuar con su entorno 
                actuando como agentes de cambio desde una visión humanística, crítica, con sentido 
                de adaptación e innovación, en congruencia con los aprendizajes obtenidos en el 
                ámbito académico a través de la vinculación efectiva con los sectores social y productivo.
              </p>
            </div>
            
            <div style={styles.imageSection}>
              <img 
                src="/images/flujo_practicas.png" 
                alt="Flujo de Prácticas Profesionales CUDeCo"
                style={styles.image}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  content: {
    lineHeight: '1.8',
  },
  section: {
    marginBottom: '30px',
  },
  subtitle: {
    color: '#005599',
    marginBottom: '15px',
    fontSize: '1.5rem',
    borderLeft: '4px solid #005599',
    paddingLeft: '15px',
  },
  imageSection: {
    textAlign: 'center',
    marginTop: '40px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
};

export default Practicas;