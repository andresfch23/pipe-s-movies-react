import React, { Component } from 'react';
import ImageIt from '../images/It_sponsor.jpg';

class AsideMovie extends Component {
    constructor(props){
        super(props);
        this.clickInfoMovie = this.clickInfoMovie.bind(this);
    }

    clickInfoMovie() {
        const selectedMovieId = this.props.movie.id;
        this.props.onGetInfoMovie(selectedMovieId);
    }

    render() {
        const {poster_path, title, release_date} = this.props.movie;
        return(
            <div className="main__left-menu-movie" onClick={this.clickInfoMovie}>
                <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} className="main__left-menu-image" alt="Poster of 'It'"></img>
                <h4 className="main__left-menu-title">{title}</h4>
                <span className="main__left-menu-text">{release_date.substring(0,4)}</span> 
            </div>
        );
    }
}

export default AsideMovie;