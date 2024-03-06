import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../Auth/logo.png"; 
import RegistrationForm from '../Auth/RegistrationForm';
import "./RegistrationPage.css"; 

function RegistrationPage() {
    return (
        <div className='registration-page'>
            <div className='logo'>
                <img src={logo} alt="Логотип" />
                <Link to="/">
                    <h1>Lorby</h1>
                </Link>
            </div>

            <div>
                <RegistrationForm />
            </div>
        </div>
    );
}

export default RegistrationPage;
