// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
        
          <Route path="/"  element={<Home/>} />
          <Route path="/employees" element={<Employee/>} />
          <Route path="/employees/add" element={<AddEmployee/>} />
          <Route path="/employees/edit/:id" element={<EditEmployee/>} />
          <Route path="/employees/:id" element={<EmployeeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
