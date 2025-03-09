# Proyecto de Gestión de Ventas para Tienda de Ropa

## Descripción del Proyecto
Este es un sistema de gestión de ventas desarrollado con **React.js**. Actualmente, el proyecto cuenta con un frontend que permite visualizar productos de ropa, ordenarlos por categorias, ver sus nombres y precios, y agregarlos a un carrito de compras. El backend aún no ha sido desarrollado, pero se planea implementar con **Node.js** y **MySQL** en futuras actualizaciones.

El proyecto también prioriza la accesibilidad mediante el uso de HTML semántico, un widget de accesibilidad y estilos CSS diseñados para mejorar la experiencia de usuarios con discapacidades visuales.

## Instrucciones de Instalación
### Requisitos previos
- Node.js instalado en tu máquina.

### Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/usuario/proyecto-gestion-ventas.git
   cd proyecto-gestion-ventas
   ```
2. Instala las dependencias del frontend:
   ```sh
   cd frontend
   npm install
   ```
3. Inicia el frontend:
   ```sh
   npm run dev
   ```

## Uso
### Página de Inicio
- La página principal da la bienvenida a los usuarios y muestra una imagen de fondo representativa de la tienda.
- Incluye un menú de navegación con accesos a productos y al carrito.

![Pagina de Inicio](/public/images-doc/home.jpg)

### Exploración de Productos
- Los usuarios pueden ver una lista de productos con imágenes, nombres y precios.
- Existen filtros por categoría como "Caballero", "Dama" y "Niños".

![Pagina de Inicio](/public/images-doc/products.jpg)


### Agregar al Carrito
- Cada producto tiene un botón para agregarlo al carrito de compras.
- Al agregar un producto, se refleja en el carrito con su cantidad y precio.
- Se pueden modificar las cantidades o eliminar productos del carrito.

![Pagina de Inicio](/public/images-doc/productCard.jpg)

### Carrito de Compras
- Muestra los productos seleccionados con su imagen, nombre, cantidad y precio total.
- Incluye opciones para ajustar la cantidad de productos o eliminarlos.
- Sección de resumen con el total de la compra y botones para vaciar el carrito o proceder al pago (funcionalidad futura).

![Pagina de Inicio](/public/images-doc/cart.jpg)


# Accesibilidad y estilos
## HTML Semántico
- Se ha utilizado HTML semántico para mejorar la navegabilidad y facilitar el uso de tecnologías de asistencia como lectores de pantalla.

- Se han empleado etiquetas adecuadas como 
```html
  <header>, <nav>, <main>, <section>, <article>, <button> y <footer>.
```
## Widget de Accesibilidad
- Se ha integrado un widget de accesibilidad que permite ajustar opciones como modo de alto contraste, tamaño de fuente y otros ajustes visuales.
- Se encuentra ubicado en la parte inferior derecha de la pantalla
![Widget de Accesibilidad](/public/images-doc/widget.jpg)

### Las opciones de accesibilidad incluyen:
  - Alternar contraste
  
![Widget de Accesibilidad](/public/images-doc/contraste.jpg)

  - Modo protanopia

![Widget de Accesibilidad](/public/images-doc/protanopia.jpg)

  - Modo deuteranopia

![Widget de Accesibilidad](/public/images-doc/deuteranopia.jpg)

  - Modo tritatomia

![Widget de Accesibilidad](/public/images-doc/tritanopia.jpg)

  - Escala de grises
![Widget de Accesibilidad](/public/images-doc/grises.jpg)

### Acerca de
- Se agregó una pagina donde se encientra información general de la tienda

![Widget de Accesibilidad](/public/images-doc/about1.jpg)
![Widget de Accesibilidad](/public/images-doc/about2.jpg)


  
## Contribuciones
Si deseas contribuir al proyecto:
1. Realiza un fork del repositorio.
2. Crea una nueva rama con tu contribución.
   ```sh
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza los cambios y sube tu rama.
   ```sh
   git commit -m "Agregada nueva funcionalidad"
   git push origin mi-nueva-funcionalidad
   ```
4. Crea un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](./LICENSE).