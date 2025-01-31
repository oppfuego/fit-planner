import React, { useState, useEffect } from 'react';
import { auth, db } from '../../FirebaseConfig';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import './Profile.scss';
import { FaPencilAlt } from "react-icons/fa";
import Rollback from '../rollback/Rollback';

const Profile = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [subscriptionName, setSubscriptionName] = useState('');

    const [isEditingFirstName, setIsEditingFirstName] = useState(false);
    const [isEditingSecondName, setIsEditingSecondName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const UserData = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUser(userData);
                    setFirstName(userData.firstName);
                    setSecondName(userData.secondName);
                    setEmail(userData.email);
                    setPhoneNumber(userData.phoneNumber);

                    if (userData.subscriptionId) {
                        const subscriptionDoc = await getDoc(doc(db, "Subscription", userData.subscriptionId));
                        if (subscriptionDoc.exists()) {
                            setSubscriptionName(subscriptionDoc.data().name);
                        }
                    }
                }
            }
            setLoading(false);
        };

        UserData();
    }, []);

    const handleFieldChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    const handleFieldSave = async (field: string, value: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            await updateDoc(doc(db, "Users", currentUser.uid), { [field]: value });
            setUser((prev: any) => ({ ...prev, [field]: value }));
            setter(false);
        }
    };

    const handleCancel = (setter: React.Dispatch<React.SetStateAction<boolean>>, originalValue: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(originalValue);
        setter(false);
    };

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = "/login";
    };

    if (loading) {
        return <p>Loading information about user...</p>;
    }

    return (
        <div className="user-page">
            <Rollback />
            <h1 className="title">Profile</h1>
            {user ? (
                <>
                    <h2 className="user-page__headline">
                        Hello, {user.firstName} {user.secondName}!
                    </h2>
                    <div className="user-page__info-container">
                        {isEditingFirstName ? (
                            <div className="user-page__edit-container">
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={handleFieldChange(setFirstName)}
                                    className="user-page__input"
                                />

                                <section className="user-page__edit-btn-container">
                                    <button
                                        onClick={() => handleFieldSave('firstName', firstName, setIsEditingFirstName)}
                                        className=" user-page__btn">Save
                                    </button>

                                    <button
                                        onClick={() => handleCancel(setIsEditingFirstName, user.firstName, setFirstName)}
                                        className="user-page__btn">Cancel
                                    </button>
                                </section>

                            </div>
                        ) : (
                            <>
                                <p className="user-page__info">First name: {user.firstName}</p>
                                <FaPencilAlt className="edit-icon" onClick={() => setIsEditingFirstName(true)} />
                            </>
                        )}
                    </div>
                    <div className="user-page__info-container">
                        {isEditingSecondName ? (
                            <div className="user-page__edit-container">
                                <input
                                    type="text"
                                    value={secondName}
                                    onChange={handleFieldChange(setSecondName)}
                                    className="user-page__input"
                                />

                                <section className="user-page__edit-btn-container">
                                    <button
                                        onClick={() => handleFieldSave('secondName', secondName, setIsEditingSecondName)}
                                        className="user-page__btn">Save
                                    </button>

                                    <button
                                        onClick={() => handleCancel(setIsEditingSecondName, user.secondName, setSecondName)}
                                        className="user-page__btn">Cancel
                                    </button>
                                </section>

                            </div>
                        ) : (
                            <>
                                <p className="user-page__info">Second name: {user.secondName}</p>
                                <FaPencilAlt className="edit-icon" onClick={() => setIsEditingSecondName(true)} />
                            </>
                        )}
                    </div>

                    <div className="user-page__info-container">
                        {isEditingEmail ? (
                            <div className="user-page__edit-container">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={handleFieldChange(setEmail)}
                                    className="user-page__input"
                                />

                                <section className="user-page__edit-btn-container">
                                    <button onClick={() => handleFieldSave('email', email, setIsEditingEmail)}
                                            className="user-page__btn">Save
                                    </button>

                                    <button
                                        onClick={() => handleCancel(setIsEditingEmail, user.email, setEmail)}
                                        className="user-page__btn">Cancel
                                    </button>
                                </section>

                            </div>
                        ) : (
                            <>
                                <p className="user-page__info">Email: {user.email}</p>
                                <FaPencilAlt className="edit-icon" onClick={() => setIsEditingEmail(true)} />
                            </>
                        )}
                    </div>

                    <div className="user-page__info-container">
                        {isEditingPhoneNumber ? (
                            <div className="user-page__edit-container">
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={handleFieldChange(setPhoneNumber)}
                                    className="user-page__input"
                                />

                                <section className="user-page__edit-btn-container">
                                    <button
                                        onClick={() => handleFieldSave('phoneNumber', phoneNumber, setIsEditingPhoneNumber)}
                                        className="user-page__btn">Save
                                    </button>

                                    <button
                                        onClick={() => handleCancel(setIsEditingPhoneNumber, user.phoneNumber, setPhoneNumber)}
                                        className="user-page__btn">Cancel
                                    </button>
                                </section>

                            </div>
                        ) : (
                            <>
                                <p className="user-page__info">Phone number: {user.phoneNumber}</p>
                                <FaPencilAlt className="edit-icon" onClick={() => setIsEditingPhoneNumber(true)} />
                            </>
                        )}
                    </div>

                    <p className="user-page__info">Gender: {user.gender}</p>
                    <p className="user-page__info">Role: {user.role}</p>
                    <p className="user-page__info">Subscription: {subscriptionName}</p>

                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </>
            ) : (
                <p>User data not found.</p>
            )}
        </div>
    );
};

export default Profile;