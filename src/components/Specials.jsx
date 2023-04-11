import MealCard from "./MealCard";
import "../styles/Specials.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import Greek from "../assets/greek-salad.jpg";
import Bruschetta from "../assets/bruschetta.jpg";
import Lemon from "../assets/lemon-dessert.jpg";

const Specials = () => {
  const meals = [
    {
      id: 1,
      title: "Greek salad",
      image: Greek,
      price: 12.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
    {
      id: 2,
      title: "Bruschetta",
      image: Bruschetta,
      price: 5.99,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      image: Lemon,
      price: 5.0,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel temporibus tenetur cupiditate quos consequatur at delectus. Tenetur tempora dicta minima.",
    },
  ];

  return (
    <div className="specials">
      <div className="specialsContainer">
        <div className="specialsHeader">
          <h2>Specials!</h2>
          <Link to="/">
            <Button>Online Menu</Button>
          </Link>
        </div>
        <div className="specialsGrid">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
