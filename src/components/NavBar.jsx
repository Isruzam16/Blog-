import { useState } from "react";
import '../styles.css'
const NavBar = (props) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen(prev => !prev);
};
return (
<div>
<nav className="navbar">
    <a href="/">Inicio</a>
    <a href="/Contacto">Contacto</a>
    <a href="/addNoticias">Agregar noticias</a>
</nav>
<h1 className="header-title">{props.Categoria}</h1>


<div className="date">
    <p>6 de Noviembre del 2024</p>
</div>

<div className="menu">
    <button className="menu-btn" onClick={toggleMenu}>Categorías</button>
    {isMenuOpen && (
        <div className="menu-content">
            <a href="/Tecnologia">Tecnología</a>
            <a href="Estilos">Estilo de Vida</a>
            <a href="/Deportes">Deportes</a>
            <a href="/Entretenimiento">Entretenimiento</a>
        </div>
    )}
</div>
</div>
)
}

export default NavBar;