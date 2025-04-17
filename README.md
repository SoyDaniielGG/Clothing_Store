# Clothing Store - Tienda de Ropa

Este proyecto es una tienda de ropa en línea desarrollada con Next.js, que implementa las mejores prácticas de desarrollo web moderno, incluyendo HTML semántico, CSS modular, accesibilidad, y autenticación segura.

## 🚀 Características Principales

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **HTML Semántico**: Estructura significativa y accesible
- **CSS Modular**: Estilos organizados y mantenibles
- **Accesibilidad**: Cumplimiento con WCAG 2.1
- **Autenticación**: Integración con NextAuth y Firebase
- **Carrito de Compras**: Gestión de productos y compras

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior
- Cuenta de Firebase
- Cuenta de Google para OAuth

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd clothing-store
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env.local` en la raíz del proyecto con:
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu-secreto-seguro
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # Rutas y páginas de la aplicación
├── components/            # Componentes reutilizables
├── context/              # Contextos de React
├── lib/                  # Utilidades y configuraciones
├── styles/               # Estilos CSS
└── public/               # Archivos estáticos
```

## 📝 HTML Semántico

El proyecto implementa HTML semántico para mejorar la accesibilidad y el SEO:

### Ejemplos de Implementación

1. **Estructura de Páginas**:
```jsx
<main role="main">
  <header role="banner">
    <nav role="navigation">...</nav>
  </header>
  <section aria-labelledby="productos-titulo">
    <h2 id="productos-titulo">Productos</h2>
    ...
  </section>
  <footer role="contentinfo">...</footer>
</main>
```

2. **Formularios**:
```jsx
<form role="form" aria-labelledby="login-titulo">
  <h2 id="login-titulo">Iniciar Sesión</h2>
  <div role="group" aria-labelledby="email-label">
    <label id="email-label" htmlFor="email">Email</label>
    <input id="email" type="email" aria-required="true" />
  </div>
</form>
```

## 🎨 CSS Modular

El proyecto utiliza CSS modular para mantener los estilos organizados y evitar conflictos:

### Estructura de Estilos

1. **Archivos CSS por Componente**:
```css
/* navbar.css */
.navbar {
  /* Estilos específicos del navbar */
}

/* producto.css */
.producto-card {
  /* Estilos específicos de la tarjeta de producto */
}
```

2. **Variables Globales**:
```css
:root {
  --color-primario: #007bff;
  --color-secundario: #6c757d;
  --espaciado-base: 1rem;
}
```

## ♿ Accesibilidad

El proyecto implementa varias características de accesibilidad:

### 1. Roles ARIA
- `role="navigation"` para menús
- `role="main"` para contenido principal
- `role="form"` para formularios
- `role="alert"` para mensajes de error

### 2. Atributos ARIA
```jsx
<button 
  aria-label="Agregar al carrito"
  aria-expanded={isExpanded}
  aria-controls="carrito-contenido"
>
  Carrito
</button>
```

### 3. Navegación por Teclado
- Soporte completo para navegación con tab
- Focus visible en todos los elementos interactivos
- Atajos de teclado para funciones principales

### 4. Contraste y Legibilidad
- Relación de contraste mínima de 4.5:1
- Tamaños de fuente responsivos
- Espaciado adecuado entre elementos

## 🔐 Autenticación

El proyecto implementa autenticación usando NextAuth y Firebase:

### 1. Configuración de NextAuth
```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Configuración adicional...
});
```

### 2. Integración con Firebase
```javascript
// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Configuración de Firebase...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 3. Protección de Rutas
```jsx
// Componente protegido
import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  if (!session) {
    return <div>Acceso denegado</div>;
  }

  return <div>Contenido protegido</div>;
}
```

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run dev:clean`: Limpia la caché y reinicia el servidor
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia la aplicación en producción
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código con Prettier

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de Accesibilidad WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Documentación de Firebase](https://firebase.google.com/docs)
- [Documentación de NextAuth](https://next-auth.js.org/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
