import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    date: "",
    message: "",
  });

  const serviceOptions = [
    "Home Cleaning",
    "Deep Cleaning",
    "Office Cleaning",
    "Fumigation",
    "Post Renovation Cleaning",
    "Window and Glass Cleaning",
    "Couch Cleaning",
    "Carpet and Upholstery Cleaning",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello 👋 I would like to request a cleaning service.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Location: ${formData.location}
Preferred Date: ${formData.date}

Additional Message:
${formData.message || "N/A"}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappNumber = "254791003081";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Request a Cleaning Service</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Additional Message (optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Request Service
          </button>
        </form>
      ) : (
        <div className="thank-you-overlay">
          <h3>Thank you!</h3>
          <p>Your request has been sent via WhatsApp.</p>
          <p>If WhatsApp didn’t open, please try again.</p>

          <a
            href="https://wa.me/254791003081"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-redirect-btn"
          >
            Open WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
