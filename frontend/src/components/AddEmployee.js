import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../actions/employee";

const AddEmployee = () => {
  const roles = ["user", "moderator", "admin"];
  const departments = ["engineering", "design", "marketing"];

  const initialEmployeeState = {
    id: null,
    name: "",
    role: "",
    department: ""
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    const { name, role, department } = employee;

    dispatch(createEmployee(name, role, department))
      .then(data => {
        setEmployee({
          id: data.id,
          name: data.name,
          role: data.role,
          department: data.department
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployee}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={employee.name}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            < select
              onChange={handleInputChange}
              id="role"
              className="form-select" >
              {
                roles.map((roleName, i) => <option value={roleName} key={i}>{roleName}</option>)
              }
            </select >)

          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            < select
              onChange={handleInputChange}
              id="department"
              className="form-select" >
              {
                departments.map((departmentName, i) => 
                  <option value={departmentName} key={i}>{departmentName}</option>)
              }
            </select >)
          </div>

          <button onClick={saveEmployee} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;