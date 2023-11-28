import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../header.css";
const Header = () => {
  return (
    <>
      <header className="color">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <button className="btn navButton text-white btn-lg">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">
                  <button className="btn navButton text-white btn-lg">
                    Projects
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactme">
                  <button className="btn navButton text-white btn-lg">
                    Contact Me
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
