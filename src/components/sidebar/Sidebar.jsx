import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

import "./sidebar.scss";

// const variants = {
//   open: {
//     clipPath: "circle(1200px at 50px 50px)",
//     transition: {
//       type: "spring",
//       stiffness: 50,
//       restDelta: 2,
//     },
//   },
//   closed: {
//     clipPath: "circle(30px at 50px 50px)",
//     transition: { type: "spring", stiffness: 400, damping: 40 },
//   },
// };

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <motion.div className='sidebar' animate={isOpen ? "open" : "closed"}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Sidebar;
