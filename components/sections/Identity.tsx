import "./Identity.css";

// Sobre StarLabs (Home). Tres conceptos que muestran la evolución
// IDEA → SOLUCIÓN → PRODUCTO — continuación directa de la promesa del Hero.
const STAGES = [
  {
    num: "01",
    kicker: "Idea",
    title: "Entendemos",
    description: "Primero entendemos tu problema.",
  },
  {
    num: "02",
    kicker: "Solución",
    title: "Construimos",
    description: "Diseñamos la solución y la hacemos realidad.",
  },
  {
    num: "03",
    kicker: "Producto",
    title: "Evolucionamos",
    description: "Seguimos mejorándola cuando tu proyecto crece.",
  },
];

export function Identity() {
  return (
    <>
      <div className="about-lead">
        <p>
          En StarLabs trabajamos contigo para transformar una idea, necesidad o problema en una solución digital
          que puedas usar, mostrar y hacer crecer.
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
