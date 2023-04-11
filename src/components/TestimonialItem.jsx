import Rating from "./Rating";
import "../styles/Testimonialitem.css";

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonialHeader">
        <img src={testimonial.image} alt="" />
        <p>{testimonial.name}</p>
      </div>
      <Rating rating={testimonial.rating} />
      <div>
        <blockquote>{testimonial.text}</blockquote>{" "}
      </div>
    </div>
  );
};

export default TestimonialItem;
