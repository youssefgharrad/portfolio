import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Project.scss'; // Import the SCSS file


function Project() {
const projects = [
  {
    title: "LinkUpTournament",
    description: "Developed a platform to simplify football tournament management, including planning, team registration, match coordination, and real-time results tracking.",
    image: "linkup-tournament.jpg", // Replace with actual image path
    github: "https://github.com/Next-Generation-Coders/backend-pi",
    technologies: ["NodeJS", "React", "MongoDB"],
  },
  {
    title: "Mini Project",
    description: "Application to manage university dormitory infrastructure and room reservations, simplifying student life.",
    image: "mini-project.jpg", // Replace with actual image path
    github: "https://github.com/youssefgharrad/MiniProject",
    technologies: ["Spring", "Angular", "MySQL"],
  },
  {
    title: "DjangoEducation",
    description: "Online course management platform for teachers to create chapters, track student progress, and facilitate interaction.",
    image: "https://private-user-images.githubusercontent.com/80386745/384717035-3c681d88-58c2-4a89-92b6-f699a8e2934d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY3NzUyMTQsIm5iZiI6MTczNjc3NDkxNCwicGF0aCI6Ii84MDM4Njc0NS8zODQ3MTcwMzUtM2M2ODFkODgtNThjMi00YTg5LTkyYjYtZjY5OWE4ZTI5MzRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTEzVDEzMjgzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI1NDJhMTlkMWE0MjhlZjZjODBhYWMwMmYxOTc4YWEwMDU3NmFkOTE3M2RkZjA3NjQyNGZhMWY5MzliOTU1NDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.12pmOCIRyEQGckYwGgp6nKkQ0U3p7ORTa7rKJk8FWFY", // Replace with actual image path
    github: "https://github.com/youssefgharrad/DjangoEducation",
    technologies: ["Django", "Python", "SQLite"],
  },
  {
    title: "CollecteDechets",
    description: "Web platform for managing waste collection events, including event creation, participant registration, and waste tracking.",
    image: "collecte-dechets.jpg", // Replace with actual image path
    github: "https://github.com/youssefgharrad/LaravelGestionDechet",
    technologies: ["Laravel", "MySQL"],
  },
  {
    title: "Khadamni",
    description: "Platform connecting freelancers and clients to simplify job searches and task assignments (jobs or hiring for specific tasks). ",
    image: "khadamni.jpg", // Replace with actual image path
    github: "https://github.com/youssefgharrad/Khadamni",
    technologies: ["JavaFX", "Symfony", "Codename One"],
  },
  {
    title: "GOTSPOT",
    description: "Desktop application using Qt and C++ to streamline the recruitment process within companies.",
    image: "gotspot.jpg", // Replace with actual image path
    github: "https://github.com/Jawher27/Smart_Recruiting_Help_Center_2A18",
    technologies: ["Qt", "C++"],
  },
];


  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            {/* <img src={project.image} alt={project.title} className="zoom" /> */}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project ;