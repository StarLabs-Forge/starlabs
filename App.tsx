import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollManager } from "./components/layout/ScrollManager";
import { Loading } from "./views/Loading";

// Cada vista se carga bajo demanda: el bundle inicial trae solo la Home, y
// <Loading /> es lo que se ve mientras llega el resto — el mismo papel que
// cumplía app/loading.tsx en Next, ahora explícito como fallback de Suspense.
const HomeView = lazy(() => import("./views/HomeView"));
const ServiciosView = lazy(() => import("./views/ServiciosView"));
const PortafolioView = lazy(() => import("./views/PortafolioView"));
const ContactoView = lazy(() => import("./views/ContactoView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

export function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/servicios" element={<ServiciosView />} />
          <Route path="/portafolio" element={<PortafolioView />} />
          <Route path="/contacto" element={<ContactoView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
