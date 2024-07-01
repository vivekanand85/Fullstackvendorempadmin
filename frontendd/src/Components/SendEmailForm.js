import React, { useState } from 'react';
import axios from 'axios';

const SendEmailForm = ({ fetchEmails, vendors }) => {
    const [selectedVendors, setSelectedVendors] = useState([]);

    const handleChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedVendors(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/vendors/send-email', selectedVendors);
        fetchEmails();
        setSelectedVendors([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Send Email</h2>
            <select multiple value={selectedVendors} onChange={handleChange}>
                {vendors.map(vendor => (
                    <option key={vendor.email} value={vendor.email}>{vendor.name}</option>
                ))}
            </select>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default SendEmailForm;
