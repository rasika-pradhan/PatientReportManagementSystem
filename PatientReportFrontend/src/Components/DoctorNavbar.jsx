import React from 'react'

const DoctorNavbar = () => {
  return (
    <div>
      {/* bg-body-tertiary */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ms-4">
          <i class="bi bi-journal-plus h3 text-success mb-0"> </i>
          <a className="navbar-brand fs-2 mb-0 mt-1 ms-1 h1 text-success">
            MediKeep
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul
              className="navbar-nav mt-2 bg-warining"
              style={{ width: "92%" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active fs-5 text-success"
                  aria-current="page"
                  href="/userdashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="/userdashboard/addpatients">
                  Add Patient
                </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="/userdashboard/viewpatients">
                  All Patient
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="/doctordashboard/addreport">
                  Add Patient Report
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="/userdashboard/viewpatients">
                  View Reports
                </a>
              </li>
              
            </ul>
            <div className="dropdown">
            <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person-circle h3 text-success"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <h6 class="dropdown-header text-success">User Info</h6>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <i class="bi bi-person-fill h5 text-success"> </i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <i class="bi bi-box-arrow-right h5 text-success"> </i>
                      Logout
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DoctorNavbar
