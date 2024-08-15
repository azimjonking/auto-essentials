import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src="./assets/logo.png" alt="Auto Essentials" />
          </Link>
        </div>

        <div className="footer-right__container">
          <div className="footer-links content">
            <h4>Links</h4>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-help content">
            <h4>Help</h4>

            <ul>
              <li>
                <Link to="/">Payment Options</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-newsletter content">
            <h4>Newsletter</h4>

            <form>
              <input type="email" placeholder="Enter Your Email Address" />
              <button>subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>2023-24 autoessentials. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
