import "./RegistrationForm.css";
import React, { useState } from "react";
import axios from 'axios';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration() {
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Проверка валидации пароля и его подтверждения
        const isPasswordValid = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
        const isConfirmPasswordValid = confirmPassword === password;

        // Обновление состояния валидации
        setPasswordValid(isPasswordValid);
        setConfirmPasswordValid(isConfirmPasswordValid);

        // Если пароль или его подтверждение неверны, прекращаем регистрацию
        if (!isPasswordValid || !isConfirmPasswordValid) {
            return;
        }

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
                    <input 
                        placeholder="Введи адрес почты:"
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        placeholder="Придумайте логин"
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        placeholder="Введите новый пароль"
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className={passwordValid ? 'password-input valid-password' : 'password-input invalid-password'}  
                    />
                    <FontAwesomeIcon 
                        icon={showPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="password-toggle-eye"
                    />
                    {!passwordValid && <p className="error-message">Пароль должен содержать минимум 8 символов, хотя бы 1 цифру и 1 специальный символ</p>}
                </div>
                <div>
                    <input 
                        placeholder="Подтвердите пароль"
                        type={showConfirmPassword ? "text" : "password"} 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className={confirmPasswordValid ? 'password-input valid-password' : 'password-input invalid-password'}  
                    />
                    <FontAwesomeIcon 
                        icon={showConfirmPassword ? faEye : faEyeSlash} 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                        className="password-toggle-eye"
                    />
                    {!confirmPasswordValid && <p className="error-message">Пароли не совпадают</p>}
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
            <p>Уже зарегистрированы? <a href="/">Авторизация</a></p>
        </div>
    );
}

export default Registration;
