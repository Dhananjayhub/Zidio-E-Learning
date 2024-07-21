import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import elearningLogo from "../../assets/elearning-logo.png";


const Header = ({ isAuth }) => {
  return (
    <header>
<div className="logo"><img className="image" src={elearningLogo} alt="E-learning" /></div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
