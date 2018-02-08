import React, { Component } from 'react';
import AsideListMovies from './Aside-list-movies.js';

class AsideMenu extends Component {
    render() {
        const { genres } = this.props;
        return(
            <div className="main__left-menu">
                <select className="main__left-select">
                    {genres.map((genre) => {
                        return <option value={genre.id} key={genre.id}>{genre.name}</option>
                    })}
                </select>
                <AsideListMovies moviesList={this.props.moviesList}/>   
            </div>
        );
    }
}

export default AsideMenu;