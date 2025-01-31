import React, { useEffect, useState } from 'react';
import './ExercisesForm.scss';
import { db } from '../../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { CgGym } from "react-icons/cg";

interface ExercisesFormProps {
    onSelectExercises: (selectedExercises: any[]) => void;
    initialSelectedExercises: any[];
}

const ExercisesForm: React.FC<ExercisesFormProps> = ({ onSelectExercises, initialSelectedExercises }) => {
    const [exercises, setExercises] = useState<any[]>([]);
    const [selectedExercises, setSelectedExercises] = useState<any[]>(initialSelectedExercises);

    useEffect(() => {
        const fetchExercises = async () => {
            const exercisesQuery = collection(db, 'Exercises');
            const exercisesGet = await getDocs(exercisesQuery);
            const exercisesList = exercisesGet.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setExercises(exercisesList);
        };

        fetchExercises();
    }, []);

    const handleCheckboxChange = (exercise: any) => {
        setSelectedExercises(prevSelected => {
            if (prevSelected.includes(exercise)) {
                return prevSelected.filter(e => e.id !== exercise.id);
            } else {
                return [...prevSelected, exercise];
            }
        });
    };

    const handleSubmit = () => {
        onSelectExercises(selectedExercises);
    };

    return (
        <div className="exercises">
            <h1 className="title">All Exercises</h1>
            {exercises.map((exercise, index) => (
                <div key={index} className="exercises__item">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(exercise)}
                        checked={selectedExercises.includes(exercise)}
                    />
                    <div className="exercises__info">
                        <CgGym className="exercises__icon"/>
                        {exercise.name}
                    </div>
                </div>
            ))}
            <button className="btn" type="button" onClick={handleSubmit}>Add Selected Exercises</button>
        </div>
    );
};

export default ExercisesForm;