import React from 'react';
import { FaCircleArrowLeft } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import './Rollback.scss';

const Rollback = () => {

    const navigate = useNavigate();

    const handleRollback = () => {
        navigate(-1);
    }

    return (
        <div className="rollback">
            <FaCircleArrowLeft onClick={handleRollback} className="rollback__icon"/>
        </div>
    );
};

export default Rollback;