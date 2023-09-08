import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [isReport, setIsReport] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [patientID, setPatientID] = useState();
  const [patient, setPatient] = useState();
  const [patientType, setPatientType] = useState("id");
  const [report, setReport] = useState();
  const [reportType, setReportType] = useState("id");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  //let patientID;

  const handlePatient = () => {
    console.log(patientID);
    console.log(patientType);
    //setPatientType('id');

    if (patientType === "id") {
      searchPatientById();
    } else if (patientType === "name") {
      searchPatientByName();
    }
    else{
      console.log("Invalid selection");
    }
  };
  const searchPatientById = () => {
    axios
      .get(`http://localhost:8000/patient/${patientID}`)
      .then((res) => {
        console.log(res.data);
        setPatient(res.data);
        setIsSearched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchPatientByName = () => {
    axios
      .get(`http://localhost:8000/patient/name/${patientID}`)
      .then((res) => {
        console.log(res.data);
        setPatient(res.data);
        setIsSearched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReport = () => {
    console.log(report);
    console.log(reportType);
    //setPatientType('id');

    if (reportType === "id") {
      searchReportById();
    } else if (reportType === "name") {
      //searchReportByName();
      console.log("name");
    }
    else{
      console.log("Invalid selection");
    }
  };

  const searchReportById = () => {
    axios
      .get(`http://localhost:8000/report/${report}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if(!accessToken){
    return <Navigate to="/login" />
  }
  return (
    <>
      <div className="container-md ">
        <div className="container-md mt-3">
        <h1 className="pt-3 ps-3">Welcome...</h1>
        <hr />
        <br />
        <form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2 className="ps-3">Search Patient by id or name...</h2>
              {/* <select className="form-select" onChange={e=>setPatientType(e.target.value)} aria-label="Default select example">
                <option disabled>Search By</option>
                <option value="id">id</option>
                <option value="name">name</option>
                {/* <option value="3">Three</option> 
              </select>
              <label
                className="form-label text-start text-success fs-5 ms-2"
                for="form2Example17"
              >
                Search Patient
              </label>
              <div className="d-felx">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setPatientID(e.target.value)}
                  
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handlePatient}
                >
                  Search
                </button> 
              </div>*/}
              </div>
             <div className="col-md-6 mb-4 text-center">
              <select className="form-select" onChange={e=>setPatientType(e.target.value)} aria-label="Default select example">
                <option disabled>Search By</option>
                <option value="id">id</option>
                <option value="name">name</option>
                {/* <option value="3">Three</option> */}
              </select>
              <label
                className="form-label text-start text-success fs-5 ms-2"
                for="form2Example17"
              >
                Search Patient
              </label>
              <div className="d-felx">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setPatientID(e.target.value)}
                  
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handlePatient}
                >
                  Search
                </button>
                </div>
              </div> 
            {/* {isReport ? (
              <div className="col-md-6 mb-4">
                <select className="form-select" onChange={e=>setReportType(e.target.value)} aria-label="Default select example">
                <option disabled>Search By</option>
                <option value="id">id</option>
                <option value="name">name</option>
                {/* <option value="3">Three</option> 
              </select>
                <label
                  className="form-label text-success fs-5 ms-2"
                  for="form2Example27"
                >
                  Search Reports
                </label>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setReport(e.target.value)}
                />
                <button className="btn btn-outline-success" type="button" onClick={handleReport}>
                  Search
                </button>
              </div>
            ) : null} */}
            <h2 className="ps-4">Table : </h2>
            <hr />
            {isSearched ? (
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Medical History</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">{patient.id}</th>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.contactInfo}</td>
                <td>{patient.gender}</td>
                <td>{patient.medicalHistory}</td>
                <td>{patient.date[0]}-{patient.date[1]}-{patient.date[2]}</td>
                <th scope="col">
                  <button
                    type="button"
                    onClick={()=>{navigate("/userdashboard/viewreports", { state: { patient } })}}
                    className="btn btn-outline-success"
                  >
                    View Report
                  </button>
                  
                </th>
              </tr>
          </tbody>
        </table>
            ) : null}
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
