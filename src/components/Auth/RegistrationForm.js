import "./RegistrationForm.css";
import React, { useState } from "react";
import axios from 'axios';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://royal-nerve-lorby.up.railway.app/api/auth/register', {
                email,
                username,
                password,
                confirmPassword
            });
            console.log('Успешная регистрация!', response.data);

        } catch (error) {
            console.error('Ошибка регистрации:', error);
          
        }
    };

    return (
        <div className="container">
         
            <form onSubmit={handleRegistration}>
                <div>
                  
                    <input placeholder="Введи адрес почты:"
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                 
                    <input placeholder="Pridumay Login"
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                  
                    <input placeholder="Create a new password"
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                     <FontAwesomeIcon 
                        icon={showPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="password-toggle-eye"
                    />
                </div>
                <div>
                   
                    <input placeholder="confirm your password"
                        type={showConfirmPassword ? "text" : "password"} 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                      <FontAwesomeIcon 
                        icon={showPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="password-toggle-eye"
                    />
                </div>
                <button type="submit">Зарегистрироваться</button>
                
            </form>
            <p>Уже зарегистрированы? <a href="/login">Авторизация</a></p>
        </div>
    );
}

export default Registration;
