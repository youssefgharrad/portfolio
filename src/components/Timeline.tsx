import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Internship in Human and Social Training - Tunisie Telecom */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2021"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internship in Human and Social Training</h3>
            <h4 className="vertical-timeline-element-subtitle">Tunisie Telecom, Ben Arous, Tunisia</h4>
            <p>
              Gained hands-on experience in hardware assembly, network configuration, and system maintenance.
            </p>
          </VerticalTimelineElement>

          {/* Product Integration Manager - Scoop Informatique */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 - Aug 2023"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Product Integration Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Scoop Informatique, Centre Urbain Nord, Tunisia</h4>
            <p>
              Managed product integration on the website, ensuring accurate and timely updates.
            </p>
          </VerticalTimelineElement>

          {/* Web Application Development - LinkUpTournament */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - May 2024"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Application Development</h3>
            <h4 className="vertical-timeline-element-subtitle">LinkUpTournament, ESPRIT, Tunisia</h4>
            <p>
              Developed a MERN football tournament management platform with Agile methodologies and DevOps tools.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;