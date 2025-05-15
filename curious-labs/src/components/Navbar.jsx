import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-content">
        <h1>Daily Nonsense</h1>
        <nav className="nav-links">
          <Link to="/">Ask Dr. Loopy</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      {/* 🌊 Waves inside navbar at the bottom */}
      <div className="navbar-waves">
        <svg
          className="waves back-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#81d4fa"
            fillOpacity="0.5"
            d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,224C672,245,768,203,864,186.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="waves front-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4fc3f7"
            fillOpacity="1"
            d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,224C672,245,768,203,864,186.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
