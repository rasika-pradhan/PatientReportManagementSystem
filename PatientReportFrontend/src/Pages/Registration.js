import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const [uniqueId, setUniqueId] = useState();
  const [isUniqueId, setIsUniqueId] = useState(false);
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [access, setAccess] = useState();
  const [userId, setUserId] = useState({});
  const [isAccessAdded, setIsAccessAdded] = useState(false);

  const handleUniqueIdChange = (e) => {
    const value = e.target.value;
    setUniqueId(value);
    if (value === "User@123") {
      console.log("inside user if");
      setIsUniqueId(false);
      setAccess(false);
    } else if (value === "Doctor@123") {
      console.log("inside doctor if");
      setIsUniqueId(true);
      setAccess(true);
    } else {
      setIsUniqueId(false);
      setAccess(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const pass = data.get("password");
    const rpass = data.get("rpassword");
    let mainpass;
    if (pass === rpass) {
      mainpass = pass;
    } else {
      window.alert("Passwords not equal.Please enter the correct Password.");
      //window.location.reload();
      return;
    }
    const addUser = {
      name: data.get("name"),
      email: data.get("email"),
      password: mainpass,
      role: data.get("role"),
      department: data.get("department"),
    };
    axios
      .post("http://localhost:8000/user/create",addUser)
      .then((response) => {
        
        console.log("user added", response.data);
        setUserId(response.data);
        setIsUserAdded(true);
        //console.log(userId);
        
        //window.location.reload();
        // if(access){
        //   handleAccess(userId);
        // }
        //handleAccess();
      })
      .catch((err) => {
        console.log("err", err);
      });
    
  };
  useEffect(() => {
    if (userId) {
      // Access data is available, call setPatientAccess
      handleAccess();
    }
  }, [userId]);

  const handleAccess = () => {
    console.log("inside access method");
    if (access) {
      const accessControl = {
        user_id: userId.id,
      };
      console.log(accessControl, "accessControl");
      axios
        .post("http://localhost:8000/access/create", accessControl)
        .then((res) => {
          console.log("Access Added!", res.data);
          setIsAccessAdded(true);
          //window.location.reload();
          //return <Navigate to="/login" />;
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };
  if(isUserAdded && isAccessAdded){
    return <Navigate to="/login" />
  }

  return (
    <>
      <div className="col mt-3 mb-3 justify-content " style={{ margin: "310px" }}>
        <div className="card shadow " style={{ borderRadius: "rem" }}>
          <div className="row g-0">
            {/* <div
                    className=" align-items-center"
                    style={{ borderRadius: "rem" }}
                  > */}
            <div className="card-body p-lg-5 text-black">
              <form onSubmit={handleSubmit}>
                <div className="text-center align-items-center mb-3 pb-1">
                  <i className="bi bi-journal-plus h2 text-success "> </i>
                  <a className="h1 text-success text-center mb-0" href="/">
                    MediKeep
                  </a>
                </div>

                <h5
                  className="fw-normal mb-3 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Registration Info
                </h5>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label
                      className="form-label text-start text-success"
                      for="form2Example17"
                    >
                      Enter Unique ID to Register
                    </label>
                    <input
                      type="text"
                      id="form2Example17"
                      className="form-control"
                      placeholder="Unique ID"
                      value={uniqueId}
                      onChange={handleUniqueIdChange}
                      required
                      autoComplete="on"
                    />
                  </div>

                  {/* <div className="col-md-6 mb-4">
                    <label className="form-label text-success" for="form2Example27">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form2Example27"
                      className="form-control"
                    />
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label
                      className="form-label text-start text-success"
                      for="form2Example17"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="form2Example17"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label text-success" for="form2Example27">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form2Example27"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label
                      className="form-label text-start text-success"
                      for="form2Example17"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example17"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label text-success" for="form2Example27">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control"
                      placeholder="Repeat Password"
                      name="rpassword"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label
                      className="form-label text-start text-success"
                      for="form2Example17"
                    >
                      Healthcare Professional Role
                    </label>
                    <input
                      type="text"
                      id="form2Example17"
                      className="form-control"
                      placeholder="Role"
                      name="role"
                      required
                      autoComplete="off"
                    />
                  </div>

                  {isUniqueId ? (
                    <div className="col-md-6 mb-4">
                      <label
                        className="form-label text-success"
                        for="form2Example27"
                      >
                        Department
                      </label>
                      <input
                        type="text"
                        id="form2Example27"
                        className="form-control"
                        placeholder="Department"
                        name="department"
                        required
                        autoComplete="off"
                      />
                    </div>
                  ) : null}
                </div>
                <div className="pt-1 mb-4 text-center ">
                  <button
                    className="btn btn-dark btn-lg btn-block text-success "
                    type="submit"
                  >
                    Register
                  </button>
                </div>

                {/* <a className="small text-muted" href="#!">
                            Forgot password?
                            </a> */}
                <p className="pb-lg-2 text-center" style={{ color: "#393f81" }}>
                  Already have an account?{" "}
                  <a href="/login" style={{ color: "#393f81" }}>
                    Login here
                  </a>
                </p>
                <p className="text-center">
                  <a href="#!" className="small text-muted text-center">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted text-center">
                    Privacy policy
                  </a>
                </p>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
