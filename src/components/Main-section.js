import React, { Component } from 'react';
import BackgroundImage from '../images/it.jpg';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';
import {
    requestGetGenresMovies,
    requestSimilarMovies,
    requestTrailerMovies,
    requestMoviesList
} from '../requests/moviesDB';


class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresMovies: [],
            asideMovieList: [],
        }
    }

    componentDidMount() {
        requestGetGenresMovies().then(({ data: { genres } }) => {
            const firstGenreId = genres[0].id;
            this.setState({
                genresMovies: genres,
            });
            requestMoviesList(firstGenreId).then(({data: { results: movies } }) => {
                console.log(movies);
                this.setState({
                    asideMovieList: movies,
                });
            });
        });
    }

    render() {
        const { genresMovies, asideMovieList } = this.state;
       return (
        <section className="main" style={{ backgroundImage: `url(${BackgroundImage})`}}> 
            <AsideMenu
                genres={genresMovies}
                moviesList={asideMovieList}
            />
            <InfoMovie />
        </section>
       );
    }
}

export default MainSection;