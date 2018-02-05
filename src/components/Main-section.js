import React, { Component } from 'react';
import BackgroundImage from '../images/it.jpg';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';
import { requestGetGenresMovies } from '../requests/moviesDB';

class MainSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = requestGetGenresMovies().then(({ data: genres }) => {
            console.log(genres, 'aqui estan los generos');
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