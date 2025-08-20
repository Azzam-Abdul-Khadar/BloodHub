import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./Request.css";

const Request = () => {
  const [requests, setRequests] = useState([]);

  const getRequests = () => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data);
    axios
      .post("http://localhost:4000/app/v1/get-request", {})
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

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="m-5 border" style={{height: "80vh", overflowY: "scroll"}}>
            <table className="table table-striped">
              <thead>
                <th>#</th>
                <th>Requested From</th>
                <th>Requested To</th>
                <th>Blood Group</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Requested On</th>
              </thead>
              <tbody>
                {requests.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {ele.from.fName}
                        {ele.from.lName}
                      </td>
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

export default Request;
