import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Links = () => {
  const PageNames = ["Home", "About", "Services", "Portfolio", "Contact"];
  return (
    <motion.ul className='links' variants={variants}>
      {PageNames.map((page) => (
        <a href={`#${page}`} key={page}>
          {
            <motion.li
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='icon-placeholder' />
              <div className='text-placeholder'>{page}</div>
            </motion.li>
          }
        </a>
      ))}
    </motion.ul>
  );
};

export default Links;
