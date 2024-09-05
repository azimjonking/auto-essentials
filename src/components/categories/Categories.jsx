import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <div className="img">
          <img src="./assets/oils.png" alt="Lubricants" />
        </div>
        <div className="category-info">
          <h3>Lubricants</h3>
          <Link to="">View More</Link>
        </div>
      </div>
      <div className="category">
        <div className="img">
          <img src="./assets/spare-parts.png" alt="Spare Parts" />
        </div>
        <div className="category-info">
          <h3>Spare Parts</h3>
          <Link to="">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
