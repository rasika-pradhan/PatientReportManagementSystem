import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";

const AddReport = () => {
  const [reportPresent, setReportPresent] = useState(false);
  const [isReportAdded, setIsReportAdded] = useState(false);
  const [accessData, setAccessData] = useState();
  const [isAccessDataAdded, setIsAccessDataAdded] = useState(false);
  const location = useLocation();
  const patient = location.state.patient;
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    getReport();
    
  }, []);
  // if(isReportAdded){
  //   addAccess();
  // }
  // useEffect(() => {
  //   //getReport();
  //   setPatientAccess();
  // }, [accessData]);
  const getReport = () => {
    axios
      .get(`http://localhost:8000/report/patient/${patient.id}`)
      .then((reponse) => {
        console.log(reponse.data);
        if (reponse.data) {
          setReportPresent(true);
        } else {
          setReportPresent(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const reportData = {
      blood_pressure : data.get("blood_pressure"),
      blood_oxygen : data.get("blood_oxygen"),
      diagnosis_info : data.get("diagnosis_info"),
      test_type : data.get("test_type"),
      test_result : data.get("test_result"),
      consultation : data.get("consultation"),
      date : data.get("date"),
      pulseRate : data.get("pulseRate"),
      patient_id : patient.id
    };
    axios.post("http://localhost:8000/report/create",reportData)
    .then(response => {
      console.log("Data stored successfully",response.data);
      setIsReportAdded(true);
      //window.location.reload();
      window.alert("Patient Report Created Successfully.");
      addAccess();
    })
    .catch(err=>{
      console.log("something went wrong.",err)
    })
  }

  const addAccess = () => {
    axios.get(`http://localhost:8000/access/user/${accessToken}`)
    .then(res => {
      console.log(res.data);
      setAccessData(res.data,);
      //console.log("accessData",accessData);
      //setPatientAccess();
    })
    .catch(err=>{
      console.log(err);
    })
  };
  const setPatientAccess = () => {
    const data2 = {
      id:accessData.id,
      patient_id : patient.id,
      user_id : accessData.user_id 
    }
    console.log("accessData.id",accessData.id);
    console.log("patient.id",patient.id);
    console.log("user_id",accessData.user_id);
    console.log(data2,"data2");
    axios.put(`http://localhost:8000/access/update/${accessData.id}`,data2)
    .then(res =>{
      console.log(res.data);
      setIsAccessDataAdded(true);
    })
    .catch(err =>{
      console.log(err);
    })
  }
  useEffect(() => {
    if (accessData) {
      // Access data is available, call setPatientAccess
      setPatientAccess();
    }
  }, [accessData]);
  useEffect(() => {
    if (isAccessDataAdded) {
      // Access data is available, call setPatientAccess
      window.location.reload();
    }
  }, [isAccessDataAdded]);

  if(!accessToken){
    return <Navigate to="*" />
  }
  
  return (
    <>
      {reportPresent ? (
        <h1>Already Present</h1>
      ) : (
        <div className="container-md">
          <br />
          <h1>Add Patient Report</h1>
          <hr />
          <br />
          <div className="container-md px-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-start text-success fs-5 ms-2"
                    for="form2Example17"
                  >
                    Test Type
                  </label>
                  <input type="text" id="form2Example17" name="test_type" className="form-control" />
                </div>

                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-success fs-5 ms-2"
                    for="form2Example27"
                  >
                    Blood Pressure
                  </label>
                  <input type="text" id="form2Example27" name="blood_pressure" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-start text-success fs-5 ms-2"
                    for="form2Example17"
                  >
                    Pulse Rate
                  </label>
                  <input type="text" id="form2Example17" name="pulseRate" className="form-control" />
                </div>

                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-success fs-5 ms-2"
                    for="form2Example27"
                  >
                    Blood Oxygen
                  </label>
                  <input type="text" id="form2Example27" name="blood_oxygen" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-start text-success fs-5 ms-2"
                    for="form2Example17"
                  >
                    Diagnosis Info
                  </label>
                  <input type="text" id="form2Example17" name="diagnosis_info" className="form-control" />
                </div>

                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-success fs-5 ms-2"
                    for="form2Example27"
                  >
                    Date
                  </label>
                  <input type="date" id="form2Example27" name="date" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-start text-success fs-5 ms-2"
                    for="form2Example17"
                  >
                    Test Result
                  </label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="test_result"
                  ></textarea>
                </div>

                <div className="col-md-6 mb-4">
                  <label
                    className="form-label text-success fs-5 ms-2"
                    for="form2Example27"
                  >
                    Consultation
                  </label>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name="consultation"
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="pt-1 mb-4 text-center ">
                <button
                  className="btn btn-dark btn-lg btn-block text-success "
                  type="submit"
                >
                  Add Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReport;
