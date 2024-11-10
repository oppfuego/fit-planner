import React, { useEffect, useState } from 'react';
import './CoachInfo.scss';
import Rollback from '../rollback/Rollback';
import { FaEye } from "react-icons/fa";
import ModalSign from "../modal-sign/ModalSign";
import { FaPlus } from "react-icons/fa6";
import PlanTrainingForm from "../plan-training-form/PlanTrainingForm";
import { NotificationProps } from "../../notification/NotificationProps";
import Notification from "../../notification/Notification";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import ReadyProgramForm from "../ready-program-form/ReadyProgramForm";

const CoachInfo = () => {
    const [isPlanTrainingFormOpen, setPlanTrainingFormOpen] = useState(false);
    const [isReadyProgramFormOpen, setReadyProgramFormOpen] = useState(false);
    const [notificationKey, setNotificationKey] = useState(0);
    const [notification, setNotification] = useState<NotificationProps | null>(null);
    const [trainingPlans, setTrainingPlans] = useState<any[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [selectedTrainingPlanUid, setSelectedTrainingPlanUid] = useState<string | null>(null);

    useEffect(() => {
        const getTrainingPlans = async () => {
            const trainingPlansQuery = collection(db, "TrainingPlans");
            const trainingPlansGet = await getDocs(trainingPlansQuery);
            const trainingPlansList = trainingPlansGet.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            setTrainingPlans(trainingPlansList);
        };

        const getUsers = async () => {
            const usersQuery = collection(db, "Users");
            const usersGet = await getDocs(usersQuery);
            const usersList = usersGet.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            setUsers(usersList);
        };

        getTrainingPlans();
        getUsers();
    }, []);

    const togglePlanTrainingForm = () => {
        setPlanTrainingFormOpen(!isPlanTrainingFormOpen);
    }

    const toggleReadyProgramForm = (trainingPlanUid: string | null = null) => {
        setSelectedTrainingPlanUid(trainingPlanUid);
        setReadyProgramFormOpen(!isReadyProgramFormOpen);
    }

    const showNotification = (notification: NotificationProps | null) => {
        setNotificationKey(prevKey => prevKey + 1);
        setNotification(notification);
    };

    const getUserName = (userId: string) => {
        const user = users.find(user => user.uid === userId);
        return user ? `${user.firstName} ${user.secondName}` : 'Unknown User';
    };

    return (
        <div className="coach-info">
            <Rollback/>
            <h1 className="title">Coach Info</h1>

            <FaPlus className="coach-info__icon coach-info__icon--plus" onClick={togglePlanTrainingForm}/>

            <div className="coach-info__programmes">
                {trainingPlans.map((trainingPlan, index) => (
                    <div key={index} className="coach-info__programe">
                        <section className="coach-info__programe-content">
                            <h2 className="coach-info__headline">{trainingPlan.trainingName}</h2>

                            <div className="coach-info__programe-name">
                                Client(s):
                                {trainingPlan.clientIds.map((clientId: string) => (
                                <p key={clientId} className="coach-info__programe-client">{getUserName(clientId)}</p>
                            ))}
                            </div>

                        </section>
                        <FaEye className="coach-info__icon" onClick={() => toggleReadyProgramForm(trainingPlan.uid)}/>
                    </div>
                ))}
            </div>

            <ModalSign isOpen={isPlanTrainingFormOpen} onClose={togglePlanTrainingForm}>
                <PlanTrainingForm onClose={togglePlanTrainingForm} setNotification={showNotification}/>
            </ModalSign>

            <ModalSign isOpen={isReadyProgramFormOpen} onClose={() => toggleReadyProgramForm(null)}>
                <ReadyProgramForm trainingPlanUid={selectedTrainingPlanUid}/>
            </ModalSign>

            {notification && <Notification key={notificationKey} title={notification.title} type={notification.type}
                                           description={notification.description}
                                           showNotification={notification.showNotification}/>
            }
        </div>
    );
};

export default CoachInfo;