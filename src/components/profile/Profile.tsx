import React, { useState, useEffect } from 'react';
import { auth, db } from '../../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import './Profile.scss';

const Profile = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const UserData = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                if (userDoc.exists()) {
                    setUser(userDoc.data());
                }
            }
        };

        UserData();
    }, []);

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = "/login";
    };

    return (
        <div className="user-page">
            <h1 className="user-page__title">Profile</h1>
            {user ? (
                <>
                    <h2 className="user-page__headline">
                        Hello, {user.firstName} {user.secondName}!
                    </h2>

                    <p className="user-page__info">Email: {user.email}</p>
                    <p className="user-page__info">Phone number: {user.phoneNumber}</p>

                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </>
            ) : (
                <p>Loading information about user...</p>
            )}
        </div>
    );
};

export default Profile;