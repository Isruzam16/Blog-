import React from 'react';
import './about.css';
import NavBar from './components/NavBar';




const PersonCard = ({ name, title, description, imageUrl }) => (
    <div className="person-card">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p>{description}</p>
    </div>
);

const AboutUs = () => {
    const people = [
        {
            name: "Isaac Zambrano",
            title: "Desarrollador",
            description: "Apasionado por crear interfaces intuitivas y accesibles.",
        },
        {
            name: "Paula Quezada",
            title: "Diseñadora",
            description: "Especializada en crear experiencias de usuario únicas y atractivas.",
        },
        {
            name: "Josue Jaramillo",
            title: "Manager",
            description: "Focalizado en coordinar equipos y crear productos innovadores.",
        
        }
    ];

    return (
        <div>
            <NavBar Categoria="Contacto" />
            <section className="about-us">
                <h2>Conoce a nuestro equipo</h2>
                <div className="team">
                    {people.map((person, index) => (
                        <PersonCard key={index} {...person} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
