import { Link } from "react-router-dom";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <section className="home-main">
      <div className="home-main__info">
        <h1>
          <span>Auto</span> Spare Parts
        </h1>
        <p>All Major Brands Available</p>
        <Link to="">Shop Now</Link>
      </div>
      <div className="home-main__img">
        <img src="./assets/auto-parts.png" alt="auto spare parts" />
      </div>
    </section>
  );
};

export default HomeMain;
