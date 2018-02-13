import React, { Component } from 'react';
import MainGallery from './Main-gallery.js';


class MainDescription extends Component {
  render() {
      const {overview, title} = this.props.infoMovie;
    return(
        <div className="main__description">
            <div className="main__description-container">
                <h2 className="main__description-title">{title}</h2>
                <button type="button" className="main__description-button" >ADD TO FAVORITES</button>
            </div>
            <p className="main__description-text">{overview}</p>
            <h3 className="main__description-similar">Similar movies</h3>

            <MainGallery similarMovies={this.props.similarMovies} />
        </div>
    );
  }
}

export default MainDescription;
