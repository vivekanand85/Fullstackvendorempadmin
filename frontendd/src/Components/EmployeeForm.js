import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ fetchEmployees }) => {
    const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/employees', employee);
        fetchEmployees();
        setEmployee({ name: '', designation: '', ctc: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Employee</h2>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" />
            <input type="text" name="ctc" value={employee.ctc} onChange={handleChange} placeholder="CTC" />
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
            <button type="submit">Create Employee</button>
        </form>
    );
};

export default EmployeeForm;
