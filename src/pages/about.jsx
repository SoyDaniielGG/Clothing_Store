import React from "react";
import NavBar from "../components/navBar";
import "../styles/about.css";

const About = () => {
    return (
        <div className="about-container">
            <NavBar />
            <main className="about-content">
                <article className="about-section">
                    <header>
                        <h1>Acerca de Clothing Store</h1>
                    </header>
                    <section className="mission-vision" aria-labelledby="mission-vision-heading">
                        <h2 id="mission-vision-heading">Nuestra Misión y Visión</h2>
                        <article className="mission">
                            <h3>Nuestra Misión</h3>
                            <p>En Clothing Store, nos dedicamos a ofrecer moda de calidad para toda la familia a precios accesibles. Creemos en la importancia de vestir bien y sentirse bien.</p>
                        </article>
                        <article className="vision">
                            <h3>Nuestra Visión</h3>
                            <p>Ser la tienda de ropa preferida por las familias, reconocida por nuestra calidad, variedad y excelente servicio al cliente.</p>
                        </article>
                    </section>

                    <section className="values" aria-labelledby="values-heading">
                        <h2 id="values-heading">Nuestros Valores</h2>
                        <ul role="list">
                            <li><strong>Calidad:</strong> Ofrecemos productos duraderos y de excelente manufactura.</li>
                            <li><strong>Accesibilidad:</strong> Precios justos para todos nuestros clientes.</li>
                            <li><strong>Sostenibilidad:</strong> Compromiso con prácticas comerciales responsables con el medio ambiente.</li>
                            <li><strong>Inclusividad:</strong> Moda para todos, sin distinción.</li>
                        </ul>
                    </section>

                    <section className="contact-info" aria-labelledby="contact-heading">
                        <h2 id="contact-heading">Contacto</h2>
                        <address className="contact-details">
                            <p><strong>Dirección:</strong> Calle Principal #123, Ciudad</p>
                            <p><strong>Teléfono:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
                            <p><strong>Email:</strong> <a href="mailto:info@clothingstore.com">info@clothingstore.com</a></p>
                            <p><strong>Horario:</strong> Lunes a Sábado: 10:00 AM - 8:00 PM</p>
                        </address>
                    </section>

                    <section className="social-media" aria-labelledby="social-heading">
                        <h2 id="social-heading">Síguenos en Redes Sociales</h2>
                        <nav className="social-links" aria-label="Redes sociales">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Facebook">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram">Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Twitter">Twitter</a>
                        </nav>
                    </section>
                </article>
            </main>
        </div>
    );
};

export default About;