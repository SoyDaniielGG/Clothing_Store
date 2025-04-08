import Link from "next/link";
import { Providers } from './providers';
import AccesibilityWidget from "../components/accesibilityWidget";
import Footer from "../components/footer";
import CartCounter from "../components/cartCounter";
import "./globals.css";

export const metadata = {
  title: 'Clothing Store',
  description: 'Tu tienda de ropa favorita',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <header>
            <nav>
              <div className="logo">
                <Link href="/"></Link>
              </div>
              <div className="nav-links">
                <Link href="/">Inicio</Link>
                <Link href="/productos">Productos</Link>
                <Link href="/carrito">
                  <CartCounter />
                </Link>
                <Link href="/acerca-de">Acerca de</Link>
              </div>
            </nav>
          </header>
          <main>
            {children}
          </main>
          <AccesibilityWidget />
          <Footer />
          
          {/* Filtros SVG para daltonismo */}
          <svg className="color-filters">
            <defs>
              <filter id="protanopia-filter">
                <feColorMatrix
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
                          0.558, 0.442, 0,     0, 0
                          0,     0.242, 0.758, 0, 0
                          0,     0,     0,     1, 0"/>
              </filter>
              <filter id="deuteranopia-filter">
                <feColorMatrix
                  type="matrix"
                  values="0.625, 0.375, 0,   0, 0
                          0.7,   0.3,   0,   0, 0
                          0,     0.3,   0.7, 0, 0
                          0,     0,     0,   1, 0"/>
              </filter>
              <filter id="tritanopia-filter">
                <feColorMatrix
                  type="matrix"
                  values="0.95, 0.05,  0,     0, 0
                          0,    0.433, 0.567, 0, 0
                          0,    0.475, 0.525, 0, 0
                          0,    0,     0,     1, 0"/>
              </filter>
            </defs>
          </svg>
        </Providers>
      </body>
    </html>
  );
}
