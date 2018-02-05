import React, { Component } from 'react';
import BackgroundImage from '../images/it.jpg';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';
import { requestGetGenresMovies, requestSimilarMovies, requestTrailerMovies } from '../requests/moviesDB';
import { requestFirstGenre } from '../requests/moviesDB';

class MainSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = requestGetGenresMovies().then(({ data: genres }) => {
            console.log(genres, 'aqui estan los generos');
        });

        const first = requestFirstGenre().then(({ data: results }) => {
            console.log(results, 'titulos de peliculas');
        });

        const similar = requestSimilarMovies().then(({ data: movies }) => {
            console.log(movies, 'peliculas similares');
        });

        const trailer = requestTrailerMovies().then(({ data: video }) => {
            console.log(video, 'trailers de peliculas');
        });
    }

    render() {
       return (
        <section className="main" style={{ backgroundImage: `url(${BackgroundImage})`}}> 
            <AsideMenu />
            <InfoMovie />
        </section>
       );
    }
}

export default MainSection;