import { motion } from "framer-motion";
import "./contact.scss";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing React icons
import { MdEmail } from "react-icons/md"; // Import email icon

const Contact = () => {
  return (
    <div id='Contact' className='contact'>
      <h1 className='title'>Contact</h1>
      <div className='wrapper'>
        <div className='textContainer'>
          <h1>
            Let&apos;s Work <span>Together</span>
          </h1>
          <div className='socialMedia'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='icon facebook'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='icon twitter'
            >
              <FaTwitter />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='icon instagram'
            >
              <FaInstagram />
            </a>
            <a href='#' className='icon email'>
              <MdEmail />
            </a>
          </div>
        </div>
        <div className='svgContainer'>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
