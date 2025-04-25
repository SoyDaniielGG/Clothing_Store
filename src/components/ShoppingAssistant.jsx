'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { productsData } from '../data/products';
import { generateResponse } from '../lib/gemini';
import '../styles/shoppingAssistant.css';

const ShoppingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const validateProducts = (products) => {
    return products.map(product => ({
      ...product,
      precio: formatPrice(product.precio),
      categoria: product.categoria.toLowerCase(),
      genero: product.genero.toLowerCase()
    }));
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const formattedMessages = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const validatedProducts = validateProducts(productsData);

      const response = await generateResponse(
        [...formattedMessages, { role: 'user', content: userMessage }],
        validatedProducts
      );

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      let errorMessage = 'Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.';
      
      if (error.message.includes('API key') || error.message.includes('authentication')) {
        errorMessage = 'Error de autenticación. Por favor, verifica la configuración de la API.';
      } else if (error.message.includes('quota') || error.message.includes('limit')) {
        errorMessage = 'Lo siento, hemos alcanzado el límite de uso de la API. Por favor, intenta más tarde.';
      } else if (error.message.includes('productos') || error.message.includes('datos')) {
        errorMessage = 'Lo siento, hubo un error al procesar la información de los productos.';
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessage 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Removed unused processUserQuery function
  // const processUserQuery = async (query) => {
  //   const products = productsData;
  //   const lowerQuery = query.toLowerCase();
  //
  //   if (lowerQuery.includes('precio') || lowerQuery.includes('cost')) {
  //     const productName = extractProductName(query);
  //     const product = products.find(p => p.nombre.toLowerCase().includes(productName));
  //     if (product) {
  //       return `El precio de ${product.nombre} es $${product.precio.toLocaleString('es-CO')} COP`;
  //     }
  //   }
  //
  //   if (lowerQuery.includes('categoría') || lowerQuery.includes('tipo')) {
  //     const categories = [...new Set(products.map(p => p.categoria))];
  //     return `Tenemos las siguientes categorías: ${categories.join(', ')}`;
  //   }
  //
  //   return 'Hola, soy tu asistente de compras. ¿En qué puedo ayudarte? Puedes preguntarme sobre precios, categorías o buscar productos específicos.';
  // };

  return (
    <>
      <button 
        className="assistant-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente de compras"
      >
        <FaRobot size={24} />
      </button>

      {isOpen && (
        <div className="assistant-container">
          <div className="assistant-header">
            <h2>Asistente de Compras</h2>
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar asistente"
            >
              <FaTimes />
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.role}`}
                role={message.role === 'assistant' ? 'status' : 'none'}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="message assistant loading">
                Pensando...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu pregunta..."
              aria-label="Mensaje para el asistente"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              aria-label="Enviar mensaje"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingAssistant;