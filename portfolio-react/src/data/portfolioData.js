export const portfolioData = {
    personalInfo: {
        name: "Angel Torija Sanchez-Jara",
        role: "Full Stack Developer",
        location: {
            label: "España, Getafe",
            lat: 40.0667,
            lon: -3.7000
        },
        aboutShort: "> Diseñando el futuro a través de código limpio y experiencias interactivas.",
        cvLink: "#",
        skills: ["React", "Angular", "TypeScript", "C#", ".Net", "Java", "Python", "Clean Code"],
        softSkills: ["Arquitectura Limpia", "Resolución de Problemas", "Trabajo en Equipo", "Adaptabilidad"],
    },

    stats: [
        { label: "Años Exp.", value: "2+" },
        { label: "Proyectos", value: "20+" },
        { label: "Tecnologías", value: "12+" },
        { label: "Commits", value: "1k+" }
    ],

    education: [
        {
            degree: "Grado en Ingeniería Informática",
            institution: "Universidad de Castilla-La Mancha",
            period: "2019 - 2023",
            details: "Especialización en Ingeniería del Software."
        }
    ],

    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 - Intermedio Alto" }
    ],

    certifications: [
        { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
        { name: "Cisco CCNA", issuer: "Cisco", year: "2022" }
    ],

    experience: [
        {
            company: "OriginPath",
            role: "Full Stack Developer",
            period: "2023 - Jun 2024",
            location: {
                label: "Leganés, España",
                lat: 40.3281,
                lon: -3.7636
            },
            description: "Desarrollo de aplicaciones empresariales escalables usando .NET Core y Angular.",
            secrets: ["Microservicios", "Azure DevOps", "Arquitectura Limpia"]
        },
        {
            company: "Freelance",
            role: "Web Developer",
            period: "2022 - 2023",
            location: {
                label: "Remoto (España)",
                lat: 38.9861,
                lon: -3.9272
            },
            description: "Creación de soluciones personalizadas para clientes internacionales.",
            secrets: ["SEO Optimization", "React Native", "Firebase"]
        }
    ],

    navigation: [
        { label: 'Sobre Mí', href: '#about', icon: '👤' },
        { label: 'Experiencia', href: '#experience', icon: '💼' },
        { label: 'Formación', href: '#credentials', icon: '🎓' },
        { label: 'Proyectos', href: '#projects', icon: '💻' },
        { label: 'Contacto', href: '#contact', icon: '✉️' }
    ],

    projects: [
        {
            id: 1,
            name: 'Vision.OS',
            description: 'Plataforma de visualización de datos en tiempo real construida con React y WebGL.',
            link: '#',
            tags: ['React', 'D3.js', 'WebGL']
        },
        {
            id: 2,
            name: 'Nexus DB',
            description: 'Sistema de base de datos distribuida con replicación automática e interfaz de administración.',
            link: '#',
            tags: ['Node.js', 'GraphQL', 'K8s']
        },
        {
            id: 3,
            name: 'Cyber Sentinel',
            description: 'Dashboard de seguridad para monitorización de ataques y análisis de vulnerabilidades.',
            link: '#',
            tags: ['Rust', 'Wasm', 'TypeScript']
        },
    ],

    socialLinks: [
        { name: 'GitHub', url: '#', icon: '→' },
        { name: 'LinkedIn', url: '#', icon: '→' },
        { name: 'Twitter', url: '#', icon: '→' }
    ],

};
