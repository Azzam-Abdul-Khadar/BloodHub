import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./HospitalStock.css";

const HospitalStock = () => {
  let [bloodStock, setBloodStock] = useState([]);

  const increementStock = (bloodStockId, count) => {
    axios
      .put("http://localhost:4000/app/v1/update-bloodstock", {
        query: { _id: bloodStockId },
        updateData: { quantity: count },
      })
      .then((response) => {
        alert(response.data.message);
        getStockStatsData();
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  const getStockStatsData = () => {
    let userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
    axios
      .post("http://localhost:4000/app/v1/get-bloodstock", {
        hospital: userData._id,
      })
      .then((response) => {
        setBloodStock(response.data.data);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  useEffect(() => {
    getStockStatsData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="m-5 border">
            <table className="table table-striped">
              <thead>
                <th>#</th>
                <th>Blood Group</th>
                <th>Quantity</th>
                <th>Action</th>
              </thead>
              <tbody>
                {bloodStock.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{ele.bloodGroup}</td>
                      <td>{ele.quantity}</td>
                      <td>
                        <div
                          className="d-flex justify-content-center"
                          style={{ gap: "20px" }}
                        >
                          <span
                            onClick={() => {
                              increementStock(ele._id, ele.quantity + 1);
                            }}
                          >
                            <i
                              className="fa fa-2x fa-plus text-success"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            onClick={() => {
                              if(ele.quantity){
                                increementStock(ele._id, ele.quantity - 1);
                              }
                            }}
                          >
                            <i
                              className="fa fa-2x fa-minus text-danger"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </td>
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

export default HospitalStock;
