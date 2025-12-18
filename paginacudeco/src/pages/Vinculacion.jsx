import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Vinculacion = () => {
  const enlaces = [
    { to: '/servicio', text: 'Servicio Social' },
    { to: '/practicas', text: 'Prácticas Profesionales' },
    { to: '/proyectos', text: 'Proyectos Comunitarios Vigentes' },
    { to: '/galeria', text: 'Galería Fotográfica' },
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
          <h2 className="section-title">Vinculación</h2>
          
          <div style={styles.content}>
            <p style={styles.intro}>
              El CUDeCo fortalece la relación entre la UAA, la comunidad y diversas 
              instituciones mediante proyectos colaborativos y programas de participación.
            </p>
            
            <div style={styles.linksSection}>
              <h3 style={styles.linksTitle}>Enlaces de interés:</h3>
              <ul style={styles.linksList}>
                {enlaces.map((enlace, index) => (
                  <li key={index} style={styles.linkItem}>
                    <Link to={enlace.to} style={styles.link}>
                      {enlace.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={styles.infoSection}>
              <h3 style={styles.infoTitle}>Modalidades de Vinculación</h3>
              
              <div style={styles.modalidades}>
                <div style={styles.modalidad}>
                  <h4 style={styles.modalidadTitle}>Servicio Social</h4>
                  <p>
                    Actividades de apoyo a la comunidad que realizan los estudiantes 
                    como requisito de titulación.
                  </p>
                </div>
                
                <div style={styles.modalidad}>
                  <h4 style={styles.modalidadTitle}>Prácticas Profesionales</h4>
                  <p>
                    Espacios donde los estudiantes aplican sus conocimientos en 
                    entornos laborales reales.
                  </p>
                </div>
                
                <div style={styles.modalidad}>
                  <h4 style={styles.modalidadTitle}>Proyectos Comunitarios</h4>
                  <p>
                    Iniciativas multidisciplinarias enfocadas en resolver problemáticas 
                    sociales específicas.
                  </p>
                </div>
              </div>
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
  intro: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#444',
  },
  linksSection: {
    backgroundColor: '#f0f7ff',
    padding: '25px',
    borderRadius: '10px',
    marginBottom: '30px',
  },
  linksTitle: {
    color: '#003366',
    marginBottom: '20px',
    fontSize: '1.4rem',
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
  },
  linkItem: {
    marginBottom: '15px',
    paddingLeft: '20px',
    position: 'relative',
  },
  link: {
    color: '#005599',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  infoSection: {
    marginTop: '40px',
  },
  infoTitle: {
    color: '#003366',
    marginBottom: '25px',
    fontSize: '1.4rem',
    borderBottom: '2px solid #005599',
    paddingBottom: '10px',
  },
  modalidades: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '25px',
  },
  modalidad: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0',
  },
  modalidadTitle: {
    color: '#005599',
    marginBottom: '15px',
    fontSize: '1.2rem',
  },
};

export default Vinculacion;