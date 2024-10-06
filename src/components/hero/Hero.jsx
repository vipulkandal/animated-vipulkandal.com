import "./hero.scss";
import { motion } from "framer-motion";

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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
        repeat: Infinity,  // Infinite loop
        repeatType: "loop",  // Smooth restart when finished
        duration: 15,  // Adjust the duration for desired speed
        ease: "linear",  // Smooth, constant scrolling
      },
  },
};

const Hero = () => {
  return (
    <motion.div className='hero'>
      <motion.div className='wrapper'>
        <motion.div
          className='text-container'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          {/* <h2>Vipul Kandal</h2> */}
          <motion.h1 variants={textVariants}>
            <span>MERN Stack Developer</span>, expert at <span>Front-end</span>{" "}
            Technologies
          </motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>
              Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
            <motion.button variants={textVariants}>Download CV</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        React  Next.js  CSS  JavaScript  Redux  Node.js  Express.js  REST
        API  MongoDB  Git Vercel
      </motion.div> */}
      {/* <div className='image-container'>
        <img src='/hero.png' alt='' />
      </div> */}
    </motion.div>
  );
};

export default Hero;
