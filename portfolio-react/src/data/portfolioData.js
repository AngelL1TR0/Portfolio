export const portfolioData = {
    personalInfo: {
        name: import.meta.env.VITE_USER_NAME || "Angel Torija",
        role: import.meta.env.VITE_USER_ROLE || "Full Stack Developer",
        location: {
            label: import.meta.env.VITE_LOCATION_LABEL || "España",
            lat: parseFloat(import.meta.env.VITE_LOCATION_LAT) || 40.4168,
            lon: parseFloat(import.meta.env.VITE_LOCATION_LON) || -3.7038
        },
        aboutShort: import.meta.env.VITE_BIO_SHORT || "> Diseñando el futuro a través de código limpio.",
        cvLink: "#",
        skills: ["React", "Angular", "TypeScript", "C#", ".NET Core", "Java", "Spring Boot", "Web API", "SQL Server", "PostgreSQL", "Azure DevOps", "Docker", "TFS", "Git", "Agile", "Agentes IA", "CQRS", "Clean Architecture", "SOLID", "Microservices", "Clean Code"],
        softSkills: ["Liderazgo Técnico", "Resolución de Problemas Críticos", "Visión de Negocio y Producto", "Metodologías Ágiles (Scrum/Kanban)", "Pensamiento Analítico", "Comunicación en Entornos Enterprise", "Optimización de Procesos", "Adaptabilidad Tecnológica"],
    },

    stats: [
        { label: "Años Exp.", value: "3+" },
        { label: "Proyectos", value: "10+" },
        { label: "Tecnologías", value: "12+" },
        { label: "Commits", value: "1k+" }
    ],

    education: [
        {
            degree: "Desarrollo de aplicaciones multiplataforma",
            institution: "I.E.S. Federica Montseny",
            period: "2021 - 2023",
            details: "Especialización en desarrollo de aplicaciones."
        }
    ],

    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B1 - Intermedio, Profesional" }
    ],

    certifications: [],
    /* 
    certifications_data: [
        { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
        { name: "Cisco CCNA", issuer: "Cisco", year: "2022" }
    ],
    */

    experience: [
        {
            company: "OriginPath Group",
            role: "Full Stack Developer",
            period: "Sep 2023 - Jun 2024",
            location: {
                label: "Leganés, Madrid (España)",
                lat: 40.3281,
                lon: -3.7636
            },
            description: "Liderazgo técnico en la arquitectura y desarrollo de soluciones Enterprise a medida. Implementación de microservicios robustos y sistemas altamente escalables bajo estándares de Arquitectura Limpia, optimizando flujos de trabajo en entornos distribuidos.",
            secrets: ["Java", "Spring Boot", ".NET", "C#", "Angular", "SQL Server", "PostgreSQL", "TFS", "Azure DevOps", "Microservicios", "Arquitectura Limpia"]
        },
        {
            company: "Malthus Darwin",
            role: "Full Stack Developer",
            period: "Sep 2024 - Dic 2025",
            location: {
                label: "Getafe, Madrid (España)",
                lat: 40.3167,
                lon: -3.7333
            },
            description: "Ingeniería de software de alta precisión para gigantes del sector aeroespacial (T-SYSTEMS y AIRBUS). Liderazgo en la migración crítica de sistemas legacy hacia arquitecturas modernas y despliegue de protocolos de seguridad avanzados en entornos cloud-ready.",
            secrets: ["C#", ".NET", "Angular", "SQL Server", "PostgreSQL", "TFS", "Azure DevOps", "Clean Code", "Arquitectura Limpia"]
        },
        {
            company: "Sotec Consulting",
            role: "Full Stack Developer",
            period: "Dic 2025 - Mar 2026",
            location: {
                label: "Arguelles, Madrid (España)",
                lat: 40.4236,
                lon: -3.7157
            },
            description: "Desarrollo y optimización de plataforma crítica de matriculación para la UNIVERSIDAD PONTIFICIA DE COMILLAS. Implementación de arquitecturas CQRS, integración de agentes de IA y optimización de flujos transaccionales de alta disponibilidad para el sector universitario.",
            secrets: ["C#", ".NET", "Angular", "SQL Server", "PostgreSQL", "TFS", "Azure DevOps", "Claude", "Agentes IA", "Estructura de negocio", "CQRS"]
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
            name: 'Portfolio React',
            description: 'Portfolio profesional de alto rendimiento con estética Master Hub y micro-interacciones avanzadas.',
            link: import.meta.env.VITE_GITHUB_URL_portfolio || '#',
            tags: ['React', 'Vanilla CSS', 'Framer Motion']
        },
        {
            id: 2,
            name: 'PetFind',
            description: 'Aplicación movil dedicada a encontrar mascotas para pasear juntas.',
            link: import.meta.env.VITE_GITHUB_URL_pet || '#',
            tags: ['Node.js', 'C#', 'PostgreSQL', 'TypeScript']
        },
        {
            id: 3,
            name: 'TerminalResults',
            description: 'Aplicación para mostrar resultados de futbol en la terminal como antiguamente lo hacia el teletexto.',
            link: import.meta.env.VITE_GITHUB_URL_terminal || '#',
            tags: ['Python', 'Terminal', 'API REST', 'JSON']
        },
    ],

    socialLinks: [
        { name: 'GitHub', url: import.meta.env.VITE_GITHUB_URL || '#', icon: '→' },
        { name: 'LinkedIn', url: import.meta.env.VITE_LINKEDIN_URL || '#', icon: '→' },
    ],

};
