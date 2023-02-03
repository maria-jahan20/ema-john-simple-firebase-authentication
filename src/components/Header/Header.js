import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth);

    const logOut=()=>{
        signOut(auth);
    }
    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
          {user ? (
            <button onClick={logOut}>Sign Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {
            <p>{user?.displayName}</p>
          }
        </div>
      </nav>
    );
};

export default Header;