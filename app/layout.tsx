import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import "../styles/tokens.css";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "StarLabs — Estudio de ingeniería de producto",
  description:
    "StarLabs diseña y construye software real para negocios reales: arquitectura, MVP y operación en producción. Systems · Web · Prebuilt · Innovations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Mismo <link> que index.html/servicios.html/etc — tokens.css referencia estos
            nombres de familia literales ("Space Grotesk", "Inter", "JetBrains Mono"),
            así que se cargan igual que en el sitio HTML en vez de via next/font
            (que generaría otro nombre de variable y rompería ese vínculo). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
