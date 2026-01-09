import Logo from '../assets/header-logo.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Services", "Why-Us", "Testimonials", "Contact"];

  return (
    <>
      <header className="header">
        {/* Logo */}
        <div className="header-logo">
          <img src={Logo} alt="Company Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="navbar desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link.replace("-", " ")}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <div className="desktop-btn" >
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className="header-btn"
          >
            <a href="#Contact">Book a Free Quote</a> 
          </motion.button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`} onClick={() => setIsOpen(false)}>
                      {link.replace("-", " ")}
                    </a>
                  </li>
                ))}
                <li>
                  <button  className="header-btn" onClick={() => setIsOpen(false)}>
                    <a href="#Contact">Book a Free Quote</a>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
