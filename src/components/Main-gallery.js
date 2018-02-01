import React, { Component } from 'react';
import MovieGallery from './Movie-gallery.js';

class MainInformation extends Component {
  render() {
    return (
      <div className="main__gallery">
        <div className="grid main__gallery-container">
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
            <MovieGallery />
        </div>
      </div>
    );
  }
}

export default MainInformation;
