import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import TrainingProgramPage from './pages/training-program-page/TrainingProgramPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/TrainingProgramPage/:id" element={<TrainingProgramPage />} />
            </Routes>
        </Router>
    );
};

export default App;