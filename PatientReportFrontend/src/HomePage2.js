import React from "react";

const HomePage2 = () => {
  const imgDetails = {
    backgroundImage:
      "url('images/medikeep20.jpg')" /* Set the path to your image */,
    backgroundSize: "cover" /* Adjust how the image covers the element */,
    backgroundRepeat: "no-repeat" /* Prevent image repetition */,
    backgroundAttachment: "fixed" /* Fixed background scrolling */,
    //opacity: "0.7"
  };
  return (
    <>
      <nav
        id="navbar-example2"
        className="navbar navbar-expand-lg shadow bg-white"
      >
        <div className="container-fluid text-success-emphasis">
          <a
            className="navbar-brand fs-2 mb-0 mt-1 ms-4 h1 text-success"
            href="/"
          >
            <i class="bi bi-journal-plus h3 text-success mb-0"> </i>
            MediKeep
          </a>
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
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true"  class="container-fluid scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
      <div className="container-fluid" id="home" style={imgDetails}>
      {/* <img src="images/medikeep19.jpg" class="img-fluid" alt="..."> */}
      <div className="text-center" style={{padding:"150px"}}>
      <i className="bi bi-journal-plus h1 text-success" style={{fontSize:"60px"}}></i>
      <p className="mb-0 h1 mt-3 text-success " style={{fontSize:"70px"}}>Welcome to MediKeep</p>
      <p className="mb-0 mt-4 h2 text-success">A Patient Report Management System</p>
      {/* <p className="mb-0 h3 text-success-emphasis">Keep Patient Records 
      <i className="bi bi-dot mt-3 h1 text-success-emphasis "></i>
      Keep Patient Reports
      </p> */}
       </div>
       {/* </img> */}
      </div>
      <div className="conatainer-fluid">
        <h1 id="about">About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        v
        <h1>About</h1><h1>About</h1>
        <h1>About</h1><h1>About</h1>
      </div>
      </div>
    </>
  );
};

export default HomePage2;
