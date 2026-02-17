// Services.tsx
import { FaHome, FaBuilding, FaBroom, FaCouch, FaWindowMaximize, FaHammer } from "react-icons/fa";

const services = [
  {
    title: "Home Cleaning",
    Icon: FaHome,
    description: "Refreshing your home with expert care and attention to detail.",
  },
  {
    title: "Office Cleaning",
    Icon: FaBuilding,
    description: "Keeping your workspace spotless and productive.",
  },
  {
    title: "Deep Cleaning",
    Icon: FaBroom,
    description: "Thorough cleaning to reach every corner.",
  },
  {
    title: "Carpet & Upholstery",
    Icon: FaCouch,
    description: "Removing dirt and stains for a fresh look.",
  },
  {
    title: "Window & Glass Cleaning",
    Icon: FaWindowMaximize,
    description: "Crystal-clear windows for a bright environment.",
  },
  {
    title: "Post-Renovation Cleaning",
    Icon: FaHammer,
    description: "We clean up after your construction or renovation projects.",
  },
];

function Services() {
  return (
    <section className="services-section" id="Services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We take pride in delivering quality cleaning services
      </p>

      <div className="services-grid">
        {services.map((service) => {
          const { Icon } = service;
          return (
            <div className="service-card" key={service.title}>
              <div className="service-icon-container">
                <Icon className="service-icon" />
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <button className="service-btn">
                <a href="#Contact">Book Now</a>
              </button>
            </div>
          );
        })}
      </div>

      <div className="service-testimonial">
        <p>
          “These guys transformed my office! Spotless and professional.” – Jane
          D.
        </p>
      </div>
    </section>
  );
}

export default Services;
