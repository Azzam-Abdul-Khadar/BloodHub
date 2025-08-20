import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  let navigate = useNavigate();
  let [showPass, setShowPass] = useState(false);
  let [showRePass, setShowRePass] = useState(false);
  let [userType, setUserType] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="vh-100 p-0 m-0 g-0 signup d-flex justify-content-center align-items-center">
      <div className="signupMain shadow border rounded">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let userData = {};
            let fromData = new FormData(e.target);
            fromData.forEach((value, key) => {
              userData[key] = value;
            });

            if (userData.password != userData.rePassword) {
              alert("Password and RePassword are not same!");
              return;
            }

            if (userData.password.length < 8) {
              alert("Password length should be atleast 8 characters");
              return;
            }

            if (userData.contact.length !== 10) {
              alert("Phone length should be exact 10 characters");
              return;
            }
            axios
              .post("http://localhost:4000/app/v1/add-user", userData)
              .then(function (response) {
                console.log(response);
                if (response.data.success) {
                  localStorage.setItem(
                    "userType",
                    response.data.data[0].userType
                  );
                  localStorage.setItem(
                    "userData",
                    JSON.stringify(response.data.data[0])
                  );
                  navigate(`/${response.data.data[0].userType}`);
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
            <div className="row">
              <div className="col-md-12">
                <p className="col-md-12 my-3 display-3">SignUp</p>

                <div className="signupScrollContent">
                  <div className="mt-5 mx-3">
                    <div className="row">
                      <div className="form-floating col-md-6">
                        <input
                          id="userId"
                          name="fName"
                          className="form-control"
                          type="text"
                          placeholder="User Name"
                          required
                        />
                        <label className="ps-4" for="userId">
                          First Name
                        </label>
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          id="userId"
                          name="lName"
                          className="form-control"
                          type="text"
                          placeholder="User Name"
                          required
                        />
                        <label className="ps-4" for="userId">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-floating mt-2 mx-3">
                    <input
                      id="emailId"
                      name="email"
                      className="form-control"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="emailId">Email</label>
                  </div>

                  <div className="form-floating mt-2 mx-3">
                    <input
                      id="phoneNumber"
                      name="contact"
                      className="form-control"
                      type="number"
                      placeholder="9876543210"
                      required
                    />
                    <label for="phoneNumber">Phone</label>
                  </div>

                  <div className="form-floating mt-2 mx-3 pass">
                    <input
                      id="pass"
                      name="password"
                      className="form-control"
                      type={showPass ? "text" : "password"}
                      placeholder="*********"
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
                          !showPass
                            ? "fa fa-2x fa-eye-slash"
                            : "fa fa-2x fa-eye"
                        }
                      ></i>
                    </span>
                  </div>

                  <div className="form-floating mt-2 mx-3 pass">
                    <input
                      id="pass"
                      name="rePassword"
                      className="form-control"
                      type={showRePass ? "text" : "password"}
                      placeholder="*********"
                      required
                    />
                    <label for="pass">Re-Password</label>
                    <span
                      className="eyePass"
                      onClick={() => {
                        setShowRePass(!showRePass);
                      }}
                    >
                      <i
                        className={
                          !showRePass
                            ? "fa fa-2x fa-eye-slash"
                            : "fa fa-2x fa-eye"
                        }
                      ></i>
                    </span>
                  </div>
                  <div className="mt-2 mx-3">
                    <label className="form-label  d-flex justify-content-start">
                      User Type
                    </label>
                    <select
                      name="userType"
                      className="form-select"
                      defaultValue={userType}
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    >
                      <option value="">Please select user type.</option>
                      <option value="hospital">Hospital</option>
                      <option value="user">User</option>
                    </select>
                  </div>

                  {userType == "user" && (
                    <div className="mt-2 mx-3">
                      <label className="form-label  d-flex justify-content-start">
                        Blood Group
                      </label>
                      <select className="form-select" name="bloodGroup">
                        <option value="">Please select blood group.</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                  )}

                  <div className="mt-4 mx-3 form-floating ">
                    <textarea
                      name="address"
                      id="addressId"
                      className="form-control"
                      placeholder="address"
                      maxLength={100}
                      required
                    ></textarea>
                    <label for="addressId">Address</label>
                  </div>
                </div>

                <button className="btn btn-primary w-75 mt-5" type="submit">
                  SignUp
                </button>
                <p className="mt-3">--OR--</p>
                <button
                  type="button"
                  className="btn btn-primary w-75"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
