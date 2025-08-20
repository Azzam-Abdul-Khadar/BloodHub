import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Launch.css";

const Launch = () => {
  let navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" id="homeSection">
          <nav
            className="navbar navbar-expand-lg fixed-top launchNav shadow"
            style={{ backgroundColor: "white" }}
          >
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
                data-bs-toggle="collapse"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="offcanvasDarkNavbar"
              >
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active ms-3 me-3 fs-5"
                        aria-current="page"
                        href="#homeSection"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link ms-3 me-3 fs-5"
                        aria-current="page"
                        href="#visionSection"
                      >
                        Vision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link ms-3 me-3 fs-5"
                        aria-current="page"
                        href="#missionSection"
                      >
                        Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link ms-3 me-3 fs-5"
                        aria-current="page"
                        href="#gallerySection"
                      >
                        Gallery
                      </a>
                    </li>
                    <button
                      className="btn btn-primary ms-3 me-3 fs-5"
                      type="button"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="col-md-12 p-0 g-0"
          style={{ marginTop: "12vh", height: "88vh" }}
        >
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/free-vector/cartoon-blood-donation-background_52683-70799.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "88vh" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/191/708/non_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "88vh" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-blood-donor-day_23-2150334089.jpg?semt=ais_hybrid&w=740"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "88vh" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          id="visionSection"
          className="col-md-12"
          style={{ marginTop: "12vh", height: "88vh", padding: "100px" }}
        >
          <p className="display-1" style={{ marginTop: "3%" }}>
            <code>Vision</code>
          </p>
          <p className="display-5" style={{ marginTop: "10%" }}>
            "Empowering lives through innovation: Where every drop counts, and
            technology bridges the gap between donors and those in need."
          </p>
          <p className="h4 mt-5">
            We envision a future where the act of donating blood and plasma is
            seamlessly integrated into daily life, facilitated by cutting-edge
            technology and driven by a compassionate community. Our goal is to
            create a responsive and resilient blood donation ecosystem that
            ensures timely and equitable access to life-saving resources for all
            individuals, regardless of their location or circumstances.
          </p>
        </div>
        <div
          id="missionSection"
          className="col-md-12"
          style={{ marginTop: "12vh", height: "88vh", padding: "100px" }}
        >
          <p className="display-1 mt-5">
            <code>Mission</code>
          </p>
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ height: "60vh" }}
                className="img-fluid"
                src="https://c8.alamy.com/comp/G1C95X/blood-donation-medical-background-vector-illustration-G1C95X.jpg"
              />
            </div>
            <div className="col-md-6">
              <p className="display-5 mt-4">
                "Building a Responsive Blood Network: Where Every Request Meets
                a Ready Donor."
              </p>
              <p className="h4 mt-5">
                Our mission is to create a dynamic and responsive blood donation
                network that promptly addresses blood requests, fostering a
                community of readiness and support.
              </p>
            </div>
          </div>
        </div>
        <div
          id="gallerySection"
          className="col-md-12"
          style={{ marginTop: "12vh", height: "100vh", padding: "100px" }}
        >
          <p className="display-1">
            <code>Gallery</code>
          </p>
          <div className="row m-0 p-0 g-0">
            <div className="col-md-6" style={{ height: "30%" }}>
              <div style={{ padding: "8px" }}>
                <img
                  className="img-fluid"
                  style={{ height: "30vh", width: "90%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQYmV_-62dF5cjrFDyOHIl6wxAyNs0ah5zg&s"
                />
              </div>
            </div>
            <div className="col-md-6" style={{ height: "30%" }}>
              <div style={{ padding: "8px" }}>
                <img
                  className="img-fluid"
                  style={{ height: "30vh", width: "90%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMbIK4UmmcT_hGgLadRmZ6pZJq_AHyYgqrA&s"
                />
              </div>
            </div>
            <div className="col-md-6" style={{ height: "30%" }}>
              <div style={{ padding: "8px" }}>
                <img
                  style={{ height: "30vh", width: "90%" }}
                  src="https://mgmhealthcare.in/wp-content/uploads/2022/06/Amazing-things-that-happen-to-your-body-when-you-donate-blood-big-1.jpg"
                />
              </div>
            </div>
            <div className="col-md-6" style={{ height: "30%" }}>
              <div style={{ padding: "8px" }}>
                <img
                  style={{ height: "30vh", width: "90%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbfiL8jiWXhPk0oS80oEOufOLC6S_0yKre1OYi20RyRDWuyh8vbBfZ7D6x3u-IIABevU&usqp=CAU"
                />
              </div>
            </div>
          </div>
        </div>
        <footer
          className="col-md-12 bg-white shadow-lg d-flex justify-content-center align-items-center"
          style={{ height: "10vh" }}
        >
          © 2025 All rights are reserved. Azzam Abdul Khadar.
          <Link to="https://github.com/Azzam-Abdul-Khadar" style={{padding:10, fontSize:24}}>GitHub</Link>
          <Link to="www.linkedin.com/in/azzam-abdul-khadar-a6656729b" style={{fontSize:24}}>Linkedin</Link>
        </footer>
      </div>
    </div>
  );
};

export default Launch;
