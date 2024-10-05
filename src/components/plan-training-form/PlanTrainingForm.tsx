import React from 'react';
import './PlanTrainingForm.scss';

const PlanTrainingForm = () => {
    return (
        <div className="plan">
            <h1>Plan Training</h1>
            <form className="plan__form">

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

                <button type="submit" className="save-button">Save the plan</button>

            </form>
        </div>
    );
};

export default PlanTrainingForm;
