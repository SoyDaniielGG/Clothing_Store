import React, { useState } from "react";
import "../styles/accesibility.css"

const AccesibilityWidget = () => {
    //control de abir y cerrar el widget
    const [isOpen, setIsOpen] =useState(false);
    const toggleWidget = () => setIsOpen(!isOpen);
    //tamaño de fuente original
    const [fontSize, setFontSize] = useState(16);
    //aumentar tamaño de fuente del body +2px maximo hasta 24px
    const increaseFontSize = () => {
        if(fontSize < 24){
            setFontSize (fontSize +2)
            document.body.style.fontSize = `${fontSize +2}px`
        }
    }
    //disminuir el tamaño de la fuente del body -2px minimo hasta 12px
    const decreaseFontSize = () => {
        if(fontSize > 12){
            setFontSize(fontSize - 2);
            document.body.style.fontSize = `${fontSize - 2}px`
        }
    }
    //regresar a fuente original del body
    const resetFontSize = () =>{
        document.body.style.fontSize = "initial"
    }
    //control de contraste del body
    const toggleContrast = () => {
        document.body.classList.toggle("high-contrast");
    }
    //modos de accesibilidad para daltonicos
    const [colorMode, setColorMode] = useState("normal");
    const applyColorFilter = (mode) => {
        setColorMode(mode);
        switch(mode){
            case "protanopia":
                document.body.style.filter = "url(#protanopia)";
                break;
            case "deuteranopia":
                document.body.style.filter = "url(#deuteranopia)";
                break;
            case "tritanopia":
                document.body.style.filter = "url(#tritanopia)";
                break;
            case "grayscale":
                document.body.style.filter = "grayscale(100%)";
                break;
            default:
                document.body.style.filter = "none";
        }
    }
    return(
        <div className={`accesibility-widget ${isOpen ? "open": ""}`}>
            <button className="widget-btn" onClick={toggleWidget} aria-label="Opciones de accesibilidad" title="Opciones de accesibilidad">&#9855;</button>
            {isOpen && (
                <div className="widget-content">
                    <button onClick={increaseFontSize} aria-label="Aumentar tamaño del texto" title="Aumentar tamaño del texto">&#128269;+</button>
                    <button onClick={decreaseFontSize} aria-label="Disminuir tamaño del texto" title="Disminuir tamaño del texto">&#128269;-</button>
                    <button onClick={resetFontSize} aria-label="Restablecer tamaño del texto" title="Restablecer tamaño del texto">&#8634;</button>
                    <button onClick={toggleContrast} aria-label="Alternar contraste" title="Alternar Contraste">&#127763;</button>
                    <button onClick={()=>applyColorFilter("normal")} aria-label="Modo de colores normal" title="Modo de colores normal">&#127752;</button>
                    <button onClick={()=>applyColorFilter("protanopia")} aria-label="Modo protanopia" title="Modo Protanopia">&#128308;</button>
                    <button onClick={()=>applyColorFilter("deuteranopia")} aria-label="Modo deuteranopia" title="Modo Deuteranopia">&#128994;</button>
                    <button onClick={()=>applyColorFilter("tritanopia")} aria-label="Modo tritanopia" title="Modo Tritanopia">&#128309;</button>                    
                    <button onClick={()=>applyColorFilter("grayscale")} aria-label="Modo escala de grises" title="Modo escala de grises">&#9899;</button>


                </div>
            )

            }
        </div>

    )


}
export default AccesibilityWidget;