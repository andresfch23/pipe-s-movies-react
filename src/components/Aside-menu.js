import React, { Component } from 'react';
import AsideListMovies from './Aside-list-movies.js';

class AsideMenu extends Component {
    constructor(props){
        super(props);
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }

    onChangeSelect(event){
        const genreId = event.target.value;
        this.props.onGetMovies(genreId);
    }

    render() {
        const { genres } = this.props;
        return(
            <div className="main__left-menu">
                <select className="main__left-select" value={this.props.selectedGenreId} onChange={this.onChangeSelect}>
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