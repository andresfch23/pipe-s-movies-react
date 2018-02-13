import React, { Component } from 'react';
import ImageIt from '../images/It_sponsor.jpg';

class MovieGallery extends Component {
  render() {
      const {poster_path, title, release_date} = this.props.similarMovie;
    return (
        <div className="grid__item one-quarter main__gallery-item">
            <img className="main__gallery-image" src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt="poster of movie 'Gone Baby Gone'"></img>
            <div className="main__gallery-info">
                <h4 className="main__gallery-title">{title}</h4>
                <span className="main__gallery-text">{release_date.substring(0,4)}</span>
            </div>
        </div>
    );
  }
}

export default MovieGallery;


