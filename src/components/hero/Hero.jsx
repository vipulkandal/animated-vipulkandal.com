// import "./hero.scss";
// import { motion } from "framer-motion";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <motion.div className='hero'>
//       <motion.div className='wrapper'>
//         <motion.div
//           className='text-container'
//           variants={textVariants}
//           initial='initial'
//           animate='animate'
//         >
//           <motion.h1 variants={textVariants}>
//             <span>MERN Stack Developer</span>, expert at <span>Front-end</span>
//             Technologies
//           </motion.h1>
//           <motion.div className='buttons' variants={textVariants}>
//             <motion.button variants={textVariants} href='#Portfolio'>
//               <a href='#Portfolio'>Portfolio</a>

//             </motion.button>
//             <motion.button variants={textVariants}>
//             <a href='#Contact'>Contact Me</a>
//             </motion.button>
//             <motion.button variants={textVariants}>
//              <a href="public/VipulKandal_MERN_5Years.pdf" target="_blank" rel="noreferrer">Download CV</a> </motion.button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Hero;

import "./hero.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const ref = useRef(null);

  // useInView hook to detect if the element is in the viewport
  const isInView = useInView(ref, { once: false }); // 'once: false' ensures it triggers every time it comes into view

  return (
    <motion.div className="hero" ref={ref}>
      <motion.div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"} // Trigger animation when in view
        >
          <motion.h1 variants={textVariants}>
            <span>Full Stack Developer</span>, expert at <span>Front-end</span>{" "}
            Technologies
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">Portfolio</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a
                href="public/Vipul Kandal-FullStack.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
