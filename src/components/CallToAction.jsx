import { Link } from "react-router-dom";
import "../styles/CallToAction.css";
import Button from "./Button";
import Food from "../assets/restaurant-food.jpg";

const CallToAction = () => {
  return (
    <div className="hero">
      <div className="heroContainer">
        {/* Action */}
        <div className="heroAction">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className="heroText">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              doloremque dignissimos molestiae beatae labore, harum accusantium
              nesciunt officiis non similique.
            </p>
          </div>
          <Link to="/reservations">
            <Button>Reserve a table</Button>
          </Link>
        </div>
        <div className="heroImg">
          <img src={Food} alt="Restaurant food" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
