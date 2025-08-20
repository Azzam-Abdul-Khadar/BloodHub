import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top customNav">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex justify-content-center aling-items-center"
          href="#"
        >
          <img
            style={{ height: "70px" }}
            className="img-fluid"
            src="/assets/icons/blood-bag.png"
          />
          <label className="display-5">
            <code style={{ color: "red" }}>BloodHub</code>
          </label>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={{ width: "300px" }}
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Welome {JSON.parse(localStorage.getItem("userData")).fName}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body w-100">
            <ul className="navbar-nav justify-content-end pe-3 list-group">
              <li className="nav-item list-group-item">
                <Link
                  className="nav-link active text-black"
                  aria-current="page"
                  to={`/${localStorage.getItem("userType")}`}
                >
                  Dashboard
                </Link>
              </li>
              {localStorage.getItem("userType") == "admin" ? (
                <li className="nav-item list-group-item">
                  <Link className="nav-link text-black" to="/admin/users">
                    Users
                  </Link>
                </li>
              ) : (
                ""
              )}
              {localStorage.getItem("userType") == "admin" ? (
                <li className="nav-item list-group-item">
                  <Link className="nav-link text-black" to="/admin/hospitals">
                    Hospitals
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item list-group-item">
                <Link
                  className="nav-link text-black"
                  to={`/${localStorage.getItem("userType")}/requests`}
                >
                  Requests
                </Link>
              </li>
              {localStorage.getItem("userType") == "hospital" ? (
                <li className="nav-item list-group-item">
                  <Link
                    className="nav-link text-black"
                    to={`/${localStorage.getItem("userType")}/stock`}
                  >
                    Stock
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item list-group-item">
                <Link
                  className="nav-link text-black"
                  to={`/${localStorage.getItem("userType")}/profile`}
                >
                  Profile
                </Link>
              </li>
              <li
                className="nav-item list-group-item"
                onClick={() => {
                  localStorage.removeItem("userData");
                  localStorage.removeItem("userType");
                  navigate("/login");
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
