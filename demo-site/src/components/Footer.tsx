import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-column">
          <h3 className="footer-logo">Sparkle Cleaners</h3>
          <p className="footer-text">
            Professional, reliable, and affordable cleaning services for homes
            and businesses across Nairobi.
          </p>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li>Home Cleaning</li>
            <li>Office Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Fumigation</li>
            <li>Post Renovation Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-links">
            <li>
              📞 <a href="tel:+254791003081">+254 791 003 081</a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://wa.me/254791003081"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </li>
            <li>📍 Nairobi, Kenya</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-column">
          <h4 className="footer-title">Get Started</h4>
          <p className="footer-text">
            Ready for a spotless space? Request your cleaning service today.
          </p>
          <a href="#Contact" className="footer-btn">
            Request Service
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sparkle Cleaners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
