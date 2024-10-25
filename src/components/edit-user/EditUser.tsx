import React, { useState, useEffect } from 'react';
import { UserRoles } from '../../services/UserRoles';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../FirebaseConfig';
import './EditUser.scss';
import { EditUserProps } from "./EditUserModels";

const EditUser: React.FC<EditUserProps> = ({ user, onClose }) => {
    const [role, setRole] = useState(user.role);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
                if (userDoc.exists() && userDoc.data().role === 'Admin') {
                    setIsAdmin(true);
                }
            }
        };

        checkAdmin();
    }, []);

    if (!user) return null;

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(event.target.value);
    };

    const handleSave = async () => {
        if (!user.uid) {
            console.error("User UID is missing!");
            return;
        }

        try {
            await setDoc(doc(db, "Users", user.uid), {
                ...user,
                role
            });
            console.log("User role updated successfully");
            onClose();
        } catch (error) {
            console.error("Error updating user role: ", error);
        }
    };

    return (
        <div className="edit-user">
            <h1 className="edit-user__title">Edit User</h1>
            <section className="edit-user__info-section">
                <p>Name: {user.firstName} {user.secondName}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phoneNumber}</p>
                {isAdmin && (
                    <div className="edit-user__role">
                        <label>Role:</label>
                        <select id="role" value={role} onChange={handleRoleChange}>
                            {Object.values(UserRoles).map((role) => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                )}
            </section>
            <button className="btn" onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditUser;