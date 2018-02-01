import React, { Component } from 'react';
import MainGallery from './Main-gallery.js';

class MainDescription extends Component {
  render() {
    return (
        <div className="main__description">
            <div className="main__description-container">
                <h2 className="main__description-title">It</h2>
                <button type="button" className="main__description-button" >ADD TO FAVORITES</button>
            </div>
            <p className="main__description-text">In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.</p>
            <h3 className="main__description-similar">Similar movies</h3>

            <MainGallery />
            
            
        </div>
    );
  }
}

export default MainDescription;
