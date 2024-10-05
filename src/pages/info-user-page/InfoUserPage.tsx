import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { auth, db } from '../../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const InfoUserPage = () => {
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
        window.location.href = "/";
    };

    return (
        <div>
            <Header />

            <div>
                <h1>Profile</h1>
                {user ? (
                    <>
                        <p>First name: {user.firstName}</p>
                        <p>Second name: {user.secondName}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone number: {user.phoneNumber}</p>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <p>Loading information about user...</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default InfoUserPage;