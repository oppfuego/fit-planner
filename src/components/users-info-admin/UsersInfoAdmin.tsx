import React, {useState, useEffect} from 'react';
import {auth, db} from '../../FirebaseConfig';
import {collection, getDocs} from "firebase/firestore";
import "./UsersInfoAdmin.scss";
import {FaPencilAlt} from "react-icons/fa";
import ModalSign from "../modal-sign/ModalSign";
import EditUser from "../edit-user/EditUser";
import Notification from "../../notification/Notification";
import {NotificationProps} from '../../notification/NotificationProps';
import Rollback from "../rollback/Rollback";

const UsersInfoAdmin = () => {
    const [isEditUserFormOpen, setEditUserFormState] = useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const [notification, setNotification] = useState<NotificationProps | null>(null);
    const [notificationKey, setNotificationKey] = useState(0);

    useEffect(() => {
        const getUsers = async () => {
            const usersQuery = collection(db, "Users");
            const usersGet = await getDocs(usersQuery);
            const usersList = usersGet.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));

            setUsers(usersList);
        };
        getUsers();
    }, []);

    const toggleEditUserForm = (user: any) => {
        setSelectedUser(user);
        setEditUserFormState(!isEditUserFormOpen);
    };

    const handleRoleChange = (uid: string, newRole: string) => {
        setUsers(prevUsers => prevUsers.map(user => user.uid === uid ? {...user, role: newRole} : user));
    };

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = "/login";
    };

    const showNotification = (notification: NotificationProps | null) => {
        setNotificationKey(prevKey => prevKey + 1);
        setNotification(notification);
    };

    return (
        <div className="users-info">

            <Rollback/>

            <h1 className="title">All Users</h1>

            {users.map((user, index) => (
                <div key={index} className="users-info__item">
                    <section>
                        <p>Name: {user.firstName} {user.secondName}</p>
                        <p>Email: {user.email}</p>
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
                <EditUser user={selectedUser} onClose={() => setEditUserFormState(false)}
                          onRoleChange={handleRoleChange} setNotification={showNotification}/>
            </ModalSign>

            {notification && <Notification key={notificationKey} title={notification.title} type={notification.type}
                                           description={notification.description}
                                           showNotification={notification.showNotification}/>}
        </div>
    );
};

export default UsersInfoAdmin;