import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaJira } from "react-icons/fa";
import { DiMongodb, DiSass } from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
} from "react-icons/si";
import "./skills.scss";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "Typescript.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <DiSass />, name: "Sass" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaJira />, name: "Jira" },
  ];

  return (
    <motion.div  className='skills-container'>
      <motion.h2>My Skills</motion.h2>
      <motion.div className='wrapper'>
        <motion.div
          className='skills-grid'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className='skill-item'
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className='icon'>{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
