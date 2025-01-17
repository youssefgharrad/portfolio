import React from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import '../assets/styles/Expertise.scss';

// Skill descriptions
const skillDescriptions:any = {
  "HTML5": "Core web technology",
  "CSS3": "Core web technology",
  "JavaScript": "Core web technology",
  "TypeScript": "Core web technology",
  "TailwindCSS": "CSS framework",
  "Bootstrap": "CSS framework",
  "SASS": "CSS preprocessor",
  "React": "Frontend library",
  "Angular": "Frontend framework",
  "JavaFX": "Desktop UI framework",
  "Qt": "Desktop UI framework",
  "NodeJS": "JavaScript runtime",
  "ExpressJS": "Node.js framework",
  "NestJS": "Node.js framework",
  "Java": "Programming language",
  "Spring Boot": "Java framework",
  "Python": "Programming language",
  "Django": "Python framework",
  "Flask": "Python framework",
  "Laravel": "PHP framework",
  "Symfony": "PHP framework",
  "SQL": "Relational database",
  "PL/SQL": "Relational database",
  "MongoDB": "NoSQL database",
  "PostgreSQL": "Relational database",
  "SQLite": "Relational database",
  "Docker": "Containerization",
  "Jenkins": "CI/CD tool",
  "SonarQube": "Code quality tool",
  "Nexus": "Artifact repository",
  "Git": "Version control",
  "GitHub": "Code Hosting Platform",
  "IntelliJ": "IDE",
  "WebStorm": "IDE",
  "VS Code": "IDE",
  "Jira": "Project management",
  "Trello": "Project management",
  "PostMan": "API tool",
  "Swagger": "API tool"
};

// Updated skills based on your CV
const frontendSkills = [
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "JavaFX",
    "Qt"
];

const backendSkills = [
    "NodeJS",
    "ExpressJS",
    "NestJS",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "Flask",
    "Laravel",
    "Symfony"
];

const databaseSkills = [
    "SQL",
    "PL/SQL",
    "MongoDB",
    "PostgreSQL",
    "SQLite"
];

const devOpsTools = [
    "Docker",
    "Jenkins",
    "SonarQube",
    "Nexus",
    "Git",
    "GitHub",
    "Jira",
    "Trello",
    "VS Code",
    "IntelliJ",
    "WebStorm",
    "PostMan",
    "Swagger"
];

function Expertise() {
  // Use the useInView hook to detect when the skills container is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div className="container" id="expertise">
      <div 
        ref={ref} // Attach the ref to the skills container
        className={`skills-container ${inView ? "visible" : ""}`} // Add "visible" class when in view
      >
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Frontend Skills */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>Frontend Development</h3>
            <p>I specialize in building responsive and user-friendly interfaces using modern frontend technologies like React and Angular. I ensure seamless user experiences across all devices.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendSkills.map((label, index) => (
                <Tooltip key={index} title={skillDescriptions[label]} arrow>
                  <Chip className='chip' label={label} />
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x"/>
            <h3>Backend Development</h3>
            <p>I have extensive experience in building robust and scalable backend systems using technologies like Node.js, Spring, and Django. I focus on performance, security, and maintainability.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendSkills.map((label, index) => (
                <Tooltip key={index} title={skillDescriptions[label]} arrow>
                  <Chip className='chip' label={label} />
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x"/>
            <h3>Databases</h3>
            <p>I am proficient in working with both relational and NoSQL databases, ensuring efficient data storage, retrieval, and management for applications.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {databaseSkills.map((label, index) => (
                <Tooltip key={index} title={skillDescriptions[label]} arrow>
                  <Chip className='chip' label={label} />
                </Tooltip>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>DevOps & Tools</h3>
            <p>I have hands-on experience with DevOps practices and tools, including CI/CD pipelines, containerization, and version control systems, to streamline development and deployment processes.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {devOpsTools.map((label, index) => (
                <Tooltip key={index} title={skillDescriptions[label]} arrow>
                  <Chip className='chip' label={label} />
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;