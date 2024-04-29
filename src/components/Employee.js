// Employee.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/employeeService';
import '../style/emp.css'; 



function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await EmployeeService.getAllEmployees();
    setEmployees(data);
  };

  const deleteEmployee = async (id) => {
    await EmployeeService.deleteEmployee(id);
    loadEmployees();
  };
  const history = useNavigate();
 
  const navigateTo = () => history('/employees/add')
  const navigateTo1 = () => history('/employees/edit/${employee.id}')

  return (
    <div>
      <h2>Employee List</h2>
      <button className="add-button" onClick={ navigateTo}>Add Employee</button>
     
      
      <br/><br/>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>${employee.salary}</td>
              <td>{employee.age > 40 ? 'Senior Employee' : 'Junior Employee'}</td>
              <td>
                <Link to={`/employees/${employee.id}`}>View</Link>{' '}
                
                <button className="edit-button" onClick={ navigateTo1}>Edit</button>
                <button className="delete-button" onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
