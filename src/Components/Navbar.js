import React from "react";
import Mylogo from "../Mylogo.jpg";
//react font awesome import
import { FaBars } from "react-icons/fa";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faBars} from "@fortawesome/react-fontawesome";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container  ">

  <a className="navbar-brand" href="#"><img src={Mylogo}alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">EXPERIENCE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ACHIEVEMENTS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACTS</a>
      </li>
    </ul>
    
  </div>
    </div>      
</nav>
    )
}

export default Navbar
