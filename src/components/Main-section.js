import React, { Component } from 'react';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';
import {
    requestGetGenresMovies,
    requestSimilarMovies,
    requestInfoMovie,
    requestMoviesList,
} from '../requests/moviesDB';


class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresMovies: [],
            asideMovieList: [],
            selectedGenreId: '',
            selectedMovieId: '',
            infoMovie: {},
            similarMovies: [],
        }
        this.getMovies = this.getMovies.bind(this);
        this.getInfoMovie = this.getInfoMovie.bind(this);
        this.getSimilarMovies = this.getSimilarMovies.bind(this);
    }

    componentDidMount() {
        requestGetGenresMovies().then(({ data: { genres } }) => {
            const firstGenreId = genres[0].id;
            this.setState({
                genresMovies: genres,
            });
            this.getMovies(firstGenreId);
        });
    }

    getMovies(genreId) {
        requestMoviesList(genreId).then(({data: { results: movies } }) => {
            console.log(movies);
            const firstMovieId = movies[0].id;
            this.setState({
                asideMovieList: movies,
                selectedGenreId: genreId,
                selectedMovieId: firstMovieId,
            });
            this.getInfoMovie(firstMovieId);
        });
    }

    getInfoMovie(idMovie) {
        requestInfoMovie(idMovie).then(({data}) => {
            console.log(data);
            this.setState({
                infoMovie: data,
            });
            this.getSimilarMovies(idMovie);
        });
    }

    getSimilarMovies(idMovie) {
        requestSimilarMovies(idMovie).then(({data: { results } }) => {
            console.log(results);
            this.setState({
                similarMovies: results,
            });
        });
    }

    render() {
        const { genresMovies, asideMovieList, selectedGenreId, infoMovie, similarMovies } = this.state;
       return (
        <section className="main" style={{ backgroundImage: `url('http://image.tmdb.org/t/p/w1920${infoMovie.backdrop_path}')`}}> 
            <AsideMenu
                genres={genresMovies}
                moviesList={asideMovieList}
                onGetMovies={this.getMovies}
                selectedGenreId={selectedGenreId}
                onGetInfoMovie={this.getInfoMovie}
            />
            <InfoMovie infoMovie={infoMovie} similarMovies={similarMovies} />
        </section>
       );
    }
}

export default MainSection;