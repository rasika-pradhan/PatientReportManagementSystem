import React from 'react'
import { useLocation } from 'react-router-dom';

const EditUser = () => {
    const location = useLocation();
    const user = location.state.user;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            id:user.id,
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            role: data.get("role"),
            department: data.get("department"),
        }
        console.log(userData)
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
                  defaultValue={user.name}
                  //onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label text-success fw-semibold fs-5"
                  for="form2Example27"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="form2Example27"
                  className="form-control"
                  //readOnly={readOnly}
                  defaultValue={user.email}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
               {/*  <label
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
                </div> */}
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-success fs-5"
                  for="form2Example27"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  id="form2Example27"
                  className="form-control"
                  //readOnly={readOnly}
                  defaultValue={user.password}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-start text-success fs-5"
                  for="form2Example17"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="form2Example17"
                  className="form-control"
                  //readOnly={readOnly}
                  defaultValue={user.role}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label
                  className="form-label fw-semibold text-success fs-5"
                  for="form2Example27"
                >
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="form2Example27"
                  className="form-control"
                  //readOnly={false}
                  defaultValue={user.department}
                  //value={date}
                  disabled
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

export default EditUser
