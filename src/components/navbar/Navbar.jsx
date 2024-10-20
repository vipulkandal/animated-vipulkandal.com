import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vipul Kandal
        </motion.span>
        <div className='social-media'>
          <a
            href='https://github.com/vipulkandal'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} />
          </a>
          <a
            href='https://www.linkedin.com/in/vipul-kandal-17374061/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://x.com/VipulKandalCode'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiTwitter size={30} />
          </a>

          <a
            href='https://www.instagram.com/vipulkandal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={30} />
          </a>

        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
