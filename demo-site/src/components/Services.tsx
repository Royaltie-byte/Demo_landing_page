// Services.tsx
import photo1 from "../assets/photo1.webp";
import photo2 from "../assets/photo2.webp";
import photo3 from "../assets/photo3.webp";
import photo4 from "../assets/photo4.webp";
import photo5 from "../assets/photo5.webp";
import photo7 from "../assets/photo7.webp";

const services = [
  { title: "Home Cleaning", image: photo1, description: "Refreshing your home with expert care and attention to detail." },
  { title: "Office Cleaning", image: photo2, description: "Keeping your workspace spotless and productive." },
  { title: "Deep Cleaning", image: photo3, description: "Thorough cleaning to reach every corner." },
  { title: "Carpet & Upholstery", image: photo4, description: "Removing dirt and stains for a fresh look." },
  { title: "Window & Glass Cleaning", image: photo5, description: "Crystal-clear windows for a bright environment." },
  { title: "Post-Renovation Cleaning", image: photo7, description: "We clean up after your construction or renovation projects." },
];

function Services() {
  return (
    <section className="services-section" id="Services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">We take pride in delivering quality cleaning services</p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image"  />
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            <button className="service-btn">
              <a href="#Contact">Book Now</a>
              
            </button>
          </div>
        ))}
      </div>

      <div className="service-testimonial">
        <p>“These guys transformed my office! Spotless and professional.” – Jane D.</p>
      </div>
    </section>
  );
}

export default Services;
