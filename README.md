# 👨‍💻 Angel Torija | Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)](https://vite.dev)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Portfolio profesional con estética cyberpunk/tactical console. Optimizado para rendimiento.

---

## 🚀 Demo

**[Ver Portfolio](https://angell1tr0.github.io/Portfolio/)**

---

## 🛠️ Tech Stack

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 19 |
| **Build** | Vite 8 |
| **UI** | React Bootstrap + Vanilla CSS |
| **Animaciones** | Framer Motion |
| **PDF** | @react-pdf/renderer |
| **Email** | EmailJS |
| **Icons** | React Icons |

---

## 📱 Secciones

- **Sobre Mí** — Perfil técnico, stats, CV descargable (ES/EN)
- **Experiencia** — Historial profesional
- **Formación** — Educación e idiomas
- **Proyectos** — Galería de trabajos
- **Contacto** — Formulario + redes sociales

---

## 🧑‍💻 Getting Started

```bash
# Clone
git clone https://github.com/AngelL1TR0/Portfolio.git

# Instalar dependencias
npm install

# Desarrollo
npm run dev
```

### 📦 Build & Deploy

```bash
# Build producción
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

---

## 📊 Performance

| Recurso | Tamaño | Gzip |
|---------|--------|------|
| JavaScript | 351 KB | 112 KB |
| CSS | 243 KB | 34 KB |
| **Total inicial** | **~594 KB** | **~146 KB** |
| react-pdf (lazy) | 1.5 MB | 509 KB |

---

## 📁 Estructura

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Credentials.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── DynamicNav.jsx
│   │   ├── ResumePDF.jsx
│   │   └── ResumeDocument.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── utils/
│   │   └── resumeTranslations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── dist/
├── package.json
└── vite.config.js
```

---

## ⚙️ Variables de Entorno

```env
VITE_CONTACT_EMAIL=tu@email.com
VITE_TLPHN=+34600000000
VITE_GITHUB_URL=https://github.com/tuusuario
VITE_LINKEDIN_URL=https://linkedin.com/in/tuusuario
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

---

## 📄 Licencia

MIT © [Angel Torija](https://github.com/AngelL1TR0)

Construido con 💙 y React
