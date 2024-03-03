import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://royal-nerve-lorby.up.railway.app/api/auth/login', {
        username,
        password
      });
      
      console.log('Токен доступа:', response.data.access_token);
      // Дальнейшие действия после успешной аутентификации, например, сохранение токена в localStorage
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;
