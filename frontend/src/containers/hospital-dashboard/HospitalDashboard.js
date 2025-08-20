import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./HospitalDashboard.css";

const HospitalDashboard = () => {
  let [totalRequests, setTotalRequests] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  let [bloodStock, setBloodStock] = useState({
    "A+": 0,
    "A-": 0,
    "B+": 0,
    "B-": 0,
    "O+": 0,
    "O-": 0,
    "AB+": 0,
    "AB-": 0,
  });

  let [bloodRequestStatsData, setbloodRequestStatsData] = useState([
    ["Status", "Label"],
    ["Pending", 0],
    ["Approved", 0],
    ["Rejected", 0],
  ]);

  let [stockStatsData, setStockStatsData] = useState([
    ["Blood Group", "Quantity"],
    ["A+", 0],
    ["A-", 0],
    ["B+", 0],
    ["B-", 0],
    ["O+", 0],
    ["O-", 0],
    ["AB+", 0],
    ["AB-", 0],
  ]);

  const bgStatsOptions = {
    title: "Stock Stats",
    pieHole: 0.0,
    is3D: true,
  };

  const bloodRequestOptions = {
    chart: {
      title: "Request Stats",
      subtitle: "Blood request stats",
    },
  };

  const getRequestStatsData = () => {
    let userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
    axios
      .post("http://localhost:4000/app/v1/get-request", {
        to: userData,
      })
      .then((response) => {
        if (response.data.success) {
          let pendingCount = response.data.data.filter((ele) => {
            return ele.status == "pending";
          });
          let approvedCount = response.data.data.filter((ele) => {
            return ele.status == "accepted";
          });
          let rejectedCount = response.data.data.filter((ele) => {
            return ele.status == "rejected";
          });
          let total =
            pendingCount.length + approvedCount.length + rejectedCount.length;
          setTotalRequests({
            total: total,
            pending: pendingCount.length,
            approved: approvedCount.length,
            rejected: rejectedCount.length,
          });
          setbloodRequestStatsData([
            ["Status Value", ""],
            ["Pending", pendingCount.length],
            ["Approved", approvedCount.length],
            ["Rejected", rejectedCount.length],
          ]);
        }
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
        const aPlus = response.data.data.reduce((accumulator, currentValue) => {
          return currentValue.bloodGroup == "A+"
            ? accumulator + currentValue.quantity
            : accumulator;
        }, 0);

        // const stock = response.data.data.reduce((accumulator, currentValue) => {
        //   console.log(accumulator, currentValue);
        //   return accumulator[currentValue.bloodGroup]
        //     ? (accumulator[currentValue.bloodGroup].qty +=
        //         currentValue.quantity)
        //     : (accumulator[currentValue.bloodGroup] = {
        //         qty: currentValue.quantity,
        //       });
        // }, acc);

        let result = {};
        let bgList = response.data.data;
        for (let i = 0; i < bgList.length; i++) {
          if (result[bgList[i].bloodGroup]) {
            result[bgList[i].bloodGroup] =
              result[bgList[i].bloodGroup] + bgList[i].quantity;
          } else {
            result[bgList[i].bloodGroup] = bgList[i].quantity;
          }
        }

        console.log("result ", result);
        setBloodStock(result);
        setStockStatsData([
          ["Blood Group", "Quantity"],
          ["A+", result["A+"]],
          ["A-", result["A-"]],
          ["B+", result["B+"]],
          ["B-", result["B-"]],
          ["O+", result["O+"]],
          ["O-", result["O-"]],
          ["AB+", result["AB+"]],
          ["AB-", result["AB-"]],
        ]);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  useEffect(() => {
    getRequestStatsData();
    getStockStatsData();
  }, []);

  return (
    <div className="dashboardMain container-fluid row">
      <div className="col-md-8">
        <hr />
        <p className="display-2">Request Stats</p>
        <hr />
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="tile display-2 d-flex justify-content-center align-items-center rounded text-white bg-primary">
              Requests: {totalRequests.total}
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="tile display-2 d-flex justify-content-center align-items-center rounded text-white bg-secondary">
              Pending: {totalRequests.pending}
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="tile display-2 d-flex justify-content-center align-items-center rounded text-white bg-success">
              Approved: {totalRequests.approved}
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="tile display-2 d-flex justify-content-center align-items-center rounded text-white bg-danger">
              Rejected: {totalRequests.rejected}
            </div>
          </div>
        </div>
        <hr />
        <p className="display-2">Blood Stock Stats</p>
        <hr />
        <div className="row">
          <div className="col-md-2 mt-4"></div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-start align-items-center rounded text-white bg-primary flex-column">
              A+
              <br />
              <b>{bloodStock["A+"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-secondary flex-column">
              A-
              <br />
              <b>{bloodStock["A-"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-success flex-column">
              B+
              <br />
              <b>{bloodStock["B+"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-danger flex-column">
              B-
              <br />
              <b>{bloodStock["B-"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-primary flex-column">
              O+
              <br />
              <b>{bloodStock["O+"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-secondary flex-column">
              O-
              <br />
              <b>{bloodStock["O-"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-success flex-column">
              AB+
              <br />
              <b>{bloodStock["AB+"]}</b>
            </div>
          </div>
          <div className="col-md-1 mt-4">
            <div className="bloodTile h1 d-flex justify-content-center align-items-center rounded text-white bg-danger flex-column">
              AB-
              <br />
              <b>{bloodStock["AB-"]}</b>
            </div>
          </div>
          <div className="col-md-2 mt-4"></div>
        </div>
        <hr />
      </div>
      <div className="col-md-4 vh-100">
        <div style={{ marginTop: "150px" }}>
          <Chart
            // Note the usage of Bar and not BarChart for the material version
            chartType="Bar"
            data={bloodRequestStatsData}
            options={bloodRequestOptions}
          />
        </div>
        <div className="mt-5">
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={stockStatsData}
            options={bgStatsOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
