
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/AppService';

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Opulent Hotel</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" className="active">Home</NavLink></li>
                <li><NavLink to="/rooms" className="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" className="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" className="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" className="active">Admin</NavLink></li>}

                {!isAuthenticated &&<li><NavLink to="/login" className="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" className="active">Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
            </ul>
        </nav>
    );
}

export default Navbar;
