// Las cuatro cosas que StarLabs construye — mismas categorías que la fila del
// Hero ("Web · Apps · Sistemas · Soluciones a medida"). Fuente única para el
// resumen en Home y para /servicios, evita que ambas vistas diverjan en texto.
export interface Service {
  id: string;
  name: string;
  hook: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "web",
    name: "Web",
    hook: "Tu negocio, online.",
    description: "Sitios que convierten.",
  },
  {
    id: "apps",
    name: "Apps",
    hook: "Tu idea, en el bolsillo.",
    description: "Experiencias para tus usuarios.",
  },
  {
    id: "sistemas",
    name: "Sistemas",
    hook: "Menos trabajo. Más control.",
    description: "Procesos que trabajan contigo.",
  },
  {
    id: "medida",
    name: "Soluciones a medida",
    hook: "Cuando lo que necesitas no existe.",
    description: "Lo construimos contigo.",
  },
];
