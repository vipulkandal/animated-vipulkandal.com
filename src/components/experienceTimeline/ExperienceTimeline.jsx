import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experienceTimeline.scss";
import { FaBuilding } from "react-icons/fa";

const experiences = [
  {
    company: "Technology Analyst (MERN Stack Developer) at Infosys | Chandigarh",
    duration: "Aug 2023 - Present",
    duties: [
      "Developed scalable, secure, and high-performance web applications to meet the financial services needs of BOFA.",
      "Collaborated with backend teams to integrate complex data storage solutions and ensure seamless application functionality.",
      "Implemented responsive, practical, user-friendly interfaces using React, enhancing the client’s digital banking experience.",
      "Optimized application performance and automated workflows, reducing response times and improving overall efficiency across the platform.",
    ],
    projectName: "Bank Of America (BofA)",
    technologies: [
      "React",
      "Next.js",
      "Typescript.js",
      "Node.js",
      "Framer-Motion",
      "Redux",
      "Sass",
      "Git",
      "Jira",
    ],
  },
  {
    company: "Frontend Developer at ValueCoders | Remote",
    duration: "May 2022 - Feb 2023",
    projectName: "www.fixed.com",
    duties: [
      "Responsible for managing a team of 5 to successfully complete a banking web application overhaul, reducing page load times, and improving user satisfaction based on client .",
      "Improved investment comparison feature, leading to better user engagement and a smoother financial product comparison process.",
      "Application was built on Next.js for the frontend and using Node.js/Express with MongoDB for the backend.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Typescript.js",
      "Redux",
      "Sass",
      "Git",
      "Jira",
    ],
  },
  {
    company: "Frontend Developer at Gratific Pvt Ltd | Remote",
    duration: "May 2020 - Oct 2021",
    // projectName: "",
    duties: [
      "Gratific is a product company related to hospitality, F&B areas.",
      "Built reusable components for various products by writing code in manageable chunks.",
      "Developed frontend using JSX and CSS3.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Typescript.js",
      "Redux",
      "Sass",
      "Git",
      "Jira",
    ],
  },
  {
    company: "Full Stack Developer at PatientBond | Mohali",
    duration: "Sep 2018 - Apr 2020",
    // projectName: "",
    duties: [
      "Created web application using React.js.",
      "Integrated frontend with backend and databases, including MongoDB.",
      "Creation of RESTful API endpoints and worked with the front-end to ensure seamless integrations.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Typescript.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer-Motion",
      "Redux Toolkit",
      "Sass",
      "Git",
      "Jira",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section  className='experience'>
      <div className='title'>
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
              <strong>Role & Duties:</strong>
            </p>
            <p>
              <strong className='project-name'>
                {experience?.projectName}
              </strong>
            </p>

            <ul>
              {experience.duties.map((duty, dutyIndex) => (
                <li key={dutyIndex}>{duty}</li>
              ))}
            </ul>
            <p>
              <strong>Technologies:</strong>{" "}
              {experience.technologies.join(", ")}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
