import React from 'react'
import './tegnologia.css';
    import IAImage from './images/ia.png';
    import TendenImage from './images/tendencias.jpg';
    import CompuImage from './images/computadora.jpg';
    import PlataformImage from './images/plataform.jpg';
    import CiberImage from './images/ciber.jpg';
    import ImagenImage from './images/imagen.jpg';
    import Nav_bar from "./components/NavBar";
    import Comments from "./components/comment"
    import SetasImage from './images/setas.jpg';
    import LeñaImage from './images/leña.jpg';
    import ZapatosImage from './images/zapatos.jpg';
    import PasamontañasImage from './images/pasamontañas.jpg';
    
    import KitImage from './images/kit.jpg';
    import AngImage from './images/angela.jpg';
    import PescadoImage from './images/pescado.jpg';
    import DukiImage from './images/duki.jpg';
    import DanaImage from './images/dana.jpg';
    
    

    
const Entretenimiento = () => {
    return (
        <div>
            <Nav_bar Categoria="Entretenimiento" />
            {/* Sección de Noticias */}
            {/* Código de las noticias */}
            <div className="noticia">
                <img src={AngImage} alt="Imagen Noticia 2" />

                <div>
                    <h2> Ángela Aguilar es nombrada mujer del año por la revista Glamour, las redes estallan</h2>
                    <p>Las decisiones marcan un antes y un después en la vida de todos, incluida la de los famosos. A partir de que la cantante Ángela Aguilar decidió unir su vida con el polémico Christian Nodal, la reputación de la artista no ha hecho más que decaer, al menos, ante la opinión pública actual.


Ángela Aguilar se sincera, por primera vez, sobre Cazzu y Christian Nodal. Después de que Cazzu, expareja de su ahora esposo, haya desmentido sus declaraciones en una entrevista con ABC News, el nombre de la mexicana se ha propulsado en redes sociales, comentarios, textos, notas periodísticas y más. La última gota que derramó el vaso fue que la revista Glamour la haya nombrado como Mujer del Año.

Cazzu desmiente a Ángela Aguilar en inédita entrevista sobre su relación con Christian Nodal: "Es mentira"

De esta forma, la hija del renombrado cantante de música regional mexicana, Pepe Aguilar, compartirá la edición de la revista latinoamericana con rostros como St. Vicent, Dulce María, Galilea Montijo, Bu Cuarón, Mabel Cadena, Macarena García y más. Sin embargo, los internautas no están, precisamente, hablando de eso.

</p>
                    
                       
                </div>
            </div>
            <div className="noticia">
                <img src={LeñaImage} alt="Imagen Noticia 2" />

                <div>
                    <h2>El leño deshollinador con el que limpiar la chimenea rápido y sin esfuerzo</h2>
                    <p>Aunque lo ideal es recurrir a un experto para la limpieza integral de una chimenea en caso de que presente algún problema de uso, cualquier usuario puede mantener esta zona de la casa lo más limpia posible de forma periódica. Deshollinar a fondo una chimenea de leña con seguridad requiere de una serie de productos básicos y tiempo invertido; sin embargo, existen soluciones químicas que facilitan su limpieza como un deshollinador continuo o, en el que caso que nos ocupa, apostando por un leño deshollinador para acelerar el proceso.

Este tipo de tronco limpia chimeneas se encuentra a un precio muy asequible y se ha convertido en el más vendido de su categoría en plataformas online como Amazon. De hecho, las personas que han confiado en él resaltan los puntos fuertes del producto como su funcionalidad, lo bien que cumple las expectativas de limpieza y la eficiencia eliminando los restos de alquitrán u hollín adheridos en el interior de la chimenea.</p>
                </div>
            </div>
            <div className="noticia">
                <img src={PescadoImage} alt="Imagen Noticia 2" />

                <div>
                    <h2>Pescado de acuicultura: clave para el futuro de la dieta mediterránea y de nuestra salud</h2>
<p>  La dieta mediterránea, en la que juegan un papel fundamental los pescados, tiene efectos positivos más que evidentes para la salud: menor riesgo de obesidad, infartos, diabetes, depresión o demencia, entre otros. La acuicultura, que ya aporta la mitad del pescado que consumimos, se presenta como la garantía sostenible para cubrir la demanda mundial de este alimento y, por lo tanto, como el ‘seguro de vida’ que proporcionará salud para todos. Ancel Keys es el nombre de un biólogo estadounidense que seguramente no le suene a la gran mayoría de la población. Él fue el responsable, a finales de los años 50, de demostrar al mundo los beneficios para la salud de uno de los grandes buques insignia de nuestra cultura: la dieta mediterránea.</p>              
  </div>
            </div>
            <div className="noticia">
                <img src={DukiImage} alt="Imagen Noticia 2" />

                <div>
                    <h2>Duki donará parte de los ingresos de sus entradas para ayudar a los afectados por las inundaciones en España: el rapero se presentará en Ecuador en 2025</h2>
<p>A propósito de su gira Ameri World Tour 2025, el cantante argentino dará conciertos en 16 países diferentes, 4 de ellos serán en España.</p>
<p>Con motivo de las fuertes inundaciones que afectaron a la provincia de Valencia, en España, Duki anunció que parte de las ganancias de sus shows irán para recaudar fondos y ayudar a las víctimas del desastre. Así lo contaron en Arriba Argentinos.

-ePubs Advertisement-





A través de un video, el propio artista comunicó la noticia a través de sus redes sociales: “Le mando un beso y un abrazo a mi gente de España. Sé la situación difícil que está pasando Valencia, creo que todo el mundo lo sabe, y con mi equipo queríamos ver la forma en la que podíamos ayudar”.</p>
                </div>
            </div>
            <div className="noticia">
                <img src={DanaImage} alt="Imagen Noticia 2" />

                <div>
                    <h2> Danna Paola prepara documental sobre su vida y esto es lo que se sabe de ‘Danna: Tenemos que hablar’</h2>
                    <p>Danna Paola, ahora conocida artísticamente como Danna, quiere contar su historia y que nadie más lo haga por ella. Esto fue lo que dijo en un reciente video publicado a través de sus redes sociales, donde confirma el estreno de Danna: Tenemos que hablar, un documental en el que mostrará su lado más vulnerable, a propósito de una de sus canciones más personales, llamada Tenemos que hablar, que forma parte de su más reciente producción musical.

“En la profundidad de mi oscuridad hallé mi verdad, un alma envuelta en drama”, mencionaba la cantante en el tráiler que compartió en su cuenta oficial de Instagram, mientras aparecían imágenes de la artista cuando era una niña y ahora con 29 años.

El documental se estrenará el 27 de noviembre de 2024 en la plataforma de streaming de Disney+ y en él podremos ver cómo es la vida del espectáculo, desde sus primeros pasos como actriz en la industria del cine y la televisión hasta su carrera como cantante, la faceta que más está explorando en estos momentos.</p>
 </div>
            </div>
            
            <Comments Categoria="tecnologia"/>
        </div>
    );
};



export default Entretenimiento
