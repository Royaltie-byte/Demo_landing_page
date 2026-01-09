import React from "react";
import ContactForm from "./contactForm";


const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Section Heading */}
        <div className="contact-header">
          <h2 className="contact-heading" id="Contact">Get in Touch</h2>
          <p className="contact-subtext">
            Reach out to us for cleaning services, inquiries, or quotes. We’re here to help!
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-main">
          {/* Left: Form */}
          <div className="contact-form-container">
            <ContactForm />
          </div>

          {/* Right: Info + Map */}
          <div className="contact-info-container">
            {/* Info Cards */}
            <div className="contact-info-cards">
              <div className="info-card">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+254791003081">0791003081</a>
                </p>
              </div>
              <div className="info-card">
                <h4>Email</h4>
                <p>
                  <a href="mailto:kihiuallan46@gmail.com">kihiuallan46@gmail.com</a>
                </p>
              </div>
              <div className="info-card">
                <h4>Location</h4>
                <p>Nairobi CBD, Kenya</p>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.798232470028!2d36.811515276544315!3d-1.286389165193527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f107fa8f7c4c7%3A0x3f9c748d33e7c3b8!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1701516145678!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nairobi CBD Map"
              ></iframe>
            </div>

            {/* Call Button */}
            <a href="tel:+254791003081" className="call-btn">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254791003081?text=Hi%2C%20I%20am%20interested%20in%20your%20cleaning%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        💬
      </a>
    </section>
  );
};

export default Contact;
