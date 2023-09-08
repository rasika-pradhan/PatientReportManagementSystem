import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";


const EditPatient = () => {
    //const [readOnly, setReadonly] = useState(true);
  const [MaleChecked, setMaleChecked] = useState(false);
  const [FemaleChecked, setFemaleChecked] = useState(false);
    const location = useLocation();
    const patient = location.state.patient;
    const accessToken = localStorage.getItem("token");

    useEffect(()=>{
      if(patient.gender === "Male"){
        setMaleChecked(true);
        setFemaleChecked(false);
      }else{
        setFemaleChecked(true);
        setMaleChecked(false);
      }
    },[])

    // const date = new Date(`${patient.date[0]}-${patient.date[1]}-${patient.date[2]}`);

    // const date2 = `${patient.date[0]}-${patient.date[1]}-${patient.date[2]}`;
    // //const date = new Date(patient.date[0],patient.date[1],patient.date[2]);
    // console.log(date2);
    // //console.log(formatDate(new Date(2025, 4, 9)));
    // // const date2 = patient.date.toString().join("-");
    // // console.log("date",date2) 

    const date3 = new Date(patient.date[0],patient.date[1]-1,patient.date[2]+1);
    const formattedDate = date3.toISOString().split('T')[0];
    console.log("date3",date3);
    console.log("formattedDate",formattedDate);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        id:patient.id,
          name: data.get("name"),
          age: data.get("age"),
          gender: data.get("gender"),
          contactInfo: data.get("contactInfo"),
          medicalHistory: data.get("medicalHistory"),
        });
        const updatedPatientData = {
            id:patient.id,
            name: data.get("name"),
            age: data.get("age"),
            gender: data.get("gender"),
            contactInfo: data.get("contactInfo"),
            medicalHistory: data.get("medicalHistory"),
            date: formattedDate,
          };
        
          axios.put(`http://localhost:8000/patient/update/${patient.id}`,updatedPatientData)
          .then(response => {
            console.log("Success!! Data stored!",response.data);
            window.location.reload();
            window.alert("Patient Record Edited Successfully.");
          })
          .catch(err =>{
            console.log("Error occured",err);
          })
    }
    if(!accessToken){
      return <Navigate to="*" />
    }
  return (
    <>
      <div className="container-md">
    <br />
        <p className="fw-semibold h2 text-secondary-emphasis text-center">
          Edit Patient
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
                  //readOnly={readOnly}
                  defaultValue={patient.name}
                  //onChange={handleChange}
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
                  //readOnly={readOnly}
                  defaultValue={patient.age}
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
                    checked={MaleChecked}
                    readOnly={false}
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
                    checked={FemaleChecked}
                    readOnly={false}
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
                  type="number"
                  name="contactInfo"
                  id="form2Example27"
                  className="form-control"
                  //readOnly={readOnly}
                  defaultValue={patient.contactInfo}
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
                  //readOnly={readOnly}
                  defaultValue={patient.medicalHistory}
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
                  //readOnly={false}
                  defaultValue={formattedDate}
                  disabled
                  //value={date}
                />
              </div>
            </div>
            <br />
            <div className="pt-1 mb-4 text-center ">
              <button
                className="btn btn-dark fw-semibold btn-lg btn-block text-success "
                type="submit"
              >
                Edit Info
              </button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default EditPatient
