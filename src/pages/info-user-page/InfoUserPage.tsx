import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Profile from "../../components/profile/Profile";
import UsersInfoAdmin from "../../components/users-info-admin/UsersInfoAdmin";
import { auth, db } from '../../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const InfoUserPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                if (userDoc.exists() && userDoc.data().role === 'Admin') {
                    setIsAdmin(true);
                }
            }
            setLoading(false);
        };

        checkAdmin();
    }, []);

    return (
        <div>
            <Header />
            {isAdmin ? <UsersInfoAdmin /> : <Profile />}
            <Footer />
        </div>
    );
};

export default InfoUserPage;