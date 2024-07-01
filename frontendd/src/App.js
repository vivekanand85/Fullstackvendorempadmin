
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import VendorForm from './Components/VendorForm';
import SendEmailForm from './Components/SendEmailForm';
import DataView from './Components/DataView';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [emails, setEmails] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchVendors = async () => {
    try {
      const response = await axios.get('/api/vendors');
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/emails');
      setEmails(response.data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchVendors();
    fetchEmails();
  }, []);

  return (
    <div className="App">
    <h1>Admin Dashboard</h1>
    <EmployeeForm fetchEmployees={fetchEmployees} />
    <VendorForm fetchVendors={fetchVendors} />
    <SendEmailForm fetchEmails={fetchEmails} vendors={vendors} />
    <DataView data={employees} title="Employees" />
    <DataView data={vendors} title="Vendors" />
    <DataView data={emails} title="Sent Emails" />
  </div>
  );
}

export default App;
