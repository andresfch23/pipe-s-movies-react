import React, { Component } from 'react';
import logoUserFace from '../images/nav_user_face.png';



class Header extends Component {
    render() {
        return (
        <header className="navbar">
            <a href="" className="navbar__button">
                <span className="navbar__line"></span>
                <span className="navbar__line"></span>
                <span className="navbar__line"></span>
            </a>
            <a href="" className="navbar__title-link">
                <h1 className="navbar__title">Pipe's <span className="navbar__title--orange">Movies</span></h1>
            </a>    
            <div className="navbar__icon-container">
                <a href=""><span className="navbar__icon navbar__icon--ticket"></span></a>
                <a href=""><span className="navbar__icon navbar__icon--movie"></span></a>
                <a href=""><span className="navbar__icon navbar__icon--play"></span></a>
                <a href=""><span className="navbar__icon navbar__icon--film"></span></a>
            </div>
            <div className="navbar__user">
                <span className="navbar__user-info">Emilia Clarke</span>
                <img className="navbar__user-info" src={logoUserFace} alt="user face"></img>
            </div>
        </header>
        );
    }
}

export default Header;