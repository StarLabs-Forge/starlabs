import "./Identity.css";

// Sobre StarLabs (Home). Filosofía e identidad — quiénes somos y cómo
// pensamos — no proceso: el paso a paso de cómo trabajamos ya vive en
// <Process /> (sección "Proceso"), no se repite acá.
const STAGES = [
  {
    num: "01",
    kicker: "Curiosidad",
    title: "Siempre hay otra pregunta.",
    description: "Cuestionamos, exploramos y buscamos nuevas posibilidades.",
  },
  {
    num: "02",
    kicker: "Propósito",
    title: "La tecnología debe servir para algo.",
    description: "Creamos con una razón clara: resolver, mejorar o hacer posible.",
  },
  {
    num: "03",
    kicker: "Creación",
    title: "No esperamos a que alguien nos diga qué construir.",
    description: "También desarrollamos nuestras propias ideas y productos.",
  },
];

export function Identity() {
  return (
    <>
      <div className="about-lead">
        <p>
          En StarLabs creemos que la tecnología tiene sentido cuando resuelve algo, abre una posibilidad o permite
          construir algo que antes no existía.
        </p>
      </div>

      <div className="steps">
        {STAGES.map((stage) => (
          <div className="step" key={stage.num}>
            <span className="step-kicker">{stage.kicker}</span>
            <span className="num">{stage.num}</span>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
