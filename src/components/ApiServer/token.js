
async function login(username, password) {
    try {
        const response = await axios.post('https://example.com/api/auth/login', {
            username,
            password
        });
        const token = response.data.token;
   
        localStorage.setItem('token', token);
        console.log('Успешная аутентификация!');
        return token;
    } catch (error) {
        console.error('Ошибка аутентификации:', error);
        throw error;
    }
}


async function fetchProtectedResource() {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('Токен не найден. Пользователь не аутентифицирован.');
        return;
    }

    try {
        const response = await axios.get('https://example.com/api/protected/resource', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        console.log('Успешно получены защищенные данные:', response.data);
    } catch (error) {
        console.error('Ошибка при получении защищенных данных:', error);
    }
}
