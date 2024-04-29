// EditEmployee.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/employeeService';

function EditEmployee() {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    salary: '',
    department: ''
  });
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const data = await EmployeeService.getEmployee(id);
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EmployeeService.updateEmployee(id, employee);
     history('/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" required /><br />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" required /><br />
        <input type="text" name="gender" value={employee.gender} onChange={handleChange} placeholder="Gender" required /><br />
        <input type="number" name="age" value={employee.age} onChange={handleChange} placeholder="Age" required /><br />
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} placeholder="Salary" required /><br />
        <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required /><br />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
