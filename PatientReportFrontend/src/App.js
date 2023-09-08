import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import ShowAllUsers from "./Pages/ShowAllUsers.js";
import Login from "./Pages/Login.js";
import Registration from "./Pages/Registration.js";
import UserDashboard from "./Pages/User/UserDashboard.js";
import ViewPatients from "./Pages/Patient/ViewPatients.js";
import UserProfile from "./Pages/User/UserProfile.js";
import ViewOnePatient from "./Pages/Patient/ViewOnePatient.js";
import EditPatient from "./Pages/Patient/EditPatient.js";
import AddReport from "./Pages/Report/AddReport.js";
import ViewReports from "./Pages/Report/ViewReports.js";
import AddPatientForm from "./Pages/Patient/AddPatientForm.js";
import UserNavbar from "./Components/UserNavbar.js";
import ErrorPage from "./Pages/ErrorPage.js";
import HomePage from "./HomePage";
import HomePage2 from "./HomePage2";
import EditUser from "./Pages/User/EditUser";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allusers" element={<ShowAllUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/userdashboard" element={<UserNavbar />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="addpatients" element={<AddPatientForm />} />
          <Route path="viewpatients" element={<ViewPatients />} />
          <Route path="/userdashboard/userprofile" element={<UserProfile />} />
          <Route path="/userdashboard/edituser" element={<EditUser />} />
          <Route path="/userdashboard/viewone" element={<ViewOnePatient />} />
          <Route path="/userdashboard/editpatient" element={<EditPatient />} />
          <Route path="/userdashboard/addreport" element={<AddReport />} />
          <Route path="/userdashboard/viewreports" element={<ViewReports />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/homepage2" element={<HomePage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
