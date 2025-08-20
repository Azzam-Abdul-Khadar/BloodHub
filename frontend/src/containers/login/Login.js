import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  let [showPass, setShowPass] = useState(false);

  const forgotPasword = () => {
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate(`/${localStorage.getItem("userType")}`);
    }
  }, []);

  return (
    <div className="vh-100 p-0 m-0 g-0 login d-flex justify-content-center align-items-center">
      <div className="loginMain shadow border rounded">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let userData = {};
            let fromData = new FormData(e.target);
            fromData.forEach((value, key) => {
              userData[key] = value;
            });
            if (userData.password.length < 8) {
              alert("Password length should be atleast 8 characters");
              return;
            }
            axios
              .post("http://localhost:4000/app/v1/login", userData)
              .then(function (response) {
                if (response.data.success) {
                  if (userData.rememberMe == "on") {
                    localStorage.setItem("email", userData.email);
                    localStorage.setItem("password", userData.password);
                  }
                  localStorage.setItem(
                    "userType",
                    response.data.data[0].userType
                  );
                  localStorage.setItem(
                    "userData",
                    JSON.stringify(response.data.data[0])
                  );
                  switch (response.data.data[0].userType) {
                    case "hospital":
                      navigate("/hospital");
                      break;
                    case "user":
                      navigate("/user");
                      break;
                    case "admin":
                      navigate("/admin");
                      break;
                    default:
                      alert("Invalid route");
                  }
                } else {
                  alert(response.data.message);
                  return;
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          <div className="container-fluid">
            <div className="row m-0 p-0">
              <div className="col-md-12">
                <p className="col-md-12 my-3 display-3">Login</p>
                <div className="form-floating mt-5 mx-3">
                  <input
                    id="emailId"
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="name@example.com"
                    defaultValue={localStorage.getItem("email") ?? ""}
                    required
                  />
                  <label for="emailId">Email</label>
                </div>

                <div className="form-floating mt-2 mx-3 pass">
                  <input
                    id="pass"
                    name="password"
                    className="form-control"
                    type={showPass ? "text" : "password"}
                    placeholder="*********"
                    defaultValue={localStorage.getItem("password") ?? ""}
                    required
                  />
                  <label for="pass">Password</label>
                  <span
                    className="eyePass"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    <i
                      className={
                        showPass ? "fa fa-2x fa-eye-slash" : "fa fa-2x fa-eye"
                      }
                    ></i>
                  </span>
                </div>

                <div className="row m-0 p-0 me-2">
                  <div
                    className="col-md-6 mt-2 pass form-check rememberDiv d-flex justify-content-start"
                    onClick={forgotPasword}
                  >
                    <label className="form-check-label">Forgot Password?</label>
                  </div>
                  <div className="col-md-6 mt-2 pass form-check rememberDiv">
                    <input
                      id="remember"
                      name="rememberMe"
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked={localStorage.getItem("email") ?? false}
                    />
                    <label className="form-check-label" for="remember">
                      Remember Me?
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary w-75 mt-5" type="submit">
                  Login
                </button>
                <p className="mt-3">--OR--</p>
                <button
                  type="button"
                  className="btn btn-primary w-75"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
