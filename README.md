# Clothing Store

Tienda de ropa en línea construida con Next.js y React.

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI básicos
│   └── features/         # Componentes específicos de funcionalidad
├── context/              # Contextos de React
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── styles/               # Estilos globales y temas
└── types/                # Definiciones de tipos
```

## Tecnologías

- Next.js
- React
- Tailwind CSS
- ESLint
- Prettier

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia la aplicación en producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier

## Convenciones

- Componentes: PascalCase (ej: `Button.jsx`)
- Hooks: camelCase con prefijo 'use' (ej: `useCart.jsx`)
- Archivos de estilos: kebab-case (ej: `globals.css`)
- Props: camelCase
- Eventos: prefijo 'handle' (ej: `handleClick`)

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
