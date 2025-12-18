import React from 'react';
import Banner from '../components/Banner';

const Informacion = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h1>Bienvenido al CUDeCo</h1>
        <p className="subtitle text-center">
          Centro Universitario de Desarrollo y Comunicación de la UAA.
        </p>
        
        <section className="content-section">
          <h2 className="section-title">Información de CUDeCo</h2>
          
          <div className="text-content">
            <p>
              El <strong>CUDeCo</strong> tiene como objetivo ser la instancia universitaria de vinculación 
              entre las necesidades de los sujetos sociales y las disciplinas científicas que existen en 
              la <strong>UAA</strong>. A través del trabajo multidisciplinario, se aplican los conocimientos 
              bajo una concepción de promoción del desarrollo y bienestar humano, beneficiando a los 
              sectores de la población urbana, suburbana y rural del Estado de Aguascalientes y la región.
            </p>
            
            <p>
              El CUDeCo surge como una <em>acción afirmativa</em> alineada a la{' '}
              <strong>Visión Institucional de la UAA</strong>, que en el año 2024 "será un referente a 
              nivel nacional por su contribución al desarrollo y bienestar de la sociedad, su calidad 
              académica, capacidad de innovación, producción científica, humanista, tecnológica, 
              artística y deportiva, por su reconocimiento internacional y por la eficiencia y eficacia 
              en la administración y gestión de los recursos."
            </p>
            
            <p>
              Este documento programa la incorporación de <strong>proyectos sociales</strong> que promuevan 
              el desarrollo comunitario de Aguascalientes y la región, enmarcados dentro del{' '}
              <strong>Plan de Desarrollo Institucional vigente</strong> y la <strong>Agenda 2030</strong>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Informacion;