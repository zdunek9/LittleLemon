import TestimonialItem from "./TestimonialItem";
import "../styles/Testimonials.css";
import Ron from "../assets/ron.png";
import Brian from "../assets/brian.png";
import Champ from "../assets/champ.png";
import Brick from "../assets/brick.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ron Burgandy",
      image: Ron,
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Brian Fantana",
      image: Brian,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Champ Kind",
      image: Champ,
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Brick Tamland",
      image: Brick,
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonialsContainer">
        <h2>Testimonials</h2>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
