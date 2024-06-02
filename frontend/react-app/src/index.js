import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import SignupForProviders from './components/signup-for-providers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import './styles/index.css';

ReactDOM.render(
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="signup_provider" element={<SignupForProviders />} />
        </Routes>
    </Router>
    , document.getElementById('root'));
