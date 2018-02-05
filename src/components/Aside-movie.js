import React, { Component } from 'react';
import ImageIt from '../images/It_sponsor.jpg';

class AsideMovie extends Component {
    render() {
        return(
            <div className="main__left-menu-movie">
                <img src={ImageIt} className="main__left-menu-image" alt="Poster of 'It'"></img>
                <h4 className="main__left-menu-title">{this.props.movie.title}</h4>
                <span className="main__left-menu-text">{this.props.movie.release}</span>
            </div>
        );
    }
}

export default AsideMovie;