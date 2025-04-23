'use client';

import React, { useState, useEffect } from "react";
import { 
    MagnifyingGlassIcon, 
    ArrowPathIcon,
    SunIcon,
    EyeIcon,
    SwatchIcon
} from '@heroicons/react/24/outline';
import { Tooltip } from 'react-tooltip';
import "../styles/accesibilityWidget.css";

const AccesibilityWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [currentMode, setCurrentMode] = useState('normal');

    useEffect(() => {
        // Agregar los filtros SVG al DOM cuando el componente se monte
        if (!document.getElementById('color-filters')) {
            const svgFilters = `
                <svg id="color-filters" style="display: none">
                    <defs>
                        <filter id="protanopia">
                            <feColorMatrix
                                type="matrix"
                                values="0.567, 0.433, 0,     0, 0
                                        0.558, 0.442, 0,     0, 0
                                        0,     0.242, 0.758, 0, 0
                                        0,     0,     0,     1, 0"/>
                        </filter>
                        <filter id="deuteranopia">
                            <feColorMatrix
                                type="matrix"
                                values="0.625, 0.375, 0,   0, 0
                                        0.7,   0.3,   0,   0, 0
                                        0,     0.3,   0.7, 0, 0
                                        0,     0,     0,   1, 0"/>
                        </filter>
                        <filter id="tritanopia">
                            <feColorMatrix
                                type="matrix"
                                values="0.95, 0.05,  0,     0, 0
                                        0,    0.433, 0.567, 0, 0
                                        0,    0.475, 0.525, 0, 0
                                        0,    0,     0,     1, 0"/>
                        </filter>
                    </defs>
                </svg>
            `;
            document.body.insertAdjacentHTML('beforeend', svgFilters);
        }
    }, []);

    const applyColorFilter = (mode) => {
        // Remover el modo anterior
        document.body.classList.remove(
            'normal-mode',
            'protanopia-mode',
            'deuteranopia-mode',
            'tritanopia-mode',
            'grayscale-mode'
        );

        setCurrentMode(mode);
        
        if (mode === 'normal') {
            document.body.style.filter = 'none';
        } else if (mode === 'grayscale') {
            document.body.style.filter = 'grayscale(100%)';
        } else {
            document.body.style.filter = `url(#${mode})`;
        }
        
        document.body.classList.add(`${mode}-mode`);
    };

    const increaseFontSize = () => {
        setFontSize(prev => Math.min(prev + 2, 24));
        document.documentElement.style.fontSize = `${Math.min(fontSize + 2, 24)}px`;
    };

    const decreaseFontSize = () => {
        setFontSize(prev => Math.max(prev - 2, 12));
        document.documentElement.style.fontSize = `${Math.max(fontSize - 2, 12)}px`;
    };

    const resetFontSize = () => {
        setFontSize(16);
        document.documentElement.style.fontSize = '16px';
    };

    return (
        <aside 
            className={`accessibility-widget ${isOpen ? 'open' : ''}`}
            role="complementary"
            aria-label="Opciones de accesibilidad"
        >
            <button 
                className="widget-toggle"
                onClick={() => setIsOpen(!isOpen)}
                data-tooltip-id="accessibility-tooltip"
                data-tooltip-content="Opciones de accesibilidad"
                aria-expanded={isOpen}
                aria-controls="accessibility-controls"
            >
                <EyeIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <nav 
                id="accessibility-controls"
                className="widget-buttons"
                role="region"
                aria-label="Controles de accesibilidad"
            >
                <div role="group" aria-label="Control de tamaño de texto">
                    <button 
                        onClick={increaseFontSize}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Aumentar texto"
                        aria-label="Aumentar tamaño del texto"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />+
                    </button>
                    <button 
                        onClick={decreaseFontSize}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Disminuir texto"
                        aria-label="Disminuir tamaño del texto"
                    >
                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />-
                    </button>
                    <button 
                        onClick={resetFontSize}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Restablecer tamaño"
                        aria-label="Restablecer tamaño del texto"
                    >
                        <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>

                <div role="group" aria-label="Filtros de color">
                    <button 
                        onClick={() => applyColorFilter('normal')}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Visión Normal"
                        className={currentMode === 'normal' ? 'active' : ''}
                        aria-pressed={currentMode === 'normal'}
                        aria-label="Activar visión normal"
                    >
                        <SunIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button 
                        onClick={() => applyColorFilter('protanopia')}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Protanopia (Dificultad con rojos)"
                        className={currentMode === 'protanopia' ? 'active' : ''}
                        aria-label="Activar protanopia"
                    >
                        <SwatchIcon className="h-5 w-5 text-red-500" />
                    </button>
                    <button 
                        onClick={() => applyColorFilter('deuteranopia')}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Deuteranopia (Dificultad con verdes)"
                        className={currentMode === 'deuteranopia' ? 'active' : ''}
                        aria-label="Activar deuteranopia"
                    >
                        <SwatchIcon className="h-5 w-5 text-green-500" />
                    </button>
                    <button 
                        onClick={() => applyColorFilter('tritanopia')}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Tritanopia (Dificultad con azules)"
                        className={currentMode === 'tritanopia' ? 'active' : ''}
                        aria-label="Activar tritanopia"
                    >
                        <SwatchIcon className="h-5 w-5 text-blue-500" />
                    </button>
                    <button 
                        onClick={() => applyColorFilter('grayscale')}
                        data-tooltip-id="accessibility-tooltip"
                        data-tooltip-content="Escala de grises"
                        className={currentMode === 'grayscale' ? 'active' : ''}
                        aria-label="Activar escala de grises"
                    >
                        <SwatchIcon className="h-5 w-5 text-gray-500" aria-label="Opciones de accesibilidad" />
                    </button>
                </div>
            </nav>
            <Tooltip id="accessibility-tooltip" />
        </aside>
    );
};

export default AccesibilityWidget;