// import { useState } from "react";
// import { motion } from "framer-motion";
// import Links from "./links/Links";
// import ToggleButton from "./toggleButton/ToggleButton";

// import "./sidebar.scss";

// const variants = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//     }
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.3,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//     }
//   }
// };

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
  

//   return (
//     <motion.div className='sidebar' animate={isOpen ? "open" : "closed"}>
//       <motion.div className='bg' variants={variants}>
//         <Links />
//       </motion.div>
//       <ToggleButton setIsOpen={setIsOpen} />
//     </motion.div>
//   );
// };

// export default Sidebar;



import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

// Sidebar animation variants
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
  const sidebarRef = useRef(null); // Ref to track the sidebar element

  // Function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); // Collapse sidebar when clicking outside
    }
  };

  // Add event listener to detect clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, []);

  return (
    <motion.div
      className="sidebar"
      ref={sidebarRef} // Attach the ref to the sidebar
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </motion.div>
  );
};

export default Sidebar;
