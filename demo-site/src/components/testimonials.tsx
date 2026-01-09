import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';
import avatar1 from '../assets/photo8.webp';
import avatar2 from '../assets/photo9.webp';
import avatar3 from '../assets/photo10.webp';

const testimonials = [
{ name: 'Jane D.', role: 'Office Manager', text: 'These guys transformed my office! Spotless and professional.', avatar: avatar1, rating: 5 },
{ name: 'Richards S.', role: 'Home Owner', text: 'My home has never looked better. Highly recommend their services!', avatar: avatar2, rating: 4 },
{ name: 'Linda P.', role: 'Entrepreneur', text: 'Exceptional cleaning with attention to every detail. Fast and reliable.', avatar: avatar3, rating: 5 },
];

function Testimonials() {
return ( 
<section className="testimonials-container" id="Testimonials"> <div className="testimonials-header"> <h2 className="testimonials-heading">What Our Clients Say</h2> <p className="testimonials-subtext">We take pride in making our clients happy with top-quality cleaning services.</p> </div>


  <div className="testimonials-grid">
    {testimonials.map((testimonial, index) => (
      <div className="testimonial-card" key={index}>
        <div className="testimonial-avatar-container">
          <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
        </div>

        <div className="testimonial-stars">
          {Array.from({ length: 5 }, (_, i) => (
            i < testimonial.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          ))}
        </div>

        <div className="testimonial-icon"><FaQuoteLeft /></div>
        <p className="testimonial-text">{testimonial.text}</p>
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-role">{testimonial.role}</p>
      </div>
    ))}
  </div>
</section>


);
}

export default Testimonials;
