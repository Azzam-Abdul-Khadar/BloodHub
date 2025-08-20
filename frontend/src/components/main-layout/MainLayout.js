import React from "react";
import "./MainLayout.css";
import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <div>
        <Navigation />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
