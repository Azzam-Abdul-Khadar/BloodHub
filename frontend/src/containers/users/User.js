import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import "./User.css";

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .post("http://localhost:4000/app/v1/get-user", { userType: "user" })
      .then(function (response) {
        if (response.data.success) {
          setUsers(response.data.data);
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
    getUsers();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="m-5 border">
            <table className="table table-striped">
              <thead>
                <th>#</th>
                <th>Name </th>
                <th>Blood Group </th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
              </thead>
              <tbody>
                {users.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {ele.fName}
                        {ele.lName}
                      </td>
                      <td>{ele.bloodGroup}</td>
                      <td>{ele.email}</td>
                      <td>{ele.contact}</td>
                      <td>{ele.address}</td>
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

export default User;
