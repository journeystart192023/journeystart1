import React from 'react';
import { Link } from 'react-router-dom';
import './hstyle.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JourneyStart</Link>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/signup">SignUp</Link></li>
        </ul>
      </nav>
      {/* <div className="user-auth">
        <button className="auth-button">Login</button>
        <button className="auth-button">Signup</button>
      </div> */}
    </header>
  );
};

export default Header;
