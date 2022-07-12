import "./navbar.css";
import { Link } from "react-router-dom";
import MoonIcon from "./moon";
import SunIcon from "./sun";
import HeartIcon from "./heart";

function Navbar({ toggleTheme }) {
  return <nav id="nav" className="nav-bg" >
    <div className="navbar container" >
      <Link id="logo-branch" className="nav-item" to="/" >
        <div id="sw">
          <span>Star</span>
          <span>Wars</span>
        </div>
        <span>Characters</span>
      </Link>
      <div className="navbar" >
        <Link id="favorites-link" className="nav-item" to="/favoritos">
          <HeartIcon></HeartIcon>
          <span>Favorites</span>
        </Link>
        <button className="nav-item btn" onClick={toggleTheme} >
          <MoonIcon className="moon-icon" ></MoonIcon>
          <SunIcon className="sun-icon" ></SunIcon>
        </button>
      </div>
    </div>
  </nav>
}

export default Navbar;