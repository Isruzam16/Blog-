import React, { useState } from 'react';
import './futbol.css';
import PuntaImage from './images/olmo.jpg';
import ChamImage from './images/champ.jpg';
import MacaraImage from './images/macara.jpg';
import UenoImage from './images/ueno.png';
import AucasImage from './images/barcelonaaucas.jpg';
import EmelecImage from './images/emelec.jpg';
import Nav_bar from './components/NavBar'
import Comments from './components/comment';

const NoticiasFutbol = () => {
    const [comentarios, setComentarios] = useState([]);
    const [inputNombre, setInputNombre] = useState('');
    const [inputComentario, setInputComentario] = useState('');

    const publicarComentario = () => {
        if (inputComentario.trim() === "" || inputNombre.trim() === "") return;

        const nuevoComentario = {
            id: Date.now(),
            nombre: inputNombre,
            texto: inputComentario
        };

        setComentarios([...comentarios, nuevoComentario]);
        setInputNombre('');
        setInputComentario('');
    };

    const eliminarComentario = (id) => {
        setComentarios(comentarios.filter(comentario => comentario.id !== id));
    };

    const editarComentario = (id) => {
        const comentario = comentarios.find(c => c.id === id);
        const nuevoTexto = prompt("Edita tu comentario:", comentario.texto);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            setComentarios(comentarios.map(c => c.id === id ? { ...c, texto: nuevoTexto } : c));
        }
    };

    return (
        <div>
            <Nav_bar Categoria ="Noticias de Deportes"/>
            
            {/* Sección de Noticias */}
            <div className="noticia">
                <img src={PuntaImage} alt="Imagen Noticia 1" />
                <div>
                    <h2>¡Más líder que nunca! Barcelona le ganó 3-1 al Espanyol en el derbi catalán y le sacó 9 puntos al Real Madrid</h2>
                    <p>Con dos de Dani Olmo y uno de Raphinha, los de Flick volvieron a sumar de a tres y estiraron su ventaja en la cima. Un arranque de temporada tremendo para los de Flick, que semana tras semana sacan cada vez más diferencia en lo más alto de la tabla de posiciones.</p>
                </div>
            </div>
            
            <div className="noticia">
                <img src={ChamImage} alt="Imagen Noticia 2" />
                <div>
                    <h2>Próximos partidos de la Champions League</h2>
                    <p>Partidos de la Champions League que se jugarán este miércoles. Se jugarán los siguientes partidos:</p>
                    <p>Shakthar VS Young Boys</p>
                    <p>Brujas VS Aston Villa</p>
                    <p>Feyenord VS RB Salzburg</p>
                    <p>PSG VS Atletico de Madrid</p>
                    <p>Bayern VS Benfica</p>
                    <p>AC Sparta Praga VS Stade Brest</p>
                    <p>Estrella Roja VS FC Barcelona</p>
                    <p>Inter VS Arsenal</p>
                    <p>Stuttgart VS Atalanta</p>
                </div>
            </div>
            <div className="noticia">
                <img src={MacaraImage} alt="Imagen Noticia 1" />
                <div>
                    <h2>Macará derrota 1-0 a Libertad en el inicio de la fecha 3 de la Liga Pro</h2>
                    <p>Macará se llevó un valioso triunfo por 1-0 en su visita a Libertad de Loja, en el primer partido de la tercera fecha de la segunda etapa de la Liga Pro. El solitario gol de Adolfo Muñoz al minuto 69 fue suficiente para que el equipo ambateño continúe su buen arranque en esta fase del torneo.

El partido se jugó en la ciudad de Loja, donde Libertad tenía la obligación de sumar tres puntos para salir de la complicada situación en la tabla de posiciones. A pesar de su esfuerzo, el equipo local no logró concretar las oportunidades generadas, especialmente a través de Cristhian Penilla, quien intentó desequilibrar con su velocidad, pero sin éxito en la finalización de las jugadas..</p>
                </div>
            </div>
            <div className="noticia">
                <img src={UenoImage} alt="Imagen Noticia 1" />
                <div>
                    <h2>La Final de la CONMEBOL Sudamericana 2024 se disputará en el Estadio “ueno La Nueva Olla”</h2>
                    <p>La Final de la CONMEBOL Sudamericana 2024 tendrá como sede el Estadio General Pablo Rojas, conocido como «ueno La Nueva Olla», en Asunción, Paraguay, el sábado 23 de noviembre de 2024.
Próximamente se ofrecerán más detalles sobre la venta de entradas para que los fanáticos de la Gran Conquista puedan disfrutar de la final.
La Confederación Sudamericana de Fútbol (CONMEBOL) comunica que la Final de la CONMEBOL Sudamericana 2024 se disputará en el Estadio General Pablo Rojas, conocido como “ueno La Nueva Olla”, en la ciudad de Asunción, Paraguay. El partido se llevará a cabo el sábado 23 de noviembre y coronará al nuevo campeón de uno de los torneos más prestigiosos del continente..</p>
                </div>
            </div>
            <div className="noticia">
                <img src={AucasImage} alt="Imagen Noticia 1" />
                <div>
                    <h2>Aucas vs. Barcelona SC: fecha, hora y dónde ver la jornada 12 de la LigaPro</h2>
<p>Barcelona SC, que ha recuperado el rumbo gracias a las victorias ante Emelec y Delfín, necesita sumar de a tres puntos para mantenerse en la pelea por ganar la segunda etapa y así asegurar su participación en la final del campeonato ecuatoriano. Además, una victoria los acercaría a la clasificación a la Copa Libertadores 2025.</p>                </div>
            </div>
            <div className="noticia">
                <img src={EmelecImage} alt="Imagen Noticia 1" />
                <div>
                    <h2>Quiere final: Liga de Quito le ganó un partido clave a Emelec en LigaPro</h2>
                    <p>El partido contó con un arranque intenso por ambos clubes, donde poco a poco los guayaquileños fueron mostrando sus intenciones por bandas, atacando por la zona de Juan Pablo Ruiz que buscaba conectar con Elkin Muñoz y Jaime Ayoví. El Rey de Copas también buscaba complicar y por medio de Alex Arce trató de conseguir el primer tanto, pero Gilmar Napa estuvo atento y en dos oportunidades apagó el incendio.

Al final del primer tiempo, un mal rechazo de Emelec cayó en los pies de Ezequiel Piovi, que desde fuera del área remató y, merced a un error de de Napa, a quien se le escapó el balón, puso en ventaja al conjunto capitalino.</p>
                </div>
            </div>

            {/* Sección de Comentarios */}
            <Comments Categoria="deportes"/>
        </div>
    );
};

export default NoticiasFutbol;
