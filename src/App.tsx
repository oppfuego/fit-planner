import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import TrainingProgramPage from './pages/training-program-page/TrainingProgramPage';
import LoginPage from './pages/login-page/LoginPage';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import InfoUserPage from './pages/info-user-page/InfoUserPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/training-program-page/:id" element={<TrainingProgramPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/info-user-page" element={<InfoUserPage />} />
            </Routes>
        </Router>
    );
};

export default App;