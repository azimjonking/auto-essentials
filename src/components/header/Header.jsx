import "./Header.css";
import { IoCall } from "react-icons/io5";
import { FaRegEnvelopeOpen } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header-call">
        <IoCall className='icon' />
        <a href="tel:1122">
          Call us <br />
          +92 314 61 46 470
        </a>
      </div>

      <div className="header-email">
        <FaRegEnvelopeOpen className='icon' />
        <a href="mailto:example@gmail.com">
          Send us mail <br />
          autoessentials@gmail.com
        </a>
      </div>

      <button>become a seller</button>

    </header>
  );
};

export default Header;
