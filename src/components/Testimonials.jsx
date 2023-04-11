import TestimonialItem from "./TestimonialItem";
import "../styles/Testimonials.css";
import Anna from "../assets/woman5.jpg";
import Woman from "../assets/woman1.jpg";
import Woman2 from "../assets/woman2.jpg";
import Man1 from "../assets/man1.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anna Tab",
      image: Anna,
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Brian Fantana",
      image: Woman,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Nina Second",
      image: Woman2,
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Garry Rock",
      image: Man1,
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
