import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

import "./sidebar.scss";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };
  console.log(isOpen)
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
