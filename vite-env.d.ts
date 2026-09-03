/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL que recibe el POST del formulario de contacto (Resend, Formspree,
   *  o una API propia). Si está vacía, el formulario cae a mailto:. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
