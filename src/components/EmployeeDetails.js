// EmployeeDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../services/employeeService' ;

function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

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

  return (
    <div>
      {employee ? (
        <div>
          <h2>Employee Details</h2>
          <p><strong>Id:</strong> {employee.id}</p>
          <p><strong>First Name:</strong> {employee.firstName}</p>
          <p><strong>Last Name:</strong> {employee.lastName}</p>
          <p><strong>Gender:</strong> {employee.gender}</p>
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <Link to={`/employees/edit/${employee.id}`}>Edit</Link>{' '}
          <Link to="/employees">Back</Link>
        </div>
      ) : (
        <p>Loading employee details...</p>
      )}
    </div>
  );
}

export default EmployeeDetails;
