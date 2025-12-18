import React from 'react';
import Banner from '../components/Banner';

const Antecedentes = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <section className="content-section">
          <h2 className="section-title">Antecedentes</h2>
          
          <div className="text-content">
            <p>
              Desde <strong>1963</strong>, la formación de profesionistas de Trabajo Social en la UAA 
              ha considerado la asignatura de <em>práctica comunitaria</em>, cuyo objetivo principal es 
              que las estudiantes apliquen los conocimientos adquiridos durante su proceso de 
              formación en beneficio de la población, haciendo presencia en diferentes comunidades 
              y colonias del Estado de Aguascalientes.
            </p>
            
            <p>
              A partir de estas participaciones en distintas comunidades, surgió la oportunidad 
              de colaborar con el municipio de <strong>El Llano</strong>, donde se manifestó el interés 
              por establecer un espacio específico de atención ciudadana. En el año <strong>2010</strong>, 
              el Departamento de Trabajo Social, en conjunto con el Presidente Municipal de El Llano 
              y el Presidente del Comité Ejidal, tomaron la iniciativa para crear el{' '}
              <strong>Centro Universitario de Desarrollo Comunitario (CUDeCo)</strong>.
            </p>
            
            <p>
              Se formalizó un convenio de colaboración y comodato entre las partes involucradas: 
              el Presidente Municipal, el representante ejidal y la Universidad Autónoma de 
              Aguascalientes. El compromiso fue brindar servicios académicos mediante el servicio 
              social y las prácticas profesionales de la comunidad estudiantil.
            </p>
            
            <p>
              Una vez establecido y adaptado el espacio para el CUDeCo dentro del municipio de 
              El Llano, se obtuvo una respuesta favorable por parte de la población. Esto permitió 
              expandir los servicios del CUDeCo a otros municipios como{' '}
              <strong>Jesús María</strong>, <strong>Rincón de Romos</strong>,{' '}
              <strong>Pabellón de Arteaga</strong> y <strong>Aguascalientes</strong>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Antecedentes;