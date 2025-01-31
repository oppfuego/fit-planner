import React, {useEffect, useState} from 'react';
import './PlanTrainingForm.scss';
import {PlanTrainingFormProps} from './PlanTrainingFormModels';
import {db} from '../../FirebaseConfig';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import {FaPlus} from "react-icons/fa6";
import ModalSign from '../modal-sign/ModalSign';
import ExercisesForm from "../exercises-form/ExercisesForm";
import {IoMdClose} from "react-icons/io";
import {CgGym} from "react-icons/cg";

interface User {
    id: string;
    firstName: string;
    secondName: string;
}

interface Exercise {
    id: string;
    name: string;
}

const PlanTrainingForm: React.FC<PlanTrainingFormProps> = ({onClose, setNotification, selectedDate}) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUserIds, setSelectedUserIds] = useState<string[][]>([[]]);
    const [trainingDate, setTrainingDate] = useState<string>('');
    const [isExerciseFormOpen, setExerciseFormOpen] = useState(false);
    const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

    const toggleExerciseFormOpen = () => {
        setExerciseFormOpen(!isExerciseFormOpen);
    }

    const handleSelectExercises = (exercises: any[]) => {
        setSelectedExercises(prevSelected => {
            const newExercises = exercises.filter(exercise => !prevSelected.some(prevExercise => prevExercise.id === exercise.id));
            return [...prevSelected, ...newExercises];
        });
        toggleExerciseFormOpen();
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const usersQuery = collection(db, 'Users');
            const usersGet = await getDocs(usersQuery);
            const usersList = usersGet.docs.map(doc => ({id: doc.id, ...doc.data()} as User));
            setUsers(usersList);
        };

        if (selectedDate) {
            const localDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000);
            setTrainingDate(localDate.toISOString().substring(0, 10));
        }

        fetchUsers();
    }, [selectedDate]);

    const handleAddUserDropdown = () => {
        setSelectedUserIds([...selectedUserIds, []]);
    };

    const handleUserSelection = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const selectedIds = Array.from(event.target.selectedOptions, (option) => option.value);
        const newSelectedUserIds = [...selectedUserIds];
        newSelectedUserIds[index] = selectedIds;
        setSelectedUserIds(newSelectedUserIds);
    };

    const handleRemoveUserDropdown = (index: number) => {
        const newSelectedUserIds = selectedUserIds.filter((_, i) => i !== index);
        setSelectedUserIds(newSelectedUserIds);
    };

    const handleRemoveExercise = (index: number) => {
        setSelectedExercises(prevSelected => prevSelected.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trainingName = (event.target as any).elements[0].value;
        const trainingType = (event.target as any).elements[1].value;
        const durationHours = parseInt((event.target as any).elements[2].value, 10);
        const durationMinutes = parseInt((event.target as any).elements[3].value, 10);
        const description = (event.target as any).elements[4].value;

        const clientIds = selectedUserIds.flat();

        try {
            const trainingPlanRef = await addDoc(collection(db, "TrainingPlans"), {
                trainingName,
                trainingType,
                duration: `${durationHours}:${durationMinutes}`,
                description,
                clientIds,
                trainingDate,
                exercises: selectedExercises.map(exercise => exercise.id),
            });

            const clientPromises = clientIds.map(async (clientId) => {
                try {
                    await addDoc(collection(db, "ClientTrainingPrograms"), {
                        UserId: clientId,
                        TrainingPlanId: trainingPlanRef.id,
                    });
                    console.log(`Successfully added clientId: ${clientId}`);
                } catch (error) {
                    console.error(`Error adding clientId: ${clientId}`, error);
                }
            });

            await Promise.all(clientPromises);

            setNotification({
                type: 'success',
                title: 'Success',
                description: 'The training plan has been successfully saved with associated clients',
                showNotification: true
            });
            onClose();
        } catch (error) {
            console.error("Error adding training plan: ", error);
            setNotification({
                type: 'error',
                title: 'Error',
                description: 'Failed to save the training plan',
                showNotification: true
            });
            onClose();
        }
    };

    return (
        <div className="plan">
            <h1 className="title">Plan Training</h1>
            <form className="plan__form" onSubmit={handleSubmit}>

                <div className="plan__form-group">
                    <label>Training name:</label>
                    <input type="text" placeholder="Enter the name of the training"
                           className="plan__form-group-inputs"/>
                </div>

                <div className="plan__form-group">
                    <label>Type of training:</label>
                    <select className="plan__form-group-select">
                        <option>Strength training</option>
                        <option>Cardio</option>
                        <option>Stretching</option>
                    </select>
                </div>

                <div className="plan__form-group">
                    <label>Training duration:</label>
                    <div>
                        <input type="number" min="0" max="3" placeholder="00" className="plan__form-group-inputs"/>
                        <span>:</span>
                        <input type="number" min="0" max="59" placeholder="00" className="plan__form-group-inputs"/>
                    </div>
                </div>

                <div className="plan__form-group">
                    <label>Description of the workout:</label>
                    <textarea placeholder="Enter your workout details" className="plan__form-group-textarea"></textarea>
                </div>

                <div className="plan__form-group">
                    <label>Training date:</label>
                    <input
                        type="date"
                        value={trainingDate}
                        onChange={(e) => setTrainingDate(e.target.value)}
                        className="plan__form-group-inputs"
                    />
                </div>

                <div className="plan__form-group">
                    <label>Selected Exercises:</label>
                    <button className="btn btn--plan" type="button" onClick={toggleExerciseFormOpen}>Add exercises
                    </button>
                    <ul>
                        {selectedExercises.map((exercise, index) => (
                            <li key={index} className="plan__form-group-exercise">
                                <CgGym className="plan__icon plan__icon--form-group"/> {exercise.name}
                                <IoMdClose className="plan__icon" onClick={() => handleRemoveExercise(index)}/>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="plan__form-group">
                    <label>Client(s):</label>

                    {selectedUserIds.map((_, index) => (
                        <div key={index} className="plan__form-group-user">
                            <select className="plan__form-group-select"
                                    onChange={(e) => handleUserSelection(e, index)}>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.firstName} {user.secondName}</option>
                                ))}
                            </select>
                            <IoMdClose className="plan__icon" onClick={() => handleRemoveUserDropdown(index)}/>
                        </div>
                    ))}

                    <FaPlus className="plan__icon" onClick={handleAddUserDropdown}/>
                </div>

                <button type="submit" className="btn">Save the plan</button>

            </form>

            <ModalSign isOpen={isExerciseFormOpen} onClose={() => setExerciseFormOpen(false)}>
                <ExercisesForm onSelectExercises={handleSelectExercises} initialSelectedExercises={selectedExercises}/>
            </ModalSign>
        </div>
    );
};

export default PlanTrainingForm;