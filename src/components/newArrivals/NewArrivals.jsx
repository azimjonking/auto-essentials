import "./NewArrivals.css";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <section className="newArrivals">
      <div className="newArrivals-img">
        <img src="./assets/auto-oils.png" alt="Auto Oils" />
      </div>
      <div className="newArrivals-info">
        <p>New Arrivals</p>
        <h1>Shell Engine Oil</h1>
        <Link to="">Shop Now</Link>
      </div>
    </section>
  );
};

export default NewArrivals;
