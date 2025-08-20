import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./containers/login/Login";
import SignUp from "./containers/signup/SignUp";
import Dashboard from "./containers/dashboard/Dashboard";
import User from "./containers/users/User";
import Hospital from "./containers/hospital/Hospital";
import Request from "./containers/request/Request";
import Error from "./containers/error/Error";
import HospitalDashboard from "./containers/hospital-dashboard/HospitalDashboard";
import UserDashboard from "./containers/user-dashboard/UserDashboard";
import Profile from "./containers/profile/Profile";
import UserRequest from "./containers/user-request/UserRequest";
import UserProfile from "./containers/user-profile/UserProfile";
import HospitalProfile from "./containers/hospital-profile/HospitalProfile";
import HospitalRequest from "./containers/hospital-request/HospitalRequest";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import MainLayout from "./components/main-layout/MainLayout";
import HospitalStock from "./containers/hospital-stock/HospitalStock";
import Launch from "./containers/launch/Launch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<MainLayout />}>
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index={true} element={<Dashboard />} />
              <Route path="/admin/users" element={<User />} />
              <Route path="/admin/hospitals" element={<Hospital />} />
              <Route path="/admin/requests" element={<Request />} />
              <Route path="/admin/profile" element={<Profile />} />
            </Route>
            <Route path="/user" element={<ProtectedRoute />}>
              <Route index={true} element={<UserDashboard />} />
              <Route path="/user/requests" element={<UserRequest />} />
              <Route path="/user/profile" element={<UserProfile />} />
            </Route>
            <Route path="/hospital" element={<ProtectedRoute />}>
              <Route index={true} element={<HospitalDashboard />} />
              <Route path="/hospital/requests" element={<HospitalRequest />} />
              <Route path="/hospital/profile" element={<HospitalProfile />} />
              <Route path="/hospital/stock" element={<HospitalStock />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
