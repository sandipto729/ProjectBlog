import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const location = useLocation();
    const { name, username, email, phone, company, dob, markssheet } = location.state || {};

    console.log(location.state); // Check what data is being passed

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company}</p>
            <p>Date of Birth: {dob}</p>
            <p>Result: <a href={markssheet} target="_blank" rel="noopener noreferrer">MarksSheet</a></p>
        </div>
    );
}

export default ProfilePage;
