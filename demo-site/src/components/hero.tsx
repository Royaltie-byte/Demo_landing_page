import Image from "../assets/photo6.jpg";
import { motion } from "framer-motion";
import {easeOut} from "framer-motion"

// Framer motion variants
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // stagger animation of children
    },
  },
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5 , ease:easeOut  },
  },
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5 , ease:easeOut },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="hero"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      {/* Hero Text Section */}
      <motion.div className="hero-text" variants={slideInLeft} >
        <motion.h1 className="hero-heading" variants={slideInLeft} >
          We Don’t Just Clean. We Transform.
        </motion.h1>
        <motion.p className="hero-subtext" variants={slideInLeft}>
          Let our experts refresh your space with precision and care you can
          trust.
        </motion.p>
        <motion.button
          className="hero-button"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
        >
          Book Your Premium Clean
        </motion.button>
      </motion.div>

      {/* Hero Image Section */}
      <motion.div
        className="hero-image-container"
        variants={slideInRight}
      >
        <img
          src={Image}
          alt="image of cleaning personnel"
          className="hero-image"
          id="Home"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
