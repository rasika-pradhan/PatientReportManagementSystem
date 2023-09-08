import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password:data.get('password')
    });

    const userInput = {
      email: data.get('email'), 
      password: data.get('password'),  
    };
    
    // Make a POST request to the backend /login endpoint
    axios.post('http://localhost:8000/user/login', userInput)
      .then(response => {
        if (response.data) {
          setLogin(true);
          localStorage.setItem("token", response.data.id)
          console.log('User logged in:', response.data);
        } else {
          setLogin(false)
          window.alert("Invalid Credentials!Please Enter Valid Data");
          console.log('Login failed: Invalid credentials');
        }
      })
      .catch(error => {
        window.alert("An error occurred. Please try again later.");
        console.error('An error occurred:', error);
      });
  }
  if(login===true){
    return <Navigate to="/userdashboard/dashboard" />
  }
  return (
    <>
      <section className="vh-100 bg-success-subtle" >
        <div className="container py-3 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-xl-6 ">
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
                          <a className="h1 text-success text-center mb-0" href="/">MediKeep</a>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3 text-center"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                        <label className="form-label text-start text-success" for="form2Example17">
                            Email Address:
                          </label>
                          <input
                            type="email"
                            // id="form2Example17"
                             className="form-control form-control-lg"
                             name="email"
                          />
                          
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label text-success" for="form2Example27">
                            Password:
                          </label>
                          <input
                            type="password"
                            //id="form2Example27"
                            className="form-control form-control-lg"
                            name="password"
                          />
                          
                        </div>

                        <div className="pt-1 mb-4 text-center ">
                          <button
                            className="btn btn-dark btn-lg btn-block text-success "
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                            {/* <a className="small text-muted" href="#!">
                            Forgot password?
                            </a> */}
                        <p className="pb-lg-2 text-center" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <a href="/register" style={{ color: "#393f81" }}>
                            Register here
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
