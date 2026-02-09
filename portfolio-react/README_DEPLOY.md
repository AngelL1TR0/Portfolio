# Guía de Despliegue Seguro 🛡️

Para que tu portfolio sea 100% seguro y no expongas tus datos al público, he configurado el sistema para usar **Variables de Entorno**. 

### 1. El archivo `.env`
Este archivo (que ya he creado en la raíz) contiene tus datos sensibles. **NUNCA** debes subir este archivo a un repositorio público (GitHub). Está en el `.gitignore` por defecto si usas el boilerplate de Vite.

### 2. Configuración en el Hosting
Cuando subas tu web a Vercel, Netlify o GitHub Pages, deberás ir a la pestaña de **Environment Variables** en el panel de control y añadir las siguientes claves con sus valores reales:

| Variable | Descripción |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | Tu ID de servicio de EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Tu ID de plantilla de EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Tu llave pública de EmailJS |
| `VITE_CONTACT_WHATSAPP` | Tu número con prefijo (ej: +34600000000) |
| `VITE_CONTACT_EMAIL` | El email donde quieres recibir avisos |

### 3. ¿Por qué esto evita hacks?
- **Ocultamiento**: Tu email y teléfono ya no están escritos en el código que el navegador descarga.
- **Protección de API**: Nadie podrá usar tu cuenta de EmailJS para enviar spam desde otros sitios.
- **Privacidad**: Los bots que escanean webs en busca de "mailto:" o números de teléfono no encontrarán nada.

---
*Hecho con pasión por Antigravity* 🚀
