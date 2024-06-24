// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../services/firebase';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const userDoc = await firestore.collection('users').doc(auth.currentUser.uid).get();
            setUserData(userDoc.data());
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {userData && (
                <div>
                    <p>Email: {userData.email}</p>
                    <p>Username: {userData.username}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
