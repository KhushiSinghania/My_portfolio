import React from "react";
import './Header.css';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper" >
            <div className="main-info">
                <h1>HEYO! THIS IS KHUSHI SINGHANIA</h1>
                <Typed 
                className="typed-text"
                strings={["web designer","enthusiast","Learner"]}
                typeSpeed={40}
                backSpeed={40}
                loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
            
        </div>
    )
}

export default Header
