import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  let navigate = useNavigate();
  let [showPass, setShowPass] = useState(false);
  let [showRePass, setShowRePass] = useState(false);
  let [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("userData")).userType
  );
  let [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  return (
    <div className="p-0 m-0 g-0 profile d-flex justify-content-center align-items-center">
      <div className="profileMain w-50">
        {userData ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let userDataLocal = {};
              let fromData = new FormData(e.target);
              fromData.forEach((value, key) => {
                userDataLocal[key] = value;
              });

              if (userDataLocal.password != userDataLocal.rePassword) {
                alert("Password and RePassword are not same!");
                return;
              }

              if (userDataLocal.password.length < 8) {
                alert("Password length should be atleast 8 characters");
                return;
              }

              if (userDataLocal.contact.length !== 10) {
                alert("Phone length should be exact 10 characters");
                return;
              }
              axios
                .put("http://localhost:4000/app/v1/update-user", {
                  query: { _id: userData._id },
                  updateData: userDataLocal,
                })
                .then(function (response) {
                  alert(response.data.message);
                  if (response.data.success) {
                    localStorage.setItem(
                      "userType",
                      response.data.data.userType
                    );
                    localStorage.setItem(
                      "userData",
                      JSON.stringify(response.data.data)
                    );
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
                <p className="col-md-12 my-3 display-3">
                  <code>Profile</code>
                </p>

                <div className="profileScrollContent">
                  <div className="mt-5 mx-3">
                    <div className="row">
                      <div className="form-floating col-md-6">
                        <input
                          id="userId"
                          name="fName"
                          className="form-control"
                          type="text"
                          placeholder="User Name"
                          defaultValue={userData?.fName}
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
                          defaultValue={userData?.lName}
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
                      defaultValue={userData?.email}
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
                      defaultValue={userData?.contact}
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
                      defaultValue={userData?.password}
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
                      defaultValue={userData?.password}
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
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                      defaultValue={userData.userType}
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
                      <select
                        className="form-select"
                        name="bloodGroup"
                        defaultValue={userData.bloodGroup}
                      >
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
                      defaultValue={userData.address}
                    ></textarea>
                    <label for="addressId">Address</label>
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-end">
                  <button
                    className="btn btn-warning"
                    style={{ width: "300px" }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserProfile;
