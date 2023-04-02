import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/aboutus");
  };

  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg ">
        <div class="container-fluid">
          <Link
            style={{ color: "red", marginLeft: "1%", fontWeight: "bolder" }}
            class="navbar-brand"
            to="/"
          >
            OLYMPUS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  className="HomeNavClass"
                  style={{ color: "white" }}
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  style={{ color: "white" }}
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/aboutus"
                  onClick={handleAboutUsClick}
                >
                  About Us
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#aboutus">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#whychooseus">
                      Why Choose Us?
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#trainingprograms">
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#meetourteam">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#contactus">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link style={{ color: "white" }} class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <div class="nav-item">
              <button className="NavRegisterButton">
                <Link
                  style={{ color: "white" }}
                  class="nav-link"
                  to="/register"
                >
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
