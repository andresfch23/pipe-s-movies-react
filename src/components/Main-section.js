import React, { Component } from 'react';
import BackgroundImage from '../images/it.jpg';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';
import { requestGetGenresMovies, requestSimilarMovies, requestTrailerMovies } from '../requests/moviesDB';
import { requestFirstGenre } from '../requests/moviesDB';

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresMovies: [],
        };
    }

    componentDidMount() {
       
        requestGetGenresMovies().then(({ data: { genres } }) => {
            this.setState({
                genresMovies: genres,
            });
        });

        requestFirstGenre().then(({ data: results }) => {
            console.log(results, 'titulos de peliculas');
        });

        requestSimilarMovies().then(({ data: movies }) => {
            console.log(movies, 'peliculas similares');
        });

        requestTrailerMovies().then(({ data: video }) => {
            console.log(video, 'trailers de peliculas');
        });
    }

    render() {
        console.log(this.state, "bella ciao");
       return (
        <section className="main" style={{ backgroundImage: `url(${BackgroundImage})`}}> 
            <AsideMenu genres={this.state.genresMovies} />
            <InfoMovie />
        </section>
       );
    }
}

export default MainSection;