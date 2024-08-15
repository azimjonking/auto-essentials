import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserXmark } from "react-icons/fa6";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="./assets/logo.png" alt="Auto Essentials" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Tools</Link>
          </li>
        </ul>
      </nav>

      <div className='navbar-icons'>
        <ul>
          <li>
            <Link to='/'>
              <FaUserXmark />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaSearch />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaRegHeart />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <IoCartOutline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
