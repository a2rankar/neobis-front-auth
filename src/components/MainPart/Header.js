
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Auth/Login';
import logo from "../Auth/logo.png";
import "./Header.css"
// import LoginPage from './LoginPage';

function Header() {
  return (
      <div className='forms-logo'>
          <div className='logo'>
            <img src={logo} alt="Логотип" />
            <Link to="/">
              <h1>Lorby</h1>
            </Link>
          </div>
        <div className='forms'>
          <div>
            <Login/>
          </div>
          {/* <div>
            <Link to="./Auth/login">Вход</Link>
            <Link to="./Auth/Registration">Регистрация</Link> {}
          </div> */}
        </div>  
      </div>
  );
}

export default Header;
