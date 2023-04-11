import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import FooterLogo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <img src={FooterLogo} alt="" />
        </div>
        <ul>
          <h3>Navigation</h3>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <ul>
          <h3>Contact</h3>
          <li>123 Main Street, Anytown, USA</li>
          <li>(555) 123-4567</li>
          <li>contact@littlelemonrestaurant.com</li>
        </ul>
        <ul>
          <h3>Follow</h3>
          <div className="footerLinks">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="2x" icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="2x" icon={faInstagramSquare} />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon size="2x" icon={faPinterestSquare} />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
