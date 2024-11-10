import React, { useEffect, useState } from 'react';
import './ReadyProgramForm.scss';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const ReadyProgramForm = ({ trainingPlanUid }: { trainingPlanUid: string | null }) => {
    const [trainingPlan, setTrainingPlan] = useState<any | null>(null);
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const getTrainingPlan = async () => {
            if (trainingPlanUid) {
                const trainingPlanDoc = doc(db, "TrainingPlans", trainingPlanUid);
                const trainingPlanGet = await getDoc(trainingPlanDoc);
                if (trainingPlanGet.exists()) {
                    setTrainingPlan({ ...trainingPlanGet.data(), uid: trainingPlanGet.id });
                }
            }
        };

        const getUsers = async () => {
            const usersQuery = collection(db, "Users");
            const usersGet = await getDocs(usersQuery);
            const usersList = usersGet.docs.map((doc: any) => ({
                ...doc.data(),
                uid: doc.id
            }));
            setUsers(usersList);
        };

        getTrainingPlan();
        getUsers();
    }, [trainingPlanUid]);

    const getUserName = (userId: string) => {
        const user = users.find(user => user.uid === userId);
        return user ? `${user.firstName} ${user.secondName}` : 'Unknown User';
    };

    if (!trainingPlan) {
        return <div className="program">No training plan selected</div>;
    }

    return (
        <div className="program">
            <h1 className="title">Your training program</h1>
            <nav className="program__content">
                <h2 className="program__title">{trainingPlan.trainingName}</h2>
                <p className="program__info">Type of training: {trainingPlan.trainingType}</p>
                <p className="program__info">Description: {trainingPlan.description}</p>
                <p className="program__info">Duration: {trainingPlan.duration}</p>
                <p className="program__info">Data: {trainingPlan.trainingDate}</p>
                <div className="coach-info__programe-name">
                    Client(s):
                    {trainingPlan.clientIds.map((clientId: string) => (
                        <p key={clientId} className="coach-info__programe-client">{getUserName(clientId)}</p>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default ReadyProgramForm;