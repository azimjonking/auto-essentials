import "./ProductDetail.css";
import { FaMinus, FaPlus, FaFacebook, FaLinkedin, FaTwitter  } from "react-icons/fa6";

const ProductDetail = () => {
  return (
    <section className="product-detail">
      <div className="product-detail__images">
        <div className="images-options">
          <div>
            <img src="./assets/balloon-1.png" alt="balloon 1" />
          </div>
          <div>
            <img src="./assets/balloon-2.png" alt="balloon 2" />
          </div>
          <div>
            <img src="./assets/balloon-3.png" alt="balloon 3" />
          </div>
          <div>
            <img src="./assets/balloon-4.png" alt="balloon 4" />
          </div>
        </div>

        <div className="image-main">
          <img src="./assets/balloon-main.png" alt="Main balloon" />
        </div>
      </div>

      <div className="product-detail__info">
        <h1 className="name">MIRAGE MR-AT172 285/65 </h1>
        <p className="price">Rs. 50,000.00</p>
        <div>
          <p>Shope: Tire House</p>
          <p>5 Customer Review</p>
        </div>
        <p className="desc">
          The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an advanced
          tread pattern and compound which offer a long tread life.It employs a
          variable pitch tread design. This variable pitch design significantly
          reduces noise and provides a quiet ride. Its optimized profile
          provides even wear and classic style.
        </p>

        <div className="size">
          <p>Size</p>
          <label>
            <input type="radio" name="size" />
            <span>17</span>
          </label>
          <label>
            <input type="radio" name="size" />
            <span>21</span>
          </label>
          <label>
            <input type="radio" name="size" />
            <span>24</span>
          </label>
        </div>

        <div className="color">
          <p>color</p>
          <label>
            <input type="radio" name="color" />
            <span></span>
          </label>
        </div>

        <div className="count">
          <div>
            <button>
              <FaMinus />
            </button>
            <span>1</span>
            <button>
              <FaPlus />
            </button>
          </div>

          <button className="addToCart">Add To Cart</button>
        </div>

        <div className="line"></div>

        <ul>
          <li>
            <p>
              <span>sku</span>
              <span>:</span>
            </p>
            <span>SS001</span>
          </li>
          <li>
            <p>
              <span>Category</span>
              <span>:</span>
            </p>
            <span>Tire</span>
          </li>
          <li>
            <p>
              <span>Tags</span>
              <span>:</span>
            </p>
            <span>Tire, rims, Shop</span>
          </li>

          <li>
            <p>
              <span>Share</span>
              <span>:</span>
            </p>
            <span>
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetail;
