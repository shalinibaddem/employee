// employeeService.js
let employees = [
    { id: 1, firstName: 'Sam', lastName: 'Adam', gender: 'Male', age: 45, salary: 100000.00, department: 'IT' },
    { id: 2, firstName: 'John', lastName: 'Jacob', gender: 'Male', age: 35, salary: 90000.00, department: 'Sales' },
    { id: 3, firstName: 'ram', lastName: 'raju', gender: 'Male', age: 45, salary: 100000.00, department: 'IT' },
    { id: 4, firstName: 'varsh', lastName: 'Adam', gender: 'Male', age: 35, salary: 100000.00, department: 'marketing' },
    { id: 5, firstName: 'dhruv', lastName: 'koni', gender: 'Male', age: 25, salary: 200000.00, department: 'IT' }
  ];
  
  const getAllEmployees = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(employees);
      }, 1000);
    });
  };
  
  const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const employee = employees.find(emp => emp.id === parseInt(id));
        if (employee) {
          resolve(employee);
        } else {
          reject('Employee not found');
        }
      }, 1000);
    });
  };
  
  const addEmployee = (employee) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const id = employees.length + 1;
        employees.push({ ...employee, id });
        resolve('Employee added successfully');
      }, 1000);
    });
  };
  
  const updateEmployee = (id, updatedEmployee) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = employees.findIndex(emp => emp.id === parseInt(id));
        if (index !== -1) {
          employees[index] = { ...updatedEmployee, id: parseInt(id) };
          resolve('Employee updated successfully');
        } else {
          reject('Employee not found');
        }
      }, 1000);
    });
  };
  
  
let deleteEmployee = (id) => {
  employees = employees.filter(emp => emp.id !== id);
};


  
  export default {
    getAllEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
  };
  