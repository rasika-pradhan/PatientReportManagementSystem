import React from "react";
import NavBar from "../Components/NavBar.js";

const Home = () => {
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
      {/* style={{backgroundImage:"./images/medikeep19.jpg"}} */}
      {/* style={{marginTop:"110px"}} */}
      {/* style={{backgroundImage:"url(images/medikeep19.jpg)"}} */}
      <NavBar />
      {/* <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0"> */}
      <div className="container-fluid" id="home" style={imgDetails}>
        {/* <img src="images/medikeep19.jpg" className="img-fluid" alt="..."> */}
        <div
          className="text-center"
          style={{ paddingTop: "125px", paddingBottom: "200px" }}
        >
          <i
            className="bi bi-journal-plus h1 text-success"
            style={{ fontSize: "60px" }}
          ></i>
          <p
            className="mb-0 h1 mt-3 text-success "
            style={{ fontSize: "70px" }}
          >
            Welcome to MediKeep
          </p>
          <p className="mb-0 mt-4 h2 text-success">
            A Patient Report Management System
          </p>
          {/* <p className="mb-0 h3 text-success-emphasis">Keep Patient Records 
      <i className="bi bi-dot mt-3 h1 text-success-emphasis "></i>
      Keep Patient Reports
      </p> */}
        </div>
        {/* </img> */}
      </div>
      <div className="conatainer-fluid">
        <h1 id="about" className="text-center mt-5 text-success-emphasis">
          About
        </h1>
        <div className="container">
          <p className="mt-5 mb-5">
            Patient report management system is a web-based application that
            allows healthcare professionals to manage patient records and
            reports efficiently. This system is designed to simplify the process
            of maintaining patient records and reduce the likelihood of errors
            in record-keeping. The system is accessible to authorized healthcare
            professionals only and maintains the privacy and confidentiality of
            patient records.
          </p>
        </div>
        <h2></h2>
      </div>
      <div className="bg-dark container-fluid">
        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container-fluid p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 MediKeep. All rights reserved.
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
      {/* </div>   */}
    </>
  );
};

export default Home;
