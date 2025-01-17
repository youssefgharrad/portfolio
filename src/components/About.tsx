import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="about-space">
      <div className="content">
        <h1>About Me</h1>
        <p>
          I'm Youssef Gharrad, a passionate <span className="highlight">Full Stack Engineer</span> with a love for building innovative and scalable web applications.
        </p>
        <p>
          With a strong foundation in technologies like <span className="highlight">Node.js</span>, <span className="highlight">React.js</span>, and <span className="highlight">Spring Boot</span>, I enjoy turning ideas into reality through clean and efficient code. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
        </p>
        <p>
          My goal is to create impactful solutions that enhance user experiences and solve real-world problems. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a game of football.
        </p>
      </div>
    </div>
  );
}

export default About;