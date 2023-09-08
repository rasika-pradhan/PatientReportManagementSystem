import React, { useState } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";

const UserNavbar = () => {
  const [loginStatus, setLoginStatus] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    setLoginStatus(false);
  }
  if(loginStatus === false){
    return <Navigate to="/" />;
  }
  return (
    <div>
      {/* bg-body-tertiary */}
      <nav className="navbar navbar-expand-lg bg-success text-white">
        <div className="container-fluid ms-4">
          <a className="navbar-brand fs-2 mb-0 mt-1 ms-1 h1 text-white">
            <i class="bi bi-journal-plus h3 text-white mb-0"> </i>
            MediKeep
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul
              className="navbar-nav mt-2 bg-warining"
              style={{ width: "92%" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active fs-5 text-white"
                  aria-current="page"
                  href="/userdashboard/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active fs-5 text-success" href="/userdashboard/addpatients">
                  Add Patient
                </a> */}
                <Link
                  to="/userdashboard/addpatients"
                  className="nav-link active fs-5 text-white"
                >
                  Add Patient
                </Link>
                {/* <a className="nav-link active fs-5 text-success" onClick={goToAddPatients}>
                  Add Patient
                </a> */}
              </li>
              <li className="nav-item">
                <Link
                  to="/userdashboard/viewpatients"
                  className="nav-link active fs-5 text-white"
                >
                  All Patient
                </Link>
                {/* <a className="nav-link fs-5 text-success" aria-disabled="true" href="/userdashboard/viewpatients">
                  All Patient
                </a> */}
              </li>
              {/* <li className="nav-item">
                {buttonState ? (
                  <Link
                  to="/userdashboard/addreport"
                  className="nav-link active fs-5 text-white"
                >
                  Add Patient Reports
                </Link>
                  // <a
                  //   className="nav-link fs-5 text-success"
                  //   aria-disabled="true"
                  //   href="/userdashboard/addreport"
                  // >
                  //   Add Patient Reports
                  // </a>
                ) : null}
              </li>
              <li className="nav-item">
                {buttonState ? (
                  <Link
                  to="/userdashboard/viewreports"
                  className="nav-link active fs-5 text-white"
                >
                  View Patient Reports
                </Link>
                  // <a
                  //   className="nav-link fs-5 text-success"
                  //   aria-disabled="true"
                  //   href="/userdashboard/viewreports"
                  // >
                  //   View Patient Reports
                  // </a>
                ) : null}
              </li> */}
            </ul>
            <div className="dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle h3 text-white"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <h6 class="dropdown-header text-success">User Info</h6>
                </li>
                <li>
                  <Link
                    to="/userdashboard/userprofile"
                    className="dropdown-item"
                  >
                    <i class="bi bi-person-fill h5 text-success"> </i>
                    Profile
                  </Link>
                  {/* <a class="dropdown-item" href="#">
                    <i class="bi bi-person-fill h5 text-success"> </i>
                    Profile
                  </a> */}
                </li>
                {/* <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-box-arrow-right h5 text-success"> </i>
                    Logout
                  </a>
                </li> */}
                <li>
                  <button
                    type="button"
                    class="btn btn-light dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <i class="bi bi-box-arrow-right h5 text-success"> </i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Logout
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Are you sure you want to Logout?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-success"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-success"  onClick={handleLogout} data-bs-dismiss="modal">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserNavbar;
