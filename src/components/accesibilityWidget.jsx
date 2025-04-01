'use client';

import React, { useState } from "react";
import "../styles/accesibilityWidget.css";

const AccesibilityWidget = () => {
  const [fontSize, setFontSize] = useState(16);

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

  const applyColorFilter = (mode) => {
    // Primero removemos todas las clases de filtro
    document.body.classList.remove(
      'grayscale-mode',
      'protanopia-mode',
      'deuteranopia-mode',
      'tritanopia-mode',
      'high-contrast'
    );
    
    // Luego aplicamos el modo seleccionado
    if (mode !== 'normal') {
      document.body.classList.add(`${mode}-mode`);
    }
  };

  return (
    <div className="accessibility-widget">
      <div className="widget-buttons">
        <button 
          onClick={increaseFontSize}
          aria-label="Aumentar tamaño del texto"
          title="Aumentar tamaño del texto"
        >
          🔍+
        </button>
        <button 
          onClick={decreaseFontSize}
          aria-label="Disminuir tamaño del texto"
          title="Disminuir tamaño del texto"
        >
          🔍-
        </button>
        <button 
          onClick={resetFontSize}
          aria-label="Restablecer tamaño del texto"
          title="Restablecer tamaño del texto"
        >
          ↺
        </button>
        <button 
          onClick={() => applyColorFilter('normal')}
          aria-label="Modo de colores normal"
          title="Modo de colores normal"
        >
          🌈
        </button>
        <button 
          onClick={() => applyColorFilter('protanopia')}
          aria-label="Modo protanopia"
          title="Modo protanopia"
        >
          🔴
        </button>
        <button 
          onClick={() => applyColorFilter('deuteranopia')}
          aria-label="Modo deuteranopia"
          title="Modo deuteranopia"
        >
          🟢
        </button>
        <button 
          onClick={() => applyColorFilter('tritanopia')}
          aria-label="Modo tritanopia"
          title="Modo tritanopia"
        >
          🔵
        </button>
        <button 
          onClick={() => applyColorFilter('grayscale')}
          aria-label="Modo escala de grises"
          title="Modo escala de grises"
        >
          ⚫
        </button>
      </div>
    </div>
  );
};

export default AccesibilityWidget;