import React, { Component } from 'react';
import ImageIt from '../images/It_sponsor.jpg';

class AsideMovie extends Component {
    render() {
        return(
            <div className="main__left-menu-movie">
                <img src={ImageIt} className="main__left-menu-image" alt="Poster of 'It'"></img>
                <h4 className="main__left-menu-title">It</h4>
                <span className="main__left-menu-text">2017</span>
            </div>
        );
    }
}

export default AsideMovie;