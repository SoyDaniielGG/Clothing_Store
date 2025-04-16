import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sobre Nosotros</h3>
                    <p>Clothing Store, tu destino de moda favorito con las últimas tendencias.</p>
                </div>
                
                <div className="footer-section">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Clothing Store - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;