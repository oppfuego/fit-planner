import React, {useEffect, useState} from 'react';
import './ReadyProgramForm.scss';
import {addDoc, collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../FirebaseConfig";
import {IoIosArrowDown} from "react-icons/io";
import {IoIosArrowUp} from "react-icons/io";
import {FaPlus} from "react-icons/fa";
import {ReadyProgramFormProps} from "./ReadyProgramFormProps";

const ReadyProgramForm: React.FC<ReadyProgramFormProps> = ({trainingPlanUid, setNotification, onClose}) => {
    const [trainingPlan, setTrainingPlan] = useState<any | null>(null);
    const [users, setUsers] = useState<any[]>([]);
    const [trainingExercises, setTrainingExercises] = useState<any[]>([]);
    const [openExerciseId, setOpenExerciseId] = useState<string | null>(null);
    const [exerciseSets, setExerciseSets] = useState<{
        [key: string]: { count: number; repeat: number; kg: number }[]
    }>({});


    useEffect(() => {
        const fetchData = async () => {
            if (trainingPlanUid) {
                const trainingPlanDoc = doc(db, 'TrainingPlans', trainingPlanUid);
                const trainingPlanSnap = await getDoc(trainingPlanDoc);

                if (trainingPlanSnap.exists()) {
                    const data = trainingPlanSnap.data();
                    setTrainingPlan({...data, uid: trainingPlanSnap.id});

                    const exercisesDocs = await Promise.all(
                        data.exercises.map((id: string) => getDoc(doc(db, 'Exercises', id)))
                    );
                    const exercisesList = exercisesDocs.map((doc: any) => ({...doc.data(), uid: doc.id}));
                    setTrainingExercises(exercisesList);

                    const exerciseSetsFromDB = await Promise.all(
                        data.exercises.map(async (exerciseId: string) => {
                            const statusQuery = collection(db, 'StatusOfExercise');
                            const statusDocs = await getDocs(statusQuery);
                            const exerciseSets = statusDocs.docs
                                .filter((doc) => doc.data().exerciseId === exerciseId)
                                .map((doc) => ({...doc.data(), uid: doc.id}));
                            return {[exerciseId]: exerciseSets};
                        })
                    );
                    const mergedSets = Object.assign({}, ...exerciseSetsFromDB);
                    setExerciseSets(mergedSets);
                }
            }

            const usersQuery = collection(db, 'Users');
            const usersSnap = await getDocs(usersQuery);
            setUsers(usersSnap.docs.map((doc) => ({...doc.data(), uid: doc.id})));
        };

        fetchData();
    }, [trainingPlanUid]);

    const getUserName = (userId: string) => {
        const user = users.find(user => user.uid === userId);
        return user ? `${user.firstName} ${user.secondName}` : 'Unknown User';
    };

    const toggleExerciseOpen = (exerciseId: string) => {
        setOpenExerciseId(openExerciseId === exerciseId ? null : exerciseId);
    }

    const addSet = (exerciseId: string) => {
        setExerciseSets((prev) => ({
            ...prev,
            [exerciseId]: [...(prev[exerciseId] || []), {count: 1, repeat: 10, kg: 1}],
        }));
    };

    const updateSet = (exerciseId: string, index: number, key: string, value: number) => {
        setExerciseSets((prev) => ({
            ...prev,
            [exerciseId]: prev[exerciseId].map((set, i) => (i === index ? {...set, [key]: value} : set)),
        }));
    };

    const saveAllSets = async () => {
        try {
            for (const [exerciseId, sets] of Object.entries(exerciseSets)) {
                const existingSetsSnap = await getDocs(collection(db, 'StatusOfExercise'));
                const existingSets = existingSetsSnap.docs
                    .filter((doc) => doc.data().exerciseId === exerciseId)
                    .map((doc) => doc.data());

                const newSets = sets.filter((newSet) =>
                    !existingSets.some(
                        (existingSet) =>
                            existingSet.count === newSet.count &&
                            existingSet.repeat === newSet.repeat &&
                            existingSet.kg === newSet.kg
                    )
                );

                for (const set of newSets) {
                    await addDoc(collection(db, 'StatusOfExercise'), {
                        exerciseId,
                        ...set,
                        timestamp: new Date(),
                    });
                }
            }
            setNotification({
                type: 'success',
                title: 'Success',
                description: 'All sets saved',
                showNotification: true
            });
            onClose();
        } catch (error) {
            setNotification({
                type: 'error',
                title: 'Error',
                description: 'Failed to save the sets',
                showNotification: true
            });
            onClose();
        }
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

                <section className="program__exercises">
                    Exercises:
                    {trainingExercises.map((exercise) => (
                        <div key={exercise.uid} className="program__exercise-wrapper">
                            <div className="program__exercise">
                                <p className="program__exercise-name">{exercise.name}</p>
                                {openExerciseId === exercise.uid ? (
                                    <IoIosArrowUp onClick={() => toggleExerciseOpen(exercise.uid)}/>
                                ) : (
                                    <IoIosArrowDown onClick={() => toggleExerciseOpen(exercise.uid)}/>
                                )}
                            </div>
                            {openExerciseId === exercise.uid && (
                                <div className="program__status-exercise">
                                    <table className="exercise-table">
                                        <thead>
                                        <tr>
                                            <th>Count</th>
                                            <th>Repeat</th>
                                            <th>Kg</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(exerciseSets[exercise.uid] || []).map((set, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={set.count}
                                                        onChange={(e) =>
                                                            updateSet(exercise.uid, index, 'count', Number(e.target.value))
                                                        }/>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={set.repeat}
                                                        onChange={(e) =>
                                                            updateSet(exercise.uid, index, 'repeat', Number(e.target.value))
                                                        }/>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={set.kg}
                                                        onChange={(e) =>
                                                            updateSet(exercise.uid, index, 'repeat', Number(e.target.value))
                                                        }/>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <FaPlus className="plan__icon" onClick={() => addSet(exercise.uid)}/>
                                </div>
                            )}

                        </div>
                    ))}
                    <button onClick={saveAllSets} className="btn">Save</button>
                </section>
            </nav>
        </div>
    );
};

export default ReadyProgramForm;