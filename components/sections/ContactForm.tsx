"use client";

import { useState, type FormEvent } from "react";
import "./ContactForm.css";

const INTEREST_OPTIONS = ["Página web", "App", "Sistema", "Tengo una idea", "No estoy seguro"];

// Formulario mínimo del Contacto. Sin backend propio: arma un mailto: con lo
// que la persona escribió, así el mensaje llega de verdad a hola@starlabs.dev
// en vez de prometer un envío que no existe.
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Idea desde starlabs.dev — ${interest}`;
    const body = `Nombre: ${name}\nCorreo: ${email}\nQué tiene en mente: ${interest}`;
    window.location.href = `mailto:hola@starlabs.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

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
        />
      </label>
      <label>
        ¿Qué tienes en mente?
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn">
        Empecemos <span className="arrow">→</span>
      </button>
    </form>
  );
}
