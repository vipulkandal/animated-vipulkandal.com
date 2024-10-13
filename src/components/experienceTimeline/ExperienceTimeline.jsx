
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experienceTimeline.scss";
import { FaBuilding } from "react-icons/fa";

const experiences = [
  {
    company: "Company A",
    duration: "Jan 2020 - Dec 2021",
    duties:
      "Worked on designing user interfaces and improving user experiences for various web applications.",
    technologies: ["React", "CSS", "Figma"],
  },
  {
    company: "Company B",
    duration: "Feb 2018 - Dec 2019",
    duties:
      "Led the front-end team, optimized application performance, and conducted user testing.",
    technologies: ["Vue.js", "JavaScript", "Adobe XD"],
  },
  {
    company: "Company A",
    duration: "Jan 2020 - Dec 2021",
    duties:
      "Worked on designing user interfaces and improving user experiences for various web applications.",
    technologies: ["React", "CSS", "Figma"],
  },
  {
    company: "Company B",
    duration: "Feb 2018 - Dec 2019",
    duties:
      "Led the front-end team, optimized application performance, and conducted user testing.",
    technologies: ["Vue.js", "JavaScript", "Adobe XD"],
  },
  // Add more experiences as needed
];

const ExperienceTimeline = () => {
  return (
    <section id='Experience' className="experience">
      
      <div className="title">
        <h1>Experience</h1>
      </div>


   
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          date={experience.duration}
          icon={<FaBuilding />}
          iconStyle={{ background: "#6c757d", color: "#fff" }}
        >
          <h3 className='vertical-timeline-element-title'>
            {experience.company}
          </h3>
          <p>
            <strong>Role & Duties:</strong> {experience.duties}
          </p>
          <p>
            <strong>Technologies:</strong> {experience.technologies.join(", ")}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
