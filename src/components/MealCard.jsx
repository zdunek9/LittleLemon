import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import "../styles/MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <div className="mealCard">
      <div className="mealImg">
        <img src={meal.image} alt="" />
      </div>
      <div className="mealDetails">
        <div className="mealDetailsHeader">
          <h3>{meal.title}</h3>
          <p>${meal.price}</p>
        </div>
        <div className="mealDetailsDescription">{meal.description}</div>
        <div className="mealDetailsFooter">
          <a href="/">Order a delivery</a>
          <FontAwesomeIcon icon={faBicycle} />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
