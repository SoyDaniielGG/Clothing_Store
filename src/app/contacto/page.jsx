'use client';

import React, { useState } from "react";
import "../../styles/contact.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <main className="contact-container" role="main">
            <h1>Contacto</h1>
            
            <section className="contact-info" aria-label="Información de contacto">
                <article className="info-card" role="contentinfo">
                    <h2>Dirección</h2>
                    <address>
                        Calle Principal #123<br />
                        Mocoa, Putumayo
                    </address>
                </article>
                <article className="info-card" role="contentinfo">
                    <h2>Teléfono</h2>
                    <address>
                        <a href="tel:+573104567890" aria-label="Llamar a nuestro número telefónico">
                            +57 310 456 7890
                        </a>
                    </address>
                </article>
                <article className="info-card" role="contentinfo">
                    <h2>Email</h2>
                    <address>
                        <a href="mailto:clothingstore@gmail.com" aria-label="Enviar correo electrónico">
                            clothingstore@gmail.com
                        </a>
                    </address>
                </article>
            </section>

            <section className="form-section" aria-label="Formulario de contacto">
                <h2>Envíanos un mensaje</h2>
                <form 
                    onSubmit={handleSubmit} 
                    className="contact-form"
                    role="form"
                    aria-label="Formulario de contacto"
                >
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-label="Ingresa tu nombre"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-label="Ingresa tu correo electrónico"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-label="Escribe tu mensaje"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="submit-button"
                        aria-label="Enviar formulario de contacto"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </section>
        </main>
    );
};

export default ContactPage;