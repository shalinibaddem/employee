// AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/employeeService';

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    salary: '',
    department: ''
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await EmployeeService.addEmployee(employee);
    history('/employees');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" required /><br />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" required /><br />
        <input type="text" name="gender" value={employee.gender} onChange={handleChange} placeholder="Gender" required /><br />
        <input type="number" name="age" value={employee.age} onChange={handleChange} placeholder="Age" required /><br />
        <input type="number" name="salary" value={Number(employee.salary)} onChange={handleChange} placeholder="Salary" required /><br />
        <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required /><br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
