import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience">
      <h1 className="experience__title reveal" ref={titleRef}>
        Experience
      </h1>
      <p className="experience__subtitle reveal">
        Education and work history.
      </p>
      <VerticalTimeline lineColor="var(--color-border)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2022 – Jan 2023"
          iconStyle={{ background: "var(--color-accent)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Thinkful</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineering Program
          </h4>
          <p> Full Stack Web Developer Training</p>
          <ul>
            <li>
              Learned industry best practices and software development standards
              with a focus on Javascript, HTML5, CSS3, React.js, Node.js,
              PostgreSQL, RESTful API's, algorithms, and data structures.
            </li>
            <li>
              Developed and deployed mobile-first applications while learning
              new languages and frameworks, spending several hours per week
              collaborating with and learning from senior web developers in a
              mentor-student relationship.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2019 – present"
          iconStyle={{ background: "var(--color-accent-secondary)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Direct Support Professional - Brian’s House
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Exton, PA</h4>
          <ul>
            <li>
              I implemented activities required as part of an individual's
              support plan and maintained the required documentation of such
              activities.
            </li>
            <li>
              Taking care of their medical needs and ensuring their health and
              safety without compromising their rights.
            </li>
            <li>Assisting individuals with daily living skills.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2019 – present"
          iconStyle={{ background: "var(--color-accent-secondary)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Direct Support Professional - Achieve Program (Part-Time)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Downingtown, PA
          </h4>
          <ul>
            <li>
              Provided 1:1 - 1:6 ratio (face-to-face) services in the adult day
              program and community settings to assist individuals in acquiring,
              maintaining, and improving self-help, domestic, socialization, and
              adaptive skills.
            </li>
            <li>
              Provided support in self-care, communication, fine and gross motor
              skills, mobility, therapeutic activities, personal adjustment, and
              recreation.
            </li>
            <li>
              Support the individual to participate in community events,
              associations, groups, functions, volunteer associations, or
              community work projects.
            </li>
            <li>
              Bridge communication gaps and facilitate meaningful social
              connections within the individual’s community with the ultimate
              goal of employment.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2015 – Dec 2017"
          iconStyle={{ background: "var(--color-accent-secondary)", color: "#fff" }}
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
          date="Aug 2011 – Jun 2014"
          iconStyle={{ background: "var(--color-accent)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Osmania University, Hyderabad, India
          </h3>
          <p> Bachelor in Computer Application "BCA"</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
