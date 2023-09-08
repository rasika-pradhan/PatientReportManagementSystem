import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const AddPatientForm = () => {
  const accessToken = localStorage.getItem("token");

  if(!accessToken){
      return <Navigate to="*" />
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      age: data.get("age"),
      gender: data.get("gender"),
      contactInfo: data.get("contactInfo"),
      medicalHistory: data.get("medicalHistory"),
      date: data.get("date"),
    });
    const patientData = {
      name: data.get("name"),
      age: data.get("age"),
      gender: data.get("gender"),
      contactInfo: data.get("contactInfo"),
      medicalHistory: data.get("medicalHistory"),
      date: data.get("date"),
    };

    axios.post('http://localhost:8000/patient/create',patientData)
    .then(response => {
      console.log("Data stored successfully",response.data);
      window.location.reload();
      window.alert("Patient Record Created Successfully.");
    })
    .catch(err=>{
      console.log("something went wrong.",err)
    })
    
  };
  return (
    <>
      {/* bg-success-subtle */}
      <div className="container-md" style={{ height: "100%" }}>
        <br />
        <p className="fw-semibold h2 text-secondary-emphasis text-center">
          Add Patient Info
        </p>
        <hr />
        <br />
        <div className="container-md px-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  className="form-label text-start fw-semibold text-success fs-5"
                  for="form2Example17"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="form2Example17"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label text-success fw-semibold fs-5"
                  for="form2Example27"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="form2Example27"
                  className="form-control"
                  placeholder="Age"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  className="form-label text-start fw-semibold text-success fs-5"
                  for="form2Example17"
                >
                  Gender
                </label><br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio1"
                    value="Male"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="inlineRadio2"
                    value="Female"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-success fs-5"
                  for="form2Example27"
                >
                  Contact Info
                </label>
                <input
                  type="tel"
                  name="contactInfo"
                  id="form2Example27"
                  className="form-control"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-start text-success fs-5"
                  for="form2Example17"
                >
                  Medical History
                </label>
                <input
                  type="text"
                  name="medicalHistory"
                  id="form2Example17"
                  className="form-control"
                  placeholder="Medical History, type 'None' if there is no medicalHistory"
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-success fs-5"
                  for="form2Example27"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="form2Example27"
                  className="form-control"
                />
              </div>
            </div>
            <br />
            <div className="pt-1 mb-4 text-center ">
              <button
                className="btn btn-dark fw-semibold btn-lg btn-block text-success "
                type="submit"
              >
                Add Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPatientForm;
