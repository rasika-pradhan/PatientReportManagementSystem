import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState();
  const accessToken = localStorage.getItem("token");
  //const navigate = useNavigate();

  useEffect((()=>{
    getUserInfo()
  }),[]);

  const getUserInfo = () =>{
    console.log("token",accessToken);
    axios.get(`http://localhost:8000/user/${accessToken}`)
    .then(res => {
      console.log(res.data);
      setUser(res.data);
      //console.log("user",user);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  console.log("user2",user);
  if(!accessToken){
    return <Navigate to="*" />
  }

  return (
    <>
      <div className="container-md">
        
        <div className="container-md mt-3 px-5 text-center">
          <div className="container shadow border pb-3 bg-body-tertiary">
          
        <p className="fw-semibold mt-3 h2 text-secondary-emphasis text-center">
          User Info
        </p>
          <hr />
          {user && (<> <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">#id : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{user.id}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Name : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{user.name}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Age : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{user.email}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Gender : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{user.role}  </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
              <p className="fw-semibold h4 text-end">Contact Info : </p>
              </div>
              <div className="col">
              <p className="fw-semibold h4 text-start">{user.department}  </p>
              </div>
            </div>
            {/* <button
                className="btn btn-dark fw-semibold btn-lg btn-block text-success"
                type="button"
                onClick={()=>{navigate("/userdashboard/edituser", { state: { user } });}}
              >
                Edit Info
              </button>  */}
              </>)}
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
              <p className="fw-semibold h4 text-start">{patient.date[0]}-{patient.date[1]}-{patient.date[2]}  </p>
              </div>
            </div> */}
            </div>
          
        </div>
      </div>
    </>
  )
}

export default UserProfile;
