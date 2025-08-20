import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./ProtectedRoute.css";

const ProtectedRoute = () => {
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("userType")) {
      navigate(`/`);
    } else if (
      localStorage.getItem("userType") !== location.pathname.split("/")[1]
    ) {
      navigate(`/${localStorage.getItem("userType")}`);
    }
  }, [location]);

  return <Outlet />;
};

export default ProtectedRoute;
