import React, { Component } from 'react';
import ImageIt from '../images/It_sponsor.jpg';

class MovieGallery extends Component {
  render() {
    return (
        <div className="grid__item one-quarter main__gallery-item">
            <img className="main__gallery-image" src={ImageIt} alt="poster of movie 'Gone Baby Gone'"></img>
            <div className="main__gallery-info">
                <h4 className="main__gallery-title">It</h4>
                <span className="main__gallery-text">2017</span>
            </div>
        </div>
    );
  }
}

export default MovieGallery;


