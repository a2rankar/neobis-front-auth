// import axios from 'axios';

// async function login(username, password) {
//     try {
//         const response = await axios.post('https://royal-nerve-lorby.up.railway.app/api/auth/login', {
//             username,
//             password
//      });
//         const token = response.data.token;
   
//         localStorage.setItem('token', token);
//         console.log('Успешная аутентификация!');
//         return token;
//     } catch (error) {
//         console.error('Ошибка аутентификации:', error);
//         throw error;
//     }
// }
// async function getToken() {
//     try {
//         const response = await axios.get('https://royal-nerve-lorby.up.railway.app/api/auth/confirm');
//         const token = response.data.token;
//         return token;
//     } catch (error) {
//         console.error('Ошибка при получении токена:', error);
//         throw error;
//     }
// }


// export default getToken;