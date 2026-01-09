
import { FaCheckCircle, FaStar, FaHandsHelping } from "react-icons/fa";

const whyPoints = [
  { title: "Fast & Reliable", description: "We respond instantly and deliver results quickly — no delays, no excuses.", icon: <FaCheckCircle /> },
  { title: "Premium Quality", description: "Every detail is polished to look high-end, elegant, and trustworthy.", icon: <FaStar /> },
  { title: "Customer-First", description: "We designed everything to make your experience smooth, satisfying, and stress-free.", icon: <FaHandsHelping /> },
];

function WhyChooseUs() {
  return (
    <section className="why-container" id="Why-Us">
      <div className="why-header">
        <h2 className="why-heading">Why Choose Us</h2>
        <p className="why-subtext">Premium service. Lightning-fast response. A customer experience that makes you smile.</p>
      </div>

      <div className="why-grid">
        {whyPoints.map((point) => (
          <div className="why-card" key={point.title}>
            <div className="why-card-icon">{point.icon}</div>
            <h3 className="why-card-title">{point.title}</h3>
            <p className="why-card-text">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;