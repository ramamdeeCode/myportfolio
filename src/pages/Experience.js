import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2011 - Jun 2014"
          iconStyle={{ background: "#177e89", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Osmania University, Hyderabad, India
          </h3>
          <p> Bachelor in Computer Application "BCA"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2015 - Dec 2017"
          iconStyle={{ background: "#e76f51", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            System Analyst - Ministry of Land and Urban Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dar es salaam, Tanzania
          </h4>
          <ul>
            <li>
              Gathered data from live systems to enhance system performance.
            </li>
            <li>
              Performed program testing, debugging, modifications, and
              troubleshooting.
            </li>
            <li>
              Designed and coded database tables to store application data and
              write simple and complex queries for desktop apps.
            </li>
            <li>
              Collaborated with a team to design and develop a user interface
              for various projects using VB.net.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2022 - Dec 2022"
          iconStyle={{ background: "#177e89", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Thinkful</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Software Engineering Program
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
