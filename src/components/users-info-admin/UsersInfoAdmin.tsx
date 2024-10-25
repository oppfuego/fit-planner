import React, { useState, useEffect } from 'react';
import {auth, db} from '../../FirebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import "./UsersInfoAdmin.scss";
import { FaPencilAlt } from "react-icons/fa";
import ModalSign from "../modal-sign/ModalSign";
import EditUser from "../edit-user/EditUser";

const UsersInfoAdmin = () => {
    const [isEditUserFormOpen, setEditUserFormState] = useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any | null>(null);

    useEffect(() => {
        const getUsers = async () => {
            const usersQuery = collection(db, "Users");
            const usersGet = await getDocs(usersQuery);
            const usersList = usersGet.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));

            console.log(usersList);

            setUsers(usersList);
        };
        getUsers();
    }, []);

    const toggleEditUserForm = (user : any) => {
        setSelectedUser(user);
        setEditUserFormState(!isEditUserFormOpen);
    };

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = "/login";
    };

    return (
        <div className="users-info">
            <h1 className="users-info__title">All Users</h1>
            {users.map((user, index) => (
                <div key={index} className="users-info__item">
                    <section>
                        <p>Name: {user.firstName} {user.secondName}</p>
                        <p>Role: {user.role}</p>
                    </section>

                    <button className="users-info__edit-btn" onClick={() => toggleEditUserForm(user)}>
                        <FaPencilAlt/>
                    </button>
                </div>
            ))}
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
            <ModalSign isOpen={isEditUserFormOpen} onClose={() => setEditUserFormState(false)}>
                <EditUser user={selectedUser} onClose={() => setEditUserFormState(false)} />
            </ModalSign>
        </div>
    );
};

export default UsersInfoAdmin;