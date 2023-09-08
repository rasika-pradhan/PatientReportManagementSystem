import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ViewOnePatient = () => {
  const [isAccess, setIsAccess] = useState(true);
  const location = useLocation();
  const patient = location.state.patient;
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");

  const handlePatientDelete = (patient) =>{
    axios.delete(`http://localhost:8000/patient/delete/${patient.id}`)
    .then(response => {
      console.log(response.data);
      if(response.data){
        //window.location.reload();
        window.alert("Patient record Deleted Successfully.")
        navigate("/userdashboard/viewpatients");
      }
      else{
        console.log("Nothing happened");
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  const checkAccess = () => {
    axios.get(`http://localhost:8000/access/user/${accessToken}`)
    .then(res => {
      console.log("access",res.data);
      if(!res.data){
        setIsAccess(false);
      }
      else{
        setIsAccess(true);      
      }
  })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect((()=>{checkAccess()}),[]);
  return (
    <>
      <div className="container-md">
        
        <div className="container-md mt-3 px-5 text-center">
          <div className="container shadow border pb-3 bg-white">
          
        <p className="fw-semibold mt-3 h2 text-success text-center">
          Patient Info
        </p>
          <hr />
          <div className="container-sm">
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">#id  :</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.id}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Name : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.name}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Age : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.age}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Gender : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.gender}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Contact Info : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.contactInfo}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Medical History : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.medicalHistory}  </p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
              <p className="fw-semibold h4 text-end">Date : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{patient.date[0]}-{patient.date[1]}-{patient.date[2]}  </p>
              </div>
            </div>
            </div>
            <button
                className="btn btn-dark fw-semibold btn-lg btn-block text-success"
                type="button"
                onClick={()=>{navigate("/userdashboard/editpatient", { state: { patient } });}}
              >
                Edit Patient
              </button>
              <button
                    type="button"
                    onClick={() => handlePatientDelete(patient)}
                    className="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-success"
                  >
                    Delete Record
                  </button>

                  {isAccess ? (<><button
                    type="button"
                    className="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-success"
                    onClick={()=>{navigate("/userdashboard/addreport", { state: { patient } })}}
                  >
                    Add Report
                  </button>
                  <button
                  onClick={()=>{navigate("/userdashboard/viewreports", { state: { patient } })}}
                    type="button"
                    className="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-success"
                  >
                    View Report
                  </button></>) : null}
                  {/* //</div></div> <button
                  //   type="button"
                  //   className="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-success"
                  //   onClick={()=>{navigate("/userdashboard/addreport", { state: { patient } })}}
                  // >
                  //   Add Report
                  // </button>
                  // <button
                  // onClick={()=>{navigate("/userdashboard/viewreports", { state: { patient } })}}
                  //   type="button"
                  //   className="btn ms-4 btn-dark fw-semibold btn-lg btn-block text-success"
                  // >
                  //   View Report
                  // </button> */}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ViewOnePatient;
