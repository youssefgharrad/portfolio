import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showAbout, setShowAbout] = useState(false); // State to manage visibility of About Me section

  useEffect(() => {
    const roles = ["Full Stack Developer", "Software Engineer"];

    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next role
        setTypingSpeed(150); // Reset typing speed
      } else {
        setTypingSpeed(isDeleting ? 75 : 150); // Adjust typing speed
      }
    };

    const timer = setTimeout(() => handleTyping(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Toggle visibility of About Me section
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="container">
      <div className="about-section">
        {/* Left Side: Avatar, Name, Typing Effect, Social Icons */}
        <div className="left-content">
          <div className="image-wrapper">
            <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
          </div>
          <div className="content">
            <h1 onClick={toggleAbout}>Youssef Gharrad</h1> {/* Add onClick handler */}
            <p className="typing-effect">{text}</p>
            <div className="social_icons">
              <a id="GitHub" href="https://github.com/youssefgharrad" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a id="Linkedin" href="https://www.linkedin.com/in/youssef-gharrad/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <div className="mobile_social_icons">
              <a id="GitHub_mobile" href="https://github.com/youssefgharrad" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a id="Linkedin_mobile" href="https://www.linkedin.com/in/youssef-gharrad/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>

        {/* Right Side: About Me Section */}
        <div className={`right-content ${showAbout ? "visible" : "hidden"}`}>
          <div className={`about-me ${showAbout ? "visible" : "hidden"}`}> 
            <h2>About Me</h2>
            <p>
              I'm Youssef Gharrad, a passionate <span className="highlight">Full Stack Engineer</span> with a love for building innovative and scalable web applications.
            </p>
            <p>
              With expertise in <span className="highlight">Node.js</span>, <span className="highlight">React.js</span>, and <span className="highlight">Spring Boot</span>, I thrive on transforming ideas into clean, efficient solutions. I excel in collaborative settings and i am always eager to tackle new challenges.            </p>
            <p>
              I completed my Bachelor's degree in 2020 and have been studying at <a target="_blank" className="highlight" href="https://esprit.tn/" rel="noreferrer">ESPRIT</a> since then. I am on track to earn my Engineering degree in 2025.            
            </p>
            <p>
              My goal is to create impactful solutions that solve real-world problems and improve user experiences. Beyond coding, I enjoy exploring new technologies and contributing to open-source projects.            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;