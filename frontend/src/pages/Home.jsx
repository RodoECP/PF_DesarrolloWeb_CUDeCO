import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <img 
          src="/images/header.jpg" 
          alt="CUDeCo Header" 
          className="header-image"
          style={{ width: '100%', maxWidth: '1350px', margin: '20px 0' }}
        />
        
        <section className="content-section">
          <h2 className="section-title">PÁGINA PRINCIPAL</h2>
          <p>
            Bienvenido al CUDeCo, una iniciativa de la Universidad Autónoma de Aguascalientes 
            dedicada a promover el desarrollo y bienestar de las comunidades a través de 
            proyectos multidisciplinarios y la participación activa de estudiantes y docentes.
          </p>
          <p>
            Conoce más sobre nuestros programas, proyectos y oportunidades de vinculación 
            con la sociedad.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;