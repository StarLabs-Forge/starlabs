# Reglas de Deployment en Vercel

Guía de requisitos y mejores prácticas para desplegar StarLabs en Vercel.

## ✅ Requisitos Antes del Deploy

### 1. **Verificación de Tipos TypeScript**
Antes de hacer push, asegúrate de que no hay errores de tipo:

```bash
npm run build
```

Este comando ejecuta:
- `tsc --noEmit` — Verifica tipos sin generar archivos
- `vite build` — Construye el proyecto para producción

**❌ Bloqueo**: Cualquier error de tipo impedirá el build.

### 2. **Ningún Error de Build en Local**
Debes poder ejecutar `npm run build` sin errores antes de hacer push:

```bash
npm run build
```

El directorio `dist/` debe generarse sin warnings críticos.

### 3. **Código Limpio (Sin Deuda Técnica)**
- ❌ No dejes variables sin usar
- ❌ No dejes imports sin usar
- ❌ No dejes console.log() en producción
- ✅ Todo el código debe estar siendo utilizado

### 4. **Archivos de Configuración Necesarios**
Asegúrate de que estos archivos estén en la raíz del repositorio:

```
package.json          ✅ Requerido
vite.config.ts        ✅ Requerido
tsconfig.json         ✅ Requerido
index.html            ✅ Requerido (entry point)
main.tsx              ✅ Requerido (aplicación principal)
.gitignore            ✅ Debe excluir node_modules/ y dist/
```

## 🔧 Configuración de Vercel

### Estructura de `vercel.json` (Opcional)

Si necesitas personalizar la configuración, crea un `vercel.json` en la raíz:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Variables de Entorno

Si tu aplicación necesita variables de entorno:

1. Ve a **Settings → Environment Variables** en el dashboard de Vercel
2. Añade las variables necesarias
3. Vercel las inyectará en tiempo de build

**Nota**: Las variables de entorno en cliente deben prefijarse con `VITE_`:

```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

## 📦 Dependencias y Build

### Compatibilidad de Versiones
- **Node.js**: Vercel usa Node 18+ por defecto (compatible con nuestro proyecto)
- **npm**: Vercel instala automáticamente la versión recomendada

### Optimización del Build
Vercel automáticamente:
- Comprime assets
- Minifica CSS y JavaScript
- Optimiza imágenes
- Cachea agresivamente

## 🚫 Lo Que NO Debes Hacer

### ❌ Commits Bloqueantes
| Acción | Razón | Solución |
|--------|-------|----------|
| Push con errores TypeScript | Build fallará | Ejecuta `npm run build` localmente |
| Commit con console.log() | Degrada rendimiento | Usa herramientas de debugging reales |
| Código muerto sin usar | Aumenta bundle size | Elimina código no utilizado |
| Imports circulares | Problemas de bundling | Refactoriza estructura |
| Importar `node_modules` que no existen | Build fallará | Revisa package.json |

### ❌ Archivos No Permitidos
No commitees estos archivos (ya están en `.gitignore`):

```
node_modules/          # Vercel instala desde package.json
dist/                  # Generado en el build
.env.local             # Credenciales locales
.DS_Store              # Archivos del sistema
*.log                  # Logs
```

## 🔄 Proceso de Deployment

### Paso a Paso

1. **Desarrollo Local**
   ```bash
   npm run dev
   ```

2. **Verifica Todo Antes de Push**
   ```bash
   npm run build        # Compila TypeScript y Vite
   npm run preview      # Previsualiza el build
   ```

3. **Commit y Push**
   ```bash
   git add .
   git commit -m "descripción clara del cambio"
   git push origin main
   ```

4. **Vercel Detecta y Despliega**
   - Vercel webhook se activa automáticamente
   - Ejecuta `npm install` y `npm run build`
   - Despliega a producción si el build es exitoso

5. **Verifica Deployment**
   - Accede a `https://starlabs.vercel.app` (o tu dominio custom)
   - Revisa el dashboard de Vercel para logs

## 📊 Checklist Pre-Deploy

Antes de hacer push a main:

- [ ] `npm run build` ejecuta sin errores
- [ ] No hay warnings críticos de TypeScript
- [ ] No hay `console.log()` en código de producción
- [ ] Todos los imports están siendo usados
- [ ] Las rutas funcionan correctamente en `npm run preview`
- [ ] No hay variables de entorno hardcodeadas
- [ ] El `.gitignore` excluye `node_modules/` y `dist/`
- [ ] Los cambios están documentados en git commits claros

## 🐛 Troubleshooting

### "Build failed"
Solución:
```bash
npm install
npm run build
```
Revisa los logs para identificar el error específico.

### "404 Not Found"
Verifica que:
- `index.html` está en la raíz del proyecto
- `main.tsx` importa y renderiza `<App />`
- El `vite.config.ts` no tiene configuraciones que conflicten

### "Tipo no existe"
Ejecuta:
```bash
npx tsc --noEmit
```
Revisa los errores de tipo y corrígelos antes de hacer push.

### "Falta una dependencia"
Verifica `package.json`:
```bash
npm list <nombre-paquete>
```
Si falta, instálala:
```bash
npm install <nombre-paquete>
```

## 🔐 Seguridad

- ✅ Nunca commites archivos `.env` o con secrets
- ✅ Usa variables de entorno en Vercel para datos sensibles
- ✅ Mantén las dependencias actualizadas
- ✅ Revisa los logs de Vercel regularmente

## 📚 Recursos

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Vercel](https://vercel.com/docs)
- [React Router v6](https://reactrouter.com/)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)

---

**Última actualización**: 2026-09-09

Mantén este documento actualizado con nuevos requisitos o cambios en la configuración.
