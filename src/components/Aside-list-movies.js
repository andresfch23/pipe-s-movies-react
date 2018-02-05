import React, { Component } from 'react';
import AsideMovie from  './Aside-movie.js';
import movies from '../utils/movies.js';

class AsideListMovies extends Component {
    render() {
        return(
            <div className="main__left-menu-container">
                {movies.map((movie, index) => {
                    return <AsideMovie key={index} movie={movie} />;
                })}
            </div>
        );
    }
}

export default AsideListMovies;
