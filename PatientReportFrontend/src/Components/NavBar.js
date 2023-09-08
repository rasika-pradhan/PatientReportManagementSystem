import React from "react";

const NavBar = () => {
  return (
    <>
      {/* bg-body-tertiary */}
      <nav id="navbar-example2" className="navbar navbar-expand-lg shadow bg-white">
        <div className="container-fluid text-success-emphasis">
          
          <a
            className="navbar-brand fs-2 mb-0 mt-1 ms-4 h1 text-success"
            href="/"
          >
            <i class="bi bi-journal-plus h3 text-success mb-0"> </i>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mt-2">
              <li className="nav-item">
                <a
                  className="nav-link active fs-5 text-success"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5 text-success" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fs-5 text-success"
                  href="/register"
                  aria-disabled="true"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
