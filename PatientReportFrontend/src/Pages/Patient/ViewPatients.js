import React, { useEffect, useState } from "react";
import UserNavbar from "../../Components/UserNavbar";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const ViewPatients = () => {
  const [tableItems, setTableItems] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("token");
  

  const getAllPatients = () => {
    axios
      .get("http://localhost:8000/patient/all")
      .then((response) => {
        console.log(response.data);
        setTableItems(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getAllPatients(), []);

  const handlePatientData = (patient) => {
    console.log(patient);
    navigate("/userdashboard/viewone", { state: { patient } });
  };

  // const handlePatientDelete = (patient) =>{
  //   axios.delete(`http://localhost:8000/patient/delete/${patient.id}`)
  //   .then(response => {
  //     console.log(response.data);
  //     if(response.data){
  //       window.location.reload();
  //     }
  //     else{
  //       console.log("Nothing happened");
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  if(!accessToken){
    return <Navigate to="*" />
  }

  return (
    <>
      <div className="container-md">
        <br />
        <p className="fw-semibold h2 text-secondary-emphasis text-center">
          Patients Data
        </p>
        <hr />
        <br />
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
            {tableItems.map((patient) => (
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
                    onClick={() => handlePatientData(patient)}
                    className="btn btn-outline-success"
                  >
                    View
                  </button>
                  
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewPatients;
