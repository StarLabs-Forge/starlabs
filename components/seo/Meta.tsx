import { useEffect } from "react";

// Reemplaza `export const metadata` de Next. Next resolvía el <title> y la
// descripción en el servidor; aquí, al ser una SPA, cada vista los escribe al
// montarse. Suficiente para navegador e historial; si más adelante el SEO pesa,
// el paso siguiente es prerender (vite-plugin-ssg) sin tocar estas llamadas.
interface MetaProps {
  title: string;
  description?: string;
}

export function Meta({ title, description }: MetaProps) {
  useEffect(() => {
    document.title = title;
    if (!description) return;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);

  return null;
}
