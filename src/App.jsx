import React from "react";
import Link from "next/link";
import AccesibilityWidget from "./components/accesibilityWidget";
import Footer from "./components/footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/carrito">Carrito</Link>
        <Link href="/acerca-de">Acerca de</Link>
      </nav>
      <Component {...pageProps} />
      <AccesibilityWidget />
      <Footer />
    </>
  );
};

export default App;