import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton, Tooltip } from '@mui/material';
import '../assets/styles/Footer.scss';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to check if the footer is in view
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowBackToTop(footerTop <= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer>
      <div className="footer-content">
        {/* Email and Social Media Links */}
        <div className="social-links">
          <div className="icons">
            {/* <Tooltip title="GitHub" arrow> */}
              <a href="https://github.com/youssefgharrad" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            {/* </Tooltip> */}
            {/* <Tooltip title="LinkedIn" arrow> */}
              <a href="https://www.linkedin.com/in/youssef-gharrad/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            {/* </Tooltip> */}
          </div>
        </div>

        {/* Back-to-Top Button */}
        {showBackToTop && (
          <Tooltip title="Back to Top" arrow>
            <IconButton className="back-to-top" onClick={scrollToTop}>
              <ArrowUpwardIcon className="arrow-to-top" />
            </IconButton>
          </Tooltip>
        )}

        <div className="copyright">
          <p >Turning ideas into reality, one line of code at a time.✨</p>
            {/* &copy; {new Date().getFullYear()} Youssef Gharrad. All rights reserved. */}
        </div>

      </div>
    </footer>
  );
}

export default Footer;