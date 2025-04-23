# Clothing Store - Tienda de Ropa Online

## 📋 Descripción
Clothing Store es una tienda de ropa online moderna y accesible, desarrollada con Next.js y React. El proyecto se enfoca en proporcionar una excelente experiencia de usuario a través de un diseño responsivo, accesibilidad y un asistente de compras inteligente.

## 🚀 Características Principales

### 🛍️ Asistente de Compras Inteligente
- Integración con Google Gemini AI para respuestas contextuales
- Capacidad de búsqueda y recomendación de productos
- Interfaz de chat intuitiva y accesible
- Respuestas en tiempo real sobre precios, categorías y disponibilidad

### ♿ Widget de Accesibilidad
El widget de accesibilidad incluye las siguientes opciones:

1. **Modo Oscuro/Claro**
   - Reduce la fatiga visual
   - Mejora el contraste para usuarios con sensibilidad a la luz
   - Opción de cambio automático según preferencias del sistema

2. **Aumentar/Disminuir Tamaño de Texto**
   - Permite ajustar el tamaño de fuente según necesidades
   - Mejora la legibilidad para usuarios con problemas de visión
   - Mantiene la proporción y diseño del sitio

3. **Alto Contraste**
   - Mejora la visibilidad para usuarios con problemas de visión
   - Aumenta el contraste entre texto y fondo
   - Facilita la lectura en diferentes condiciones de luz

4. **Lector de Pantalla**
   - Compatibilidad con lectores de pantalla
   - Estructura semántica para navegación eficiente
   - Descripciones alternativas para imágenes

5. **Navegación por Teclado**
   - Soporte completo para navegación con teclado
   - Atajos de teclado para funciones principales
   - Indicadores visuales de foco

### 🎨 Diseño y Estructura

#### HTML Semántico
- Uso de etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Estructura jerárquica clara para mejor SEO y accesibilidad
- Etiquetas ARIA para mejorar la accesibilidad
- Metaetiquetas para SEO y compatibilidad móvil

#### Estilos CSS
- Diseño responsivo con media queries
- Sistema de grid y flexbox para layouts modernos
- Variables CSS para consistencia en colores y espaciado
- Animaciones suaves para mejor UX
- Diseño mobile-first

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd clothing-store
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crear un archivo `.env.local` con las siguientes variables:
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_dominio
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_proyecto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

# Google AI (Gemini)
NEXT_PUBLIC_GEMINI_API_KEY=tu_api_key_de_gemini
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
clothing-store/
├── src/
│   ├── components/     # Componentes React
│   ├── data/          # Datos estáticos
│   ├── lib/           # Utilidades y configuraciones
│   ├── styles/        # Estilos CSS
│   └── pages/         # Páginas de Next.js
├── public/            # Archivos estáticos
└── package.json       # Dependencias y scripts
```

## 🔧 Tecnologías Utilizadas

- **Frontend**: Next.js, React, CSS
- **Base de Datos**: Firebase
- **Autenticación**: NextAuth
- **IA**: Google Gemini AI
- **Despliegue**: Vercel

## 🎯 Mejoras de UX Implementadas

1. **Rendimiento**
   - Carga progresiva de imágenes
   - Optimización de recursos estáticos
   - Caché de respuestas del asistente

2. **Accesibilidad**
   - Cumplimiento WCAG 2.1
   - Soporte para lectores de pantalla
   - Controles de accesibilidad personalizables

3. **Interactividad**
   - Feedback visual inmediato
   - Transiciones suaves
   - Estados de carga claros

4. **Responsividad**
   - Diseño adaptativo
   - Touch-friendly en móviles
   - Breakpoints optimizados


## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
