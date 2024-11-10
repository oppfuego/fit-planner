import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import SignUpPage from './pages/sign-up-page/SignUpPage';
import InfoUserPage from './pages/info-user-page/InfoUserPage';
import CoachPage from './pages/coach-page/CoachPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/info-user-page" element={<InfoUserPage />} />
                <Route path="/coach-page" element={<CoachPage />} />
            </Routes>
        </Router>
    );
};

export default App;