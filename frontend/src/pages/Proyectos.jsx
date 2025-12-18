import React from 'react';
import Banner from '../components/Banner';

const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Derechos Humanos en tu Comunidad',
      descripcion: 'Brindar asesorías en derecho mercantil, penal y familiar, canalizando a instituciones correspondientes para mitigar riesgos y proteger los derechos de personas en situación de vulnerabilidad.',
    },
    {
      id: 2,
      titulo: 'Reconociendo mis Emociones',
      descripcion: 'Desarrollar habilidades psicoafectivas mediante talleres prácticos liderados por estudiantes de Psicología, Asesoría Psicopedagógica y Trabajo Social.',
    },
    {
      id: 3,
      titulo: 'Atención Especializada',
      descripcion: 'Brindar servicio transdisciplinar a personas con situaciones complejas, construyendo propuestas de intervención integradoras.',
    },
    {
      id: 4,
      titulo: 'Campañas Solidarias',
      descripcion: 'Impulsar la participación universitaria y del público general en campañas de donación para mejorar el bienestar social.',
    },
    {
      id: 5,
      titulo: 'Propagación de Plantas Útiles y Producción de Alimentos Sanos',
      descripcion: 'Fortalecer habilidades de estudiantes de agronomía para apoyar la economía familiar y el bienestar comunitario mediante cursos-talleres sobre huertos rurales y producción de alimentos sanos.',
    },
    {
      id: 6,
      titulo: 'Veterinario por Vocación, Gallo por Elección',
      descripcion: 'Promover la participación de estudiantes de MVZ en apoyo a productores de escasos recursos, aplicando conocimientos para el bienestar animal y humano.',
    },
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
          <h2 className="section-title">Proyectos Vigentes</h2>
          
          <div style={styles.grid}>
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} style={styles.card}>
                <h3 style={styles.cardTitle}>{proyecto.titulo}</h3>
                <p style={styles.cardText}>
                  <strong>Objetivo General:</strong> {proyecto.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    color: '#003366',
    marginBottom: '15px',
    fontSize: '1.3rem',
    borderBottom: '2px solid #005599',
    paddingBottom: '10px',
  },
  cardText: {
    lineHeight: '1.7',
    color: '#444',
  },
};

export default Proyectos;