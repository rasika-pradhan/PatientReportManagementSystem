import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, Navigate } from "react-router-dom";

const ViewReports = () => {
  const [reportPresent , setReportPresent] = useState(false);
  const [report , setReport] = useState();
  const location = useLocation();
  const patient = location.state.patient;
  const accessToken = localStorage.getItem("token");

  const getReport=() => {
    axios.get(`http://localhost:8000/report/patient/${patient.id}`)
    .then(reponse => {
      console.log(reponse.data);
      if(reponse.data){
        setReportPresent(true);
        setReport(reponse.data);
      }
      else{
        setReportPresent(false);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect((()=>{
    getReport()
  }),[]);

  if(!accessToken){
    return <Navigate to="*" />
  }
  return (
    <>
    {reportPresent ? (<div className="container-md">
        
        <div className="container-md mt-3 px-5 text-center">
          <div className="container shadow border pb-3 bg-body-tertiary ">
          
        <p className="fw-semibold mt-3 h2 text-secondary-emphasis text-center">
          Patient Report Info
        </p>
          <hr />
            <div className="row mb-3 ms-5">
              <div className="col">
              <p className="fw-semibold h4 text-start">id : {report.id}</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">Name :  {patient.name}</p>
              </div>
            </div>
            <div className="row mb-3 ms-5">
              <div className="col">
              <p className="fw-semibold h4 text-start">Blood Oxygen level : {report.blood_oxygen}</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">Blood Pressure : {report.blood_pressure}  </p>
              </div>
            </div>
            <div className="row mb-3 ms-5">
              <div className="col">
              <p className="fw-semibold h4 text-start">Pulse Rate : 80bpm</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">Diagonosis info : {report.diagnosis_info}  </p>
              </div>
            </div>
            <div className="row mb-3 ms-5">
              <div className="col">
              <p className="fw-semibold h4 text-start">Test Type : {report.test_type}</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">Test Result :{report.test_result}  </p>
              </div>
            </div>
            <div className="row mb-3 ms-5">
              <div className="col">
              <p className="fw-semibold h4 text-start">Consultation : {report.consultation}</p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">Date : {report.date[0]}-{report.date[1]}-{report.date[2]} </p>
              </div>
            </div>
            {/* <div className="row mb-3">
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
              <p className="fw-semibold h4 text-start">{patient.date}  </p>
              </div>
            </div> */}
            
          </div>
          
        </div>
      </div>
  ):<h1>Not Present</h1>};
      
    </>
  )
}

export default ViewReports
