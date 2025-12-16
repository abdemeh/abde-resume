import React from 'react';
import { FaGithub, FaEnvelope, FaJava, FaAws, FaMicrosoft, FaInstagram, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import {
    SiJavascript, SiPython, SiC, SiCplusplus, SiR,
    SiScala, SiReact, SiAngular, SiHtml5, SiCss3, SiPhp, SiNodedotjs,
    SiElectron, SiTailwindcss, SiOracle, SiGit, SiRstudioide, SiDocker, SiFirebase, SiGooglecloud, SiSalesforce,
    SiLinux, SiApple, SiSpring, SiMysql, SiMongodb
} from 'react-icons/si';

export const profileData = {
    name: "Abdellatif El-Mahdaoui",
    title: "Étudiant en 3º année d'ingénierie, spécialité Cloud Computing",
    bio: "Currently an engineering student at CY Tech, I specialize in Cloud Computing and Full Stack development. I'm passionate about building scalable solutions and creating intuitive user experiences.",
    longBio: "Étudiant en 3º année du cycle ingénieur (BAC+5) à CY Tech, spécialité Ingénierie du Cloud Computing. Passionné par le développement logiciel, les systèmes distribués et les solutions cloud, je me distingue par ma curiosité, ma rigueur et mon autonomie. Mon parcours m'a permis de développer des compétences solides en environnements DevOps et Cloud, avec un fort intérêt pour l'innovation technologique.",
    contact: {
        address: "200 Av. Jean Mermoz, 64000 Pau",
        email: "elmahdaoui@cy-tech.fr",
        phone: "+33 7 66 10 30 72",
        github: "github.com/abdemeh",
        location: "Pau, France"
    },
    social: [
        { icon: <FaGithub />, url: "https://github.com/abdemeh" },
        { icon: <FaInstagram />, url: "https://instagram.com" },
        { icon: <FaXTwitter />, url: "https://twitter.com" },
        { icon: <FaBehance />, url: "https://behance.net" },
        { icon: <FaEnvelope />, url: "mailto:elmahdaoui@cy-tech.fr" }
    ]
};

export const skillsData = [
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "C", icon: <SiC />, color: "#A8B9CC" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "R", icon: <SiR />, color: "#276DC3" },
    { name: "Scala", icon: <SiScala />, color: "#DC322F" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Electron", icon: <SiElectron />, color: "#47848F" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Oracle", icon: <SiOracle />, color: "#F80000" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "RStudio", icon: <SiRstudioide />, color: "#75AADB" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
    { name: "Azure", icon: <VscAzure />, color: "#0078D4" },
    { name: "Salesforce", icon: <SiSalesforce />, color: "#00A1E0" },
    { name: "Windows", icon: <FaMicrosoft />, color: "#0078D6" },
    { name: "Mac OS", icon: <SiApple />, color: "#A2AAAD" },
    { name: "Linux", icon: <SiLinux />, color: "#FCC624" }
];

export const experienceData = [
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
];

export const educationData = [
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
];

export const projectsData = [
    {
        title: "Projet de Gestion de Portefeuilles Financiers en Temps Réel",
        tags: ["Scala", "Akka HTTP", "React", "MongoDB", "TailwindCSS"],
        description: "Développement de plateforme en Scala (Akka HTTP) avec une base de données MongoDB. API REST sécurisée, authentification via JWT, interface frontend moderne avec React.js et TailwindCSS."
    },
    {
        title: "Plateforme RGPD - Anonymisation de Données",
        tags: ["Python", "Flask", "React", "TailwindCSS", "Pandas", "Numpy"],
        description: "Développement d'une application web complète pour anonymiser des fichiers CSV via plusieurs méthodes (masquage, pseudonymisation, généralisation, perturbation, agrégation). Backend en Flask, frontend en React.js/TailwindCSS avec API REST."
    },
    {
        title: "Plateforme Java JEE - ENT Universitaire",
        tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Tomcat"],
        description: "Application web pour la gestion d'utilisateurs et services universitaires."
    }
];
