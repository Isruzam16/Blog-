import React, { useState, useEffect } from 'react';
import './noticias.css';
import Nav_Bar from "./NavBar"

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputFoto, setInputFoto] = useState('');
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // Clave única para almacenar noticias en localStorage
    const localStorageKey = 'noticias';

    // Cargar noticias desde localStorage al montar el componente
    useEffect(() => {
        const noticiasGuardadas = localStorage.getItem(localStorageKey);
        if (noticiasGuardadas) {
            setNoticias(JSON.parse(noticiasGuardadas));
        }
    }, []);

    // Función para actualizar las noticias en localStorage
    const guardarNoticias = (noticiasActualizadas) => {
        localStorage.setItem(localStorageKey, JSON.stringify(noticiasActualizadas));
        setNoticias(noticiasActualizadas);
    };

    // Función para publicar o actualizar noticias
    const publicarNoticia = () => {
        if (inputTitle.trim() === "" || inputDescripcion.trim() === "") return;

        const nuevaNoticia = {
            title: inputTitle,
            descripcion: inputDescripcion,
        };

        // Solo agregar la foto si hay una URL de imagen seleccionada
        if (inputFoto) {
            nuevaNoticia.foto = inputFoto;
        }

        if (editIndex !== null) {
            const noticiasActualizadas = noticias.map((noticia, index) =>
                index === editIndex ? nuevaNoticia : noticia
            );
            guardarNoticias(noticiasActualizadas);
            setEditIndex(null);
        } else {
            const noticiasActualizadas = [...noticias, nuevaNoticia];
            guardarNoticias(noticiasActualizadas);
        }

        // Limpiar los campos de entrada después de publicar
        setInputTitle('');
        setInputFoto('');
        setInputDescripcion('');
    };

    // Función para eliminar una noticia
    const eliminarNoticia = (index) => {
        const noticiasActualizadas = noticias.filter((_, i) => i !== index);
        guardarNoticias(noticiasActualizadas);
    };

    // Función para editar una noticia
    const editarNoticia = (index) => {
        const noticia = noticias[index];
        setInputTitle(noticia.title);
        setInputFoto(noticia.foto);
        setInputDescripcion(noticia.descripcion);
        setEditIndex(index);
    };

    // Función para manejar la selección de archivo de imagen
    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);  // Crear URL temporal para la imagen
            setInputFoto(fileURL);  // Guardar la URL temporal
        }
    };

    return (
        <div>
            <Nav_Bar Categoria = "Publica tus noticias"/>
            <div className="noticias">
                <h3>Publicar Noticias</h3>
                <input
                    type="text"
                    placeholder="Título"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFotoChange}
                />
                <textarea
                    rows="4"
                    placeholder="Descripción"
                    value={inputDescripcion}
                    onChange={(e) => setInputDescripcion(e.target.value)}
                />
                <br />
                <button onClick={publicarNoticia}>
                    {editIndex !== null ? 'Actualizar' : 'Publicar'}
                </button>
            </div>
            <h2>Noticias</h2>
            <div id="listaNoticias">
                {noticias.length === 0 ? (
                    <p>No hay noticias</p>  // Mostrar mensaje si no hay noticias
                ) : (
                    noticias.map((noticia, index) => (
                        <div key={index} className="noticia">
                            {noticia.foto && (
                                <div>
                                    <img src={noticia.foto} alt={noticia.title} style={{ width: '100px', height: 'auto' }} />
                                </div>
                            )}
                            <div>
                                <h3>{noticia.title}</h3>
                                <p>{noticia.descripcion}</p>
                            </div>
                            <div className="acciones">
                                <button onClick={() => editarNoticia(index)}>Editar</button>
                                <button onClick={() => eliminarNoticia(index)}>Eliminar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Noticias;
