import React from 'react';
import { FaGithub, FaEnvelope, FaJava, FaAws, FaMicrosoft, FaInstagram, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import {
    SiJavascript, SiPython, SiC, SiCplusplus, SiR,
    SiScala, SiReact, SiAngular, SiHtml5, SiCss3, SiPhp, SiNodedotjs,
    SiElectron, SiTailwindcss, SiOracle, SiGit, SiDocker, SiFirebase, SiGooglecloud, SiTerraform,
    SiLinux, SiApple, SiSpring, SiMysql, SiMongodb, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiFigma,
    SiJira, SiConfluence, SiGitlab
} from 'react-icons/si';

const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/abdemeh" },
    { icon: <FaInstagram />, url: "https://instagram.com/its.bnadem" },
    { icon: <FaXTwitter />, url: "https://x.com/_elmahdaoui" },
    { icon: <FaBehance />, url: "https://behance.net/_elmahdaoui" },
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
    { name: "GitHub", category: "tools", icon: <FaGithub />, color: "#181717" },
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
            title: "Étudiant en 3ᵉ année d'ingénierie, spécialité Cloud Computing",
            specialization: "Étudiant en 3ᵉ année d'ingénierie, spécialité Cloud Computing",
            bio: "Actuellement étudiant ingénieur à CY Tech, je me spécialise dans le Cloud Computing et le développement Full Stack. Je suis passionné par la création de solutions évolutives et d'expériences utilisateur intuitives.",
            longBio: "Étudiant en 3ᵉ année du cycle ingénieur (BAC+5) à CY Tech, spécialité Ingénierie du Cloud Computing. Passionné par le développement logiciel, les systèmes distribués et les solutions cloud, je me distingue par ma curiosité, ma rigueur et mon autonomie. Mon parcours m'a permis de développer des compétences solides en environnements DevOps et Cloud, avec un fort intérêt pour l'innovation technologique.",
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
                title: "Plateforme RGPD - Anonymisation de Données",
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
                title: "Projet de Gestion de Portefeuilles Financiers en Temps Réel",
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
            },
            {
                title: "Plateforme Universitaire",
                tags: ["PHP", "MySQL", "Bootstrap", "Tomcat", "HTML", "CSS", "JS"],
                description: "Application web pour la gestion d'utilisateurs et services universitaires.",
                linkText: "Voir sur GitHub",
                url: "https://github.com/abdemeh/GestionMaterielUniversitaire"
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
                titleSuffix: "Étudiant Cloud Computing",
                contactButton: "Contactez-moi",
                downloadCv: "Télécharger CV"
            },
            about: {
                badge: "À propos",
                title: "Qui",
                titleHighlight: "suis-je?",
                whoAmI: "Cloud Computing",
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
                title: "Éducation & \n Expérience",
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
                title: "Outils & \n Tech",
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
            title: "Engineering Student - Cloud Computing Specialty",
            specialization: "3rd-year Cloud Computing Engineering Student",
            bio: "Currently an engineering student at CY Tech, I specialize in Cloud Computing and Full Stack development. I'm passionate about building scalable solutions and creating intuitive user experiences.",
            longBio: "3rd-year engineering student (Master's level) at CY Tech, specializing in Cloud Computing Engineering. Passionate about software development, distributed systems, and cloud solutions, I distinguish myself through curiosity, rigor, and autonomy. My background has allowed me to develop solid skills in DevOps and Cloud environments, with a strong interest in technological innovation.",
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
                title: "GDPR Platform - Data Anonymization",
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
                title: "Real-Time Financial Portfolio Management Project",
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
            },
            {
                title: "University Platform",
                tags: ["PHP", "MySQL", "Bootstrap", "Tomcat", "HTML", "CSS", "JS"],
                description: "Web application for managing university users and services.",
                linkText: "Open in GitHub",
                url: "https://github.com/abdemeh/GestionMaterielUniversitaire"
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
                titleSuffix: "Cloud Computing Student",
                contactButton: "Contact Me",
                downloadCv: "Download CV"
            },
            about: {
                badge: "About Me",
                title: "Who",
                titleHighlight: "am I?",
                whoAmI: "Cloud Computing",
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
                title: "Education & \n Experience",
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
                title: "Tools & \n Tech",
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
