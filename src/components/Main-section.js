import React, { Component } from 'react';
import BackgroundImage from '../images/it.jpg';
import AsideMenu from './Aside-menu.js';
import InfoMovie from './Info-movie.js';

class MainSection extends Component {
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