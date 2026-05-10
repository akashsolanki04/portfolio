import { NavLink } from "react-router-dom";

function AppNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">AKASH SOLANKI</div>
      <div className="nav-links">
        <NavLink to="/"         end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default AppNavbar;