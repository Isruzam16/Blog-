import React, { useState, useEffect } from 'react';

const Comments = ({ Categoria }) => {
    const [comentarios, setComentarios] = useState([]);
    const [inputNombre, setInputNombre] = useState('');
    const [inputComentario, setInputComentario] = useState('');

    // Crear una clave única para localStorage en función de la categoría
    const localStorageKey = `${Categoria}-c`;

    // Cargar comentarios desde localStorage al montar el componente
    useEffect(() => {
        const comentariosGuardados = localStorage.getItem(localStorageKey);
        if (comentariosGuardados) {
            setComentarios(JSON.parse(comentariosGuardados));
        }
    }, [localStorageKey]);

    // Función para actualizar los comentarios en el localStorage
    const guardarComentarios = (comentariosActualizados) => {
        localStorage.setItem(localStorageKey, JSON.stringify(comentariosActualizados));
        setComentarios(comentariosActualizados);
    };

    const publicarComentario = () => {
        if (inputComentario.trim() === "" || inputNombre.trim() === "") return;

        const nuevoComentario = {
            id: Date.now(),
            nombre: inputNombre,
            texto: inputComentario
        };

        const comentariosActualizados = [...comentarios, nuevoComentario];
        guardarComentarios(comentariosActualizados);
        setInputNombre('');
        setInputComentario('');
    };

    const eliminarComentario = (id) => {
        const comentariosActualizados = comentarios.filter(comentario => comentario.id !== id);
        guardarComentarios(comentariosActualizados);
    };

    const editarComentario = (id) => {
        const comentario = comentarios.find(c => c.id === id);
        const nuevoTexto = prompt("Edita tu comentario:", comentario.texto);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            const comentariosActualizados = comentarios.map(c =>
                c.id === id ? { ...c, texto: nuevoTexto } : c
            );
            guardarComentarios(comentariosActualizados);
        }
    };

    return (
        <div>
            <div className="comentarios">
                <h2>Comentarios</h2>
                <div id="listaComentarios">
                    {comentarios.map((comentario) => (
                        <div key={comentario.id} className="comentario">
                            <p className="nombre-comentario"><strong>{comentario.nombre}:</strong></p>
                            <p>{comentario.texto}</p>
                            <div className="acciones">
                                <button onClick={() => editarComentario(comentario.id)}>Editar</button>
                                <button onClick={() => eliminarComentario(comentario.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </div>

                <h3>¿Qué te parecieron estas noticias?</h3>
                <p>Déjanos tus comentarios</p>
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={inputNombre}
                    onChange={(e) => setInputNombre(e.target.value)}
                />
                <textarea
                    id="inputComentario"
                    rows="4"
                    placeholder="Comentario"
                    value={inputComentario}
                    onChange={(e) => setInputComentario(e.target.value)}
                />
                <br />
                <button onClick={publicarComentario}>Publicar</button>
            </div>
        </div>
    );
};

export default Comments;
