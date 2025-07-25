import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/directors">
        Directors
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
