import React from 'react';
import { FaJava, FaAws, FaGithub, FaInstagram, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { VscAzure } from "react-icons/vsc";
import {
    SiJavascript, SiPython, SiC, SiCplusplus, SiR,
    SiScala, SiReact, SiAngular, SiHtml5, SiCss3, SiPhp, SiNodedotjs,
    SiElectron, SiTailwindcss, SiOracle, SiGit, SiDocker, SiFirebase, SiGooglecloud, SiTerraform,
    SiLinux, SiSpring, SiMysql, SiMongodb, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiFigma,
    SiJira, SiConfluence, SiGitlab, SiApachekafka
} from 'react-icons/si';

const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/abdemeh" },
    { icon: <FaInstagram />, url: "https://instagram.com/its.bnadem" },
    { icon: <FaXTwitter />, url: "https://x.com/_elmahdaoui" },
    { icon: <FaEnvelope />, url: "mailto:elmahdaoui@cy-tech.fr" }
];

const skills = [
    // 1. Languages
    { name: "Java", category: "languages", icon: <FaJava />, color: "#007396" },
    { name: "Python", category: "languages", icon: <SiPython />, color: "#3776AB" },
    { name: "C++", category: "languages", icon: <SiCplusplus />, color: "#00599C" },
    { name: "C", category: "languages", icon: <SiC />, color: "#A8B9CC" },
    { name: "R", category: "languages", icon: <SiR />, color: "#276DC3" },
    { name: "Scala", category: "languages", icon: <SiScala />, color: "#DC322F" },
    { name: "JavaScript", category: "languages", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "PHP", category: "languages", icon: <SiPhp />, color: "#777BB4" },

    // 2. Frontend
    { name: "React", category: "frontend", icon: <SiReact />, color: "#61DAFB" },
    { name: "Angular", category: "frontend", icon: <SiAngular />, color: "#DD0031" },
    { name: "HTML", category: "frontend", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", category: "frontend", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Electron", category: "frontend", icon: <SiElectron />, color: "#47848F" },

    // 3. Backend & Databases
    { name: "Spring", category: "backend", icon: <SiSpring />, color: "#6DB33F" },
    { name: "Node.js", category: "backend", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Oracle", category: "backend", icon: <SiOracle />, color: "#F80000" },
    { name: "MySQL", category: "backend", icon: <SiMysql />, color: "#00758F" },
    { name: "MongoDB", category: "backend", icon: <SiMongodb />, color: "#47A248" },
    { name: "Kafka", category: "backend", icon: <SiApachekafka />, color: "#9ca3af" },

    // 4. Cloud & DevOps
    { name: "AWS", category: "cloud", icon: <FaAws />, color: "#FF9900" },
    { name: "Google Cloud", category: "cloud", icon: <SiGooglecloud />, color: "#4285F4" },
    { name: "Azure", category: "cloud", icon: <VscAzure />, color: "#0078D4" },
    { name: "Docker", category: "cloud", icon: <SiDocker />, color: "#2496ED" },
    { name: "Terraform", category: "cloud", icon: <SiTerraform />, color: "#7B42BC" },
    { name: "Firebase", category: "cloud", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Linux", category: "cloud", icon: <SiLinux />, color: "#FCC624" },

    // 5. Tools & Collaboration
    { name: "Git", category: "tools", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", category: "tools", icon: <FaGithub />, color: "#9ca3af" },
    { name: "GitLab", category: "tools", icon: <SiGitlab />, color: "#FC6D26" },
    { name: "Jira", category: "tools", icon: <SiJira />, color: "#0052CC" },
    { name: "Confluence", category: "tools", icon: <SiConfluence />, color: "#172B4D" },

    // 6. Design & Media
    { name: "Figma", category: "design", icon: <SiFigma />, color: "#ff7262" },
    { name: "Adobe Photoshop", category: "design", icon: <SiAdobephotoshop />, color: "#3da1e9ff" },
    { name: "Adobe Illustrator", category: "design", icon: <SiAdobeillustrator />, color: "#e69926ff" },
    { name: "Adobe Premiere Pro", category: "design", icon: <SiAdobepremierepro />, color: "#954ed7ff" }
];

export const data = {
    fr: {
        profile: {
            name: "Abdellatif El-Mahdaoui",
            title: "Ingénieur logiciel chez Atos",
            specialization: "Ingénieur logiciel chez Atos",
            bio: "Ingénieur logiciel chez Atos, je conçois et développe des applications Full Stack avec Angular, Spring et AWS. Passionné par le Cloud Computing, je crée des solutions évolutives et des interfaces intuitives.",
            longBio: "Ingénieur logiciel chez Atos, formé à CY Tech en ingénierie du Cloud Computing, je travaille sur des applications Full Stack avec Angular, Spring et les services AWS. Mon parcours allie développement logiciel, systèmes distribués et environnements DevOps. Curieux, rigoureux et autonome, j’aime concevoir des solutions fiables et soigner l’expérience utilisateur, au travail comme dans mes projets personnels.",
            locationLabel: "Basé à:",
            specializationLabel: "Spécialisation:",
            contact: {
                address: "Talence, France",
                email: "elmahdaoui@cy-tech.fr",
                phone: "+33 7 66 10 30 72",
                github: "github.com/abdemeh",
                location: "Talence, France"
            },
            social: socialLinks
        },
        skills: skills,
        experience: [
            {
                period: "Mars 2026 - Présent",
                title: "Ingénieur Logiciel (CDI)",
                company: "Atos Pessac, France",
                description: "Contribution au développement d'un CRM pour O2. Participation au développement frontend (Angular) et backend (Spring), avec intégration de services AWS (Polly, Transcribe, S3)."
            },
            {
                period: "Avril - Août 2025",
                title: "Développeur Web (Stage)",
                company: "INFOSAT Agadir, Maroc",
                description: "Développement d'applications web et desktop (Java, JEE, Angular, PHP). Déploiement et administration de serveurs virtualisés sous Proxmox avec configuration réseau et services."
            },
            {
                period: "24 Octobre 2024",
                title: "Junior Team Manager pour un Hackathon",
                company: "Hackathon ATILLA-CY Tech, France",
                description: "Management d'une équipe de 6 personnes lors d'un hackathon. Coordination et suivi de projet pour le développement d'un jeu FPS en Python."
            },
            {
                period: "2021 - 2022",
                title: "Freelance",
                company: "UpWork / Fiverr",
                description: "Développement de scripts d'automatisation et d'outils sur mesure (Python, Selenium, Pandas, C#, PHP, PyAutoGUI) pour divers clients internationaux."
            },
            {
                period: "Avril - Juin 2020",
                title: "Développeur Junior (Stage)",
                company: "Faculté des Sciences de Fès, Maroc",
                description: "Développement d'une plateforme web de cours/examens (React, HTML, CSS, JS, PHP, MySQL)."
            }
        ],
        education: [
            {
                period: "2023 - 2026",
                title: "Cycle d'ingénieur - Ingénierie du Cloud Computing",
                institution: "CY Tech école d'ingénieurs, Pau",
                description: "Cycle d'ingénieur - Ingénierie du Cloud Computing"
            },
            {
                period: "2019 - 2020",
                title: "Licence Pro. - Systèmes d'Information et Génie Logiciel",
                institution: "Faculté des Sciences de Fès, Maroc",
                description: "Licence Pro. - Systèmes d'Information et Génie Logiciel"
            },
            {
                period: "2017 - 2019",
                title: "Diplôme universitaire de technologie - Génie Informatique",
                institution: "Ecole Supérieure de Technologie Guelmim, Maroc",
                description: "Diplôme universitaire de technologie - Génie Informatique"
            }
        ],
        projects: [
            {
                title: "MiOS Launcher",
                tags: ["Android TV", "UI/UX", "ChatGPT / Codex"],
                description: "Launcher Android TV épuré, inspiré d’Apple : flou, transparence, favoris, thèmes et veille avec horloge. Navigation à la télécommande, développé avec ChatGPT/Codex et testé sur TV Xiaomi.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/MiOS-Launcher"
            },
            {
                title: "AbdelXP.exe",
                tags: ["React 19", "Vite", "CSS3", "JavaScript"],
                description: "Application portfolio au style rétro Windows XP, avec des fenêtres déplaçables, un menu Démarrer, une barre des tâches, le support multilingue, des effets sonores et des fonds d'écran personnalisables.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/AbdelXP.exe"
            },
            {
                title: "Plateforme RGPD",
                tags: ["Python", "Flask", "React", "TailwindCSS", "Pandas", "Numpy"],
                description: "Développement d'une application web complète pour anonymiser des fichiers CSV via plusieurs méthodes (masquage, pseudonymisation, généralisation, perturbation, agrégation). Backend en Flask, frontend en React.js/TailwindCSS avec API REST.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/PlateformeRGPD"
            },
            {
                title: "Apex F1",
                tags: ["React", "Vite", "i18next", "CSS Modules", "API"],
                description: "Dashboard F1 moderne et réactif visualisant les statistiques en temps réel, les classements et les détails des pilotes. Esthétique premium 'Dark Neon' avec support bilingue.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/apex-f1"
            },
            {
                title: "Gestion de Portefeuilles Financiers",
                tags: ["Scala", "Akka HTTP", "React", "MongoDB", "TailwindCSS"],
                description: "Développement de plateforme en Scala (Akka HTTP) avec une base de données MongoDB. API REST sécurisée, authentification via JWT, interface frontend moderne avec React.js et TailwindCSS.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/GestionPortefeuillesFinance"
            },
            {
                title: "CY-Books",
                tags: ["Java", "GUI", "Management", "Algorithms"],
                description: "Application de gestion de bibliothèque complète : gestion des utilisateurs, suivi des stocks, alertes de prêts et historique. Interface graphique intuitive pour bibliothécaires.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/CY-Books"
            }
        ],
        ui: {
            nav: {
                home: "Accueil",
                portfolio: "Projets",
                about: "À propos",
                resume: "Parcours",
                contact: "Contact"
            },
            hero: {
                badge: "Rencontrons-nous !",
                titlePrefix: "Je suis",
                titleSuffix: "Ingénieur logiciel",
                companyPrefix: "chez",
                contactButton: "Contactez-moi",
                downloadCv: "Voir le CV"
            },
            about: {
                badge: "À propos",
                title: "Qui",
                titleHighlight: "suis-je?",
                whoAmI: "Ingénieur logiciel chez Atos",
                quote: "*Je crois que le design va au-delà de l'esthétique—il s'agit de résoudre des problèmes et de créer des expériences intuitives et agréables pour les utilisateurs.",
                experienceLabel: "Années d'expérience",
                projectsLabel: "Projets terminés"
            },
            contact: {
                title: "Contactez-moi",
                text: "Vous pouvez me contacter par email ou via mes réseaux sociaux.",
                copyright: "Tous droits réservés."
            },
            header: {
                letsTalk: "Discutons"
            },
            resume: {
                badge: "Parcours",
                title: "Mon Parcours",
                educationTitle: "Éducation",
                experienceTitle: "Expérience"
            },
            portfolio: {
                badge: "Portfolio",
                title: "Projets \n Récents",
                viewButton: "Ouvrir GitHub"
            },
            skills: {
                badge: "Compétences",
                title: "Compétences",
                categories: {
                    languages: "Langages",
                    frontend: "Frontend",
                    backend: "Backend & BD",
                    cloud: "Cloud & DevOps",
                    tools: "Outils",
                    design: "Design"
                }
            }
        }
    },
    en: {
        profile: {
            name: "Abdellatif El-Mahdaoui",
            title: "Software Engineer at Atos",
            specialization: "Software Engineer at Atos",
            bio: "Software engineer at Atos, I design and build full-stack applications with Angular, Spring, and AWS. Passionate about Cloud Computing, I create scalable solutions and intuitive interfaces.",
            longBio: "Software engineer at Atos with a background in Cloud Computing Engineering at CY Tech, I work on full-stack applications using Angular, Spring, and AWS services. My experience spans software development, distributed systems, and DevOps environments. Curious, thorough, and independent, I enjoy building reliable solutions and thoughtful user experiences, both at work and in my personal projects.",
            locationLabel: "Based in:",
            specializationLabel: "Specialization:",
            contact: {
                address: "Talence, France",
                email: "elmahdaoui@cy-tech.fr",
                phone: "+33 7 66 10 30 72",
                github: "github.com/abdemeh",
                location: "Talence, France"
            },
            social: socialLinks
        },
        skills: skills,
        experience: [
            {
                period: "March 2026 - Now",
                title: "Software Engineer (Permanent)",
                company: "Atos Pessac, France",
                description: "Contributing to the development of a CRM for O2. Involved in frontend (Angular) and backend (Spring) development, with integration of AWS services (Polly, Transcribe, S3)."
            },
            {
                period: "April - August 2025",
                title: "Web Developer (Internship)",
                company: "INFOSAT Agadir, Morocco",
                description: "Development of web and desktop applications (Java, JEE, Angular, PHP). Deployment and administration of virtualized servers under Proxmox with network and service configuration."
            },
            {
                period: "October 24, 2024",
                title: "Junior Team Manager for Hackathon",
                company: "ATILLA-CY Tech Hackathon, France",
                description: "Management of a 6-person team during a hackathon. Project coordination and tracking for the development of an FPS game in Python."
            },
            {
                period: "2021 - 2022",
                title: "Freelance",
                company: "UpWork / Fiverr",
                description: "Development of automation scripts and custom tools (Python, Selenium, Pandas, C#, PHP, PyAutoGUI) for various international clients."
            },
            {
                period: "April - June 2020",
                title: "Junior Developer (Internship)",
                company: "Faculty of Sciences Fez, Morocco",
                description: "Development of a web platform for courses/exams (React, HTML, CSS, JS, PHP, MySQL)."
            }
        ],
        education: [
            {
                period: "2023 - 2026",
                title: "Engineering Degree - Cloud Computing Engineering",
                institution: "CY Tech Engineering School, Pau",
                description: "Engineering Degree - Cloud Computing Engineering"
            },
            {
                period: "2019 - 2020",
                title: "Pro. License - Information Systems and Software Engineering",
                institution: "Faculty of Sciences Fez, Morocco",
                description: "Pro. License - Information Systems and Software Engineering"
            },
            {
                period: "2017 - 2019",
                title: "University Diploma of Technology - Computer Engineering",
                institution: "Higher School of Technology Guelmim, Morocco",
                description: "University Diploma of Technology - Computer Engineering"
            }
        ],
        projects: [
            {
                title: "MiOS Launcher",
                tags: ["Android TV", "UI/UX", "ChatGPT / Codex"],
                description: "Clean, Apple-inspired Android TV launcher with blur, transparency, favorites, themes, and a clock screensaver. Remote-friendly navigation, built with ChatGPT/Codex and tested on Xiaomi TV.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/MiOS-Launcher"
            },
            {
                title: "AbdelXP.exe",
                tags: ["React 19", "Vite", "CSS3", "JavaScript"],
                description: "Retro Windows XP-styled portfolio app featuring draggable windows, a start menu, taskbar, multi-language support, sound effects, and customizable wallpapers.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/AbdelXP.exe"
            },
            {
                title: "GDPR Platform",
                tags: ["Python", "Flask", "React", "TailwindCSS", "Pandas", "Numpy"],
                description: "Development of a complete web application to anonymize CSV files via multiple methods (masking, pseudonymization, generalization, perturbation, aggregation). Flask backend, React.js/TailwindCSS frontend with REST API.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/PlateformeRGPD"
            },
            {
                title: "Apex F1",
                tags: ["React 19", "Vite", "i18next", "CSS Modules", "API"],
                description: "Modern, responsive F1 dashboard built to visualize stats, standings, and driver details in style. Features a premium 'Dark Neon' aesthetic and bilingual support.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/apex-f1"
            },
            {
                title: "Financial Portfolio Manager",
                tags: ["Scala", "Akka HTTP", "React", "MongoDB", "TailwindCSS"],
                description: "Platform development in Scala (Akka HTTP) with a MongoDB database. Secure REST API, JWT authentication, modern frontend interface with React.js and TailwindCSS.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/GestionPortefeuillesFinance"
            },
            {
                title: "CY-Books",
                tags: ["Java", "GUI", "Management", "Algorithms"],
                description: "Comprehensive library management application: user registration, book tracking, loan alerts, and history. User-friendly graphical interface designed for librarians.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/CY-Books"
            }
        ],
        ui: {
            nav: {
                home: "Home",
                portfolio: "Projects",
                about: "About Me",
                resume: "Resume",
                contact: "Contact"
            },
            hero: {
                badge: "Let's meet!",
                titlePrefix: "I'm",
                titleSuffix: "Software Engineer",
                companyPrefix: "at",
                contactButton: "Contact Me",
                downloadCv: "View CV"
            },
            about: {
                badge: "About Me",
                title: "Who",
                titleHighlight: "am I?",
                whoAmI: "Software Engineer at Atos",
                quote: "*I believe that design is about more than just making things look good—it's about solving problems and creating intuitive, enjoyable experiences for users.",
                experienceLabel: "Years of Experience",
                projectsLabel: "Projects Completed"
            },
            contact: {
                title: "Contact Me",
                text: "You can contact me at my email or through my social media profiles.",
                copyright: "All rights reserved."
            },
            header: {
                letsTalk: "Let's Talk"
            },
            resume: {
                badge: "Resume",
                title: "My Journey",
                educationTitle: "Education",
                experienceTitle: "Experience"
            },
            portfolio: {
                badge: "Portfolio",
                title: "Recent \n Projects",
                viewButton: "Open in GitHub"
            },
            skills: {
                badge: "Skills",
                title: "Skills",
                categories: {
                    languages: "Languages",
                    frontend: "Frontend",
                    backend: "Backend & DB",
                    cloud: "Cloud & DevOps",
                    tools: "Tools",
                    design: "Design"
                }
            }
        }
    }
};
