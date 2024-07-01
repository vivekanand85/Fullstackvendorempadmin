import React, { useState } from 'react';
import axios from 'axios';

const VendorForm = ({ fetchVendors }) => {
    const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

    const handleChange = (e) => {
        setVendor({ ...vendor, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/vendors', vendor);
        fetchVendors();
        setVendor({ name: '', email: '', upi: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Vendor</h2>
            <input type="text" name="name" value={vendor.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={vendor.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="upi" value={vendor.upi} onChange={handleChange} placeholder="UPI" />
            <button type="submit">Create Vendor</button>
        </form>
    );
};

export default VendorForm;
