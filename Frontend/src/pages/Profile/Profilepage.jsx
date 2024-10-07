import React, { useState, useEffect } from 'react';
import summeryApi from '../../common';


const Profilepage = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch(summeryApi.ProfilePage.url, {
                method: summeryApi.ProfilePage.method,
                credentials: 'include', 
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const result = await response.json();
            console.log(result); // Check the response from the backend
            setProfile(result);
        } catch (error) {
            console.error(error);
        }
    }
    

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            {profile && (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.email}</p>
                </div>
            )}
        </div>
    );
}

export default Profilepage;