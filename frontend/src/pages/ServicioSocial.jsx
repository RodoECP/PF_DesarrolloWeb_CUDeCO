import React from 'react';
import Banner from '../components/Banner';

const ServicioSocial = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <section className="content-section">
          <h2 className="section-title">Servicio Social</h2>
          
          <div style={styles.content}>
            <div style={styles.section}>
              <h3 style={styles.subtitle}>¿Qué es?</h3>
              <p>
                Es un requisito de titulación y se define como la serie de actividades previamente 
                organizadas en las que el estudiante universitario se desprende de sí mismo para 
                dar lo mejor de sí a los demás y se enfoca en mejorar los sectores sociales más vulnerables.
              </p>
              <p>
                Por lo anterior debe realizarse con un espíritu desinteresado y buscando siempre 
                ayudar a los sectores más desprotegidos, a través del cumplimiento eficaz y responsable 
                de <strong>500 horas</strong> por parte del estudiante, en acciones de ayuda a los que 
                más lo necesitan, participando en proyectos debidamente aprobados.
              </p>
              
              <blockquote style={styles.blockquote}>
                "Servir a los demás es la forma más delicada de agradecer la dicha de estar vivo", Anónimo.
              </blockquote>
            </div>
            
            <div style={styles.section}>
              <h3 style={styles.subtitle}>¿Cuál es su objetivo?</h3>
              <p>
                Apoyar a la formación integral del estudiante creando en el universitario un sentido 
                de conciencia en beneficio de los sectores sociales más desprotegidos a través del 
                encuentro con la realidad, para ofrecer alternativas de solución a las distintas 
                problemáticas y así retribuir a la sociedad los beneficios de ella recibidos.
              </p>
            </div>
            
            <div style={styles.imageSection}>
              <img 
                src="/images/servicio.jpg" 
                alt="Servicio Social CUDeCo"
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
  blockquote: {
    margin: '25px 0',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderLeft: '5px solid #cc0000',
    fontStyle: 'italic',
    color: '#555',
    fontSize: '1.1rem',
    borderRadius: '0 8px 8px 0',
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

export default ServicioSocial;