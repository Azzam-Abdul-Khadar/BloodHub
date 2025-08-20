import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./UserRequest.css";

const UserRequest = () => {
  const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [hospitals, setHospitals] = useState([]);
  const [requests, setRequests] = useState([]);

  const getHospitals = () => {
    axios
      .post("http://localhost:4000/app/v1/get-user", { userType: "hospital" })
      .then(function (response) {
        if (response.data.success) {
          setHospitals(response.data.data);
        } else {
          alert(response.data.message);
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getRequests = () => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    axios
      .post("http://localhost:4000/app/v1/get-request", { from: data._id })
      .then(function (response) {
        if (response.data.success) {
          setRequests(response.data.data);
        } else {
          alert(response.data.message);
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let data = localStorage.getItem("userData");
    let requestData = { from: JSON.parse(data)._id };
    let formData = new FormData(e.target);
    formData.forEach((value, key) => {
      requestData[key] = value;
    });
    axios
      .post("http://localhost:4000/app/v1/add-request", requestData)
      .then(function (response) {
        if (response.data.success) {
          alert("Blood stock requested successfully!");
          getRequests();
        } else {
          alert(response.data.message);
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getHospitals();
    getRequests();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-3 col-sm-12 bg-secondary d-flex justify-content-center align-items-center flex-column"
          style={{ height: "88vh" }}
        >
          <div className=" d-flex justify-content-center align-items-center flex-column">
            <p className="display-3 text-white">Request</p>
            <form className="requestForm mt-5" onSubmit={onFormSubmit}>
              <div className="d-flex justify-content-start flex-column">
                <label className="form-label text-start text-white">
                  Hospital
                </label>
                <select name="to" className="form-select">
                  <option>Please select hospital</option>
                  {hospitals.map((ele, index) => {
                    return (
                      <option key={index} value={ele._id}>
                        {ele.fName}
                        {ele.lName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-3 d-flex justify-content-start flex-column">
                <label className="form-label text-start text-white">
                  Blood Group
                </label>
                <select name="bloodGroup" className="form-select">
                  <option value={""}>Please select blood group</option>
                  {bloodGroup.map((ele, index) => {
                    return (
                      <option key={index} value={ele}>
                        {ele}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-3 d-flex justify-content-start flex-column">
                <label className="form-label text-start text-white" for="qtyId">
                  Quantity
                </label>
                <input
                  name="quantity"
                  className="form-control"
                  id="qtyId"
                  type="number"
                  placeholder="Quantity"
                  min={0}
                />
              </div>
              <button className="btn btn-warning mt-3">Request</button>
            </form>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <div className="m-5 border" style={{height: "80vh", overflowY: "scroll"}}>
            <table className="table table-striped">
              <thead>
                <th>#</th>
                <th>Requested To</th>
                <th>Blood Group</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Requested On</th>
              </thead>
              <tbody>
                {requests.map((ele, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {ele.to.fName}
                        {ele.to.lName}
                      </td>
                      <td>{ele.bloodGroup}</td>
                      <td>{ele.quantity}</td>
                      <td
                        className={`${
                          ele.status == "rejected"
                            ? "text-danger"
                            : ele.status == "accepted"
                            ? "text-success"
                            : "text-primary"
                        }`}
                      >
                        {ele.status}
                      </td>
                      <td>{dayjs(ele.createdAt).format("DD-MMM-YYYY")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRequest;
