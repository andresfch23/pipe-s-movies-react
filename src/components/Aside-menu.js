import React, { Component } from 'react';
import AsideListMovies from './Aside-list-movies.js';

class AsideMenu extends Component {
    render() {
        return(
            <div className="main__left-menu">
                <select className="main__left-select ">
                    {this.props.genres.map((genre) => {
                        return <option value={genre.id} key={genre.id}>{genre.name}</option>
                    })}
                </select>
                <AsideListMovies />   
            </div>
        );
    }
}

export default AsideMenu;