import React, { useState } from "react";
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import logo from "./logo.png"; 
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

    };

    return (
        <div>
           
            <form onSubmit={handleLogin}>
                <div className="input-forms">
                    <div>
                        {/* <label htmlFor="username"></label> */}
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="vvedy suda-tuda password"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Пароль:</label> */}
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                           <FontAwesomeIcon 
                    icon={showPassword ? faEye : faEyeSlash} 
                    onClick={() => setShowPassword(!showPassword)} 
                />
                        {/* <button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "Скрыть" : "Показать"} 
                        </button> */}
                    </div>
                </div>    
                <button type="submit">Войти</button>
            </form>
            <p>Еще не зарегистрированы? <a href="/registration">Регистрация</a></p>
        </div>
    );
}

export default Login;
