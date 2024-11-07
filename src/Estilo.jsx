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

    

const Estilo = () => {
  
        return (
            <div>
                <Nav_bar Categoria="Estilo de vida" />
               
                <div className="noticia">
                    <img src={SetasImage} alt="Imagen Noticia 2" />
    
                    <div>
                        <h2> Esta es la navaja ideal para recoger setas</h2>
                        <p>
                        Salir al campo o al monte es uno de los mayores disfrutes que nos regala el otoño. Tras los calurosos meses veraniegos, los colores de los árboles y la caída de las hojas modifican el paisaje de bosques y valles. Precisamente, una actividad recurrente, agradable y que se puede hacer solo, en familia o con amigos es la de recolectar setas. Pero antes de echarse a la aventura y arrancarlas del suelo con las manos o mediante unas tijeras de cocina, es recomendable elegir una buena navaja para setas. En el mercado hay decenas de ellas, lo sabemos. Por eso, nos hemos decantado por el modelo top ventas a la venta en Amazon.

La mejor navaja para setas que se puede llevar en el bolsillo del pantalón, la mochila o en la bandolera de pecho reúne más de 600 valoraciones en dicha plataforma online y una nota media de prestigio: 4,6 sobre 5 estrellas. Los usuarios la definen como una navaja para coger setas “robusta”, “estable” y “duradera”. Su “comodidad” y “utilidad” también están fuera de dudas.
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
                    <img src={ZapatosImage} alt="Imagen Noticia 2" />
    
                    <div>
                        <h2>Así puedes limpiar tus zapatillas sin tener que meterlas a la lavadora</h2>
                        <p>Cada prenda de ropa tiene su procedimiento de limpieza, en especial, cuando recurrimos a la lavadora para llevarlo a cabo. Sin embargo, hay personas que prefieren hacer una limpieza profunda a mano, como sucede con el calzado, por ejemplo. Los motivos pueden ser diversos: desde no contar con una bolsa especial para proteger las partes internas del electrodoméstico y evitar deformaciones hasta no quedar del todo satisfecho con el resultado a máquina. Por ello, existen en el mercado productos especializados para limpiar zapatillas o zapatos.</p>
                    </div>
                </div>
                <div className="noticia">
                    <img src={PasamontañasImage} alt="Imagen Noticia 2" />
    
                    <div>
                        <h2>El pasamontañas que sí protege del frío: antiviento y con forro polar</h2>
                        <p>Cuando se acercan aquellos días donde el termómetro marca las temperaturas más bajas del año, protegernos del frío es indispensable: gorros de invierno, una pashmina suave, guantes calefactables, son algunos de los básicos para mantener mejor el calor corporal cuando estamos en la calle.

Dentro de la amplia gama de opciones que se tienen para cubrir la cabeza, una prenda que desde hace algún tiempo viene ganando popularidad es el pasamontañas. Se trata de un accesorio que cubre completamente la cabeza y el cuello dejando al descubierto la boca, la nariz y los ojos. Aunque lo caracteriza su color negro, en el caso de las mujeres se ha popularizado su adaptación con diseños más llamativos y colores en tendencia, prenda que se conoce como balaclava.</p>
                    </div>
                </div>
                <div className="noticia">
                    <img src={KitImage} alt="Imagen Noticia 2" />
    
                    <div>
                        <h2>El kit completo de primeros auxilios perfecto para cualquier ocasión</h2>
<p> Contar con un botiquín de primeros auxilios es una necesidad que muchas veces subestimamos hasta que nos enfrentamos a una emergencia. Tener a mano los suministros adecuados para tratar heridas menores, controlar el sangrado o aliviar dolores iniciales puede marcar una gran diferencia antes de que llegue ayuda profesional.

En este sentido, cuando se trata de emergencias, estar preparado marca la diferencia, y este kit completo de primeros auxilios con 90 artículos está diseñado precisamente para eso. Este conjunto es ideal tanto para el hogar como para el trabajo o para llevar de viaje, ya que ofrece una gran variedad de suministros esenciales, como vendajes, gasas, tijeras y otros elementos clave para tratar heridas leves, cortes y contusiones. </p>                   
     </div>
                </div>
                
                <Comments Categoria="tecnologia"/>
            </div>
        );
    };
    
   
    
export default Estilo
