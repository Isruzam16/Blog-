import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './styles.css';
import luzImage from './images/luz.jpg'; 
import camionetaImage from './images/camioneta.jpg';
import ProtestaImage from './images/protesta.jpg';
import ColombiaImage from './images/colombia.jpg'
import HorariosImage from './images/horarios.jpg'
import TransitoImage from './images/transito.jpg'
import MinistraImage from './images/ministra.jpg'
import TurismoImage from './images/turismo.jpg'
import Nay_Bar from "./components/NavBar"


const BlogHome = () => {
    return (
        <div>
            <Nay_Bar Categoria="Noticias"/>
            <div className="news-container">
                {[ 
                   {
                    imgSrc: ColombiaImage,
                    title: 'Ecuador busca comprar energia ',
                    description: 'Ecuador planea comprar energia a colombia, pais que atraviesa una aguda crisis energetica provocada por una intensa sequia que ha causado estragos en la generacion hidroelectrica y desatado racionamientos en el suministro de luz hasta 14 horas.'
                },
                {
                  imgSrc: HorariosImage,
                  title: 'Nuevos horarios de corte ',
                  description: 'En el ultimo dia de feriado Guayaquil continuo con los cortes de energia eletrica (CNEL EP). En los documentos con los horarios se refleja que los cortes seran divididos en dos franjas, de cuatro horas cada una.'
              },
              {
                imgSrc: TransitoImage,
              title: 'Siniestro de Transito deja dos personas fallecidas en Quito ',
                description: ' En el ultimo dia de feriado de Difuntos e Independencia de Cuenca. Un siniestro de transito se produjo en Quito.'
            },
            {
              imgSrc: MinistraImage,
            title: 'Ministra de energia tiene un plan para terminar los cortes de energia ',
              description: 'La ministra de Energia encargada, Ines Manzano, señalo la mañana de este lunes 14 de octubre de 2024 que tiene un plan para reducir los cortes de luz en Ecuador.'
          },
            
                    {
                        imgSrc: luzImage,
                        title: 'Cortes de luz en Ecuador',
                        description: 'En algunas provincias, los horarios de cortes de luz en Ecuador varían durante los dos últimos días de feriados por el Día de los Difuntos.',
                    },
                    {
                        imgSrc: camionetaImage,
                        title: 'Camioneta cae en barranco en Ecuador',
                        description: 'Una camioneta se precipitó en un barranco debido a las malas condiciones climáticas.'
                    },
                    {
                        imgSrc: TurismoImage,
                        title: 'Turismo crece en Cuenca y otras provincias en este feriado',
                        description: 'La visita de turistas a Cuenca durante el feriado de Difuntos e independencia de la ciudad ha sido positiva. Las ocupaciones hoteleras han superado el 90%, con un 97% en algunos casos. '
                    },
                    {
                        imgSrc: ProtestaImage,
                        title: 'Ecuatorianos protestan',
                        description: 'Ante los prolongados apagones en Ecuador de hasta 14 horas diarias, decenas de ecuatorianos protestaron contra el gobierno.' 
                    }
                   
                ].map((news, index) => (
                    <div className="news-card" key={index}>
                        {news.link ? (
                            <Link to={news.link}>
                                <img src={news.imgSrc} alt={news.title} />
                            </Link>
                        ) : (
                            <img src={news.imgSrc} alt={news.title} />
                        )}
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogHome;
