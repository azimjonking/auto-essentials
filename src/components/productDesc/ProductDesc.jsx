import "./ProductDesc.css";
import { Link, Outlet } from "react-router-dom";

const ProductDesc = () => {
  return (
    <section className="product-desc">
      <div className="product-desc__links">
        <ul>
          <li>
            <Link to="">Description</Link>
          </li>
          <li>
            <Link to="addinfo">Additional Information</Link>
          </li>
          <li>
            <Link to="reviews">Reviews [5]</Link>
          </li>
        </ul>
      </div>

      <div className="product-desc__container">
        <Outlet />
      </div>
    </section>
  );
};

export default ProductDesc;
