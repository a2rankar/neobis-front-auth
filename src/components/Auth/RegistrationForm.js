import "./RegistrationForm.css";
import React, { useState } from "react";
import axios from 'axios';

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
            // Настройте маршруты или выполните другие действия после успешной регистрации
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            // Возможно, вы хотите отобразить пользователю сообщение об ошибке
        }
    };

    return (
        <div className="container">
            <h2>Регистрация</h2>
            <form onSubmit={handleRegistration}>
                <div>
                    <label htmlFor="email">Адрес электронной почты:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="username">Логин:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Скрыть" : "Показать"} пароль
                    </button>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? "Скрыть" : "Показать"} пароль
                    </button>
                </div>
                <button type="submit">Зарегистрироваться</button>
                
            </form>
            <p>Уже зарегистрированы? <a href="/login">Авторизация</a></p>
        </div>
    );
}

export default Registration;
