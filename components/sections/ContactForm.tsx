import { useState, type FormEvent } from "react";
import "./ContactForm.css";

const INTEREST_OPTIONS = ["Página web", "App", "Sistema", "Tengo una idea", "No estoy seguro"];

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

// Formulario mínimo del Contacto, con dos modos:
//
//   - Con VITE_CONTACT_ENDPOINT definido: hace POST del lead y la persona no
//     sale del sitio. Es el modo que queremos en producción.
//   - Sin ella: arma un mailto: con lo que escribió, como hasta ahora. Así el
//     mensaje llega de verdad a hola@starlabs.dev en vez de prometer un envío
//     que no existe.
//
// El endpoint es un servicio de formularios o una API propia; lo único que
// necesita es aceptar este JSON y responder 2xx.
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ENDPOINT) {
      const subject = `Idea desde starlabs.dev — ${interest}`;
      const body = `Nombre: ${name}\nCorreo: ${email}\nQué tiene en mente: ${interest}`;
      window.location.href = `mailto:hola@starlabs.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, interest, source: "starlabs.dev/contacto" }),
      });
      if (!response.ok) throw new Error(`El servidor respondió ${response.status}`);
      setStatus("sent");
      setName("");
      setEmail("");
      setInterest(INTEREST_OPTIONS[0]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form-done" role="status">
        <h3>Mensaje enviado.</h3>
        <p>Te respondemos a la brevedad. Gracias por escribirnos.</p>
        <button type="button" className="btn-ghost" onClick={() => setStatus("idle")}>
          Enviar otro <span className="arrow">→</span>
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          disabled={sending}
        />
      </label>
      <label>
        Correo
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          disabled={sending}
        />
      </label>
      <label>
        ¿Qué tienes en mente?
        <select value={interest} onChange={(e) => setInterest(e.target.value)} disabled={sending}>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Enviando…" : "Empecemos"} <span className="arrow">→</span>
      </button>
      {status === "error" && (
        <p className="contact-form-error" role="alert">
          No pudimos enviar el mensaje. Escríbenos a{" "}
          <a href="mailto:hola@starlabs.dev">hola@starlabs.dev</a>.
        </p>
      )}
    </form>
  );
}
