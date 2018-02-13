import React, { Component } from 'react';
import AsideMovie from  './Aside-movie.js';

class AsideListMovies extends Component {
    render() {
        return(
            <div className="main__left-menu-container">
                {this.props.moviesList.map((movie) => {
                    return <AsideMovie movie={movie} key={movie.id} onGetInfoMovie={this.props.onGetInfoMovie}/>
                })}
            </div>
        );
    }
}

export default AsideListMovies;
