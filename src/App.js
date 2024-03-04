import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/MainPart/Header';
import Login from './components/Auth/Login';
import RegistrationPage from './components/MainPart/RegistrationPage';
// import RegistrationForm from './components/Auth/RegistrationForm';
import Email from './components/Auth/Email';
import LoginPage from './components/MainPart/LoginPage';
// import MainContent from "./components/MainContent";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                <Route path="/" element={<Header />} /> 
                <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                   
                    {/* <Route path="/email" element={<Email />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
